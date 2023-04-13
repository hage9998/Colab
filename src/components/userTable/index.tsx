import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "./tableHeader";
import TableBody, { TableRow } from "./tableBody";
import { User } from "../../types/user";
import { useMemo } from "react";

interface UserTableProps {
  users: User[];
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

const UserTable = ({ users }: UserTableProps) => {
  const rows = useMemo(() => buildTableRows(users), [users]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader />
        <TableBody rows={rows} />
      </Table>
    </TableContainer>
  );
};

export default UserTable;
