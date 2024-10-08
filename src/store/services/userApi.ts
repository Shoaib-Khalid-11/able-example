// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://64bfa9c60d8e251fd1113861.mockapi.io' }),
//     tagTypes: ['User'], // Declare the tag type
//     endpoints: (builder) => ({
//         getUsers: builder.query<any, void>({
//             query: () => `students`,
//             providesTags: (result) =>
//                 result
//                     ? [...result.map(({ id }: { id: string }) => ({ type: 'User', id })), { type: 'User', id: 'LIST' }]
//                     : [{ type: 'User', id: 'LIST' }]
//         }),
//         getUserById: builder.query({
//             query: (id) => `students/${id}`,
//             providesTags: (result, error, id) => [{ type: 'User', id }]
//         }),
//         createUser: builder.mutation({
//             query: (newUser) => ({
//                 url: 'students',
//                 method: 'POST',
//                 body: newUser
//             }),
//             invalidatesTags: [{ type: 'User', id: 'LIST' }] // Invalidate the user list to refetch
//         }),
//         updateUser: builder.mutation({
//             query: ({ id, ...updateUser }) => ({
//                 url: `students/${id}`,
//                 method: 'PUT',
//                 body: updateUser
//             }),
//             invalidatesTags: (result, error, { id }) => [{ type: 'User', id }]
//         }),
//         deleteUser: builder.mutation({
//             query: (id) => ({
//                 url: `students/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags: (result, error, id) => [
//                 { type: 'User', id },
//                 { type: 'User', id: 'LIST' }
//             ]
//         })
//     })
// });

// export const {
//     useGetUsersQuery,
//     useCreateUserMutation,
//     useUpdateUserMutation,
//     useDeleteUserMutation,
//     useGetUserByIdQuery
// } = userApi;
export {};
