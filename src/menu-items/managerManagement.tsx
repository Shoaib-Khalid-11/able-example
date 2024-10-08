import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerManagement: NavItemType = {
  id: "Manager-Management",
  title: <FormattedMessage id="Management" />,
  type: "group",
  url: "/Admin/Management",
  icon: icons.statistics,
};

export default managerManagement;
