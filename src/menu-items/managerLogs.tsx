import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerLogs: NavItemType = {
  id: "Manager-Logs",
  title: <FormattedMessage id="Logs" />,
  type: "group",
  url: "/Admin/CompanyLogs",
  icon: icons.statistics,
};

export default managerLogs;
