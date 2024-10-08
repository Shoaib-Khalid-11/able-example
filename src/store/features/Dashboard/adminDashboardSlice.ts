import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { REHYDRATE } from 'redux-persist';
import { IAppStore } from 'store';

export interface AdminDashboardStateProps {
    admindashboardLogin: boolean;
}

const initialState: AdminDashboardStateProps = {
    admindashboardLogin: false
};

export const AdminDashboardSlice = createSlice({
    name: 'AdminDashboard',
    initialState,
    reducers: {
        setLogin: (state: AdminDashboardStateProps) => {
            state.admindashboardLogin = true;
        },
        setLogOut: (state: AdminDashboardStateProps) => {
            state.admindashboardLogin = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state, action: AnyAction) => {
            if (action.payload && action.payload.AdminDashboard) {
                return {
                    ...state,
                    ...action.payload.AdminDashboard
                };
            }
        });
    }
});

export const { setLogin, setLogOut } = AdminDashboardSlice.actions;
// export const useAdminDashboardDispatch: () => AppDispatch = useDispatch;

export const adminDashboardSelector = (adminDashboardSiteState: IAppStore): AdminDashboardStateProps =>
    adminDashboardSiteState.AdminDashboard;
