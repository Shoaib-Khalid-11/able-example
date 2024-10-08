import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { Story } from "iconsax-react";
import { addusers } from "assets/svgs/icons";
const icons = {
  statistics: addusers,
};
const authorize_admin: NavItemType = {
  id: "authorize_admin",
  title: <FormattedMessage id="Authorize Admin" />,
  type: "group",
  url: "/Account/ActiveUserList",
  icon: icons.statistics,
};

export default authorize_admin;
