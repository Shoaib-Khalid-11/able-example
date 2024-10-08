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
import { useParams } from 'react-router';
import * as Yup from 'yup';
const CompanySettings = () => {
    const { company_name } = useParams();
    return (
        <>
            <MainCard>
                <Box p={2}>
                    <Typography variant="h4" color="secondary">
                        Company Settings - {company_name}
                    </Typography>
                </Box>
                <Divider />
                <Stack justifyContent={'flex-end'} direction={'row'} p={2} spacing={2}>
                    <Box>
                        <Button variant="contained" color="primary">
                            View Company Info
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary">
                            Disable UAT Features
                        </Button>
                    </Box>
                </Stack>
                <Formik
                    initialValues={{
                        loginAPI: '',
                        minimumUser: '',
                        screenPop: '',
                        updatePopup: '',
                        newVersion: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({})}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleSubmit, touched, values, handleBlur, handleChange, isValid, dirty }) => (
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h4">Ternio Switch</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="loginAPI">Login API base URL</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.loginAPI && errors.loginAPI)}
                                                >
                                                    <OutlinedInput
                                                        id="loginAPI"
                                                        type="text"
                                                        value={values.loginAPI}
                                                        name="loginAPI"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter Company Name"
                                                        fullWidth
                                                        error={Boolean(touched.loginAPI && errors.loginAPI)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.loginAPI && errors.loginAPI && (
                                                <FormHelperText error>{errors.loginAPI}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="minimumUser">Minimun User Count</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.minimumUser && errors.minimumUser)}
                                                >
                                                    <OutlinedInput
                                                        id="minimumUser"
                                                        type="text"
                                                        disabled
                                                        value={values.minimumUser}
                                                        name="minimumUser"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter First Name"
                                                        fullWidth
                                                        error={Boolean(touched.minimumUser && errors.minimumUser)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.minimumUser && errors.minimumUser && (
                                                <FormHelperText error>{errors.minimumUser}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="screenPop">Screen Pop</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.screenPop && errors.screenPop)}
                                                >
                                                    <Select
                                                        id="screenPop"
                                                        value={values.screenPop}
                                                        onChange={handleChange}
                                                        name="screenPop"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(touched.screenPop && errors.screenPop)}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.screenPop && errors.screenPop && (
                                                <FormHelperText error>{errors.screenPop}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.updatePopup && errors.updatePopup)}
                                                >
                                                    <FormControlLabel
                                                        value={values.updatePopup}
                                                        control={
                                                            <Checkbox
                                                                id="updatePopup"
                                                                value={values.updatePopup}
                                                                onChange={handleChange}
                                                                name="updatePopup"
                                                            />
                                                        }
                                                        label="Show Update Popup"
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.updatePopup && errors.updatePopup && (
                                                <FormHelperText error>{errors.updatePopup}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.newVersion && errors.newVersion)}
                                                >
                                                    <FormControlLabel
                                                        value={values.newVersion}
                                                        control={
                                                            <Checkbox
                                                                id="newVersion"
                                                                value={values.newVersion}
                                                                onChange={handleChange}
                                                                name="newVersion"
                                                            />
                                                        }
                                                        label="Push New Version"
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.newVersion && errors.newVersion && (
                                                <FormHelperText error>{errors.newVersion}</FormHelperText>
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

export default CompanySettings;
