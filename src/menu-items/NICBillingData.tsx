import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const NICBillingData: NavItemType = {
  id: "Manager-NICBillingData",
  title: <FormattedMessage id="NIC Auto Billing" />,
  type: "group",
  url: "/Admin/NICBillingData",
  icon: icons.statistics,
};

export default NICBillingData;
