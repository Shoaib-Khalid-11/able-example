import { Checkbox } from '@mui/material';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from '@mui/material';
import MainCard from 'components/MainCard';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { managerDashboardSelector } from 'store/features/ManagerDashboard/managerDashboardSlice';
import * as Yup from 'yup';
const CompanyEdit = () => {
    const { listCompanyName } = useSelector(managerDashboardSelector);
    return (
        <>
            <MainCard>
                <Box p={2}>
                    <Typography variant="h4" color="secondary">
                        Company Information
                    </Typography>
                </Box>
                <Divider />
                <Stack justifyContent={'flex-end'} direction={'row'} p={2}>
                    <Box>
                        <Button
                            component={Link}
                            to={`/Admin/CompanySettings/${listCompanyName}`}
                            variant="contained"
                            color="primary"
                        >
                            Configration
                        </Button>
                    </Box>
                </Stack>
                <Formik
                    initialValues={{
                        companyName: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        contactCenter: '',
                        tags: '',
                        autoBilling: true,
                        companyLogo: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        companyName: Yup.string().required('Company Name is required'),
                        contactCenter: Yup.string().required('Contact Center is required')
                    })}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleSubmit, touched, values, handleBlur, handleChange, isValid, dirty }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4">Personal/Company Information</Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Stack spacing={1}>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="companyName">Company Name</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.companyName && errors.companyName)}
                                                >
                                                    <OutlinedInput
                                                        id="companyName"
                                                        type="text"
                                                        value={values.companyName}
                                                        name="companyName"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter Company Name"
                                                        fullWidth
                                                        error={Boolean(touched.companyName && errors.companyName)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.companyName && errors.companyName && (
                                                <FormHelperText error>{errors.companyName}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.firstName && errors.firstName)}
                                                >
                                                    <OutlinedInput
                                                        id="firstName"
                                                        type="text"
                                                        disabled
                                                        value={values.firstName}
                                                        name="firstName"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter First Name"
                                                        fullWidth
                                                        error={Boolean(touched.firstName && errors.firstName)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.firstName && errors.firstName && (
                                                <FormHelperText error>{errors.firstName}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.lastName && errors.lastName)}
                                                >
                                                    <OutlinedInput
                                                        id="lastName"
                                                        type="text"
                                                        disabled
                                                        value={values.lastName}
                                                        name="lastName"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter Last Name"
                                                        fullWidth
                                                        error={Boolean(touched.lastName && errors.lastName)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.lastName && errors.lastName && (
                                                <FormHelperText error>{errors.lastName}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="companyLogo">Company Logo</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.companyLogo && errors.companyLogo)}
                                                >
                                                    <OutlinedInput
                                                        id="companyLogo"
                                                        type="file"
                                                        value={values.companyLogo}
                                                        name="companyLogo"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter Company Logo"
                                                        fullWidth
                                                        error={Boolean(touched.companyLogo && errors.companyLogo)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.companyLogo && errors.companyLogo && (
                                                <FormHelperText error>{errors.companyLogo}</FormHelperText>
                                            )}
                                        </Grid>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4">User Information</Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Stack spacing={1}>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="email">Email</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.email && errors.email)}
                                                >
                                                    <OutlinedInput
                                                        id="email"
                                                        type="email"
                                                        disabled
                                                        value={values.email}
                                                        name="email"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter Email"
                                                        fullWidth
                                                        error={Boolean(touched.email && errors.email)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.email && errors.email && (
                                                <FormHelperText error>{errors.email}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="contactCenter">Contact Center</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.contactCenter && errors.contactCenter)}
                                                >
                                                    <Select
                                                        id="contactCenter"
                                                        value={values.contactCenter}
                                                        onChange={handleChange}
                                                        name="contactCenter"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(touched.contactCenter && errors.contactCenter)}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.contactCenter && errors.contactCenter && (
                                                <FormHelperText error>{errors.contactCenter}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="tags">Tags</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.tags && errors.tags)}
                                                >
                                                    <Select
                                                        id="tags"
                                                        value={values.tags}
                                                        onChange={handleChange}
                                                        name="tags"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(touched.tags && errors.tags)}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.tags && errors.tags && (
                                                <FormHelperText error>{errors.tags}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.autoBilling && errors.autoBilling)}
                                                >
                                                    <FormControlLabel
                                                        value={values.autoBilling}
                                                        control={
                                                            <Checkbox
                                                                id="autoBilling"
                                                                value={values.autoBilling}
                                                                onChange={handleChange}
                                                                name="autoBilling"
                                                            />
                                                        }
                                                        label="NIC Auto Billing"
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.autoBilling && errors.autoBilling && (
                                                <FormHelperText error>{errors.autoBilling}</FormHelperText>
                                            )}
                                        </Grid>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack
                                        direction={'row'}
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Box>
                                            <Button
                                                disableElevation
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                color="primary"
                                            >
                                                View Credentials
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button
                                                disableElevation
                                                disabled={!isValid || !dirty}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Save
                                            </Button>
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </MainCard>
        </>
    );
};

export default CompanyEdit;
