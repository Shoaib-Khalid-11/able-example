// project-imports
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import samplePage from './sample-page';
import chartsMap from './charts-map';
import support from './support';
import pages from './pages';
import dashboard1 from './dashboard1';
import authorize_admin from './authorize-admin';
// types
import { NavItemType } from 'types/menu';
import switchsetting from './settings';
import importusers from './importusers';
import activity from './activity';
import managerDashboard from './managerDashboard';
import companies from './companies';
import managerTags from './managerTags';
import managerRegistration from './managerRegistration';
import managerUsers from './managerUsers';
import managerUAT from './managerUAT';
import managerManagement from './managerManagement';
import managerLogs from './managerLogs';
import NICBillingData from './NICBillingData';
import managerReports from './managerReports';

// ==============================|| MENU ITEMS ||============================== //
/// Drawer Menu Item Location
const menuItems: { items: NavItemType[]; managerItems: NavItemType[] } = {
    // items: [dashboard1, authorize_admin, importusers, activity, switchsetting],
    items: [
        dashboard1,
        switchsetting,
        importusers,
        authorize_admin,
        activity,
        widget,
        applications,
        formsTables,
        chartsMap,
        samplePage,
        pages,
        support
    ],
    managerItems: [
        managerDashboard,
        companies,
        managerTags,
        managerRegistration,
        managerUsers,
        managerUAT,
        managerManagement,
        managerLogs,
        NICBillingData,
        managerReports
    ]
};

export default menuItems;
