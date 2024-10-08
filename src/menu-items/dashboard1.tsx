import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types/menu';
import { Story } from 'iconsax-react';
import { dashboard } from 'assets/svgs/icons';
import DashboardIcon from '@mui/icons-material/Dashboard';
const icons = {
    statistics: DashboardIcon
};
const dashboard1: NavItemType = {
    id: 'single-dashboard1',
    title: <FormattedMessage id="Dashboard1" />,
    type: 'group',
    url: '/Account/Dashboard1',
    icon: icons.statistics
};

export default dashboard1;
