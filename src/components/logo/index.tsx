import { Link } from 'react-router-dom';
import { To } from 'history';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';
import { SxProps } from '@mui/system';

// project-imports
import Logo from './LogoMain';
import LogoIcon from './LogoIcon';
import useAuth from 'hooks/useAuth';
import { APP_ADMIN_DEFAULT_PATH, APP_DEFAULT_PATH } from 'config';
import { useSelector } from 'react-redux';
import { managerDashboardSelector } from 'store/features/ManagerDashboard/managerDashboardSlice';

interface Props {
    isIcon?: boolean;
    sx?: SxProps;
    to?: To;
}

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }: Props) {
    const { managerDashboardLogin } = useSelector(managerDashboardSelector);
    const { isLoggedIn } = useAuth();

    return (
        <ButtonBase
            disableRipple
            {...(isLoggedIn && {
                component: Link,
                to: !to ? (managerDashboardLogin ? APP_ADMIN_DEFAULT_PATH : APP_DEFAULT_PATH) : to,
                sx
            })}
        >
            {isIcon ? <LogoIcon /> : <Logo />}
        </ButtonBase>
    );
}
