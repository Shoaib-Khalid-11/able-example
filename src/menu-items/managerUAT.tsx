import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerUAT: NavItemType = {
  id: "Manager-UAT",
  title: <FormattedMessage id="UAT" />,
  type: "group",
  url: "/Admin/UAT",
  icon: icons.statistics,
};

export default managerUAT;
