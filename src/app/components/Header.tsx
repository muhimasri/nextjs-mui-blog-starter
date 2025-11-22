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
            sx={(theme) => ({
              textDecoration: "none",
              mr: 7,
              transition: theme.transitions.transform,
              "&:hover": {
                transform: theme.effects.transform.scaleSmall,
              },
            })}
            href="/"
            component={Link}
          >
            <Typography
              fontSize="7"
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                whiteSpace: "nowrap",
                background: theme.gradients.primaryToSecondary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              })}
            >
              Mareli Ramos
            </Typography>
          </MUILink>
          <Nav />
          {mode && (
            <IconButton
              onClick={() => setMode(isDark ? "light" : "dark")}
              sx={(theme) => ({
                borderRadius: theme.componentTokens.header.iconBorderRadius,
                border: `${theme.border.width.thin} solid`,
                borderColor: "divider",
                transition: theme.transitions.all,
                "&:hover": {
                  transform: theme.effects.transform.rotate,
                  backgroundColor: "primary.50",
                },
              })}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
