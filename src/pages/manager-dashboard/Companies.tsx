import { Box, Button, Divider, IconButton, Stack, Switch, Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { More } from 'iconsax-react';
import { useSnackbar } from 'notistack';
import ReactTable from 'pages/components/reacttable1/ReactTable';
import { useMemo, useState } from 'react';
import CompanyActions from './subcomponents/CompanyActions';
interface TableDataProps {
    company_id: number;
    bu_no: string;
    name: string;
    registered: string;
    uat_accepted: string;
    contract_end_date: string;
    active: string;
    live: boolean;
    send_activation_mail: string;
    action: string;
}
const Companies = () => {
    // const theme = useTheme();
    const [data, setData] = useState(
        [...Array(10)].map((_, index) => ({
            company_id: index + 1,
            name: 'Demo.dev ' + (index + 1) * 2,
            registered: 'Demo.dev ' + (index + 1) * 3,
            uat_accepted: 'Demo.dev ' + (index + 1) * 4,
            contract_end_date: 'Demo.dev ' + (index + 1) * 5,
            active: 'Demo.dev ' + (index + 1) * 6,
            live: false
        }))
    );

    const handelChange = (id: number) => {
        setData((prevs) =>
            prevs.map((item) => {
                if (item.company_id === id) {
                    return { ...item, live: !item.live };
                }
                return item;
            })
        );
    };
    const columns = useMemo<ColumnDef<TableDataProps>[]>(
        () => [
            {
                header: 'Company Id',
                accessorKey: 'company_id'
            },
            {
                header: 'BU No',
                accessorKey: 'bu_no'
            },
            {
                header: 'Name',
                accessorKey: 'name'
            },
            {
                header: 'Registered',
                accessorKey: 'registered'
            },
            {
                header: 'UAT Accepted',
                accessorKey: 'uat_accepted'
            },
            {
                header: 'Contract EndDate',
                accessorKey: 'contract_end_date'
            },
            {
                header: 'Active',
                accessorKey: 'active'
            },
            {
                header: 'Live',
                accessorKey: 'live',
                cell(props) {
                    return (
                        <>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Switch
                                    onChange={() => handelChange(props.row.original.company_id)}
                                    defaultChecked={props.row.original.live}
                                />
                                <Typography variant="body1">
                                    {props.row.original.live ? 'Live' : `On Trial (30 Days)`}
                                </Typography>
                            </Stack>
                        </>
                    );
                }
            },
            {
                header: 'Send Activation Mail',
                accessorKey: 'send_activation_mail',
                cell(props) {
                    return (
                        <>
                            {!props.row.original.live && (
                                <Button variant="contained" color="success" size="small" onClick={() => {}}>
                                    Welcome Mail
                                </Button>
                            )}
                        </>
                    );
                }
            },
            {
                header: 'Action',
                accessorKey: 'action',
                cell(props) {
                    return (
                        <>
                            <CompanyActions data={props.row.original} />
                        </>
                    );
                }
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <>
            <MainCard content={false}>
                <Box p={2}>
                    <Typography variant="h4" color="secondary">
                        List of Companies
                    </Typography>
                </Box>
                <Divider />
                <ScrollX>
                    <ReactTable {...{ data, columns }} />
                </ScrollX>
            </MainCard>
        </>
    );
};

export default Companies;
