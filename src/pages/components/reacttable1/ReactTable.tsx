import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  HeaderGroup,
  useReactTable,
} from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import MainCard from "components/MainCard";
import ScrollX from "components/ScrollX";
import {
  DebouncedInput,
  EmptyTable,
  HeaderSort,
  TablePagination,
} from "components/third-party/react-table";
import React, { useState } from "react";
interface ReactTableProps {
  columns: ColumnDef<unknown>[];
  data: unknown[];
  title?: string;
}
const ReactTable = ({ columns, data, title }: any) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  return (
    <>
      <MainCard content={false}>
        {title && (
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Typography variant="h5">
                {title} {table.getPrePaginationRowModel().rows.length}
              </Typography>
            </Stack>
          </Box>
        )}
        <Stack
          direction={matchDownSM ? "column" : "row"}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: 2.5 }}
        >
          <DebouncedInput
            value={globalFilter ?? ""}
            onFilterChange={(value) => setGlobalFilter(String(value))}
            placeholder={`Search ${data.length} records...`}
          />
        </Stack>
        <ScrollX>
          <Stack>
            <TableContainer>
              <Table>
                <TableHead>
                  {table
                    .getHeaderGroups()
                    .map((headerGroup: HeaderGroup<any>) => (
                      <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          if (
                            header.column.columnDef.meta !== undefined &&
                            header.column.getCanSort()
                          ) {
                            Object.assign(header.column.columnDef.meta, {
                              className:
                                header.column.columnDef.meta.className +
                                " cursor-pointer prevent-select",
                            });
                          }
                          return (
                            <TableCell
                              key={header.id}
                              {...header.column.columnDef.meta}
                              onClick={header.column.getToggleSortingHandler()}
                              {...(header.column.getCanSort() &&
                                header.column.columnDef.meta === undefined && {
                                  className: "cursor-pointer prevent-select",
                                })}
                            >
                              {header.isPlaceholder ? null : (
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  alignItems="center"
                                >
                                  <Box>
                                    {flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                  </Box>
                                  {header.column.getCanSort() && (
                                    <HeaderSort column={header.column} />
                                  )}
                                </Stack>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                  {table.getRowModel().rows.length > 0 ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            key={cell.id}
                            {...cell.column.columnDef.meta}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow sx={{ bgcolor: "secondary.light" }}>
                      <TableCell
                        align="center"
                        colSpan={table.getHeaderGroups()[0].headers.length}
                        color="text.secondary"
                        sx={{ textTransform: "capitalize" }}
                      >
                        <EmptyTable msg=" No records found" />
                      </TableCell>
                    </TableRow>
                  )}
                  <TableRow
                    sx={{ "&:hover": { bgcolor: "transparent !important" } }}
                  >
                    <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                      <TablePagination
                        {...{
                          setPageSize: table.setPageSize,
                          setPageIndex: table.setPageIndex,
                          getState: table.getState,
                          getPageCount: table.getPageCount,
                          initialPageSize: 4,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </ScrollX>
      </MainCard>
    </>
  );
};

export default ReactTable;
