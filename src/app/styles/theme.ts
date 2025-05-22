"use client";

import { createTheme, darken, lighten, Shadows } from "@mui/material";
import {
  borderRadius,
  colors,
  font,
  letterSpacing,
  lineHeight,
  shadows,
  spacing,
} from "./tokens";
import { Poppins, Inter } from "next/font/google";

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
          main: colors.primary[500],
          contrastText: colors.grey[50],
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[500],
          contrastText: colors.grey[50],
          ...colors.secondary,
        },
        common: {
          onBackground: colors.grey[900],
          background: colors.grey[100],
        },
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
        background: {
          default: "white",
        },
        AppBar: {
          defaultBg: "white",
        },
        banner: {
          background: `linear-gradient(180deg, #fff 10%, ${lighten(
            colors.grey[200],
            0.5
          )})`,
        },
        blog: {
          headerBgColor: lighten(colors.secondary[100], 0.4),
          h1Color: colors.secondary[500],
          preBorderColor: colors.secondary[300],
          preBgColor: darken(colors.grey[800], 0.4),
          codeBgColor: colors.grey[200],
          codeColor: colors.secondary[400],
          linkColor: colors.grey[700],
        },
        subscribe: {
          headerColor: colors.primary[800],
        },
        about: {
          headerTitle: colors.grey[800],
          headerText: colors.grey[700],
          sectionBorder: colors.secondary[100],
          sectionTitle: colors.grey[800],
          sectionText: colors.grey[700],
          sectionIcon: colors.secondary[500],
        },
        postCard: {
          tagBgColor: colors.primary[200],
        },
        blogs: {
          tagBgColor: colors.grey[200],
          tagSelectedColor: colors.primary[400],
        },
        button: {
          disabledBgColor: colors.grey[200],
          disabledColor: colors.grey[400],
        },
        grey: colors.grey,
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.primary[600],
          contrastText: colors.grey[50],
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[900],
          contrastText: colors.grey[50],
          ...colors.secondary,
        },
        common: {
          onBackground: colors.grey[50],
          background: darken(colors.grey[800], 0.4),
        },
        text: {
          primary: colors.grey[200],
          secondary: colors.grey[400],
        },
        background: {
          default: colors.grey[900],
          paper: colors.grey[900],
        },
        banner: {
          background:
            "linear-gradient(180deg, var(--mui-palette-grey-900) 61%, #14171e)",
        },
        blog: {
          headerBgColor: "black",
          h1Color: colors.secondary[300],
          preBorderColor: colors.secondary[700],
          preBgColor: darken(colors.grey[800], 0.4),
          codeBgColor: colors.grey[800],
          codeColor: colors.secondary[400],
          linkColor: colors.grey[400],
        },
        subscribe: {
          headerColor: colors.grey[50],
        },
        about: {
          headerTitle: colors.grey[200],
          headerText: colors.grey[400],
          sectionBorder: colors.secondary[700],
          sectionTitle: colors.grey[200],
          sectionText: colors.grey[400],
          sectionIcon: colors.secondary[300],
        },
        postCard: {
          tagBgColor: colors.primary[400],
        },
        blogs: {
          tagBgColor: colors.grey[400],
          tagSelectedColor: colors.primary[400],
        },
        button: {
          disabledBgColor: colors.grey[800],
          disabledColor: colors.grey[600],
        },
        grey: colors.grey,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          "&.MuiButton-contained.Mui-disabled": {
            backgroundColor: "var(--mui-palette-button-disabledBgColor)",
            color: "var(--mui-palette-button-disabledColor)",
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.grey[400],
            },
          },
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: poppins.style.fontFamily,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    ...font.size,
  },
  shape: {
    borderRadius: 4,
    radius: borderRadius,
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows) as Shadows,
});

export default theme;

// #98f3bf
// #6767c6
