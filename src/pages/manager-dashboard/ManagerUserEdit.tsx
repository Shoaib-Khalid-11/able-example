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
import * as Yup from 'yup';
const ManagerUserEdit = () => {
    return (
        <>
            <MainCard>
                <Box p={2}>
                    <Typography variant="h4" color="secondary">
                        User Information
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        backGroundService: '',
                        userType: '',
                        company: '',
                        password: '',
                        confirmPassword: '',
                        notBillAble: false,
                        debugMode: false,
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({})}
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
                                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.firstName && errors.firstName)}
                                                >
                                                    <OutlinedInput
                                                        id="firstName"
                                                        type="text"
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
                                                <InputLabel htmlFor="backGroundService">Background Service</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(
                                                        touched.backGroundService && errors.backGroundService
                                                    )}
                                                >
                                                    <Select
                                                        id="backGroundService"
                                                        value={values.backGroundService}
                                                        onChange={handleChange}
                                                        name="backGroundService"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(
                                                            touched.backGroundService && errors.backGroundService
                                                        )}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.backGroundService && errors.backGroundService && (
                                                <FormHelperText error>{errors.backGroundService}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.debugMode && errors.debugMode)}
                                                >
                                                    <FormControlLabel
                                                        value={values.debugMode}
                                                        control={
                                                            <Checkbox
                                                                id="debugMode"
                                                                value={values.debugMode}
                                                                onChange={handleChange}
                                                                name="debugMode"
                                                            />
                                                        }
                                                        label="Debug Mode"
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.debugMode && errors.debugMode && (
                                                <FormHelperText error>{errors.debugMode}</FormHelperText>
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
                                                <InputLabel htmlFor="userType">userType</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.userType && errors.userType)}
                                                >
                                                    <Select
                                                        id="userType"
                                                        value={values.userType}
                                                        onChange={handleChange}
                                                        name="userType"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(touched.userType && errors.userType)}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.userType && errors.userType && (
                                                <FormHelperText error>{errors.userType}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="company">Company</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.company && errors.company)}
                                                >
                                                    <Select
                                                        id="company"
                                                        value={values.company}
                                                        onChange={handleChange}
                                                        name="company"
                                                        onBlur={handleBlur}
                                                        placeholder="Enter Contact Center"
                                                        fullWidth
                                                        error={Boolean(touched.company && errors.company)}
                                                    >
                                                        <MenuItem value="Email">Email</MenuItem>
                                                        <MenuItem value="Phone">Phone</MenuItem>
                                                        <MenuItem value="Chat">Chat</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            {touched.company && errors.company && (
                                                <FormHelperText error>{errors.company}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.password && errors.password)}
                                                >
                                                    <OutlinedInput
                                                        id="password"
                                                        type="password"
                                                        value={values.password}
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter First Name"
                                                        fullWidth
                                                        error={Boolean(touched.password && errors.password)}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.password && errors.password && (
                                                <FormHelperText error>{errors.password}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                                >
                                                    <OutlinedInput
                                                        id="confirmPassword"
                                                        type="password"
                                                        value={values.confirmPassword}
                                                        name="confirmPassword"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        fullWidth
                                                        error={Boolean(
                                                            touched.confirmPassword && errors.confirmPassword
                                                        )}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.confirmPassword && errors.confirmPassword && (
                                                <FormHelperText error>{errors.confirmPassword}</FormHelperText>
                                            )}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <FormControl
                                                    sx={{ width: '100%' }}
                                                    error={Boolean(touched.notBillAble && errors.notBillAble)}
                                                >
                                                    <FormControlLabel
                                                        value={values.notBillAble}
                                                        control={
                                                            <Checkbox
                                                                id="notBillAble"
                                                                value={values.notBillAble}
                                                                onChange={handleChange}
                                                                name="notBillAble"
                                                            />
                                                        }
                                                        label="Not Billable"
                                                    />
                                                </FormControl>
                                            </Stack>
                                            {touched.notBillAble && errors.notBillAble && (
                                                <FormHelperText error>{errors.notBillAble}</FormHelperText>
                                            )}
                                        </Grid>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
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
                                                Save User
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

export default ManagerUserEdit;
