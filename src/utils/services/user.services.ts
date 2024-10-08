import { ApiBaseService } from './api_base.services';
interface IUser {
    name: string;
    email: string;
    age: number;
    gender: string;
}
export class UserService extends ApiBaseService {
    public getAllUsers(path: string): Promise<any> {
        return this.get(path);
    }
    public getUserById(path: string): Promise<any> {
        return this.get(path);
    }
    public createUser(path: string, data: IUser): Promise<any> {
        return this.post(path, data);
    }

    public updateUser(path: string, data: IUser): Promise<any> {
        return this.put(path, data);
    }

    public deleteUser(path: string, id?: string): Promise<any> {
        return this.delete(`${path}/${id}`);
    }
}
