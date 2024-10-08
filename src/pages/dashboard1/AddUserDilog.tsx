import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useCreateUser } from 'api/user';

const AddUserDilog = () => {
    const { trigger, isMutating } = useCreateUser();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAlertOpen = () => {
        enqueueSnackbar('Do you want to submit a new ticket?', {
            variant: 'default',
            persist: true,
            action: (
                <Box display={'flex'} gap={2} justifyContent={'flex-end'}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ float: 'right' }}
                        onClick={() => formik.handleSubmit()}
                    >
                        Yes
                    </Button>
                    <Button variant="contained" color="error" sx={{ float: 'right' }} onClick={handleClose}>
                        No
                    </Button>
                </Box>
            ),
            anchorOrigin: {
                horizontal: 'right',
                vertical: 'top'
            }
        });
    };
    const handleClose = () => {
        formik.resetForm();
        closeSnackbar();
        setOpen(false);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            age: 0,
            gender: 'Male'
        },

        onSubmit: async (values) => {
            try {
                console.log(values);
                await trigger({ name: values.name, email: values.email, age: values.age, gender: values.gender });
                formik.resetForm();
                handleClose();
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Add User
            </Button>
            <Dialog
                open={open}
                TransitionComponent={PopupTransition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{ p: 1, py: 1.5 }}>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <form noValidate>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="name">
                                                Name{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <OutlinedInput
                                                id="name"
                                                type="text"
                                                value={formik.values.name ?? ''}
                                                name="name"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                placeholder="Enter Name..."
                                                fullWidth
                                                error={Boolean(formik.touched.name && formik.errors.name)}
                                            />
                                        </Stack>
                                        {/* {formik.touched.name && formik.errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-name-ticket">
                                                {formik.errors.name}
                                            </FormHelperText>
                                        )} */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email">
                                                Email{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <OutlinedInput
                                                id="email"
                                                type="email"
                                                value={formik.values.email ?? ''}
                                                name="email"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                placeholder="Enter Email..."
                                                fullWidth
                                                error={Boolean(formik.touched.email && formik.errors.email)}
                                            />
                                        </Stack>
                                        {/* {formik.touched.email && formik.errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email-ticket">
                                                {formik.errors.email}
                                            </FormHelperText>
                                        )} */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="age">
                                                Age{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <OutlinedInput
                                                id="age"
                                                type="number"
                                                value={formik.values.age ?? ''}
                                                name="age"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                placeholder="Enter Age..."
                                                fullWidth
                                                error={Boolean(formik.touched.age && formik.errors.age)}
                                            />
                                        </Stack>
                                        {/* {formik.touched.age && formik.errors.age && (
                                            <FormHelperText error id="standard-weight-helper-text-age-ticket">
                                                {formik.errors.age}
                                            </FormHelperText>
                                        )} */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="gender">
                                                Gender{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <FormControl fullWidth>
                                                <Select
                                                    displayEmpty
                                                    labelId="gender"
                                                    value={formik.values.gender ?? ''}
                                                    onChange={formik.handleChange}
                                                    name="gender"
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    error={Boolean(formik.touched.gender && formik.errors.gender)}
                                                >
                                                    <MenuItem value="Male">Male</MenuItem>
                                                    <MenuItem value="Female">Female</MenuItem>
                                                    <MenuItem value="Other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
                                        {/* {formik.touched.gender && formik.errors.gender && (
                                            <FormHelperText error id="standard-weight-helper-text-gender-ticket">
                                                {formik.errors.gender}
                                            </FormHelperText>
                                        )} */}
                                    </Grid>

                                    {/* {formik.errors.submit && (
                                        <Grid item xs={12}>
                                            <FormHelperText error>{formik.errors.submit}</FormHelperText>
                                        </Grid>
                                    )} */}
                                </Grid>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={
                                formik.isSubmitting || !formik.isValid || !formik.dirty || !formik.touched || isMutating
                            }
                            variant="contained"
                            onClick={handleAlertOpen}
                        >
                            {isMutating ? 'Submitting...' : 'Submit'}
                        </Button>
                        <Button color="secondary" variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
};

export default AddUserDilog;
