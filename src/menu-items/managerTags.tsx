import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerTags: NavItemType = {
  id: "Manager-Tags",
  title: <FormattedMessage id="Tags" />,
  type: "group",
  url: "/Admin/Tags",
  icon: icons.statistics,
};

export default managerTags;
