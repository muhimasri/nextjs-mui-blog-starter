"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Link, useColorScheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Nav from "./Nav";

interface HeaderProps {
  size?: "small" | "large";
}

export default function Header({ size = "large" }: HeaderProps): JSX.Element {
  const { mode, setMode } = useColorScheme();

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container>
        <Toolbar sx={{ py: size === "large" ? 7 : 4 }}>
          <Link
            sx={{
              textDecoration: "none",
              mr: 7,
            }}
            href="/"
          >
            <Typography
              fontSize="7"
              fontWeight="500"
              whiteSpace="nowrap"
              color="green.500"
            >
              Mareli Ramos
            </Typography>
          </Link>
          <Nav />
          <IconButton
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            // sx={{ color: "grey.400" }}
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
