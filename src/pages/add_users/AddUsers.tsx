import MainCard from "components/MainCard";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Backward, Forward, ForwardItem } from "iconsax-react";
import { useState } from "react";
function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}
const AddUsers = () => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [left, setLeft] = useState<readonly number[]>([]);
  const [right, setRight] = useState<readonly number[]>([...Array(100).keys()]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };
  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };
  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  // const handleAllLeft = () => {
  //   setLeft(left.concat(right));
  //   setRight([]);
  // };
  const customList = (items: readonly number[]) => (
    // <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
    <List dense component="div" role="list">
      {items.map((value: number) => {
        const labelId = `transfer-list-item-${value}-label`;

        return (
          <ListItemButton
            key={value}
            role="listitem"
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
          </ListItemButton>
        );
      })}
    </List>
  );
  return (
    <>
      <MainCard content={false} border={false}>
        <Grid container p={2} justifyContent={"space-between"}>
          <Grid item xs={12} md={4}>
            <Box display={"flex"} flexDirection={"column"} gap={2} mb={3}>
              <Typography variant="h5" color={"secondary"}>
                Unregistered List
              </Typography>
              <TextField fullWidth placeholder="Search" variant="outlined" />
              <Box
                sx={{
                  width: "100%",
                  height: "55vh",
                  borderColor: "primary.main",
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 2,
                  overflowX: "auto",
                }}
                p={2}
              >
                {customList(left)}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box
              display={"flex"}
              height={1}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              mb={3}
            >
              <Typography variant="h5" color={"secondary"}>
                Press save when done
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Forward size="32" />}
                onClick={handleCheckedRight}
              >
                ADD USER
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ForwardItem size="32" />}
                onClick={handleAllRight}
              >
                ADD ALL
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Backward size="32" />}
                onClick={handleCheckedLeft}
              >
                REMOVE USER
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display={"flex"} flexDirection={"column"} gap={2} mb={3}>
              <Typography variant="h5" color={"secondary"}>
                Registered List
              </Typography>
              <TextField fullWidth placeholder="Search" variant="outlined" />
              <Box
                sx={{
                  width: "100%",
                  height: "55vh",
                  borderColor: "primary.main",
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 2,
                  overflowX: "auto",
                }}
                p={2}
              >
                {customList(right)}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container p={2} gap={{ xs: 2, md: 0 }}>
              <Grid item xs={12} md={6} justifyContent={"space-between"}>
                <Typography variant="h5">
                  By clicking "Save Information", you agree that you are
                  authorized to add or remove Registered User licenses
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default AddUsers;
