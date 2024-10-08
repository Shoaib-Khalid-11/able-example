import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography
} from '@mui/material';
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
const AutoBillingReport = () => {
    const date = format(new Date('2022-01-01'), 'MM/dd/yyyy');
    const data = [] || [];
    const columns = useMemo<ColumnDef<TabledataProps1>[]>(
        () => [
            {
                header: 'Company',
                accessorKey: 'company'
            },
            {
                header: 'Click To Dial',
                accessorKey: 'click_to_dial'
            },
            {
                header: 'Maximum BillAble',
                accessorKey: 'maximum_billable'
            },
            {
                header: 'Minimum',
                accessorKey: 'minimum'
            },
            {
                header: 'Active Users',
                accessorKey: 'active_users'
            },
            {
                header: 'Minimum Set',
                accessorKey: 'minimum_set'
            },
            {
                header: 'Switch Managers',
                accessorKey: 'switch_managers'
            },
            {
                header: 'Details',
                accessorKey: 'details'
            },

            ...Array.from(Array(18)).map((_, index) => ({
                header: `June ${index + 1}`,
                accessorKey: `june-${index + 1}`
            }))
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
                        NIC Auto Billing Report
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} p={2}>
                    <Stack direction={'row'} spacing={2}>
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
                </Stack>
                <Stack direction={'row'} justifyContent={'flex-end'} spacing={2} p={2}>
                    <Box>
                        <Button variant="contained" color="primary">
                            Generate Report
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary">
                            Export To Excel
                        </Button>
                    </Box>
                </Stack>
                <ScrollX>
                    <ReactTable {...{ data, columns }} />
                </ScrollX>
            </MainCard>
        </>
    );
};

export default AutoBillingReport;
