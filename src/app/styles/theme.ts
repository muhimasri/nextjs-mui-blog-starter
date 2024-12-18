"use client";

import { createTheme } from "@mui/material";
import {
  borderRadius,
  colors,
  font,
  letterSpacing,
  lineHeight,
  shadows,
  spacing,
} from "./tokens";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.green[500],
          contrastText: colors.grey[50],
        },
        secondary: {
          main: colors.purple[500],
          contrastText: colors.grey[50],
        },
        common: {
          onBackground: colors.grey[900],
        },
        text: {
          primary: colors.grey[900],
          secondary: colors.grey[600],
        },
        background: {
          default: "white",
          paper: "white",
          banner:
            "linear-gradient(180deg, #fff 10%, var(--mui-palette-purple-50))",
        },
        AppBar: {
          defaultBg: "white",
        },
        green: colors.green,
        purple: colors.purple,
        grey: colors.grey,
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.green[500],
          contrastText: colors.grey[50],
        },
        secondary: {
          main: colors.purple[900],
          contrastText: colors.grey[50],
        },
        common: {
          onBackground: colors.grey[50],
        },
        text: {
          primary: colors.grey[50],
          secondary: colors.grey[300],
        },
        background: {
          default: colors.grey[900],
          paper: colors.grey[900],
          banner:
            "linear-gradient(180deg, var(--mui-palette-grey-900) 61%, #14171e)",
        },
        green: colors.green,
        purple: colors.purple,
        grey: colors.grey,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  // palette: {
  //   mode: "dark",
  //   primary: {
  //     main: colors.green[500],
  //     contrastText: colors.grey[50],
  //   },
  //   secondary: {
  //     main: colors.purple[600],
  //     contrastText: colors.grey[50],
  //   },
  //   // background: {
  //   //   //   default: mode === "dark" ? colors.grey[900] : colors.grey[100],
  //   //   //   paper: mode === "dark" ? colors.grey[800] : colors.grey[50],
  //   //   default: "white",
  //   //   paper: "white",
  //   // },
  //   green: colors.green,
  //   purple: colors.purple,
  //   grey: colors.grey,
  // },
  typography: {
    htmlFontSize: 10,
    fontFamily: poppins.style.fontFamily,
    ...letterSpacing,
    ...lineHeight,
    ...font.size,
  },
  shape: {
    ...borderRadius,
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows),
});

export default theme;

// #98f3bf
// #6767c6
