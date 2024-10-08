import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { Story } from "iconsax-react";
import { addusers } from "assets/svgs/icons";
const icons = {
  statistics: addusers,
};
const importusers: NavItemType = {
  id: "importusers",
  title: <FormattedMessage id="Add Users" />,
  type: "group",
  url: "/Account/ImportUsers",
  icon: icons.statistics,
};

export default importusers;
