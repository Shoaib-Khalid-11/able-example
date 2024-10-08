export const apiUserRoute = {
    getAllUsers: () => {
        return 'students';
    },
    getUserById: (id?: string) => {
        return `students/${id}`;
    },
    createUser: () => {
        return 'students';
    },
    updateUser: (id?: string) => {
        return `students/${id}`;
    },
    deleteUser: () => {
        return `students`;
    }
};
