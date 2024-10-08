import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { AdminDashboardSlice } from './features/Dashboard/adminDashboardSlice';
import { ManagerDashboardSlice } from './features/ManagerDashboard/managerDashboardSlice';
import { AuthSlice } from './auth/auth.slice';
import { useDispatch } from 'react-redux';
import { generalSlice } from './features/general/general.slice';

// const AdminEncryption = encryptTransform({
//     secretKey: 'Admin-Encryption-Key',
//     onError: function (error: any) {
//         console.log('Admin Encryption Error:', error);
//     }
// });
// const ManagerEncryption = encryptTransform({
//     secretKey: 'Manager-Encryption-Key',
//     onError: function (error: any) {
//         console.log('Manager Encryption Error:', error);
//     }
// });

// const AdminPersistConfig = {
//     key: 'Admin',
//     storage,
//     transforms: [AdminEncryption]
//     // version: 1,
// };
// const ManagerPersistConfig = {
//     key: 'Manager',
//     storage,
//     transforms: [ManagerEncryption]
//     // version: 1,
// };
// const ManagerRootReducer = combineReducers({
//     ManagerDashboard: ManagerDashboardSlice.reducer
// });
// const AdminRootReducer = combineReducers({
//     AdminDashboard: AdminDashboardSlice.reducer
// });

// const ManagerPersistedReducer = persistReducer(ManagerPersistConfig, ManagerRootReducer);
// const AdminPersistedReducer = persistReducer(AdminPersistConfig, AdminRootReducer);

export const store = configureStore({
    reducer: persistReducer(
        {
            key: 'root',
            storage
            // whitelist: ['ManagerDashboard', 'AdminDashboard', 'Auth']
        },
        combineReducers({
            ManagerDashboard: ManagerDashboardSlice.reducer,
            AdminDashboard: AdminDashboardSlice.reducer,
            Auth: AuthSlice.reducer,
            general: generalSlice.reducer
        })
    ),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: false
        })
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type IAppStore = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
