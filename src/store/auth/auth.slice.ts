import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Chance } from 'chance';
import { jwtDecode } from 'jwt-decode';
import { IAppStore } from 'store';
import { UserProfile } from 'types/auth';
import { Role } from 'types/role';
import { KeyedObject } from 'types/root';

const chance = new Chance();
interface AuthSliceState {
    Role: Role | null;
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfile | null;
    token?: string | null;
}

const initialState: AuthSliceState = {
    Role: Role.manager,
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    token: null
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.Role = action.payload;
        },
        setUserLogin: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isInitialized = true;
        },
        setUserLogout: (state) => {
            state.user = null;
            state.isInitialized = true;
            state.isLoggedIn = false;
            state.Role = null;
        }
    }
});

export const { setRole, setUserLogin, setUserLogout } = AuthSlice.actions;
export const AuthSliceSelector = (state: IAppStore): AuthSliceState => state.Auth;
