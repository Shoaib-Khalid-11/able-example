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
const UserReport = () => {
    const [company, setCompany] = useState('');
    const [state, setState] = useState({
        delete: true,
        Five9: false,
        InContact: false
    });
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
    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
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
                    <FormControl sx={{ width: { xs: 100, sm: 260 } }}>
                        <InputLabel id="select-company">Select a Report To Download</InputLabel>
                        <Select
                            displayEmpty
                            labelId="select-company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        >
                            <MenuItem value="CXOne">CXOne Direct Billing</MenuItem>
                            <MenuItem value="Five9">Five9 Direct Billing</MenuItem>
                        </Select>
                    </FormControl>
                    <FormGroup sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <FormControlLabel
                            control={<Checkbox checked={state.delete} onChange={handleChangeCheckBox} name="delete" />}
                            label="Delete"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.Five9} onChange={handleChangeCheckBox} name="Five9" />}
                            label="Five9"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.InContact} onChange={handleChangeCheckBox} name="InContact" />
                            }
                            label="InContact"
                        />
                    </FormGroup>
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

export default UserReport;
