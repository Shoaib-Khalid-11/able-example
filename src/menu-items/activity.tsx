import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { Story } from "iconsax-react";
import { addusers } from "assets/svgs/icons";
const icons = {
  statistics: addusers,
};
const activity: NavItemType = {
  id: "activity",
  title: <FormattedMessage id="Activity" />,
  type: "group",
  url: "/Account/ActivityDetails",
  icon: icons.statistics,
};

export default activity;
