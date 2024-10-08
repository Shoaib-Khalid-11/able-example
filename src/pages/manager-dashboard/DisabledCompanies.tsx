import {
  Box,
  Divider,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import { RefreshCircle } from "iconsax-react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import ReactTable from "pages/components/reacttable1/ReactTable";
import { useMemo } from "react";
interface TableDataProps {
  fullname: string;
  username: string;
  email: string;
  app_version: string;
}
const DisabledCompanies = () => {
  const data = [...Array(10)].map((_, index) => ({
    company_id: index + 1,
    name: "Demo.dev " + (index + 1) * 2,
    unique_id: "Demo.dev " + (index + 1) * 2,
    reactivate: "Demo.dev " + (index + 1) * 2,
  }));
  const handleReactive = () => {
    enqueueSnackbar("Do you want to reactivate this company?", {
      variant: "default",
      persist: true,
      action: (
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" sx={{ float: "right" }}>
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ float: "right" }}
            onClick={() => closeSnackbar()}
          >
            No
          </Button>
        </Stack>
      ),
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
  };

  const columns = useMemo<ColumnDef<TableDataProps>[]>(
    () => [
      {
        header: "Company Id",
        accessorKey: "company_id",
      },
      {
        header: "Unique Id",
        accessorKey: "unique_id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Reactivate",
        accessorKey: "reactivate",
        cell(props) {
          return (
            <>
              <IconButton
                color="secondary"
                size="medium"
                onClick={handleReactive}
              >
                <RefreshCircle scale={24} />
              </IconButton>
            </>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <MainCard content={false}>
        <Box p={2}>
          <Typography variant="h4" color="secondary">
            List of Deleted Companies
          </Typography>
        </Box>
        <Divider />
        <ScrollX>
          <ReactTable {...{ data, columns }} />
        </ScrollX>
      </MainCard>
    </>
  );
};

export default DisabledCompanies;
