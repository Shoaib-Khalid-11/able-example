import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { IAppStore, useAppDispatch } from 'store';

export interface generalStateProps {
    loading: boolean;
}

const initialState: generalStateProps = {
    loading: false
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoading: (state: generalStateProps, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = generalSlice.actions;
// export const useAdminDashboardDispatch: () => AppDispatch = useDispatch;

export const generalSelector = (generalSiteState: IAppStore): generalStateProps => generalSiteState.general;

export const useGeneral = () => {
    const dispatch = useAppDispatch();
    return {
        generalState: useSelector(generalSelector),
        setLoading: (l: boolean) => dispatch(setLoading(l))
    };
};
