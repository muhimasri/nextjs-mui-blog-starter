"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Link as MUILink, useColorScheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Nav from "./Nav";
import Link from "next/link";

interface HeaderProps {
  size?: "small" | "large";
}

export default function Header({ size = "large" }: HeaderProps): JSX.Element {
  const { mode, setMode, systemMode } = useColorScheme();

  const isDark =
    mode === "dark" || (mode === "system" && systemMode === "dark");

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container>
        <Toolbar sx={{ py: size === "large" ? 7 : 4 }}>
          <MUILink
            sx={{
              textDecoration: "none",
              mr: 7,
            }}
            href="/"
            component={Link}
          >
            <Typography
              fontSize="7"
              fontWeight="500"
              whiteSpace="nowrap"
              color="green.500"
            >
              Mareli Ramos
            </Typography>
          </MUILink>
          <Nav />
          {mode && (
            <IconButton onClick={() => setMode(isDark ? "light" : "dark")}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
