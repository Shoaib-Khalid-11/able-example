import useSWR, { mutate } from 'swr';
import { useMemo } from 'react';

// Project-imports
import { fetcher } from 'utils/axios';

// types
import { MenuProps, NavItemType } from 'types/menu';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { is } from 'immutable';

const initialState: MenuProps = {
    isDashboardDrawerOpened: false,
    isComponentDrawerOpened: true
};

export const endpoints = {
    key: 'api/menu',
    master: 'master',
    dashboard: '/dashboard' // server URL
};

export function useGetMenu() {
    const { data, isLoading, error, isValidating } = useSWR(endpoints.key + endpoints.dashboard, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const memoizedValue = useMemo(
        () => ({
            menu: data?.dashboard as NavItemType,
            menuLoading: isLoading,
            menuError: error,
            menuValidating: isValidating,
            menuEmpty: !isLoading && !data?.length
        }),
        [data, error, isLoading, isValidating]
    );

    return memoizedValue;
}

// export function useGetMenuMaster() {
//     const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
//         revalidateIfStale: false,
//         revalidateOnFocus: false,
//         revalidateOnReconnect: false
//     });
//     const memoizedValue = useMemo(
//         () => ({
//             menuMaster: data as MenuProps,
//             menuMasterLoading: isLoading
//         }),
//         [data, isLoading]
//     );

//     return memoizedValue;
// }
// export function handlerComponentDrawer(isComponentDrawerOpened: boolean) {
//     // to update local state based on key
//     mutate(
//         endpoints.key + endpoints.master,
//         (currentMenuMaster: any) => {
//             console.log('currentMenuMaster', currentMenuMaster);
//             return { ...currentMenuMaster, isComponentDrawerOpened };
//         },
//         false
//     );
// }
// export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {
//     // to update local state based on key
//     mutate(
//         endpoints.key + endpoints.master,
//         (currentMenuMaster: any) => {
//             return { ...currentMenuMaster, isDashboardDrawerOpened };
//         },
//         false
//     );
// }

export function useGetMenuMaster() {
    const { data, isLoading } = useQuery<MenuProps>({
        queryKey: [endpoints.key + endpoints.master],
        queryFn: () => initialState,
        staleTime: Infinity, // Prevent re-fetching when data becomes stale
        refetchOnWindowFocus: false, // Disable re-fetch on window focus
        refetchOnReconnect: false // Disable re-fetch on reconnect
    });

    const memoizedValue = useMemo(
        () => ({
            menuMaster: data as MenuProps,
            menuMasterLoading: isLoading
        }),
        [data, isLoading]
    );

    return memoizedValue;
}

export function handlerComponentDrawer() {
    // to update local state based on key
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (isComponentDrawerOpened: boolean) => {
            const currentMenuMaster = queryClient.getQueryData<MenuProps>([endpoints.key + endpoints.master]);
            if (!currentMenuMaster) return Promise.resolve(undefined);
            return Promise.resolve({
                ...currentMenuMaster,
                isComponentDrawerOpened
            });
        },
        onSuccess: (updatedData) => {
            // Update the cached state
            queryClient.setQueryData([endpoints.key + endpoints.master], updatedData);
        }
    });
}

export function handlerDrawerOpen() {
    // to update local state based on key
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (isDashboardDrawerOpened: boolean) => {
            const currentMenuMaster = queryClient.getQueryData<MenuProps>([endpoints.key + endpoints.master]);
            if (!currentMenuMaster) return Promise.resolve(undefined);
            return Promise.resolve({
                ...currentMenuMaster,
                isDashboardDrawerOpened
            });
        },
        onSuccess: (updatedData) => {
            // Update the cached state
            queryClient.setQueryData([endpoints.key + endpoints.master], updatedData);
        }
    });
}
