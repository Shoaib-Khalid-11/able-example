import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerRegistration: NavItemType = {
  id: "Manager-Registration",
  //   title: <FormattedMessage id="Companies" />,
  type: "group",
  icon: icons.statistics,
  children: [
    {
      id: "Registration",
      title: <FormattedMessage id="Registration" />,
      type: "collapse",
      icon: icons.statistics,
      children: [
        {
          id: "customer-card",
          title: <FormattedMessage id="Registration Requests" />,
          type: "item",
          url: "/Admin/Registration",
        },
        {
          id: "customer-card",
          title: <FormattedMessage id="Pre Registration" />,
          type: "item",
          url: "/Admin/PreRegistration",
        },
      ],
    },
  ],
};

export default managerRegistration;
