import { Box, Button, Typography } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import { useMemo, useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import ReactTable from "pages/components/reacttable1/ReactTable";
import { format } from "date-fns";
interface TabledataProps1 {
  username: string;
  firstname: string;
  lastname: string;
  clicktochange: unknown;
}
const ActivityDetails = () => {
  const date = format(new Date("2022-01-01"), "MM/dd/yyyy");
  const data =
    [
      {
        date,
        performedby: "Admin",
        users: "Demo Dev",
        detail: "User was added to the system",
      },
    ] || [];
  const columns = useMemo<ColumnDef<TabledataProps1>[]>(
    () => [
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Performed By",
        accessorKey: "performedby",
      },
      {
        header: "Users",
        accessorKey: "users",
      },
      {
        header: "Detail",
        accessorKey: "detail",
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [value, setValue] = useState<Date | null>();

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <>
      <MainCard content={false}>
        <Box p={3}>
          <Typography variant="h4" pb={0}>
            Criteria
          </Typography>
          <Box
            pt={2}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={"center"}
            gap={2}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                format="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
              />
            </LocalizationProvider>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              px={2}
              // backgroundColor={theme.palette.primary.main}
              borderRadius={2}
            >
              To
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                format="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
              />
            </LocalizationProvider>
            <Button variant="contained" sx={{ float: "right" }}>
              Get Data
            </Button>
          </Box>
        </Box>
        <ScrollX>
          <ReactTable {...{ data, columns }} />
        </ScrollX>
      </MainCard>
    </>
  );
};

export default ActivityDetails;
