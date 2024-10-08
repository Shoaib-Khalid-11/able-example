import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project-imports
import useAuth from 'hooks/useAuth';

// types
import { GuardProps } from 'types/auth';
import ManagerDashboardRoutes from 'routes/ManagerDashboardRoutes';
import MainRoutes from 'routes/MainRoutes';
import { Role as Roles } from 'types/role';

const findRoute = (route: any, pathname: string, parentPath: string = ''): React.ReactNode | null => {
    const fullPath = `${parentPath}/${route.path}`.replace(/\/{2,}/g, '/'); // Normalize path
    if (fullPath === pathname) {
        return route;
    }
    if (pathname !== fullPath) {
        if (route.children) {
            // Recursively search in children
            for (const childRoute of route.children) {
                const matchedElement = findRoute(childRoute, pathname, fullPath);
                if (matchedElement) {
                    return matchedElement;
                }
            }
        }
        return null;
    }
    return null;
};
export default function AuthGuard({ children }: GuardProps) {
    const { isLoggedIn, Role, logout } = useAuth();
    const [hasNavigated, setHasNavigated] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const routes = Role === Roles.manager ? ManagerDashboardRoutes : Role === Roles.user ? MainRoutes : null;
    const currentRoute: any = routes ? findRoute(routes, location.pathname) : null;

    const isAllowed = currentRoute ? currentRoute?.assignedToRoutes?.includes(Role) : false;
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('login', {
                state: {
                    from: location.pathname
                },
                replace: true
            });
        } else if (isLoggedIn && (Role === null || Role) && !hasNavigated) {
            if (Role === Roles.user) {
                navigate('/Account/Dashboard1');
            } else if (Role === Roles.manager) {
                navigate('/Admin/Dashboard');
            } else if (Role === null) {
                logout();
            }
            setHasNavigated(true);
        }
        // else if (isLoggedIn && !isAllowed) {
        //     window.alert('You do not have permission to access this page.');
        //     navigate(-1); // Navigate back to the previous page
        // }
    }, [isLoggedIn, navigate, location, hasNavigated, Role, isAllowed]);

    return children;
}
