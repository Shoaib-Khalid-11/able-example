import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { Story } from "iconsax-react";
import { setting } from "assets/svgs/icons";
const icons = {
  statistics: setting,
};
const switchsetting: NavItemType = {
  id: "settings",
  title: <FormattedMessage id="Settings" />,
  type: "group",
  url: "/Account/SwitchSetting",
  icon: icons.statistics,
};

export default switchsetting;
