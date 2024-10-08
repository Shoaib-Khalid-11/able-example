import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Edit, Image, More, ProfileDelete } from 'iconsax-react';
import { useState } from 'react';
import CompanyTrialDate from './CompanyTrialDate';
import { Link } from 'react-router-dom';
import { setListCompanyName } from 'store/features/ManagerDashboard/managerDashboardSlice';
import { useDispatch } from 'react-redux';
const CompanyActions = ({ data }: { data: any }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCompanyName = () => {
        dispatch(setListCompanyName(data.name));
    };
    return (
        <>
            <IconButton color="default" size="medium" onClick={handleClick}>
                <More />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <CompanyTrialDate />
                <MenuItem component={Link} to={`/Admin/Company/${data.company_id}`} onClick={handleCompanyName}>
                    <ListItemIcon>
                        <Edit />
                    </ListItemIcon>{' '}
                    Edit Company
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ProfileDelete />
                    </ListItemIcon>{' '}
                    Delete Company
                </MenuItem>
                <MenuItem component={Link} to={`/Admin/GetCompanyEmalAlerts/${data.company_id}`}>
                    <ListItemIcon>
                        <Image />
                    </ListItemIcon>{' '}
                    Email Alert
                </MenuItem>
            </Menu>
        </>
    );
};

export default CompanyActions;
