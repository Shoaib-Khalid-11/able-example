import {
    Autocomplete,
    Box,
    Button,
    Divider,
    FormControl,
    IconButton,
    InputLabel,
    Stack,
    Switch,
    TextField,
    Tooltip,
    Typography,
    Zoom
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ColumnDef } from '@tanstack/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { DebouncedInput } from 'components/third-party/react-table';
import { Field, Formik } from 'formik';
import { Add, Edit, Lock1, Tag, Trash } from 'iconsax-react';
import { closeSnackbar, enqueueSnackbar } from 'notistack';
import ReactTable from 'pages/components/reacttable1/ReactTable';
import { useMemo, useState } from 'react';

interface TableDataProps {
    id: number;
    date: string;
    company: string;
    tag_id: number;
    name: string;
    status: boolean;
    actions: {
        action1: boolean;
    };
}
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 }
];
const ManagerLogs = () => {
    const [data, setData] = useState(
        [...Array(90)].map((_, index) => ({
            id: index,
            date: index,
            company: 'Demo.dev ' + (index + 1) * 2,
            email: 'Demo.dev ' + (index + 1) * 2,
            status: false
        }))
    );
    const handleActive = (id: number) => {
        setData((prevs) =>
            prevs.map((item) => {
                if (item.id === id) {
                    return { ...item, status: !item.status };
                }
                return item;
            })
        );
    };
    const handleReactive = () => {
        enqueueSnackbar('Do you want to delete this tag?', {
            variant: 'default',
            preventDuplicate: true,
            persist: true,
            action: (
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="secondary" sx={{ float: 'right' }}>
                        Yes
                    </Button>
                    <Button variant="contained" color="error" sx={{ float: 'right' }} onClick={() => closeSnackbar()}>
                        No
                    </Button>
                </Stack>
            ),
            anchorOrigin: {
                horizontal: 'right',
                vertical: 'top'
            }
        });
    };
    const columns = useMemo<ColumnDef<TableDataProps>[]>(
        () => [
            {
                header: 'Id',
                accessorKey: 'id'
            },
            {
                header: 'Device Id',
                accessorKey: 'device_id'
            },
            {
                header: 'Guid',
                accessorKey: 'guid'
            },
            {
                header: 'Email',
                accessorKey: 'email'
            },
            {
                header: 'Created Data (Local)',
                accessorKey: 'created_at_local'
            },
            {
                header: 'Created Data (UTC)',
                accessorKey: 'created_at_utc'
            },
            {
                header: 'Type',
                accessorKey: 'type'
            },
            {
                header: 'Data Logs',
                accessorKey: 'data_logs'
            },
            {
                header: 'Details',
                accessorKey: 'details'
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
                        Company Logs
                    </Typography>
                </Box>
                <Divider />
                <Formik
                    initialValues={{
                        company: '',
                        user: '',
                        date: new Date(),
                        endDate: new Date(),
                        submit: null
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleSubmit, isSubmitting, touched, values, isValid, setFieldValue, dirty }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Stack
                                direction={'row'}
                                spacing={2}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                p={2}
                            >
                                <Stack direction={'row'} spacing={6}>
                                    <Stack spacing={1}>
                                        <InputLabel>Select a Company</InputLabel>

                                        <Autocomplete
                                            onChange={(event, newValue) => {
                                                setFieldValue('company', newValue?.label || '');
                                            }}
                                            options={top100Films}
                                            getOptionLabel={(option: { label: string }) => option.label}
                                            renderInput={(params) => <TextField {...params} />}
                                            sx={{ width: 200 }}
                                        />
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel>Select a User</InputLabel>

                                        <Autocomplete
                                            onChange={(event, value) => {
                                                setFieldValue('user', value?.label || '');
                                            }}
                                            options={top100Films}
                                            getOptionLabel={(option: { label: string }) => option.label}
                                            renderInput={(params) => <TextField {...params} />}
                                            sx={{ width: 200 }}
                                        />
                                    </Stack>
                                </Stack>

                                <Stack direction={'row'} spacing={6} p={2}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="date">Start Date</InputLabel>
                                        <FormControl sx={{ width: '100%' }} error={Boolean(touched && errors)}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DesktopDatePicker
                                                    format="dd/MM/yyyy"
                                                    value={values.date}
                                                    onChange={(newValue) => setFieldValue('date', newValue)}
                                                />
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="date">End Date</InputLabel>
                                        <FormControl sx={{ width: '100%' }} error={Boolean(touched && errors)}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DesktopDatePicker
                                                    format="dd/MM/yyyy"
                                                    value={values.endDate}
                                                    onChange={(newValue) => setFieldValue('endDate', newValue)}
                                                />
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Stack>
                                </Stack>

                                <Stack direction={'row'} spacing={2} p={2}>
                                    <Button variant="contained" type="submit" disabled={!isValid || !dirty}>
                                        Get Logs
                                    </Button>
                                    <Button variant="contained">Download Logs</Button>
                                </Stack>
                            </Stack>
                        </form>
                    )}
                </Formik>
                <ScrollX>
                    <ReactTable {...{ data, columns }} />
                </ScrollX>
            </MainCard>
        </>
    );
};

export default ManagerLogs;
