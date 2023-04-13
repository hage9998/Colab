import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function UserAppBar() {
  return (
    <Box data-testid="user-app-bar" sx={{ flexGrow: 1 }}>
      <div></div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Usuários
          </Typography>
          <Typography variant="h6">Colab</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
