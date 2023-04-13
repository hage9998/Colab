import {
  TableRow as TableRowMui,
  TableCell,
  TableBody as TableBodyMui,
} from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
}

const TableBody = ({ rows, setOpenModal }: TableBodyProps) => (
  <TableBodyMui>
    {rows.map((row) => (
      <TableRowMui
        onClick={() => setOpenModal(true)}
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
        <TableCell align="center">{row.gender}</TableCell>
      </TableRowMui>
    ))}
  </TableBodyMui>
);

export default TableBody;
