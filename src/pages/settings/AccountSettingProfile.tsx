import { useEffect, useState, SyntheticEvent } from "react";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// project-imports
import MainCard from "components/MainCard";
import Breadcrumbs from "components/@extended/Breadcrumbs";
import { APP_DEFAULT_PATH } from "config";

// assets
import {
  DocumentText,
  Lock,
  Profile,
  Profile2User,
  Setting3,
  TableDocument,
} from "iconsax-react";

// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function AccountSettingProfile() {
  const { pathname } = useLocation();
  const navigateTo = useNavigate();
  let selectedTab = 0;
  //   let breadcrumbTitle = "";
  //   let breadcrumbHeading = "";
  switch (pathname) {
    case "/Account/SwitchSetting/personal":
      //   breadcrumbTitle = "Personal";
      //   breadcrumbHeading = "Personal";
      selectedTab = 1;
      break;
    case "/Account/SwitchSetting/my-account":
      //   breadcrumbTitle = "My Account";
      //   breadcrumbHeading = "My Account";
      selectedTab = 2;
      break;
    case "/Account/SwitchSetting/password":
      //   breadcrumbTitle = "Change Password";
      //   breadcrumbHeading = "Change Password";
      selectedTab = 3;
      break;
    case "/Account/SwitchSetting/role":
      //   breadcrumbTitle = "Role";
      //   breadcrumbHeading = "Accountant";
      selectedTab = 4;
      break;
    case "/Account/SwitchSetting/settings":
      //   breadcrumbTitle = "Settings";
      //   breadcrumbHeading = "Account Settings";
      selectedTab = 5;
      break;
    case "/Account/SwitchSetting/settings1":
      //   breadcrumbTitle = "Settings";
      //   breadcrumbHeading = "Account Settings";
      selectedTab = 6;
      break;
    case "/Account/SwitchSetting/basic":
    default:
      //   breadcrumbTitle = "Basic";
      //   breadcrumbHeading = "Basic Account";
      selectedTab = 0;
  }

  const [value, setValue] = useState(selectedTab);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //   let breadcrumbLinks = [
  //     { title: "Home", to: APP_DEFAULT_PATH },
  //     { title: "Settings", to: "/Account/SwitchSetting/basic" },
  //     { title: breadcrumbTitle },
  //   ];
  //   if (selectedTab === 0) {
  //     breadcrumbLinks = [
  //       { title: "Home", to: APP_DEFAULT_PATH },
  //       { title: "Settings" },
  //     ];
  //   }

  useEffect(() => {
    if (pathname === "/Account/SwitchSetting") {
      navigateTo("/Account/SwitchSetting/basic");
    }
    if (pathname === "/Account/SwitchSetting/basic") {
      setValue(0);
    }
  }, [pathname]);

  return (
    <>
      {/* <Breadcrumbs
        custom
        heading={breadcrumbHeading}
        links={breadcrumbLinks}
        title={false}
      /> */}
      <MainCard border={false}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="account profile tab"
          >
            <Tab
              label="Profile"
              component={Link}
              to="/Account/SwitchSetting/basic"
              icon={<Profile />}
              iconPosition="start"
            />
            <Tab
              label="Personal"
              component={Link}
              to="/Account/SwitchSetting/personal"
              icon={<DocumentText />}
              iconPosition="start"
            />
            <Tab
              label="My Account"
              component={Link}
              to="/Account/SwitchSetting/my-account"
              icon={<TableDocument />}
              iconPosition="start"
            />
            <Tab
              label="Change Password"
              component={Link}
              to="/Account/SwitchSetting/password"
              icon={<Lock />}
              iconPosition="start"
            />
            <Tab
              label="Role"
              component={Link}
              to="/Account/SwitchSetting/role"
              icon={<Profile2User />}
              iconPosition="start"
            />
            <Tab
              label="Settings"
              component={Link}
              to="/Account/SwitchSetting/settings"
              icon={<Setting3 />}
              iconPosition="start"
            />
            <Tab
              label="Settings 1"
              component={Link}
              to="/Account/SwitchSetting/settings1"
              icon={<Setting3 />}
              iconPosition="start"
            />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </>
  );
}
