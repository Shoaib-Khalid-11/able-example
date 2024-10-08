import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import MainCard from "components/MainCard";
import { useState } from "react";

const GetCompanyEmalAlerts = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <MainCard content={true}>
        <FormControlLabel
          defaultChecked
          control={<Checkbox />}
          label="Email Alerts"
        />
        <Alert severity="info" variant="filled" sx={{ my: 2 }} icon={false}>
          Add Emails
        </Alert>
        <Grid container spacing={2}>
          {[...Array(value)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Stack spacing={1}>
                <InputLabel htmlFor={`EmalAlerts${index}`}>
                  Email Address:
                </InputLabel>
                <TextField
                  id={`EmalAlerts${index}`}
                  type="email"
                  name="Emails"
                />
                {index >= 1 && (
                  <Box>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => setValue(value - 1)}
                    >
                      Remove
                    </Button>
                  </Box>
                )}
              </Stack>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Stack spacing={1} direction="row" justifyContent={"flex-end"}>
              <Box>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setValue(value + 1)}
                >
                  Add
                </Button>
              </Box>
              <Box>
                <Button color="primary" variant="contained">
                  Save
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default GetCompanyEmalAlerts;
