export const appRoutes = {
    simple: {
        home: () => {
            return '/';
        }
    },
    auth: {
        authLayout: () => {
            return '/';
        },
        login: () => {
            return 'login';
        },
        register: () => {
            return 'register';
        },
        forgotPassword: () => {
            return 'forgot-password';
        },
        checkMail: () => {
            return 'check-mail';
        },
        resetPassword: () => {
            return 'reset-password';
        },
        codeVerification: () => {
            return 'code-verification';
        }
    },
    component: {
        overview: () => {
            return 'components-overview';
        },
        autoComplete: () => {
            return 'autocomplete';
        },
        buttons: () => {
            return 'buttons';
        },
        checkbox: () => {
            return 'checkbox';
        },
        radio: () => {
            return 'radio';
        },
        rating: () => {
            return 'rating';
        },
        switch: () => {
            return 'switch';
        },
        select: () => {
            return 'select';
        },
        slider: () => {
            return 'slider';
        },
        textField: () => {
            return 'textfield';
        },
        avatars: () => {
            return 'avatars';
        },
        badges: () => {
            return 'badges';
        },
        chips: () => {
            return 'chips';
        },
        lists: () => {
            return 'lists';
        },

        tooltip: () => {
            return 'tooltip';
        },
        typography: () => {
            return 'typography';
        },
        alert: () => {
            return 'alert';
        },
        dialog: () => {
            return 'dialogs';
        },
        progress: () => {
            return 'progress';
        },
        shadow: () => {
            return 'shadow';
        },
        breadcrumbs: () => {
            return 'breadcrumbs';
        },
        pagination: () => {
            return 'pagination';
        },
        speeddial: () => {
            return 'speeddial';
        },
        stepper: () => {
            return 'stepper';
        },
        tabs: () => {
            return 'tabs';
        },
        accordion: () => {
            return 'accordion';
        },
        cards: () => {
            return 'cards';
        },
        color: () => {
            return 'color';
        },
        dateTimePicker: () => {
            return 'date-time-picker';
        },
        modal: () => {
            return 'modal';
        },
        shadows: () => {
            return 'shadows';
        },
        timeline: () => {
            return 'timeline';
        },
        treeView: () => {
            return 'treeview';
        },
        snackbar: () => {
            return 'snackbar';
        }
    },
    main: {
        mainLayout: () => {
            return '/';
        },
        dashboard: () => {
            return 'dashboard';
        },
        dashboardDefault: () => {
            return 'default';
        },

        dashboardAnalytics: () => {
            return 'analytics';
        },

        account: () => {
            return 'Account';
        },
        accountDashboard: () => {
            return 'Dashboard1';
        },

        accountActiveUserList: () => {
            return 'ActiveUserList';
        },

        accountSwitchSetting: () => {
            return 'SwitchSetting';
        },
        accountSwitchSettingBasic: () => {
            return 'basic';
        },
        accountSwitchSettingPersonal: () => {
            return 'personal';
        },
        accountSwitchSettingMyAccount: () => {
            return 'my-account';
        },
        accountSwitchSettingPassword: () => {
            return 'password';
        },
        accountSwitchSettingRole: () => {
            return 'role';
        },
        accountSwitchSettingSettings: () => {
            return 'settings';
        },
        accountSwitchSettingSettings1: () => {
            return 'settings1';
        },
        accountImportUser: () => {
            return 'ImportUsers';
        },
        accountActivityDetails: () => {
            return 'ActivityDetails';
        },

        widget: () => {
            return 'widget';
        },
        widgetStatistics: () => {
            return 'statistics';
        },
        widgetChart: () => {
            return 'chart';
        },
        widgetData: () => {
            return 'data';
        },

        apps: () => {
            return 'apps';
        },
        appsChat: () => {
            return 'chat';
        },
        appsCalendar: () => {
            return 'calendar';
        },
        appsKanban: () => {
            return 'kanban';
        },
        appsKanbanBacklogs: () => {
            return 'backlogs';
        },
        appsKanbanBoard: () => {
            return 'board';
        },
        appsCustomer: () => {
            return 'customer';
        },
        appsCustomerList: () => {
            return 'list';
        },
        appsCustomerCard: () => {
            return 'customer-card';
        },
        appsInvoice: () => {
            return 'invoice';
        },
        appsInvoiceDashboard: () => {
            return 'dashboard';
        },
        appsInvoiceCreate: () => {
            return 'create';
        },
        appsInvoiceDetails: () => {
            return 'details/:id';
        },
        appsInvoiceEdit: () => {
            return 'edit/:id';
        },
        appsInvoiceList: () => {
            return 'list';
        },
        appsProfile: () => {
            return 'profile';
        },
        appsProfilesAccount: () => {
            return 'account';
        },
        appsProfilesAccountBase: () => {
            return 'base';
        },
        appsProfilesAccountPersonal: () => {
            return 'personal';
        },
        appsProfilesAccountMyAccount: () => {
            return 'my-account';
        },
        appsProfilesAccountPassword: () => {
            return 'password';
        },
        appsProfilesAccountRole: () => {
            return 'role';
        },
        appsProfilesAccountSettings: () => {
            return 'settings';
        },
        appsUser: () => {
            return 'user';
        },
        appsUserPersonal: () => {
            return 'personal';
        },
        appsUserPayment: () => {
            return 'payment';
        },
        appsUserPassword: () => {
            return 'password';
        },
        appsUserSettings: () => {
            return 'settings';
        },
        appsEcommers: () => {
            return 'e-commers';
        },
        appsEcommersProducts: () => {
            return 'products';
        },
        appsEcommersProductDetails: () => {
            return 'product-details/:id';
        },
        appsEcommersProductAddNewProduct: () => {
            return 'add-new-product';
        },
        appsEcommersProductList: () => {
            return 'product-list';
        },
        appsEcommersCheckOut: () => {
            return 'checkout';
        },

        forms: () => {
            return 'forms';
        },
        formsValidation: () => {
            return 'validation';
        },
        formsWizard: () => {
            return 'wizard';
        },
        formsLayout: () => {
            return 'layout';
        },

        formsLayoutBasic: () => {
            return 'basic';
        },
        formsLayoutMultiColumn: () => {
            return 'multi-column';
        },
        formsLayoutActionBar: () => {
            return 'action-bar';
        },
        formsLayoutStickyBar: () => {
            return 'sticky-bar';
        },

        plugins: () => {
            return 'plugins';
        },
        pluginsMask: () => {
            return 'mask';
        },
        pluginsClipboard: () => {
            return 'clipboard';
        },
        pluginsReCaptcha: () => {
            return 're-captcha';
        },
        pluginsDropzone: () => {
            return 'dropzone';
        },
        pluginsEditor: () => {
            return 'editor';
        },

        table: () => {
            return 'table';
        },
        tableReactTable: () => {
            return 'react-table';
        },
        tableReactTableBase: () => {
            return 'base';
        },
        tableReactTableDense: () => {
            return 'dense';
        },
        tableReactTableSorting: () => {
            return 'sorting';
        },
        tableReactTableFiltering: () => {
            return 'filtering';
        },
        tableReactTableGrouping: () => {
            return 'grouping';
        },
        tableReactTablePagination: () => {
            return 'pagination';
        },
        tableReactTableRowSelection: () => {
            return 'row-selection';
        },
        tableReactTableExpand: () => {
            return 'expand';
        },
        tableReactTableEditAble: () => {
            return 'editable';
        },
        tableReactTableDragDrop: () => {
            return 'drag-drop';
        },
        tableReactTableColumnVisibility: () => {
            return 'column-visibility';
        },
        tableReactTableColumnResizing: () => {
            return 'column-resizing';
        },
        tableReactTableStickyTable: () => {
            return 'sticky-table';
        },
        tableReactTableUmberella: () => {
            return 'umberella';
        },
        tableReactTableEmpty: () => {
            return 'empty';
        },
        tableReactTableVirtualized: () => {
            return 'virtualized';
        },
        tableMUITable: () => {
            return 'mui-table';
        },
        tableMUITableBase: () => {
            return 'base';
        },
        tableMUITableDense: () => {
            return 'dense';
        },
        tableMUITableEnhanced: () => {
            return 'enhanced';
        },
        tableMUITableDataTable: () => {
            return 'data-table';
        },
        tableMUITableCustom: () => {
            return 'custom';
        },
        tableMUITableFixedHeader: () => {
            return 'fixed-header';
        },
        tableMUITableCollapse: () => {
            return 'collaps';
        },

        charts: () => {
            return 'charts';
        },
        chartsApexCharts: () => {
            return 'apex-charts';
        },
        chartsORGChart: () => {
            return 'org-chart';
        },
        map: () => {
            return 'map';
        },
        samplePage: () => {
            return 'sample-page';
        },

        pricing: () => {
            return 'price';
        },
        pricingPrice1: () => {
            return 'price1';
        },
        pricingPrice2: () => {
            return 'price2';
        },

        simple: () => {
            return '/';
        },
        simpleLanding: () => {
            return 'landing';
        },
        simpleContactUs: () => {
            return 'contact-us';
        },

        maintainence: () => {
            return 'maintainence';
        },
        maintainence404: () => {
            return '404';
        },
        maintainence500: () => {
            return '500';
        },
        maintainenceUnderConstruction: () => {
            return 'under-construction';
        },
        maintainenceUnderConstruction2: () => {
            return 'under-construction2';
        },
        maintainenceComingSoon: () => {
            return 'coming-soon';
        },
        maintainenceComingSoon2: () => {
            return 'coming-soon2';
        },
        MaintainenceErrorAll: () => {
            return '*';
        }
    },
    admin: {
        adminDashboard: () => {
            return 'dashboard';
        },
        adminCompanies: () => {
            return 'companies';
        },
        adminCompany: () => {
            return 'company/:company_id';
        },
        adminCompanySettings: () => {
            return 'CompanySettings/:company_name';
        },
        adminGetCompanyEmalAlerts: () => {
            return 'GetCompanyEmailAlerts/:company_id';
        },
        adminDisabledCompanies: () => {
            return 'DisabledCompanies';
        },
        adminTags: () => {
            return 'Tags';
        },
        adminRegistration: () => {
            return 'Registration';
        },
        adminPreRegistration: () => {
            return 'PreRegistration';
        },
        adminUsers: () => {
            return 'Users';
        },
        adminUserEdit: () => {
            return 'UserEdit/:user_id';
        },
        adminUAT: () => {
            return 'UAT';
        },
        adminManagement: () => {
            return 'Management';
        },
        adminCompanyLogs: () => {
            return 'CompanyLogs';
        },
        adminNICBillingData: () => {
            return 'NICBillingData';
        },
        adminBillingDetails: () => {
            return 'BillingDetails/:id';
        },
        adminReportingUserCount: () => {
            return 'UserCount';
        },
        adminReportingAutoBilling: () => {
            return 'AutoBilling';
        },
        adminMaintainence404: () => {
            return '404';
        },
        adminMaintainence500: () => {
            return '500';
        },
        adminMaintainenceUnderConstruction: () => {
            return 'under-construction';
        },
        adminMaintainenceUnderConstruction2: () => {
            return 'under-construction2';
        },
        adminMaintainenceComingSoon: () => {
            return 'coming-soon';
        },
        adminMaintainenceComingSoon2: () => {
            return 'coming-soon2';
        },
        adminMaintainenceErrorAll: () => {
            return '*';
        }
    }
};
// ==============================|| ROUTES RENDER ||============================== //
// export const appRoutes = {
//     simple: {
//         home: () => {
//             return '/';
//         }
//     },
//     auth: {
//         authLayout: () => {
//             return '/';
//         },
//         login: () => {
//             return '/login';
//         },
//         register: () => {
//             return '/register';
//         },
//         forgotPassword: () => {
//             return '/forgot-password';
//         },
//         checkMail: () => {
//             return '/check-mail';
//         },
//         resetPassword: () => {
//             return '/reset-password';
//         },
//         codeVerification: () => {
//             return '/code-verification';
//         }
//     },
//     component: {
//         overview: () => {
//             return '/components-overview';
//         },
//         autoComplete: () => {
//             return '/components-overview/autocomplete';
//         },
//         buttons: () => {
//             return '/components-overview/buttons';
//         },
//         checkbox: () => {
//             return '/components-overview/checkbox';
//         },
//         radio: () => {
//             return '/components-overview/radio';
//         },
//         rating: () => {
//             return '/components-overview/rating';
//         },
//         switch: () => {
//             return '/components-overview/switch';
//         },
//         select: () => {
//             return '/components-overview/select';
//         },
//         slider: () => {
//             return '/components-overview/slider';
//         },
//         textField: () => {
//             return '/components-overview/textfield';
//         },
//         avatars: () => {
//             return '/components-overview/avatars';
//         },
//         badges: () => {
//             return '/components-overview/badges';
//         },
//         chips: () => {
//             return '/components-overview/chips';
//         },
//         lists: () => {
//             return '/components-overview/lists';
//         },

//         tooltip: () => {
//             return '/components-overview/tooltip';
//         },
//         typography: () => {
//             return '/components-overview/typography';
//         },
//         alert: () => {
//             return '/components-overview/alert';
//         },
//         dialog: () => {
//             return '/components-overview/dialogs';
//         },
//         progress: () => {
//             return '/components-overview/progress';
//         },
//         shadow: () => {
//             return '/components-overview/shadow';
//         },
//         breadcrumbs: () => {
//             return '/components-overview/breadcrumbs';
//         },
//         pagination: () => {
//             return '/components-overview/pagination';
//         },
//         speeddial: () => {
//             return '/components-overview/speeddial';
//         },
//         stepper: () => {
//             return '/components-overview/stepper';
//         },
//         tabs: () => {
//             return '/components-overview/tabs';
//         },
//         accordion: () => {
//             return '/components-overview/accordion';
//         },
//         cards: () => {
//             return '/components-overview/cards';
//         },
//         color: () => {
//             return '/components-overview/color';
//         },
//         dateTimePicker: () => {
//             return '/components-overview/date-time-picker';
//         },
//         modal: () => {
//             return '/components-overview/modal';
//         },
//         shadows: () => {
//             return '/components-overview/shadows';
//         },
//         timeline: () => {
//             return '/components-overview/timeline';
//         },
//         treeView: () => {
//             return '/components-overview/treeview';
//         },
//         snackbar: () => {
//             return '/components-overview/snackbar';
//         }
//     },
//     main: {
//         mainLayout: () => {
//             return '/';
//         },
//         dashboard: () => {
//             return '/dashboard';
//         },
//         dashboardDefault: () => {
//             return '/dashboard/default';
//         },

//         dashboardAnalytics: () => {
//             return '/dashboard/analytics';
//         },

//         account: () => {
//             return '/account';
//         },
//         accountDashboard: () => {
//             return '/account/dashboard1';
//         },

//         accountActiveUserList: () => {
//             return '/account/activeuserlist';
//         },

//         accountSwitchSetting: () => {
//             return '/account/SwitchSetting';
//         },
//         accountSwitchSettingBasic: () => {
//             return '/account/SwitchSetting/basic';
//         },
//         accountSwitchSettingPersonal: () => {
//             return '/account/SwitchSetting/personal';
//         },
//         accountSwitchSettingMyAccount: () => {
//             return '/account/SwitchSetting/my-account';
//         },
//         accountSwitchSettingPassword: () => {
//             return '/account/SwitchSetting/password';
//         },
//         accountSwitchSettingRole: () => {
//             return '/account/SwitchSetting/role';
//         },
//         accountSwitchSettingSettings: () => {
//             return '/account/SwitchSetting/settings';
//         },
//         accountSwitchSettingSettings1: () => {
//             return '/account/SwitchSetting/setting1';
//         },
//         accountImportUser: () => {
//             return '/account/ImportUser';
//         },
//         accountActivityDetails: () => {
//             return '/account/ActivityDetails';
//         },

//         widget: () => {
//             return '/widget';
//         },
//         widgetStatistics: () => {
//             return '/widget/statistics';
//         },
//         widgetChart: () => {
//             return '/widget/chart';
//         },
//         widgetData: () => {
//             return '/widget/data';
//         },

//         apps: () => {
//             return '/apps';
//         },
//         appsChart: () => {
//             return '/apps/chart';
//         },
//         appsCalendar: () => {
//             return '/apps/calendar';
//         },
//         appsKanban: () => {
//             return '/apps/kanban';
//         },
//         appsKanbanBacklogs: () => {
//             return '/apps/kanban/backlogs';
//         },
//         appsKanbanBoard: () => {
//             return '/apps/kanban/board';
//         },
//         appsCustomer: () => {
//             return '/apps/customer';
//         },
//         appsCustomerList: () => {
//             return '/apps/customer/list';
//         },
//         appsCustomerCard: () => {
//             return '/apps/customer/customer-card';
//         },
//         appsInvoice: () => {
//             return '/apps/invoice';
//         },
//         appsInvoiceDashboard: () => {
//             return '/apps/invoice/dashboard';
//         },
//         appsInvoiceCreate: () => {
//             return '/apps/invoice/create';
//         },
//         appsInvoiceDetails: () => {
//             return '/apps/invoice/details/:id';
//         },
//         appsInvoiceEdit: () => {
//             return '/apps/invoice/edit/:id';
//         },
//         appsInvoiceList: () => {
//             return '/apps/invoice/list';
//         },
//         appsProfile: () => {
//             return '/apps/profile';
//         },
//         appsProfilesAccount: () => {
//             return '/apps/profiles/account';
//         },
//         appsProfilesAccountBase: () => {
//             return '/apps/profiles/account/base';
//         },
//         appsProfilesAccountPersonal: () => {
//             return '/apps/profiles/account/personal';
//         },
//         appsProfilesAccountMyAccount: () => {
//             return '/apps/profiles/account/my-account';
//         },
//         appsProfilesAccountPassword: () => {
//             return '/apps/profiles/account/password';
//         },
//         appsProfilesAccountRole: () => {
//             return '/apps/profiles/account/role';
//         },
//         appsProfilesAccountSettings: () => {
//             return '/apps/profiles/account/settings';
//         },
//         appsUser: () => {
//             return '/apps/user';
//         },
//         appsUserPersonal: () => {
//             return '/apps/user/personal';
//         },
//         appsUserPayment: () => {
//             return '/apps/user/payment';
//         },
//         appsUserPassword: () => {
//             return '/apps/user/password';
//         },
//         appsUserSettings: () => {
//             return '/apps/user/settings';
//         },
//         appsEcommers: () => {
//             return '/apps/e-commers';
//         },
//         appsEcommersProducts: () => {
//             return '/apps/e-commers/products';
//         },
//         appsEcommersProductDetails: () => {
//             return '/apps/e-commers/product-details/:id';
//         },
//         appsEcommersProductAddNewProduct: () => {
//             return '/apps/e-commers/add-new-product';
//         },
//         appsEcommersProductList: () => {
//             return '/apps/e-commers/product-list';
//         },
//         appsEcommersCheckOut: () => {
//             return '/apps/e-commers/checkout';
//         },

//         forms: () => {
//             return '/forms';
//         },
//         formsValidation: () => {
//             return '/forms/validation';
//         },
//         formsWizard: () => {
//             return '/forms/wizard';
//         },
//         formsLayout: () => {
//             return '/forms/layout';
//         },

//         formsLayoutBasic: () => {
//             return '/forms/layout/basic';
//         },
//         formsLayoutMultiColumn: () => {
//             return '/forms/layout/multi-column';
//         },
//         formsLayoutActionBar: () => {
//             return '/forms/layout/action-bar';
//         },
//         formsLayoutStickyBar: () => {
//             return '/forms/layout/sticky-bar';
//         },

//         plugins: () => {
//             return '/plugins';
//         },
//         pluginsMask: () => {
//             return '/plugins/mask';
//         },
//         pluginsClipboard: () => {
//             return '/plugins/clipboard';
//         },
//         pluginsReCaptcha: () => {
//             return '/plugins/re-captcha';
//         },
//         pluginsDropzone: () => {
//             return '/plugins/dropzone';
//         },
//         pluginsEditor: () => {
//             return '/plugins/editor';
//         },

//         table: () => {
//             return '/table';
//         },
//         tableReactTable: () => {
//             return '/table/react-table';
//         },
//         tableReactTableBase: () => {
//             return '/table/react-table/base';
//         },
//         tableReactTableDense: () => {
//             return '/table/react-table/dense';
//         },
//         tableReactTableSorting: () => {
//             return '/table/react-table/sorting';
//         },
//         tableReactTableFiltering: () => {
//             return '/table/react-table/filtering';
//         },
//         tableReactTableGrouping: () => {
//             return '/table/react-table/grouping';
//         },
//         tableReactTablePagination: () => {
//             return '/table/react-table/pagination';
//         },
//         tableReactTableRowSelection: () => {
//             return '/table/react-table/row-selection';
//         },
//         tableReactTableExpand: () => {
//             return '/table/react-table/expand';
//         },
//         tableReactTableEditAble: () => {
//             return '/table/react-table/editable';
//         },
//         tableReactTableDragDrop: () => {
//             return '/table/react-table/drag-drop';
//         },
//         tableReactTableColumnVisibility: () => {
//             return '/table/react-table/column-visibility';
//         },
//         tableReactTableColumnResizing: () => {
//             return '/table/react-table/column-resizing';
//         },
//         tableReactTableStickyTable: () => {
//             return '/table/react-table/sticky-table';
//         },
//         tableReactTableUmberella: () => {
//             return '/table/react-table/umberella';
//         },
//         tableReactTableEmpty: () => {
//             return '/table/react-table/empty';
//         },
//         tableReactTableVirtualized: () => {
//             return '/table/react-table/virtualized';
//         },
//         tableMUITable: () => {
//             return '/table/mui-table';
//         },
//         tableMUITableBase: () => {
//             return '/table/mui-table/base';
//         },
//         tableMUITableDense: () => {
//             return '/table/mui-table/dense';
//         },
//         tableMUITableEnhanced: () => {
//             return '/table/mui-table/enhanced';
//         },
//         tableMUITableDataTable: () => {
//             return '/table/mui-table/data-table';
//         },
//         tableMUITableCustom: () => {
//             return '/table/mui-table/custom';
//         },
//         tableMUITableFixedHeader: () => {
//             return '/table/mui-table/fixed-header';
//         },
//         tableMUITableCollapse: () => {
//             return '/table/mui-table/collaps';
//         },

//         charts: () => {
//             return '/charts';
//         },
//         chartsApexCharts: () => {
//             return '/charts/apex-charts';
//         },
//         chartsORGChart: () => {
//             return '/charts/org-chart';
//         },
//         map: () => {
//             return '/map';
//         },
//         samplePage: () => {
//             return '/sample-page';
//         },

//         pricing: () => {
//             return '/price';
//         },
//         pricingPrice1: () => {
//             return '/price/price1';
//         },
//         pricingPrice2: () => {
//             return '/price/price2';
//         },

//         simple: () => {
//             return '/';
//         },
//         simpleLanding: () => {
//             return '/landing';
//         },
//         simpleContactUs: () => {
//             return '/contact-us';
//         },

//         maintainence: () => {
//             return '/maintainence';
//         },
//         maintainence404: () => {
//             return '/maintainence/404';
//         },
//         maintainence500: () => {
//             return '/maintainence/500';
//         },
//         maintainenceUnderConstruction: () => {
//             return '/maintainence/under-construction';
//         },
//         maintainenceUnderConstruction2: () => {
//             return '/maintainence/under-construction2';
//         },
//         maintainenceComingSoon: () => {
//             return '/maintainence/coming-soon';
//         },
//         maintainenceComingSoon2: () => {
//             return '/maintainence/coming-soon2';
//         },
//         MaintainenceErrorAll: () => {
//             return '*';
//         }
//     },
//     admin: {
//         adminDashboard: () => {
//             return '/admin/dashboard';
//         },
//         adminCompanies: () => {
//             return '/admin/companies';
//         },
//         adminCompany: () => {
//             return '/admin/company/:company_id';
//         },
//         adminCompanySettings: () => {
//             return '/admin/CompanySettings/:company_name';
//         },
//         adminGetCompanyEmalAlerts: () => {
//             return '/admin/GetCompanyEmailAlerts/:company_id';
//         },
//         adminDisabledCompanies: () => {
//             return '/admin/DisabledCompanies';
//         },
//         adminTags: () => {
//             return '/admin/Tags';
//         },
//         adminRegistration: () => {
//             return '/admin/Registration';
//         },
//         adminPreRegistration: () => {
//             return '/admin/PreRegistration';
//         },
//         adminUsers: () => {
//             return '/admin/Users';
//         },
//         adminUserEdit: () => {
//             return '/admin/UserEdit/:user_id';
//         },
//         adminUAT: () => {
//             return '/admin/UAT';
//         },
//         adminManagement: () => {
//             return '/admin/Management';
//         },
//         adminCompanyLogs: () => {
//             return '/admin/CompanyLogs';
//         },
//         adminNICBillingData: () => {
//             return '/admin/NICBillingData';
//         },
//         adminBillingDetails: () => {
//             return '/admin/BillingDetails/:id';
//         },
//         adminReportingUserCount: () => {
//             return '/admin/Reporting/UserCount';
//         },
//         adminReportingAutoBilling: () => {
//             return '/admin/Reporting/AutoBilling';
//         },
//         adminMaintainence404: () => {
//             return '/maintainence/404';
//         },
//         adminMaintainence500: () => {
//             return '/maintainence/500';
//         },
//         adminMaintainenceUnderConstruction: () => {
//             return '/maintainence/under-construction';
//         },
//         adminMaintainenceUnderConstruction2: () => {
//             return '/maintainence/under-construction2';
//         },
//         adminMaintainenceComingSoon: () => {
//             return '/maintainence/coming-soon';
//         },
//         adminMaintainenceComingSoon2: () => {
//             return '/maintainence/coming-soon2';
//         },
//         adminMaintainenceErrorAll: () => {
//             return '*';
//         }
//     }
// };
