import { lazy, useEffect } from 'react';

// project-imports
import ErrorBoundary from './ErrorBoundary';
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';

import { SimpleLayoutType } from 'config';
import { loader as productsLoader, productLoader } from 'api/products';
import Dashboard1 from 'pages/dashboard1/Dashboard1';
import Authorize_Admin from 'pages/authorize-admin/Authorize_Admin';
import SwitchSettings from 'pages/settings/SwitchSettings';
import AddUsers from 'pages/add_users/AddUsers';
import ActivityDetails from 'pages/Activity/ActivityDetails';
import { Role } from 'types/role';
import { appRoutes } from './appRoutes';
import { RouterObjects } from 'types/routeObjects';
// import AccountSettingProfile from "pages/settings/AccountSettingProfile";
const AccountSettingProfile = Loadable(lazy(() => import('pages/settings/AccountSettingProfile')));
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard/analytics')));

// render - widget
const WidgetStatistics = Loadable(lazy(() => import('pages/widget/statistics')));
const WidgetData = Loadable(lazy(() => import('pages/widget/data')));
const WidgetChart = Loadable(lazy(() => import('pages/widget/chart')));

// render - applications
const AppChat = Loadable(lazy(() => import('pages/apps/chat')));
const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

const AppKanban = Loadable(lazy(() => import('pages/apps/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('sections/apps/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('sections/apps/kanban/Board')));

const AppCustomerList = Loadable(lazy(() => import('pages/apps/customer/list')));
const AppCustomerCard = Loadable(lazy(() => import('pages/apps/customer/card')));

const AppInvoiceCreate = Loadable(lazy(() => import('pages/apps/invoice/create')));
const AppInvoiceDashboard = Loadable(lazy(() => import('pages/apps/invoice/dashboard')));
const AppInvoiceList = Loadable(lazy(() => import('pages/apps/invoice/list')));
const AppInvoiceDetails = Loadable(lazy(() => import('pages/apps/invoice/details')));
const AppInvoiceEdit = Loadable(lazy(() => import('pages/apps/invoice/edit')));

const UserProfile = Loadable(lazy(() => import('pages/apps/profiles/user')));
const UserTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/user/TabPersonal')));
const UserTabPayment = Loadable(lazy(() => import('sections/apps/profiles/user/TabPayment')));
const UserTabPassword = Loadable(lazy(() => import('sections/apps/profiles/user/TabPassword')));
const UserTabSettings = Loadable(lazy(() => import('sections/apps/profiles/user/TabSettings')));

const AccountProfile = Loadable(lazy(() => import('pages/apps/profiles/account')));
const AccountTabProfile = Loadable(lazy(() => import('sections/apps/profiles/account/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/account/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('sections/apps/profiles/account/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('sections/apps/profiles/account/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('sections/apps/profiles/account/TabRole')));
const AccountTabSettings = Loadable(lazy(() => import('sections/apps/profiles/account/TabSettings')));

const AppECommProducts = Loadable(lazy(() => import('pages/apps/e-commerce/product')));
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/e-commerce/product-details')));
const AppECommProductList = Loadable(lazy(() => import('pages/apps/e-commerce/products-list')));
const AppECommCheckout = Loadable(lazy(() => import('pages/apps/e-commerce/checkout')));
const AppECommAddProduct = Loadable(lazy(() => import('pages/apps/e-commerce/add-product')));

// render - forms & tables
const FormsValidation = Loadable(lazy(() => import('pages/forms/validation')));
const FormsWizard = Loadable(lazy(() => import('pages/forms/wizard')));

const FormsLayoutBasic = Loadable(lazy(() => import('pages/forms/layouts/basic')));
const FormsLayoutMultiColumn = Loadable(lazy(() => import('pages/forms/layouts/multi-column')));
const FormsLayoutActionBar = Loadable(lazy(() => import('pages/forms/layouts/action-bar')));
const FormsLayoutStickyBar = Loadable(lazy(() => import('pages/forms/layouts/sticky-bar')));

const FormsPluginsMask = Loadable(lazy(() => import('pages/forms/plugins/mask')));
const FormsPluginsClipboard = Loadable(lazy(() => import('pages/forms/plugins/clipboard')));
const FormsPluginsRecaptcha = Loadable(lazy(() => import('pages/forms/plugins/re-captcha')));
const FormsPluginsEditor = Loadable(lazy(() => import('pages/forms/plugins/editor')));
const FormsPluginsDropzone = Loadable(lazy(() => import('pages/forms/plugins/dropzone')));

const ReactTableBasic = Loadable(lazy(() => import('pages/tables/react-table/basic')));
const ReactDenseTable = Loadable(lazy(() => import('pages/tables/react-table/dense')));
const ReactTableSorting = Loadable(lazy(() => import('pages/tables/react-table/sorting')));
const ReactTableFiltering = Loadable(lazy(() => import('pages/tables/react-table/filtering')));
const ReactTableGrouping = Loadable(lazy(() => import('pages/tables/react-table/grouping')));
const ReactTablePagination = Loadable(lazy(() => import('pages/tables/react-table/pagination')));
const ReactTableRowSelection = Loadable(lazy(() => import('pages/tables/react-table/row-selection')));
const ReactTableExpanding = Loadable(lazy(() => import('pages/tables/react-table/expanding')));
const ReactTableEditable = Loadable(lazy(() => import('pages/tables/react-table/editable')));
const ReactTableDragDrop = Loadable(lazy(() => import('pages/tables/react-table/drag-drop')));
const ReactTableColumnVisibility = Loadable(lazy(() => import('pages/tables/react-table/column-visibility')));
const ReactTableColumnResizing = Loadable(lazy(() => import('pages/tables/react-table/column-resizing')));
const ReactTableStickyTable = Loadable(lazy(() => import('pages/tables/react-table/sticky')));
const ReactTableUmbrella = Loadable(lazy(() => import('pages/tables/react-table/umbrella')));
const ReactTableEmpty = Loadable(lazy(() => import('pages/tables/react-table/empty')));
const ReactTableVirtualized = Loadable(lazy(() => import('pages/tables/react-table/virtualized')));

// render - charts & map
const ChartApexchart = Loadable(lazy(() => import('pages/charts/apexchart')));
const ChartOrganization = Loadable(lazy(() => import('pages/charts/org-chart')));
const Map = Loadable(lazy(() => import('pages/map')));

// table routing
const MuiTableBasic = Loadable(lazy(() => import('pages/tables/mui-table/basic')));
const MuiTableDense = Loadable(lazy(() => import('pages/tables/mui-table/dense')));
const MuiTableEnhanced = Loadable(lazy(() => import('pages/tables/mui-table/enhanced')));
const MuiTableDatatable = Loadable(lazy(() => import('pages/tables/mui-table/datatable')));
const MuiTableCustom = Loadable(lazy(() => import('pages/tables/mui-table/custom')));
const MuiTableFixedHeader = Loadable(lazy(() => import('pages/tables/mui-table/fixed-header')));
const MuiTableCollapse = Loadable(lazy(() => import('pages/tables/mui-table/collapse')));

// pages routing
// const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/login')));
// const AuthRegister = Loadable(lazy(() => import('pages/auth/auth1/register')));
// const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth1/forgot-password')));
// const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth1/reset-password')));
// const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth1/check-mail')));
// const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth1/code-verification')));

// const AuthLogin = Loadable(lazy(() => import('pages/auth/auth2/login2')));
// const AuthRegister = Loadable(lazy(() => import('pages/auth/auth2/register2')));
// const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth2/forgot-password2')));
// const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth2/reset-password2')));
// const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth2/check-mail2')));
// const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth2/code-verification2')));

// const AuthLogin3 = Loadable(lazy(() => import('pages/auth/auth3/login3')));

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

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Landing = Loadable(lazy(() => import('pages/landing')));
const ContactUS = Loadable(lazy(() => import('pages/contact-us')));
const PricingPage = Loadable(lazy(() => import('pages/extra-pages/price/price1')));
const PricingPage2 = Loadable(lazy(() => import('pages/extra-pages/price/price2')));

// ==============================|| MAIN ROUTES ||============================== //

export const MainRoutes: RouterObjects = {
    path: appRoutes.main.mainLayout(),
    // assignedToRoutes: [Role.user],
    children: [
        {
            path: appRoutes.main.mainLayout(),
            assignedToRoutes: [Role.user],
            element: <DashboardLayout />,
            children: [
                {
                    path: appRoutes.main.dashboard(),
                    // assignedToRoutes: [Role.user],
                    children: [
                        {
                            path: appRoutes.main.dashboardDefault(),
                            element: <DashboardDefault />
                        },
                        {
                            path: appRoutes.main.dashboardAnalytics(),
                            element: <DashboardAnalytics />
                        }
                    ]
                },
                {
                    path: appRoutes.main.account(),
                    assignedToRoutes: [Role.user],
                    children: [
                        {
                            path: appRoutes.main.accountDashboard(),
                            element: <Dashboard1 />,
                            assignedToRoutes: [Role.user]
                        },
                        {
                            path: appRoutes.main.accountActiveUserList(),
                            element: <Authorize_Admin />,
                            assignedToRoutes: [Role.user]
                        },
                        {
                            path: appRoutes.main.accountSwitchSetting(),
                            element: <AccountSettingProfile />,
                            assignedToRoutes: [Role.user],
                            children: [
                                {
                                    path: appRoutes.main.accountSwitchSettingBasic(),
                                    element: <AccountTabProfile />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingPersonal(),
                                    element: <AccountTabPersonal />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingMyAccount(),
                                    element: <AccountTabAccount />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingPassword(),
                                    element: <AccountTabPassword />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingRole(),
                                    element: <AccountTabRole />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingSettings(),
                                    element: <AccountTabSettings />,
                                    assignedToRoutes: [Role.user]
                                },
                                {
                                    path: appRoutes.main.accountSwitchSettingSettings1(),
                                    element: <SwitchSettings />,
                                    assignedToRoutes: [Role.user]
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.accountImportUser(),
                            element: <AddUsers />,
                            assignedToRoutes: [Role.user]
                        },
                        {
                            path: appRoutes.main.accountActivityDetails(),
                            element: <ActivityDetails />,
                            assignedToRoutes: [Role.user]
                        }
                    ]
                },
                {
                    path: appRoutes.main.widget(),
                    children: [
                        {
                            path: appRoutes.main.widgetStatistics(),
                            element: <WidgetStatistics />
                        },
                        {
                            path: appRoutes.main.widgetData(),
                            element: <WidgetData />
                        },
                        {
                            path: appRoutes.main.widgetChart(),
                            element: <WidgetChart />
                        }
                    ]
                },
                {
                    path: appRoutes.main.apps(),
                    children: [
                        {
                            path: appRoutes.main.appsChat(),
                            element: <AppChat />
                        },
                        {
                            path: appRoutes.main.appsCalendar(),
                            element: <AppCalendar />
                        },
                        {
                            path: appRoutes.main.appsKanban(),
                            element: <AppKanban />,
                            children: [
                                {
                                    path: appRoutes.main.appsKanbanBacklogs(),
                                    element: <AppKanbanBacklogs />
                                },
                                {
                                    path: appRoutes.main.appsKanbanBoard(),
                                    element: <AppKanbanBoard />
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.appsCustomer(),
                            children: [
                                {
                                    path: appRoutes.main.appsCustomerList(),
                                    element: <AppCustomerList />
                                },
                                {
                                    path: appRoutes.main.appsCustomerCard(),
                                    element: <AppCustomerCard />
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.appsInvoice(),
                            children: [
                                {
                                    path: appRoutes.main.appsInvoiceDashboard(),
                                    element: <AppInvoiceDashboard />
                                },
                                {
                                    path: appRoutes.main.appsInvoiceCreate(),
                                    element: <AppInvoiceCreate />
                                },
                                {
                                    path: appRoutes.main.appsInvoiceDetails(),
                                    element: <AppInvoiceDetails />
                                },
                                {
                                    path: appRoutes.main.appsInvoiceEdit(),
                                    element: <AppInvoiceEdit />
                                },
                                {
                                    path: appRoutes.main.appsInvoiceList(),
                                    element: <AppInvoiceList />
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.appsProfile(),
                            children: [
                                {
                                    path: appRoutes.main.appsProfilesAccount(),
                                    element: <AccountProfile />,
                                    children: [
                                        {
                                            path: appRoutes.main.appsProfilesAccountBase(),
                                            element: <AccountTabProfile />
                                        },
                                        {
                                            path: appRoutes.main.appsProfilesAccountPersonal(),
                                            element: <AccountTabPersonal />
                                        },
                                        {
                                            path: appRoutes.main.appsProfilesAccountMyAccount(),
                                            element: <AccountTabAccount />
                                        },
                                        {
                                            path: appRoutes.main.appsProfilesAccountPassword(),
                                            element: <AccountTabPassword />
                                        },
                                        {
                                            path: appRoutes.main.appsProfilesAccountRole(),
                                            element: <AccountTabRole />
                                        },
                                        {
                                            path: appRoutes.main.appsProfilesAccountSettings(),
                                            element: <AccountTabSettings />
                                        }
                                    ]
                                },
                                {
                                    path: appRoutes.main.appsUser(),
                                    element: <UserProfile />,
                                    children: [
                                        {
                                            path: appRoutes.main.appsUserPersonal(),
                                            element: <UserTabPersonal />
                                        },
                                        {
                                            path: appRoutes.main.appsUserPayment(),
                                            element: <UserTabPayment />
                                        },
                                        {
                                            path: appRoutes.main.appsUserPassword(),
                                            element: <UserTabPassword />
                                        },
                                        {
                                            path: appRoutes.main.appsUserSettings(),
                                            element: <UserTabSettings />
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.appsEcommers(),
                            children: [
                                {
                                    path: appRoutes.main.appsEcommersProducts(),
                                    element: <AppECommProducts />,
                                    loader: productsLoader,
                                    errorElement: <ErrorBoundary />
                                },
                                {
                                    path: appRoutes.main.appsEcommersProductDetails(),
                                    element: <AppECommProductDetails />,
                                    loader: productLoader,
                                    errorElement: <ErrorBoundary />
                                },
                                {
                                    path: appRoutes.main.appsEcommersProductList(),
                                    element: <AppECommProductList />,
                                    loader: productsLoader,
                                    errorElement: <ErrorBoundary />
                                },
                                {
                                    path: appRoutes.main.appsEcommersProductAddNewProduct(),
                                    element: <AppECommAddProduct />
                                },
                                {
                                    path: appRoutes.main.appsEcommersCheckOut(),
                                    element: <AppECommCheckout />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: appRoutes.main.forms(),
                    children: [
                        {
                            path: appRoutes.main.formsValidation(),
                            element: <FormsValidation />
                        },
                        {
                            path: appRoutes.main.formsWizard(),
                            element: <FormsWizard />
                        },
                        {
                            path: appRoutes.main.formsLayout(),
                            children: [
                                {
                                    path: appRoutes.main.formsLayoutBasic(),
                                    element: <FormsLayoutBasic />
                                },
                                {
                                    path: appRoutes.main.formsLayoutMultiColumn(),
                                    element: <FormsLayoutMultiColumn />
                                },
                                {
                                    path: appRoutes.main.formsLayoutActionBar(),
                                    element: <FormsLayoutActionBar />
                                },
                                {
                                    path: appRoutes.main.formsLayoutStickyBar(),
                                    element: <FormsLayoutStickyBar />
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.plugins(),
                            children: [
                                {
                                    path: appRoutes.main.pluginsMask(),
                                    element: <FormsPluginsMask />
                                },
                                {
                                    path: appRoutes.main.pluginsClipboard(),
                                    element: <FormsPluginsClipboard />
                                },
                                {
                                    path: appRoutes.main.pluginsReCaptcha(),
                                    element: <FormsPluginsRecaptcha />
                                },
                                {
                                    path: appRoutes.main.pluginsEditor(),
                                    element: <FormsPluginsEditor />
                                },
                                {
                                    path: appRoutes.main.pluginsDropzone(),
                                    element: <FormsPluginsDropzone />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: appRoutes.main.table(),
                    children: [
                        {
                            path: appRoutes.main.tableReactTable(),
                            children: [
                                {
                                    path: appRoutes.main.tableReactTableBase(),
                                    element: <ReactTableBasic />
                                },
                                {
                                    path: appRoutes.main.tableReactTableDense(),
                                    element: <ReactDenseTable />
                                },
                                {
                                    path: appRoutes.main.tableReactTableSorting(),
                                    element: <ReactTableSorting />
                                },
                                {
                                    path: appRoutes.main.tableReactTableFiltering(),
                                    element: <ReactTableFiltering />
                                },
                                {
                                    path: appRoutes.main.tableReactTableGrouping(),
                                    element: <ReactTableGrouping />
                                },
                                {
                                    path: appRoutes.main.tableReactTablePagination(),
                                    element: <ReactTablePagination />
                                },
                                {
                                    path: appRoutes.main.tableReactTableRowSelection(),
                                    element: <ReactTableRowSelection />
                                },
                                {
                                    path: appRoutes.main.tableReactTableExpand(),
                                    element: <ReactTableExpanding />
                                },
                                {
                                    path: appRoutes.main.tableReactTableEditAble(),
                                    element: <ReactTableEditable />
                                },
                                {
                                    path: appRoutes.main.tableReactTableDragDrop(),
                                    element: <ReactTableDragDrop />
                                },
                                {
                                    path: appRoutes.main.tableReactTableColumnVisibility(),
                                    element: <ReactTableColumnVisibility />
                                },
                                {
                                    path: appRoutes.main.tableReactTableColumnResizing(),
                                    element: <ReactTableColumnResizing />
                                },
                                {
                                    path: appRoutes.main.tableReactTableStickyTable(),
                                    element: <ReactTableStickyTable />
                                },
                                {
                                    path: appRoutes.main.tableReactTableUmberella(),
                                    element: <ReactTableUmbrella />
                                },
                                {
                                    path: appRoutes.main.tableReactTableEmpty(),
                                    element: <ReactTableEmpty />
                                },
                                {
                                    path: appRoutes.main.tableReactTableVirtualized(),
                                    element: <ReactTableVirtualized />
                                }
                            ]
                        },
                        {
                            path: appRoutes.main.tableMUITable(),
                            children: [
                                {
                                    path: appRoutes.main.tableMUITableBase(),
                                    element: <MuiTableBasic />
                                },
                                {
                                    path: appRoutes.main.tableMUITableDense(),
                                    element: <MuiTableDense />
                                },
                                {
                                    path: appRoutes.main.tableMUITableEnhanced(),
                                    element: <MuiTableEnhanced />
                                },
                                {
                                    path: appRoutes.main.tableMUITableDataTable(),
                                    element: <MuiTableDatatable />
                                },
                                {
                                    path: appRoutes.main.tableMUITableCustom(),
                                    element: <MuiTableCustom />
                                },
                                {
                                    path: appRoutes.main.tableMUITableFixedHeader(),
                                    element: <MuiTableFixedHeader />
                                },
                                {
                                    path: appRoutes.main.tableMUITableCollapse(),
                                    element: <MuiTableCollapse />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: appRoutes.main.charts(),
                    children: [
                        {
                            path: appRoutes.main.chartsApexCharts(),
                            element: <ChartApexchart />
                        },
                        {
                            path: appRoutes.main.chartsORGChart(),
                            element: <ChartOrganization />
                        }
                    ]
                },
                {
                    path: appRoutes.main.map(),
                    element: <Map />
                },
                {
                    path: appRoutes.main.samplePage(),
                    element: <SamplePage />
                },
                {
                    path: appRoutes.main.pricing(),
                    children: [
                        {
                            path: appRoutes.main.pricingPrice1(),
                            element: <PricingPage />
                        },
                        {
                            path: appRoutes.main.pricingPrice2(),
                            element: <PricingPage2 />
                        }
                    ]
                }
            ]
        },
        {
            path: appRoutes.main.simple(),
            element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
            children: [
                {
                    path: appRoutes.main.simpleLanding(),
                    element: <Landing />
                }
            ]
        },
        {
            path: appRoutes.main.simple(),
            element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
            children: [
                {
                    path: appRoutes.main.simpleContactUs(),
                    element: <ContactUS />
                }
            ]
        },
        {
            path: appRoutes.main.maintainence(),
            element: <PagesLayout />,
            children: [
                {
                    path: appRoutes.main.maintainence404(),
                    element: <MaintenanceError />
                },
                {
                    path: appRoutes.main.maintainence500(),
                    element: <MaintenanceError500 />
                },
                {
                    path: appRoutes.main.maintainenceUnderConstruction(),
                    element: <MaintenanceUnderConstruction />
                },
                {
                    path: appRoutes.main.maintainenceUnderConstruction2(),
                    element: <MaintenanceUnderConstruction2 />
                },
                {
                    path: appRoutes.main.maintainenceComingSoon(),
                    element: <MaintenanceComingSoon />
                },
                {
                    path: appRoutes.main.maintainenceComingSoon2(),
                    element: <MaintenanceComingSoon2 />
                }
            ]
        },
        // {
        //   path: '/auth',
        //   element: <PagesLayout />,
        //   children: [
        //     {
        //       path: 'login',
        //       element: <AuthLogin />
        //     },
        //     {
        //       path: 'register',
        //       element: <AuthRegister />
        //     },
        //     {
        //       path: 'forgot-password',
        //       element: <AuthForgotPassword />
        //     },
        //     {
        //       path: 'reset-password',
        //       element: <AuthResetPassword />
        //     },
        //     {
        //       path: 'check-mail',
        //       element: <AuthCheckMail />
        //     },
        //     {
        //       path: 'code-verification',
        //       element: <AuthCodeVerification />
        //     }
        //     // {
        //     //   path: 'login2',
        //     //   element: <AuthLogin2 />
        //     // },
        //     // {
        //     //   path: 'register2',
        //     //   element: <AuthRegister2 />
        //     // },
        //     // {
        //     //   path: 'forgot-password2',
        //     //   element: <AuthForgotPassword2 />
        //     // },
        //     // {
        //     //   path: 'reset-password2',
        //     //   element: <AuthResetPassword2 />
        //     // },
        //     // {
        //     //   path: 'check-mail2',
        //     //   element: <AuthCheckMail2 />
        //     // },
        //     // {
        //     //   path: 'code-verification2',
        //     //   element: <AuthCodeVerification2 />
        //     // },
        //     // {
        //     //   path: 'login3',
        //     //   element: <AuthLogin3 />
        //     // }
        //   ]
        // },
        { path: '*', element: <MaintenanceError /> }
    ]
};

export default MainRoutes;
