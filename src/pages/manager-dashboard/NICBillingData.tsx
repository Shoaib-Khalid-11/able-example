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
    id: string;
    billing_date: string;
    error_place: string;
    total_bus: string;
    success_bus: string;
    error_bus: string;
    action: string;
}
const NICBillingData = () => {
    const date = format(new Date('2022-01-01'), 'MM/dd/yyyy');
    const data =
        [
            {
                id: '1',
                billing_date: date,
                error_place: 'Error Place 1',
                total_bus: '10',
                success_bus: '5',
                error_bus: '5',
                action: 'View'
            }
        ] || [];
    const columns = useMemo<ColumnDef<TabledataProps1>[]>(
        () => [
            {
                header: 'ID',
                accessorKey: 'id'
            },
            {
                header: 'Billing Date',
                accessorKey: 'billing_date'
            },
            {
                header: 'Error Place',
                accessorKey: 'error_place'
            },
            {
                header: 'Total BUs',
                accessorKey: 'total_bus'
            },
            {
                header: 'Success BUs',
                accessorKey: 'success_bus'
            },
            {
                header: 'Error BUs',
                accessorKey: 'error_bus'
            },
            {
                header: 'Action',
                accessorKey: 'action',
                cell: (props) => {
                    console.log(props.row.original.id);
                    return (
                        <Button
                            component={Link}
                            to={`/Admin/BillingDetails/${props.row.original.id}`}
                            variant="contained"
                        >
                            Detail
                        </Button>
                    );
                }
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const [value, setValue] = useState<Date | null>();

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <>
            <MainCard content={false}>
                <Box p={2}>
                    <Typography variant="h4" pb={0}>
                        NIC Billing Data
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Stack direction={'row'} spacing={2} p={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker format="MM/dd/yyyy" value={value} onChange={handleChange} />
                    </LocalizationProvider>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        px={2}
                        // backgroundColor={theme.palette.primary.main}
                        borderRadius={2}
                    >
                        To
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker format="MM/dd/yyyy" value={value} onChange={handleChange} />
                    </LocalizationProvider>
                    <Button variant="contained" sx={{ float: 'right' }}>
                        Get Data
                    </Button>
                </Stack>

                <ScrollX>
                    <ReactTable {...{ data, columns }} />
                </ScrollX>
            </MainCard>
        </>
    );
};

export default NICBillingData;
