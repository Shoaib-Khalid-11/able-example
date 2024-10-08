import { createBrowserRouter, Navigate } from 'react-router-dom';

// project-imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

import ManagerDashboardRoutes from './ManagerDashboardRoutes';
import { appRoutes } from './appRoutes';

// ==============================|| ROUTES RENDER ||============================== //
const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navigate to={appRoutes.auth.login()} />
            // element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
            // children: [
            //     {
            //         index: true,
            //         element: <PagesLanding />
            //     }
            // ]
        },
        LoginRoutes,
        ComponentsRoutes,
        MainRoutes,
        ManagerDashboardRoutes
    ],
    { basename: import.meta.env.VITE_APP_BASE_NAME }
);
export default router;
