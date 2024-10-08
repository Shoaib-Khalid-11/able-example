import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    ListItemIcon,
    MenuItem,
    Stack
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { PopupTransition } from 'components/@extended/Transitions';
import MainCard from 'components/MainCard';
import { format } from 'date-fns';
import { Formik } from 'formik';
import { Calendar } from 'iconsax-react';
import { useState } from 'react';
import * as Yup from 'yup';

const CompanyTrialDate = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <MenuItem onClick={handleClickOpen}>
                <ListItemIcon>
                    <Calendar />
                </ListItemIcon>{' '}
                Trial Date
            </MenuItem>
            <Dialog
                open={open}
                TransitionComponent={PopupTransition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText>
                        <MainCard>
                            <Formik
                                initialValues={{
                                    start_date: new Date(),
                                    end_date: new Date(),
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
                                    const newDates = {
                                        start_date: format(new Date(values.start_date), 'MM/dd/yyyy'),
                                        end_date: format(new Date(values.end_date), 'MM/dd/yyyy')
                                    };
                                    console.log(newDates);
                                    resetForm();
                                }}
                            >
                                {({
                                    errors,
                                    handleSubmit,
                                    isSubmitting,
                                    touched,
                                    values,
                                    isValid,
                                    setFieldValue,
                                    dirty
                                }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="date">Start Date*</InputLabel>
                                                    <FormControl
                                                        sx={{ width: '100%' }}
                                                        error={Boolean(touched.start_date && errors.start_date)}
                                                    >
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DesktopDatePicker
                                                                format="dd/MM/yyyy"
                                                                value={values.start_date}
                                                                onChange={(newValue) =>
                                                                    setFieldValue('start_date', newValue)
                                                                }
                                                            />
                                                        </LocalizationProvider>
                                                    </FormControl>
                                                </Stack>
                                                {touched.start_date && errors.start_date && (
                                                    <FormHelperText error={true}>
                                                        {errors.start_date as string}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor="lastname-signup">End Date*</InputLabel>
                                                    <FormControl
                                                        sx={{ width: '100%' }}
                                                        error={Boolean(touched.end_date && errors.end_date)}
                                                    >
                                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                            <DesktopDatePicker
                                                                format="dd/MM/yyyy"
                                                                value={values.end_date}
                                                                onChange={(newValue) =>
                                                                    setFieldValue('end_date', newValue)
                                                                }
                                                            />
                                                        </LocalizationProvider>
                                                    </FormControl>
                                                </Stack>
                                                {touched.end_date && errors.end_date && (
                                                    <FormHelperText error={true}>
                                                        {errors.end_date as string}
                                                    </FormHelperText>
                                                )}
                                            </Grid>
                                            {errors.submit && (
                                                <Grid item xs={12}>
                                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                                </Grid>
                                            )}
                                            <Grid item xs={6}>
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
                                            </Grid>
                                            <Grid item xs={6}>
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
                                            </Grid>
                                        </Grid>
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

export default CompanyTrialDate;
