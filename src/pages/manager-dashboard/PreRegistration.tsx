import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import { Tag, Trash } from "iconsax-react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import ReactTable from "pages/components/reacttable1/ReactTable";
import { useMemo, useState } from "react";

interface TableDataProps {
  id: number;
  date: string;
  company: string;
  tag_id: number;
  name: string;
  status: boolean;
  actions: {
    action1: boolean;
  };
}
const PreRegistration = () => {
  const [data, setData] = useState(
    [...Array(90)].map((_, index) => ({
      id: index,
      date: index,
      company: "Demo.dev " + (index + 1) * 2,
      email: "Demo.dev " + (index + 1) * 2,
      status: false,
    }))
  );
  const handleActive = (id: number) => {
    setData((prevs) =>
      prevs.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };
  const handleReactive = () => {
    enqueueSnackbar("Do you want to delete this tag?", {
      variant: "default",
      preventDuplicate: true,
      persist: true,
      action: (
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary" sx={{ float: "right" }}>
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
        header: "Date",
        accessorKey: "date",
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
        header: "Contract Status",
        accessorKey: "status",
        cell(props) {
          return (
            <>
              <Typography
                color={props.row.original.status === true ? "primary" : "error"}
              >
                {props.row.original.status === true ? "Signed" : "Not Signed"}
              </Typography>
            </>
          );
        },
      },
      {
        header: "Actions",
        accessorKey: "actions",
        cell(props) {
          return (
            <>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Switch
                  color="primary"
                  onChange={() => handleActive(props.row.original.id)}
                  checked={props.row.original.status}
                />
                <IconButton
                  color="error"
                  // sx={{ bgcolor: "error.light" }}
                  size="medium"
                  onClick={handleReactive}
                >
                  <Trash scale={24} />
                </IconButton>
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
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={{ xs: 2 }}
          p={2}
        >
          <Typography variant="h4" color="secondary">
            List of Pre-Registration
          </Typography>
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
          >
            Add
          </Button>
        </Stack>
        <ScrollX>
          <ReactTable {...{ data, columns }} />
        </ScrollX>
      </MainCard>
    </>
  );
};

export default PreRegistration;
