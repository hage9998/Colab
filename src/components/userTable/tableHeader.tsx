import { TableHead, TableRow, TableCell } from "@mui/material";

const HEAD_CELL = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "Estado",
  },
  {
    id: "age",
    numeric: true,
    disablePadding: false,
    label: "Idade",
  },
  {
    id: "cell",
    numeric: false,
    disablePadding: false,
    label: "Celular",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
    label: "Gênero",
  },
];

const TableHeader = () => (
  <TableHead>
    <TableRow>
      {HEAD_CELL.map(({ id, label }) => (
        <TableCell style={{ fontWeight: "bold" }} align="center" key={id}>
          {label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeader;
