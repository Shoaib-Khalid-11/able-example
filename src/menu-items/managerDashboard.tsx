import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerDashboard: NavItemType = {
  id: "single-dashboard1",
  title: <FormattedMessage id="Dashboard" />,
  type: "group",
  url: "/Admin/Dashboard",
  icon: icons.statistics,
};

export default managerDashboard;
