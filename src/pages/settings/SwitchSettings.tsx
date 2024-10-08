import {
  Typography,
  Grid,
  Button,
  CardMedia,
  Box,
  Collapse,
  Alert,
} from "@mui/material";
import MainCard from "components/MainCard";
import Upload from "assets/images/upload/upload.svg";
import CustomTooltip from "components/@extended/Tooltip";
import { CloseCircle, InfoCircle, MessageQuestion } from "iconsax-react";
import IconButton from "components/@extended/IconButton";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { useSnackbar } from "notistack";

const SwitchSettings = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  // const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 5500);
  // });
  const snackBarHandeler = () => {
    enqueueSnackbar("Please select an image of size 320*240", {
      variant: "default",
      hideIconVariant: true,
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
  };
  return (
    <>
      <MainCard content={false} border={false} sx={{ padding: 2 }}>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary.main">
              Company Information
            </Typography>
            {/* <Divider /> */}
          </Grid>
          <Grid item xs={12} md={6} alignSelf={"center"}>
            <Grid
              container
              p={2}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h4">Logo</Typography>
              {/* <MainCard
                variant="outlined"
                sx={{
                  margin: 2,
                  borderColor: "success",
                  maxWidth: 320,
                  width: "100%",
                }}
              > */}
              <Box
                sx={{
                  height: 320,
                  width: 320,
                  my: 2,
                  border: 2,
                  bgcolor: (theme.palette.mode === "dark" && "white") || "",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  // borderRadius: "100%",
                  p: 4,
                }}
                position={"relative"}
              >
                <CustomTooltip
                  title="Logos should have dimensions of 320*240"
                  sx={{ position: "absolute", right: "2%", top: "2%" }}
                  arrow
                  placement="top"
                  color="error"
                >
                  <IconButton color="error" onClick={snackBarHandeler}>
                    <MessageQuestion size="32" />
                  </IconButton>
                </CustomTooltip>
                <CardMedia
                  sx={{ height: "90%", width: "100%", objectFit: "contain" }}
                  image={Upload}
                  title="Upload Logo"
                />
              </Box>
              {/* </MainCard> */}
              <Button variant="outlined" color="primary">
                Select Image
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              p={2}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h4">Dark Logo</Typography>
              {/* <MainCard
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  bgcolor: "black",
                  my: 2,
                  maxWidth: 320,
                  width: "100%",
                }}
              > */}
              <Box
                sx={{
                  height: 320,
                  width: 320,
                  bgcolor: (theme.palette.mode === "light" && "black") || "",
                  my: 2,
                  border: 2,
                  borderColor: "primary.main",
                  // borderRadius: 2,
                  borderRadius: "100%",
                  p: 4,
                }}
                position={"relative"}
              >
                <CustomTooltip
                  title="Logos should have dimensions of 320*240"
                  sx={{ position: "absolute", right: "2%", top: "2%" }}
                  arrow
                  placement="top"
                  color="error"
                >
                  <IconButton color="error" onClick={snackBarHandeler}>
                    <MessageQuestion size="32" />
                  </IconButton>
                </CustomTooltip>
                <CardMedia
                  sx={{ height: "90%", width: "100%", objectFit: "contain" }}
                  image={Upload}
                  title="Upload Logo"
                />
              </Box>
              {/* {upload()} */}
              {/* </MainCard> */}
              <Button variant="outlined" color="primary">
                Select Image
              </Button>
            </Grid>
          </Grid>
          {/* {open && (
            <Grid item xs={12} md={8}>
              <Collapse in={open}>
                <Alert
                  severity="error"
                  variant="filled"
                  icon={<InfoCircle variant="Bold" />}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseCircle fontSize="inherit" />
                    </IconButton>
                  }
                >
                  <Typography variant="h3" color="initial">
                    Company Information Logos should have dimensions of 320*240
                  </Typography>
                </Alert>
              </Collapse>
            </Grid>
          )} */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ float: "right" }}
            >
              Save Information
            </Button>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default SwitchSettings;
