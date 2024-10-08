import Loadable from 'components/Loadable';
import ManagerDashboardlayout from 'layout/ManagerDashboard';
import PagesLayout from 'layout/Pages';
import AutoBillingReport from 'pages/manager-dashboard/AutoBillingReport';
import BillingDetails from 'pages/manager-dashboard/BillingDetails';
import Companies from 'pages/manager-dashboard/Companies';
import CompanySettings from 'pages/manager-dashboard/CompantSettings';
import CompanyEdit from 'pages/manager-dashboard/CompanyEdit';
import DisabledCompanies from 'pages/manager-dashboard/DisabledCompanies';
import GetCompanyEmalAlerts from 'pages/manager-dashboard/GetCompanyEmalAlerts';
import ManagerDashboard from 'pages/manager-dashboard/ManagerDashboard';
import ManagerLogs from 'pages/manager-dashboard/ManagerLogs';
import ManagerManagement from 'pages/manager-dashboard/ManagerManagement';
import ManagerTags from 'pages/manager-dashboard/ManagerTags';
import ManagerUAT from 'pages/manager-dashboard/ManagerUAT';
import ManagerUserEdit from 'pages/manager-dashboard/ManagerUserEdit';
import ManagerUsers from 'pages/manager-dashboard/ManagerUsers';
import NICBillingData from 'pages/manager-dashboard/NICBillingData';
import PreRegistration from 'pages/manager-dashboard/PreRegistration';
import Registration from 'pages/manager-dashboard/Registration';
import UserReport from 'pages/manager-dashboard/UserReport';
import { lazy } from 'react';
import { Role } from 'types/role';
import { RouterObjects } from 'types/routeObjects';
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(
    lazy(() => import('pages/maintenance/under-construction/under-construction'))
);
const MaintenanceUnderConstruction2 = Loadable(
    lazy(() => import('pages/maintenance/under-construction/under-construction2'))
);
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));
const MaintenanceComingSoon2 = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon2')));

export const ManagerDashboardRoutes: RouterObjects = {
    path: '/',
    children: [
        {
            path: '/',
            element: <ManagerDashboardlayout />,
            children: [
                {
                    path: 'Admin',
                    assignedToRoutes: [Role.manager],
                    children: [
                        {
                            path: 'Dashboard',
                            assignedToRoutes: [Role.manager],
                            element: <ManagerDashboard />
                        },
                        {
                            path: 'Companies',
                            element: <Companies />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Company/:company_id',
                            element: <CompanyEdit />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'CompanySettings/:company_name',
                            element: <CompanySettings />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'GetCompanyEmalAlerts/:company_id',
                            element: <GetCompanyEmalAlerts />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'DisabledCompanies',
                            element: <DisabledCompanies />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Tags',
                            element: <ManagerTags />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Registration',
                            element: <Registration />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'PreRegistration',
                            element: <PreRegistration />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Users',
                            element: <ManagerUsers />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'UsersEdit/:user_id',
                            element: <ManagerUserEdit />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'UAT',
                            element: <ManagerUAT />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Management',
                            element: <ManagerManagement />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'CompanyLogs',
                            element: <ManagerLogs />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'NICBillingData',
                            element: <NICBillingData />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'BillingDetails/:id',
                            element: <BillingDetails />,
                            assignedToRoutes: [Role.manager]
                        },
                        {
                            path: 'Reporting',
                            children: [
                                {
                                    path: 'UserCount',
                                    element: <UserReport />,
                                    assignedToRoutes: [Role.manager]
                                },
                                {
                                    path: 'AutoBilling',
                                    element: <AutoBillingReport />,
                                    assignedToRoutes: [Role.manager]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: '/maintenance',
            element: <PagesLayout />,
            children: [
                {
                    path: '404',
                    element: <MaintenanceError />
                },
                {
                    path: '500',
                    element: <MaintenanceError500 />
                },
                {
                    path: 'under-construction',
                    element: <MaintenanceUnderConstruction />
                },
                {
                    path: 'under-construction2',
                    element: <MaintenanceUnderConstruction2 />
                },
                {
                    path: 'coming-soon',
                    element: <MaintenanceComingSoon />
                },
                {
                    path: 'coming-soon2',
                    element: <MaintenanceComingSoon2 />
                }
            ]
        },
        { path: '*', element: <MaintenanceError /> }
    ]
};

export default ManagerDashboardRoutes;
