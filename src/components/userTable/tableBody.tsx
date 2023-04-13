import {
  TableRow as TableRowMui,
  TableCell,
  TableBody as TableBodyMui,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { genderTranslate } from "../../utils";

export interface TableRow {
  id: string;
  name: string;
  state: string;
  age: number;
  cell: string;
  gender: string;
}

interface TableBodyProps {
  rows: TableRow[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelectedUser: Dispatch<SetStateAction<string | undefined>>;
}

const TableBody = ({ rows, setOpenModal, setSelectedUser }: TableBodyProps) => (
  <TableBodyMui>
    {rows.map((row) => (
      <TableRowMui
        onClick={() => {
          setOpenModal(true);
          setSelectedUser(row.id);
        }}
        className={"pointer"}
        hover
        style={{ cursor: "pointer" }}
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.state}</TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center">{row.cell}</TableCell>
        <TableCell align="center">{genderTranslate(row.gender)}</TableCell>
      </TableRowMui>
    ))}
  </TableBodyMui>
);

export default TableBody;
