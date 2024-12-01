"use client";

import { createTheme } from "@mui/material";
import { colors } from "./tokens";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: colors.green[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: colors.purple[600],
      contrastText: "#ffffff",
    },
    background: {
      //   default: mode === "dark" ? colors.grey[900] : colors.grey[100],
      //   paper: mode === "dark" ? colors.grey[800] : colors.grey[50],
      default: "white",
      paper: "white",
    },
    green: colors.green,
    purple: colors.purple,
    grey: colors.grey,
  },
});

export default theme;
