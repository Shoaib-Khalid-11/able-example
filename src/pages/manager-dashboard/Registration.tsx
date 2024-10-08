import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import { Tag, Trash, WalletAdd } from "iconsax-react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import ReactTable from "pages/components/reacttable1/ReactTable";
import { useMemo } from "react";

interface TableDataProps {
  request_id: number;
  date: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  status: string;
  action: string;
  sales_rep: string;
  contact_center: string;
}
const Registration = () => {
  const data = [...Array(10)].map((_, index) => ({
    request_id: index + 1,
    date: "Demo.dev " + (index + 1) * 2,
    first_name: "Demo.dev " + (index + 1) * 2,
    last_name: "Demo.dev " + (index + 1) * 2,
    company: "Demo.dev " + (index + 1) * 2,
    email: "Demo.dev " + (index + 1) * 2,
    status: "Demo.dev " + (index + 1) * 2,
    action: "Demo.dev " + (index + 1) * 2,
    sales_rep: "Demo.dev " + (index + 1) * 2,
    contact_center: "Demo.dev " + (index + 1) * 2,
  }));
  const handleReactive = () => {
    enqueueSnackbar("Do you want to delete this tag?", {
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
        header: "Request Id",
        accessorKey: "request_id",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "First Name",
        accessorKey: "first_name",
      },
      {
        header: "Last Name",
        accessorKey: "last_name",
      },
      {
        header: "Company",
        accessorKey: "company",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Sales Rep",
        accessorKey: "sales_rep",
      },
      {
        header: "Contact Center",
        accessorKey: "contact_center",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Action",
        accessorKey: "action",
        cell(props) {
          return (
            <>
              <Stack direction="row">
                <Tooltip
                  title="Contract Processed"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton color="secondary" size="medium">
                    <WalletAdd scale={24} />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Delete Registration Request"
                  arrow
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    color="secondary"
                    size="medium"
                    onClick={handleReactive}
                  >
                    <Trash scale={24} />
                  </IconButton>
                </Tooltip>
              </Stack>
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
            List of Registration Requests
          </Typography>
        </Box>
        <Divider />
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="flex-end"
          gap={{ xs: 2 }}
          p={2}
        >
          <Button
            variant="contained"
            onClick={() =>
              enqueueSnackbar("I love hooks", {
                variant: "default",
                anchorOrigin: {
                  horizontal: "right",
                  vertical: "top",
                },
              })
            }
            startIcon={<Tag scale={24} />}
          >
            Add New Tag
          </Button>
        </Stack>
        <ScrollX>
          <ReactTable {...{ data, columns }} />
        </ScrollX>
      </MainCard>
    </>
  );
};

export default Registration;
