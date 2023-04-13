import {
  TableRow as TableRowMui,
  TableCell,
  TableBody as TableBodyMui,
} from "@mui/material";

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
}

const TableBody = ({ rows }: TableBodyProps) => (
  <TableBodyMui>
    {rows.map((row) => (
      <TableRowMui
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
