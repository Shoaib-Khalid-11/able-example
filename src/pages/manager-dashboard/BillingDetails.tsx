import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { useMemo, useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import ReactTable from 'pages/components/reacttable1/ReactTable';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
interface TabledataProps1 {
    company_name: string;
    business_unit_no: string;
    users: string;
}
const BillingDetails = () => {
    const [billingData, setBillingData] = useState(false);
    const [billingError, setBillingError] = useState(false);
    const date = format(new Date('2022-01-01'), 'MM/dd/yyyy');
    const data =
        [
            {
                company_name: 'Company Name 1',
                business_unit_no: 'Business Unit No 1',
                users: '10'
            }
        ] || [];
    const data1 =
        [
            {
                id: '1',
                company_name: 'Company Name 1',
                error_message: 'Error Message 1'
            }
        ] || [];
    const columns = useMemo<ColumnDef<TabledataProps1>[]>(
        () => [
            {
                header: 'Company Name',
                accessorKey: 'company_name'
            },
            {
                header: 'Business Unit No',
                accessorKey: 'business_unit_no'
            },
            {
                header: 'Users',
                accessorKey: 'users'
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const columns1 = useMemo<ColumnDef<TabledataProps1>[]>(
        () => [
            {
                header: 'Id',
                accessorKey: 'id'
            },
            {
                header: 'Company Name',
                accessorKey: 'company_name'
            },
            {
                header: 'Error Message',
                accessorKey: 'error_message'
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <>
            <MainCard content={false}>
                <Box p={2}>
                    <Typography variant="h4" pb={0}>
                        Billing Details
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Stack direction={'row'} spacing={2} p={2}>
                    <Button variant="contained" sx={{ float: 'right' }} onClick={() => setBillingData(!billingData)}>
                        View Billing Data
                    </Button>
                    <Button variant="contained" sx={{ float: 'right' }} onClick={() => setBillingError(!billingError)}>
                        View Billing Errors
                    </Button>
                </Stack>
                {billingData && (
                    <ScrollX>
                        <ReactTable {...{ data, columns }} />
                    </ScrollX>
                )}
                {billingError && (
                    <>
                        <Box p={2}>
                            <Typography variant="h3" color={'error'}>
                                Some Issue Found In Billing
                            </Typography>
                        </Box>
                        <ScrollX>
                            <ReactTable {...{ data: data1, columns: columns1 }} />
                        </ScrollX>
                    </>
                )}
            </MainCard>
        </>
    );
};

export default BillingDetails;
