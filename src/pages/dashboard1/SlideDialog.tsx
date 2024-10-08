import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

const SlideDialog = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    // const [alertOpen, setAlertOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        formik.resetForm();
        closeSnackbar();
        setOpen(false);
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
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            device: '',
            submit: null
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().max(255).required('Title is required'),
            description: Yup.string().max(255).required('Detail is required'),
            device: Yup.string().max(255).required('Device is required')
        }),
        onSubmit: (values) => {
            formik.resetForm();
            handleClose();
        }
    });
    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Support
            </Button>
            <Dialog
                open={open}
                TransitionComponent={PopupTransition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box sx={{ p: 1, py: 1.5 }}>
                    <DialogTitle>Add Ticket</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {/* <Formik
                initialValues={{
                  title: "",
                  description: "",
                  device: "",
                  submit: null,
                }}
                validationSchema={Yup.object().shape({
                  title: Yup.string().max(255).required("Title is required"),
                  description: Yup.string()
                    .max(255)
                    .required("Description is required"),
                  device: Yup.string().max(255).required("Device is required"),
                  //   device: Yup.string()
                  //     .required("Please select an option")
                  //     .test(
                  //       "select-option",
                  //       "Please select an option",
                  //       (value) => value !== ""
                  //     ),
                })}
                onSubmit={() => {}}
              > */}
                            {/* {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => ( */}
                            <form noValidate>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="title">
                                                Title{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <OutlinedInput
                                                id="title"
                                                type="text"
                                                value={formik.values.title ?? ''}
                                                name="title"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                placeholder="Enter Title..."
                                                fullWidth
                                                error={Boolean(formik.touched.title && formik.errors.title)}
                                            />
                                        </Stack>
                                        {formik.touched.title && formik.errors.title && (
                                            <FormHelperText error id="standard-weight-helper-text-title-ticket">
                                                {formik.errors.title}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="device-type">
                                                Device Type
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <FormControl fullWidth>
                                                <Select
                                                    error={Boolean(formik.touched.device && formik.errors.device)}
                                                    name="device"
                                                    displayEmpty
                                                    labelId="device-type"
                                                    id="device-type-select"
                                                    value={formik.values.device ?? ''}
                                                    placeholder="-- Plese choose an option --"
                                                    onChange={formik.handleChange}
                                                >
                                                    {/* <MenuItem
                        disabled
                        value=""
                        sx={{ color: "text.secondary" }}
                      >
                        -- Plese choose an option --
                      </MenuItem> */}
                                                    <MenuItem value={'android'}>Android</MenuItem>
                                                    <MenuItem value={'ios'}>IOS</MenuItem>
                                                    <MenuItem value={'web'}>Web</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
                                        {formik.touched.device && formik.errors.device && (
                                            <FormHelperText error id="standard-weight-helper-text-device-ticket">
                                                {formik.errors.device}
                                            </FormHelperText>
                                        )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="description">
                                                Detail{' '}
                                                <Typography variant="caption" color="error">
                                                    *
                                                </Typography>
                                            </InputLabel>
                                            <OutlinedInput
                                                id="description"
                                                type="text"
                                                multiline
                                                rows={5}
                                                value={formik.values.description ?? ''}
                                                name="description"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                placeholder="Enter email address"
                                                fullWidth
                                                error={Boolean(formik.touched.description && formik.errors.description)}
                                            />
                                        </Stack>
                                        {formik.touched.description && formik.errors.description && (
                                            <FormHelperText error id="standard-weight-helper-text-description-ticket">
                                                {formik.errors.description}
                                            </FormHelperText>
                                        )}
                                    </Grid>

                                    {formik.errors.submit && (
                                        <Grid item xs={12}>
                                            <FormHelperText error>{formik.errors.submit}</FormHelperText>
                                        </Grid>
                                    )}
                                </Grid>
                            </form>
                            {/* )} */}
                            {/* </Formik> */}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            disabled={!formik.isValid || !formik.dirty}
                            onClick={handleAlertOpen}
                        >
                            Save
                        </Button>
                        <Button color="secondary" variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Box>
                {/* <Collapse in={alertOpen}>
          <Alert
            color="success"
            variant="filled"
            severity="success"
            icon={<TickSquare />}
            action={
              <IconButton
                aria-label="close"
                size="large"
                onClick={() => {
                  setAlertOpen(false);
                }}
              >
                <CloseCircle fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Save Ticket</AlertTitle>
            <Typography variant="h3" textAlign={"center"}>
              Do you want to submit a new ticket?
            </Typography>
            <Box display={"flex"} gap={2} justifyContent={"flex-end"} mt={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{ float: "right" }}
                onClick={() => formik.handleSubmit()}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ float: "right" }}
                onClick={() => handleClose()}
              >
                No
              </Button>
            </Box>
          </Alert>
        </Collapse> */}
            </Dialog>
        </>
    );
};

export default SlideDialog;
