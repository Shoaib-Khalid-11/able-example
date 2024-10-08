import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { REHYDRATE } from 'redux-persist';
import { AppDispatch, IAppStore } from 'store';

export interface ManagerDashboardStateProps {
    managerDashboardLogin: boolean;
    listCompanyName: string;
}

const initialState: ManagerDashboardStateProps = {
    managerDashboardLogin: false,
    listCompanyName: ''
};

export const ManagerDashboardSlice = createSlice({
    name: 'ManagerDashboard',
    initialState,
    reducers: {
        setListCompanyName: (state: ManagerDashboardStateProps, action) => {
            state.listCompanyName = action.payload;
        },
        setAdminLogin: (state: ManagerDashboardStateProps) => {
            state.managerDashboardLogin = true;
        },
        setAdminLogOut: (state: ManagerDashboardStateProps) => {
            state.managerDashboardLogin = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(REHYDRATE, (state, action: AnyAction) => {
            if (action.payload && action.payload.ManagerDashboard) {
                return {
                    ...state,
                    ...action.payload.ManagerDashboard
                };
            }
        });
    }
});

export const { setAdminLogin, setAdminLogOut, setListCompanyName } = ManagerDashboardSlice.actions;

export const managerDashboardSelector = (ManagerDashboardSiteState: IAppStore): ManagerDashboardStateProps =>
    ManagerDashboardSiteState.ManagerDashboard;
