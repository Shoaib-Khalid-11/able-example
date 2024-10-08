import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import { RefreshCircle, Tag, Trash } from "iconsax-react";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import ReactTable from "pages/components/reacttable1/ReactTable";
import React, { useMemo } from "react";
interface TableDataProps {
  tag_id: number;
  name: string;
}
const ManagerTags = () => {
  const data = [...Array(10)].map((_, index) => ({
    tag_id: index + 1,
    name: "Demo.dev " + (index + 1) * 2,
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
        header: "Tag Id",
        accessorKey: "tag_id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Action",
        accessorKey: "action",
        cell(props) {
          return (
            <>
              <IconButton
                color="secondary"
                size="medium"
                onClick={handleReactive}
              >
                <Trash scale={24} />
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
            List of Tags
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

export default ManagerTags;
