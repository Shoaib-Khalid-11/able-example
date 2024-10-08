import { FormattedMessage } from "react-intl";
import { NavItemType } from "types/menu";
import { dashboard } from "assets/svgs/icons";
const icons = {
  statistics: dashboard,
};
const managerReports: NavItemType = {
  id: "single-reports",
  //   title: <FormattedMessage id="Companies" />,
  type: "group",
  icon: icons.statistics,
  children: [
    {
      id: "customer",
      title: <FormattedMessage id="Reports" />,
      type: "collapse",
      icon: icons.statistics,
      children: [
        {
          id: "customer-card",
          title: <FormattedMessage id="User Report" />,
          type: "item",
          url: "/Admin/Reporting/UserCount",
        },
        {
          id: "customer-card",
          title: <FormattedMessage id="Auto Billing Report" />,
          type: "item",
          url: "/Admin/Reporting/AutoBilling",
        },
      ],
    },
  ],
};

export default managerReports;
