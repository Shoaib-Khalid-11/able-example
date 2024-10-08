import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const companies: NavItemType = {
  id: "single-companies",
  //   title: <FormattedMessage id="Companies" />,
  type: "group",
  icon: icons.statistics,
  children: [
    {
      id: "customer",
      title: <FormattedMessage id="Companies" />,
      type: "collapse",
      icon: icons.statistics,
      children: [
        {
          id: "customer-card",
          title: <FormattedMessage id="List" />,
          type: "item",
          url: "/Admin/Companies",
        },
        {
          id: "customer-card",
          title: <FormattedMessage id="Disable" />,
          type: "item",
          url: "/Admin/DisabledCompanies",
        },
      ],
    },
  ],
};

export default companies;
