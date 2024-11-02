import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" mr={5}>
          My Blog
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}
