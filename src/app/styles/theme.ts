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
  animation,
  effects,
  gradients,
  components as componentTokens,
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
          contrastText: "#ffffff",
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[500],
          contrastText: "#ffffff",
          ...colors.secondary,
        },
        common: {
          onBackground: colors.grey[900],
          background: colors.grey[50],
        },
        text: {
          primary: colors.grey[900],
          secondary: colors.grey[600],
        },
        background: {
          default: "#fafafa",
          paper: "#ffffff",
        },
        AppBar: {
          defaultBg: "rgba(255, 255, 255, 0.8)",
        },
        banner: {
          background: gradients.bannerLight,
        },
        blog: {
          headerBgColor: colors.primary[50],
          h1Color: colors.primary[600],
          preBorderColor: colors.primary[300],
          preBgColor: colors.grey[900],
          codeBgColor: colors.primary[100],
          codeColor: colors.primary[700],
          linkColor: colors.primary[600],
        },
        subscribe: {
          headerColor: colors.primary[700],
        },
        about: {
          headerTitle: colors.grey[900],
          headerText: colors.grey[700],
          sectionBorder: colors.primary[200],
          sectionTitle: colors.grey[900],
          sectionText: colors.grey[700],
          sectionIcon: colors.primary[500],
        },
        postCard: {
          tagBgColor: colors.primary[100],
        },
        blogs: {
          tagBgColor: colors.grey[200],
          tagSelectedColor: colors.primary[500],
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
          main: colors.primary[400],
          contrastText: colors.grey[900],
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[400],
          contrastText: colors.grey[900],
          ...colors.secondary,
        },
        common: {
          onBackground: colors.grey[50],
          background: colors.grey[900],
        },
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[400],
        },
        background: {
          default: "#0f0f0f",
          paper: colors.grey[900],
        },
        AppBar: {
          defaultBg: "rgba(23, 23, 23, 0.8)",
        },
        banner: {
          background: `linear-gradient(135deg, ${colors.grey[900]} 0%, ${darken(
            colors.primary[900],
            0.5
          )} 50%, ${darken(colors.secondary[900], 0.5)} 100%)`,
        },
        blog: {
          headerBgColor: colors.grey[900],
          h1Color: colors.primary[400],
          preBorderColor: colors.primary[700],
          preBgColor: colors.grey[900],
          codeBgColor: colors.grey[800],
          codeColor: colors.primary[300],
          linkColor: colors.primary[400],
        },
        subscribe: {
          headerColor: colors.grey[100],
        },
        about: {
          headerTitle: colors.grey[100],
          headerText: colors.grey[400],
          sectionBorder: colors.primary[800],
          sectionTitle: colors.grey[100],
          sectionText: colors.grey[400],
          sectionIcon: colors.primary[400],
        },
        postCard: {
          tagBgColor: colors.primary[900],
        },
        blogs: {
          tagBgColor: colors.grey[700],
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
          textTransform: "none",
          fontWeight: 600,
          borderRadius: borderRadius.pill,
          padding: componentTokens.button.paddingSmall,
          transition: `all ${animation.duration.normal} ${animation.easing.standard}`,
          "&:hover": {
            transform: effects.transform.liftSmall,
            boxShadow: componentTokens.button.shadowHover,
          },
          "&.MuiButton-contained.Mui-disabled": {
            backgroundColor: "var(--mui-palette-button-disabledBgColor)",
            color: "var(--mui-palette-button-disabledColor)",
          },
        },
        sizeLarge: {
          padding: componentTokens.button.paddingLarge,
          fontSize: "1.6rem",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: borderRadius.large,
          transition: `all ${animation.duration.normal} ${animation.easing.standard}`,
          border: componentTokens.card.borderWidth,
          borderColor: "var(--mui-palette-grey-200)",
          "&:hover": {
            transform: effects.transform.lift,
            boxShadow: componentTokens.card.hoverShadow,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: componentTokens.header.backdropBlur,
          backgroundColor: "var(--mui-palette-AppBar-defaultBg)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.medium,
          "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.grey[400],
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.pill,
          fontWeight: 500,
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
    borderRadius: 12,
    radius: borderRadius,
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows) as Shadows,
  animation,
  effects,
  gradients,
  componentTokens,
});

export default theme;

// #98f3bf
// #6767c6
