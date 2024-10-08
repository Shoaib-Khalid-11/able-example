import { Divider, Stack, Typography } from '@mui/material';

import { Box, Button } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import ReactTable from 'pages/components/reacttable1/ReactTable';
import { useMemo } from 'react';
import SlideDialog from './SlideDialog';
import UsersDilog from './UsersDilog';
import AddUserDilog from './AddUserDilog';
import { useGetAllUsers } from 'api/user';
import { useGeneral } from 'store/features/general/general.slice';
interface TabledataProps1 {
    id: string;
    fullname: string;
    username: string;
    email: string;
    app_version: string;
}
interface ReactTableProps {
    columns: ColumnDef<TabledataProps1>[];
    data: TabledataProps1[];
    title?: string;
}

const Dashboard1 = () => {
    const { setLoading, generalState } = useGeneral();
    const { data: users, isLoading } = useGetAllUsers();
    // const deleting = useDeleteUser();
    // const data = [...Array(10)].map((_, i) => ({
    //     fullname: 'John Doe',
    //     username: 'john.doe',
    //     email: 'johndoe',
    //     app_version: '1.0.0',
    //     id: i
    // }));
    const data1 = (users && users.value) || [];
    const data = data1
        ? data1?.map((user: any) => ({
              id: user.id,
              fullname: user.name,
              username: user.gender,
              email: user.email,
              app_version: user.age
          }))
        : [];
    const columns = useMemo<ColumnDef<TabledataProps1>[]>(
        () => [
            {
                id: 'id'
            },
            {
                header: 'FullName',
                accessorKey: 'fullname'
            },
            {
                header: 'UserName',
                accessorKey: 'username'
            },
            {
                header: 'Email',
                accessorKey: 'email'
            },
            {
                header: 'App Version',
                accessorKey: 'app_version'
            },
            {
                header: 'Action',
                accessorKey: 'action',

                cell: (info) => {
                    return (
                        <>
                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                        // deleting.trigger(info.row.original.id);
                                    }}
                                >
                                    Remove {info.row.original.id}
                                </Button>
                                {/* <UsersDilog id={info.row.original.id} /> */}
                            </Stack>
                        </>
                    );
                }
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    setLoading(isLoading);
    console.log(generalState);
    const title = 'Registered List';
    return (
        <MainCard content={false}>
            {isLoading && <>Loading</>}
            <Box p={2}>
                <Typography variant="h4" color="secondary">
                    Current App Version : 47.0
                </Typography>
            </Box>
            <Divider />
            <Stack flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="flex-end" gap={{ xs: 2 }} p={2}>
                <SlideDialog />
                {/* <AddUserDilog /> */}
            </Stack>
            <ScrollX>
                <ReactTable {...{ data, columns, title }} />
            </ScrollX>
        </MainCard>
    );
};

export default Dashboard1;
