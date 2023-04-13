import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "./tableHeader";
import TableBody, { TableRow } from "./tableBody";
import { User } from "../../types/user";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import TablePagination from "@mui/material/TablePagination";

interface UserTableProps {
  users: User[];
  isLoading: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const buildTableRows = (users: User[]): TableRow[] =>
  users.map((user) => {
    return {
      age: user.dob.age,
      cell: user.cell,
      gender: user.gender,
      name: user.name.first,
      id: user.login.uuid,
      state: user.location.state,
    };
  });

const UserTable = ({ users, isLoading, setOpenModal }: UserTableProps) => {
  const rows = useMemo(() => buildTableRows(users), [users]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event: unknown, value: number) => {
    setPage(value);
  };

  return isLoading ? (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader />
          <TableBody
            rows={rows.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )}
            setOpenModal={setOpenModal}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserTable;
