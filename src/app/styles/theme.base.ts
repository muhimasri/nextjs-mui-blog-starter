"use client";

import { createTheme, darken, Shadows } from "@mui/material";
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
} from "./tokens.base";
import { Inter } from "next/font/google";

// Modern, neutral font
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
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
          main: colors.primary[600],
          contrastText: "#ffffff",
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[600],
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
          default: "#ffffff",
          paper: "#ffffff",
        },
        AppBar: {
          defaultBg: "rgba(255, 255, 255, 0.9)",
        },
        banner: {
          background: gradients.bannerLight,
        },
        blog: {
          headerBgColor: colors.primary[50],
          h1Color: colors.primary[700],
          preBorderColor: colors.primary[300],
          preBgColor: colors.grey[900],
          codeBgColor: colors.primary[50],
          codeColor: colors.primary[700],
          linkColor: colors.primary[600],
        },
        subscribe: {
          headerColor: colors.primary[800],
        },
        about: {
          headerTitle: colors.grey[900],
          headerText: colors.grey[700],
          sectionBorder: colors.primary[200],
          sectionTitle: colors.grey[900],
          sectionText: colors.grey[700],
          sectionIcon: colors.primary[600],
        },
        postCard: {
          tagBgColor: colors.grey[100],
        },
        blogs: {
          tagBgColor: colors.grey[200],
          tagSelectedColor: colors.primary[600],
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
          default: "#0a0a0a",
          paper: colors.grey[900],
        },
        AppBar: {
          defaultBg: "rgba(24, 24, 27, 0.9)",
        },
        banner: {
          background: `linear-gradient(135deg, ${colors.grey[900]} 0%, ${darken(
            colors.primary[900],
            0.4
          )} 50%, ${darken(colors.secondary[900], 0.4)} 100%)`,
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
          tagBgColor: colors.grey[800],
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
          borderRadius: borderRadius.medium,
          padding: componentTokens.button.paddingSmall,
          transition: `all ${animation.duration.normal} ${animation.easing.standard}`,
          letterSpacing: "0.015em",
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
          borderRadius: borderRadius.medium,
          transition: `all ${animation.duration.normal} ${animation.easing.standard}`,
          border: `${componentTokens.card.borderWidth} solid`,
          borderColor: "var(--mui-palette-grey-200)",
          "&:hover": {
            transform: effects.transform.lift,
            boxShadow: componentTokens.card.hoverShadow,
            borderColor: "var(--mui-palette-grey-300)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: componentTokens.header.backdropBlur,
          backgroundColor: "var(--mui-palette-AppBar-defaultBg)",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: componentTokens.input.borderRadius,
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
          borderRadius: borderRadius.small,
          fontWeight: 500,
          letterSpacing: "0.015em",
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: inter.style.fontFamily,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    ...font.size,
  },
  shape: {
    borderRadius: 10,
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
