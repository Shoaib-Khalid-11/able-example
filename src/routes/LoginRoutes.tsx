import { lazy } from 'react';

// project-imports
import AuthLayout from 'layout/Auth';
import Loadable from 'components/Loadable';
import { appRoutes } from './appRoutes';
import { RouterObjects } from 'types/routeObjects';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth2/login2')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/auth2/register2')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth2/forgot-password2')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth2/check-mail2')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth2/reset-password2')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth2/code-verification2')));

// ==============================|| AUTH ROUTES ||============================== //

const LoginRoutes: RouterObjects = {
    path: appRoutes.auth.authLayout(),
    element: <AuthLayout />,
    children: [
        {
            path: appRoutes.auth.login(),
            element: <AuthLogin />
        },
        {
            path: appRoutes.auth.register(),
            element: <AuthRegister />
        },
        {
            path: appRoutes.auth.forgotPassword(),
            element: <AuthForgotPassword />
        },
        {
            path: appRoutes.auth.checkMail(),
            element: <AuthCheckMail />
        },
        {
            path: appRoutes.auth.resetPassword(),
            element: <AuthResetPassword />
        },
        {
            path: appRoutes.auth.codeVerification(),
            element: <AuthCodeVerification />
        }
    ]
};

export default LoginRoutes;
