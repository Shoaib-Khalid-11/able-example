import { UserService } from 'utils/services/user.services';
import { apiUserRoute } from './routes/apiUserRoute';
import useSWR, { KeyedMutator, SWRResponse } from 'swr';
import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { useQuery } from '@tanstack/react-query';
const userService = new UserService();
export const useGetAllUsers = () => {
    // return useSWR(apiUserRoute.getAllUsers(), (url) => userService.getAllUsers(url));
    return useQuery({
        queryKey: [apiUserRoute.getAllUsers()],
        queryFn: () => userService.getAllUsers(apiUserRoute.getAllUsers())
    });
};
// export const useGetUserById = (id?: string): SWRResponse<any, any, any> => {
//     return useSWR(apiUserRoute.getUserById(id), (url) => userService.getUserById(url));
// };
// export const useCreateUser = (): SWRMutationResponse<any, any, never, any> => {
//     const { mutate } = useGetAllUsers();
//     return useSWRMutation(apiUserRoute.createUser(), (url, { arg }) => userService.createUser(url, arg), {
//         onSuccess: () => {
//             mutate();
//         },
//         onError: (error) => {
//             console.log(error);
//         }
//     });
// };
// export const useUpdateUser = (id?: string): SWRMutationResponse<any, any, never, any> => {
//     const { mutate } = useGetAllUsers();
//     return useSWRMutation(apiUserRoute.updateUser(id), (url, { arg }) => userService.updateUser(url, arg), {
//         onSuccess: () => {
//             mutate();
//         },
//         onError: (error) => {
//             console.log(error);
//         }
//     });
// };
// export const useDeleteUser = (): SWRMutationResponse<any, any, any, any> => {
//     const { mutate } = useGetAllUsers();
//     return useSWRMutation(apiUserRoute.deleteUser(), (url, { arg }) => userService.deleteUser(url, arg), {
//         onSuccess: () => {
//             console.log('User deleted successfully');
//             mutate();
//         },
//         onError: (error) => {
//             console.log('Error deleting user', error);
//             console.log(error);
//         }
//     });
// };
