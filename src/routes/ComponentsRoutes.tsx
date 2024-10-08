import { lazy } from 'react';

// project-imports
import ComponentLayout from 'layout/Component';
import Loadable from 'components/Loadable';
import { appRoutes } from './appRoutes';

// render - inputs components page
const Autocomplete = Loadable(lazy(() => import('pages/components-overview/autocomplete')));
const Buttons = Loadable(lazy(() => import('pages/components-overview/buttons')));
const Checkbox = Loadable(lazy(() => import('pages/components-overview/checkbox')));
const Radio = Loadable(lazy(() => import('pages/components-overview/radio')));
const Rating = Loadable(lazy(() => import('pages/components-overview/rating')));
const Select = Loadable(lazy(() => import('pages/components-overview/select')));
const Slider = Loadable(lazy(() => import('pages/components-overview/slider')));
const Switch = Loadable(lazy(() => import('pages/components-overview/switch')));
const TextField = Loadable(lazy(() => import('pages/components-overview/textfield')));

// render - feedback components page
const Alert = Loadable(lazy(() => import('pages/components-overview/alert')));
const Dialogs = Loadable(lazy(() => import('pages/components-overview/dialogs')));
const Progress = Loadable(lazy(() => import('pages/components-overview/progress')));
const Snackbar = Loadable(lazy(() => import('pages/components-overview/snackbar')));

// render - data display components
const Avatars = Loadable(lazy(() => import('pages/components-overview/avatars')));
const Badges = Loadable(lazy(() => import('pages/components-overview/badges')));
const Chips = Loadable(lazy(() => import('pages/components-overview/chips')));
const Lists = Loadable(lazy(() => import('pages/components-overview/lists')));
const Tooltip = Loadable(lazy(() => import('pages/components-overview/tooltip')));
const Typography = Loadable(lazy(() => import('pages/components-overview/typography')));

// render - navigation components page
const Breadcrumbs = Loadable(lazy(() => import('pages/components-overview/breadcrumbs')));
const Pagination = Loadable(lazy(() => import('pages/components-overview/pagination')));
const Speeddial = Loadable(lazy(() => import('pages/components-overview/speeddial')));
const Stepper = Loadable(lazy(() => import('pages/components-overview/stepper')));
const Tabs = Loadable(lazy(() => import('pages/components-overview/tabs')));

// render - surfaces components page
const Accordion = Loadable(lazy(() => import('pages/components-overview/accordion')));
const Cards = Loadable(lazy(() => import('pages/components-overview/cards')));

// render - utils components page
const Color = Loadable(lazy(() => import('pages/components-overview/color')));
const DateTimePicker = Loadable(lazy(() => import('pages/components-overview/date-time-picker')));
const Modal = Loadable(lazy(() => import('pages/components-overview/modal')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/shadows')));
const Timeline = Loadable(lazy(() => import('pages/components-overview/timeline')));
const TreeView = Loadable(lazy(() => import('pages/components-overview/treeview')));

// ==============================|| COMPONENTS ROUTES ||============================== //

const ComponentsRoutes = {
    path: appRoutes.component.overview(),
    element: <ComponentLayout />,
    children: [
        {
            path: appRoutes.component.autoComplete(),
            element: <Autocomplete />
        },
        {
            path: appRoutes.component.buttons(),
            element: <Buttons />
        },
        {
            path: appRoutes.component.checkbox(),
            element: <Checkbox />
        },
        {
            path: appRoutes.component.radio(),
            element: <Radio />
        },
        {
            path: appRoutes.component.rating(),
            element: <Rating />
        },
        {
            path: appRoutes.component.switch(),
            element: <Switch />
        },
        {
            path: appRoutes.component.select(),
            element: <Select />
        },
        {
            path: appRoutes.component.slider(),
            element: <Slider />
        },
        {
            path: appRoutes.component.textField(),
            element: <TextField />
        },
        {
            path: appRoutes.component.avatars(),
            element: <Avatars />
        },
        {
            path: appRoutes.component.badges(),
            element: <Badges />
        },
        {
            path: appRoutes.component.chips(),
            element: <Chips />
        },
        {
            path: appRoutes.component.lists(),
            element: <Lists />
        },
        {
            path: appRoutes.component.tooltip(),
            element: <Tooltip />
        },
        {
            path: appRoutes.component.typography(),
            element: <Typography />
        },
        {
            path: appRoutes.component.alert(),
            element: <Alert />
        },
        {
            path: appRoutes.component.dialog(),
            element: <Dialogs />
        },
        {
            path: appRoutes.component.progress(),
            element: <Progress />
        },
        {
            path: appRoutes.component.snackbar(),
            element: <Snackbar />
        },
        {
            path: appRoutes.component.breadcrumbs(),
            element: <Breadcrumbs />
        },
        {
            path: appRoutes.component.pagination(),
            element: <Pagination />
        },
        {
            path: appRoutes.component.speeddial(),
            element: <Speeddial />
        },
        {
            path: appRoutes.component.stepper(),
            element: <Stepper />
        },
        {
            path: appRoutes.component.tabs(),
            element: <Tabs />
        },
        {
            path: appRoutes.component.accordion(),
            element: <Accordion />
        },
        {
            path: appRoutes.component.cards(),
            element: <Cards />
        },
        {
            path: appRoutes.component.color(),
            element: <Color />
        },
        {
            path: appRoutes.component.dateTimePicker(),
            element: <DateTimePicker />
        },
        {
            path: appRoutes.component.modal(),
            element: <Modal />
        },
        {
            path: appRoutes.component.shadow(),
            element: <Shadow />
        },
        {
            path: appRoutes.component.timeline(),
            element: <Timeline />
        },
        {
            path: appRoutes.component.treeView(),
            element: <TreeView />
        }
    ]
};

export default ComponentsRoutes;
