import { Box, Button, Typography } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import ReactTable from "pages/components/reacttable1/ReactTable";
import { useMemo } from "react";
interface TabledataProps1 {
  username: string;
  firstname: string;
  lastname: string;
  clicktochange: unknown;
}
const Authorize_Admin = () => {
  const data = [
    {
      firstname: "Demo Dev",
      lastname: "",
      username: "Demo.dev",
      clicktochange: false,
    },
    {
      firstname: "Demo Dev",
      lastname: "",
      username: "Demo.dev",
      clicktochange: true,
    },
  ];
  const columns = useMemo<ColumnDef<TabledataProps1>[]>(
    () => [
      {
        header: "UserName",
        accessorKey: "username",
      },
      {
        header: "First Name",
        accessorKey: "firstname",
      },
      {
        header: "Lirst Name",
        accessorKey: "lirstname",
      },
      {
        header: "Click to Change",
        accessorKey: "clicktochange",
        cell: ({ row }) => {
          return (
            <Button
              variant="contained"
              color={row.original.clicktochange ? "success" : "error"}
            >
              {row.original.clicktochange
                ? "Change to Admin"
                : "Change to User"}
            </Button>
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
        <Box p={3}>
          <Typography variant="h5" color={"secondary"}>
            Important: By setting a user as an Admin you are authorizing them to
            add and remove app licenses for your company.
          </Typography>
        </Box>
        <ScrollX>
          <ReactTable {...{ data, columns }} />
        </ScrollX>
      </MainCard>
    </>
  );
};

export default Authorize_Admin;
