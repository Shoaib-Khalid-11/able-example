import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputLabel,
    OutlinedInput,
    Stack,
    Tooltip,
    Zoom
} from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import MainCard from 'components/MainCard';
import { Formik } from 'formik';
import { Edit } from 'iconsax-react';
import { useState } from 'react';
import * as Yup from 'yup';

const ManagementEdit = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Tooltip title="Edit" arrow TransitionComponent={Zoom}>
                <IconButton size="medium" onClick={handleClickOpen}>
                    <Edit scale={24} />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                TransitionComponent={PopupTransition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle bgcolor={'primary.main'} color={'white'}>
                    Add User
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <MainCard>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    userName: '',
                                    password: '',
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    start_date: Yup.date().required('Invoice date is required'),
                                    end_date: Yup.date()
                                        .when(
                                            'start_date',
                                            (date, schema) =>
                                                date && schema.min(date, "End date can't be before invoice date")
                                        )
                                        // .nullable()
                                        .required('End date is required')
                                })}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values);
                                    resetForm();
                                }}
                            >
                                {({
                                    errors,
                                    handleSubmit,
                                    isSubmitting,
                                    handleBlur,
                                    handleChange,
                                    touched,
                                    values,
                                    isValid,
                                    setFieldValue,
                                    dirty
                                }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <Grid container spacing={1}>
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
                                                            name="LastName"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter First Name"
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
                                                    <InputLabel htmlFor="userName">User Name</InputLabel>
                                                    <FormControl
                                                        sx={{ width: '100%' }}
                                                        error={Boolean(touched.userName && errors.userName)}
                                                    >
                                                        <OutlinedInput
                                                            id="userName"
                                                            type="text"
                                                            value={values.userName}
                                                            name="userName"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter User Name"
                                                            fullWidth
                                                            error={Boolean(touched.userName && errors.userName)}
                                                        />
                                                    </FormControl>
                                                </Stack>
                                                {touched.userName && errors.userName && (
                                                    <FormHelperText error>{errors.userName}</FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="email">Emal</InputLabel>
                                                    <FormControl
                                                        sx={{ width: '100%' }}
                                                        error={Boolean(touched.email && errors.email)}
                                                    >
                                                        <OutlinedInput
                                                            id="email"
                                                            type="email"
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
                                                            placeholder="Enter Password"
                                                            fullWidth
                                                            error={Boolean(touched.password && errors.password)}
                                                        />
                                                    </FormControl>
                                                </Stack>
                                                {touched.password && errors.password && (
                                                    <FormHelperText error>{errors.password}</FormHelperText>
                                                )}
                                            </Grid>
                                            {errors.submit && (
                                                <Grid item xs={12}>
                                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                                </Grid>
                                            )}
                                        </Grid>
                                        <Divider sx={{ my: 2 }} />
                                        <Stack direction="row" justifyContent="flex-end" spacing={2}>
                                            <Box>
                                                <Button
                                                    disableElevation
                                                    disabled={isSubmitting || !isValid || !dirty}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                            <Box>
                                                <Button
                                                    disableElevation
                                                    onClick={handleClose}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    Close
                                                </Button>
                                            </Box>
                                        </Stack>
                                    </form>
                                )}
                            </Formik>
                        </MainCard>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ManagementEdit;
