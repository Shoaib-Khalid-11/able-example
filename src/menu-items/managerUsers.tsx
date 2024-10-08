import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerUsers: NavItemType = {
  id: "Manager-Users",
  title: <FormattedMessage id="Users" />,
  type: "group",
  url: "/Admin/Users",
  icon: icons.statistics,
};

export default managerUsers;
