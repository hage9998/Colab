import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const UserTable = () => {
  return <TableContainer component={Paper}></TableContainer>;
};
