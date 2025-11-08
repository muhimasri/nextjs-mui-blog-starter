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
import { JSX } from "react";

interface HeaderProps {
  size?: "small" | "large";
}

export default function Header({ size = "large" }: HeaderProps): JSX.Element {
  const { mode, setMode, systemMode } = useColorScheme();

  const isDark =
    mode === "dark" || (mode === "system" && systemMode === "dark");

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <Toolbar sx={{ py: size === "large" ? 7 : 4 }}>
          <MUILink
            sx={{
              textDecoration: "none",
              mr: 7,
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            href="/"
            component={Link}
          >
            <Typography
              fontSize="7"
              fontWeight="700"
              whiteSpace="nowrap"
              sx={{
                background:
                  "linear-gradient(135deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-secondary-500) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ✨ Mareli Ramos
            </Typography>
          </MUILink>
          <Nav />
          {mode && (
            <IconButton
              onClick={() => setMode(isDark ? "light" : "dark")}
              sx={{
                borderRadius: "12px",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "rotate(180deg)",
                  backgroundColor: "primary.50",
                },
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
