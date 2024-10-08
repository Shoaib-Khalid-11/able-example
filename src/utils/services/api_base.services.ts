import axios, { AxiosRequestConfig } from 'axios';
import { appConfig } from 'configs/app.config';
import { merge } from 'lodash';
import { ok, err } from 'rusty-result-ts';

const unauthorizedCode = [401];
const forbiddenCode = [403];
export class ApiBaseService {
    protected urlBase = '';

    public constructor(path?: string) {
        this.urlBase = path ?? appConfig.apiPrefix;
    }

    protected getConfig(): AxiosRequestConfig {
        const accessToken = 'ABC';
        // const accessToken = store.getState().auth.session.JwtToken;

        const headers: any = {};
        if (accessToken) {
            // headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
            headers['Authorization'] = `${'Bearer'}${accessToken}`;
        }

        return {
            headers: { ...headers }
        };
    }

    protected async get<T>(path = '', configOverrides: AxiosRequestConfig | undefined = undefined): Promise<any> {
        return await this.requestResultWrapper<T>(path, { method: 'GET', ...configOverrides }, (fullPath, config) => {
            return axios.get(fullPath, config);
        });
    }
    protected async post<T>(
        path = '',
        data: unknown = undefined,
        configOverrides: AxiosRequestConfig | undefined = undefined
    ): Promise<any> {
        return await this.requestResultWrapper<T>(path, { method: 'POST', ...configOverrides }, (fullPath, config) => {
            return axios.post(fullPath, data, config);
        });
    }
    protected async put<T>(
        path = '',
        data: unknown = undefined,
        configOverrides: AxiosRequestConfig | undefined = undefined
    ): Promise<any> {
        return await this.requestResultWrapper<T>(path, { method: 'PUT', ...configOverrides }, (fullPath, config) => {
            return axios.put(fullPath, data, config);
        });
    }
    protected async patch<T>(
        path = '',
        data: unknown = undefined,
        configOverrides: AxiosRequestConfig | undefined = undefined
    ): Promise<any> {
        return await this.requestResultWrapper<T>(path, { method: 'PATCH', ...configOverrides }, (fullPath, config) => {
            return axios.patch(fullPath, data, config);
        });
    }
    protected async delete<T>(path = '', configOverrides: AxiosRequestConfig | undefined = undefined): Promise<any> {
        return await this.requestResultWrapper<T>(
            path,
            { method: 'DELETE', ...configOverrides },
            (fullPath, config) => {
                return axios.delete(fullPath, config);
            }
        );
    }

    private async requestResultWrapper<T>(
        subPath: string,
        configOverrides: AxiosRequestConfig | undefined,
        request: (fullPath: string, config: AxiosRequestConfig | undefined) => Promise<any | null>
    ): Promise<any> {
        if (subPath.length > 0 && !subPath.startsWith('/')) subPath = `/${subPath}`;
        const config = merge(this.getConfig() || {}, configOverrides ?? {});

        try {
            const responseData: T | null = (await request(`${this.urlBase}${subPath}`, config))?.data ?? null;
            return ok(responseData);
        } catch (c) {
            if (!axios.isAxiosError(c)) {
                console.log('error', c);
                return err({
                    errorMessage: 'Unknown error occurred',
                    responseStatus: 0
                });
            }

            const e = c as unknown as any;

            if (!e.response) {
                console.log('error', e);
                // return err(ApiError(e));
                return err(e);
            }

            if (unauthorizedCode.includes(e.response.status)) {
                //fetching refresh token
                try {
                    const response = await axios.post(`${this.urlBase}${''}`, {
                        // RefreshToken: store.getState().auth.session.RefreshToken
                        RefreshToken: 'ABC'
                    });
                    if (response.status === 200) {
                        const data: any = response.data.Data as any;
                        // store.dispatch(setToken({ JwtToken: data.JwtToken, JwtTokenExpiry: data.Expiry }));
                        const responseData: T | null =
                            (
                                await request(
                                    `${this.urlBase}${subPath}`,
                                    merge(this.getConfig() || {}, configOverrides ?? {})
                                )
                            )?.data ?? null;
                        return ok(responseData);
                    }
                    //   const refreshTokenResponse = await request(
                    //     `${this.urlBase}${apiRoutes.auth.refreshToken}`,
                    //     config
                    //   );
                    //   if (refreshTokenResponse && refreshTokenResponse.data) {
                } catch (error) {
                    // store.dispatch(
                    //     sendAlert({
                    //         title: 'Error',
                    //         content: t('error.auth.sessionExpired')
                    //     })
                    // );
                    // store.dispatch(onSignOutSuccess());
                }
            } else if (forbiddenCode.includes(e.response.status)) {
                // store.dispatch(sendAlert({ title: 'Error', content: t('error.auth.notAuth') }));
            }
            console.log('error', e);
            return err(e);
        }
    }
}
