import { useEffect, useState, SyntheticEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

// third-party
import * as Yup from "yup";
import { Formik } from "formik";

// project-imports
import useAuth from "hooks/useAuth";
import useScriptRef from "hooks/useScriptRef";
import IconButton from "components/@extended/IconButton";
import AnimateButton from "components/@extended/AnimateButton";

import { openSnackbar } from "api/snackbar";
import { strengthColor, strengthIndicator } from "utils/password-strength";

// types
import { SnackbarProps } from "types/snackbar";
import { StringColorProps } from "types/password";

// assets
import { Eye, EyeSlash } from "iconsax-react";
import { MenuItem, Select } from "@mui/material";

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const { register } = useAuth();
  const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  const [level, setLevel] = useState<StringColorProps>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          // password: '',
          centerprovider: "",
          reference: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required("First Name is required"),
          lastname: Yup.string().max(255).required("Last Name is required"),
          company: Yup.string().max(255).required("Company Name is required"),
          // centerprovider: Yup.string().max(255).required('Center/Provider Name is required'),
          centerprovider: Yup.string()
            .required("Please select an option")
            .test(
              "select-option",
              "Please select an option",
              (value) => value !== ""
            ),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          // password: Yup.string().max(255).required('Password is required'),
          reference: Yup.string().max(255).required("Reference is required"),
        })}
        onSubmit={() => {}}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          // <form noValidate onSubmit={handleSubmit}>
          //   <Grid container spacing={1}>
          //     <Grid item xs={12} md={6}>
          //       <Stack spacing={1}>
          //         <InputLabel htmlFor="firstname-signup">
          //           First Name*
          //         </InputLabel>
          //         <OutlinedInput
          //           id="firstname-login"
          //           type="firstname"
          //           value={values.firstname}
          //           name="firstname"
          //           onBlur={handleBlur}
          //           onChange={handleChange}
          //           placeholder="John"
          //           fullWidth
          //           error={Boolean(touched.firstname && errors.firstname)}
          //         />
          //       </Stack>
          //       {touched.firstname && errors.firstname && (
          //         <FormHelperText error id="helper-text-firstname-signup">
          //           {errors.firstname}
          //         </FormHelperText>
          //       )}
          //     </Grid>
          //     <Grid item xs={12} md={6}>
          //       <Stack spacing={1}>
          //         <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
          //         <OutlinedInput
          //           fullWidth
          //           error={Boolean(touched.lastname && errors.lastname)}
          //           id="lastname-signup"
          //           type="lastname"
          //           value={values.lastname}
          //           name="lastname"
          //           onBlur={handleBlur}
          //           onChange={handleChange}
          //           placeholder="Doe"
          //           inputProps={{}}
          //         />
          //       </Stack>
          //       {touched.lastname && errors.lastname && (
          //         <FormHelperText error id="helper-text-lastname-signup">
          //           {errors.lastname}
          //         </FormHelperText>
          //       )}
          //     </Grid>
          //     <Grid item xs={12}>
          //       <Stack spacing={1}>
          //         <InputLabel htmlFor="company-signup">Company</InputLabel>
          //         <OutlinedInput
          //           fullWidth
          //           error={Boolean(touched.company && errors.company)}
          //           id="company-signup"
          //           value={values.company}
          //           name="company"
          //           onBlur={handleBlur}
          //           onChange={handleChange}
          //           placeholder="Demo Inc."
          //           inputProps={{}}
          //         />
          //       </Stack>
          //       {touched.company && errors.company && (
          //         <FormHelperText error id="helper-text-company-signup">
          //           {errors.company}
          //         </FormHelperText>
          //       )}
          //     </Grid>
          //     <Grid item xs={12}>
          //       <Stack spacing={1}>
          //         <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
          //         <OutlinedInput
          //           fullWidth
          //           error={Boolean(touched.email && errors.email)}
          //           id="email-login"
          //           type="email"
          //           value={values.email}
          //           name="email"
          //           onBlur={handleBlur}
          //           onChange={handleChange}
          //           placeholder="demo@company.com"
          //           inputProps={{}}
          //         />
          //       </Stack>
          //       {touched.email && errors.email && (
          //         <FormHelperText error id="helper-text-email-signup">
          //           {errors.email}
          //         </FormHelperText>
          //       )}
          //     </Grid>
          //     <Grid item xs={12}>
          //       <Stack spacing={1}>
          //         <InputLabel htmlFor="password-signup">Password</InputLabel>
          //         <OutlinedInput
          //           fullWidth
          //           error={Boolean(touched.password && errors.password)}
          //           id="password-signup"
          //           type={showPassword ? "text" : "password"}
          //           value={values.password}
          //           name="password"
          //           onBlur={handleBlur}
          //           onChange={(e) => {
          //             handleChange(e);
          //             changePassword(e.target.value);
          //           }}
          //           endAdornment={
          //             <InputAdornment position="end">
          //               <IconButton
          //                 aria-label="toggle password visibility"
          //                 onClick={handleClickShowPassword}
          //                 onMouseDown={handleMouseDownPassword}
          //                 edge="end"
          //                 color="secondary"
          //               >
          //                 {showPassword ? <Eye /> : <EyeSlash />}
          //               </IconButton>
          //             </InputAdornment>
          //           }
          //           placeholder="******"
          //           inputProps={{}}
          //         />
          //       </Stack>
          //       {touched.password && errors.password && (
          //         <FormHelperText error id="helper-text-password-signup">
          //           {errors.password}
          //         </FormHelperText>
          //       )}
          //       <FormControl fullWidth sx={{ mt: 2 }}>
          //         <Grid container spacing={2} alignItems="center">
          //           <Grid item>
          //             <Box
          //               sx={{
          //                 bgcolor: level?.color,
          //                 width: 85,
          //                 height: 8,
          //                 borderRadius: "7px",
          //               }}
          //             />
          //           </Grid>
          //           <Grid item>
          //             <Typography variant="subtitle1" fontSize="0.75rem">
          //               {level?.label}
          //             </Typography>
          //           </Grid>
          //         </Grid>
          //       </FormControl>
          //     </Grid>
          //     <Grid item xs={12}>
          //       <Typography variant="body2">
          //         By Signing up, you agree to our &nbsp;
          //         <Link variant="subtitle2" component={RouterLink} to="#">
          //           Terms of Service
          //         </Link>
          //         &nbsp; and &nbsp;
          //         <Link variant="subtitle2" component={RouterLink} to="#">
          //           Privacy Policy
          //         </Link>
          //       </Typography>
          //     </Grid>
          //     {errors.submit && (
          //       <Grid item xs={12}>
          //         <FormHelperText error>{errors.submit}</FormHelperText>
          //       </Grid>
          //     )}
          //     <Grid item xs={12}>
          //       <AnimateButton>
          //         <Button
          //           disableElevation
          //           disabled={isSubmitting}
          //           fullWidth
          //           size="large"
          //           type="submit"
          //           variant="contained"
          //           color="primary"
          //         >
          //           Create Account
          //         </Button>
          //       </AnimateButton>
          //     </Grid>
          //   </Grid>
          // </form>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">
                    First Name*
                  </InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                </Stack>
                {touched.firstname && errors.firstname && (
                  <FormHelperText error id="helper-text-firstname-signup">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                </Stack>
                {touched.lastname && errors.lastname && (
                  <FormHelperText error id="helper-text-lastname-signup">
                    {errors.lastname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">
                    Contact Email Address*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="helper-text-email-signup">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">
                    Company Name*
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="company"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Demo Inc."
                    inputProps={{}}
                  />
                </Stack>
                {touched.company && errors.company && (
                  <FormHelperText error id="helper-text-company-signup">
                    {errors.company}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="context-provider">
                    Contact Center Provider*
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      error={Boolean(
                        touched.centerprovider && errors.centerprovider
                      )}
                      labelId="context-provider"
                      name="centerprovider"
                      displayEmpty
                      id="context-provider"
                      value={values.centerprovider}
                      placeholder="-- Plese choose an option --"
                      onChange={handleChange}
                    >
                      {/* <MenuItem
                        disabled
                        value=""
                        sx={{ color: "text.secondary" }}
                      >
                        -- Plese choose an option --
                      </MenuItem> */}
                      <MenuItem value={"cxone"}>CXone</MenuItem>
                      <MenuItem value={"five9"}>Five9</MenuItem>
                      <MenuItem value={"twillio"}>Twillio</MenuItem>
                      <MenuItem value={"do-not-solutions"}>
                        I don't have a Solution
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                {touched.centerprovider && errors.centerprovider && (
                  <FormHelperText error id="helper-text-context-provider">
                    {errors.centerprovider}
                  </FormHelperText>
                )}
              </Grid>
              {/* <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <Eye /> : <EyeSlash />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText error id="helper-text-password-signup">
                    {errors.password}
                  </FormHelperText>
                )}
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid> */}
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="reference">Referred by*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.reference && errors.reference)}
                    id="reference"
                    type="text"
                    value={values.reference}
                    name="reference"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="reference"
                    inputProps={{}}
                  />
                </Stack>
                {touched.reference && errors.reference && (
                  <FormHelperText error id="helper-text-reference">
                    {errors.reference}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
