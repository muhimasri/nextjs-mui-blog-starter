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
} from "./tokens.fun";
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
          contrastText: colors.white,
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[400],
          contrastText: colors.white,
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
          default: colors.grey[50],
          paper: colors.white,
        },
        AppBar: {
          defaultBg: componentTokens.header.bgLight,
        },
        banner: {
          background: gradients.bannerLight,
        },
        blog: {
          headerBgColor: colors.primary[50],
          h1Color: colors.primary[500],
          preBorderColor: colors.primary[300],
          preBgColor: colors.grey[900],
          codeBgColor: colors.primary[50],
          codeColor: colors.secondary[600],
          linkColor: colors.secondary[600],
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
          tagBgColor: colors.secondary[100],
        },
        blogs: {
          tagBgColor: colors.secondary[100],
          tagSelectedColor: colors.secondary[100],
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
          default: colors.grey[900],
          paper: colors.grey[900],
        },
        AppBar: {
          defaultBg: componentTokens.header.bgDark,
        },
        banner: {
          background: gradients.bannerLight,
        },
        blog: {
          headerBgColor: colors.grey[900],
          h1Color: colors.primary[400],
          preBorderColor: colors.primary[700],
          preBgColor: colors.grey[900],
          codeBgColor: colors.grey[800],
          codeColor: colors.secondary[400],
          linkColor: colors.secondary[400],
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
          tagBgColor: colors.secondary[400],
        },
        blogs: {
          tagBgColor: colors.secondary[400],
          tagSelectedColor: colors.secondary[600],
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
          fontWeight: 700,
          background: gradients.primary,
          color: colors.white,
          boxShadow: shadows[3],
          borderRadius: borderRadius.large,
          padding: componentTokens.button.paddingSmall,
          transition: `all ${animation.duration.normal} ${animation.easing.standard}`,
          letterSpacing: letterSpacing.large,
          "&:hover": {
            background: gradients.secondary,
            boxShadow: shadows[5],
          },
          "&.MuiButton-contained.Mui-disabled": {
            backgroundColor: colors.grey[200],
            color: colors.grey[400],
          },
        },
        sizeLarge: {
          borderRadius: borderRadius.xLarge,
          fontSize: font.size[5],
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
          border: `${componentTokens.card.borderWidth} solid`,
          borderColor: colors.secondary[200],
          "&:hover": {
            transform: effects.transform.lift,
            boxShadow: componentTokens.card.hoverShadow,
            borderColor: colors.grey[300],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: componentTokens.header.backdropBlur,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: shadows[2],
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
          borderRadius: borderRadius.large,
          fontWeight: 700,
          letterSpacing: letterSpacing.large,
          background: gradients.primary,
          color: colors.white,
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Inter', 'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    ...font.size,
  },
  shape: {
    borderRadius: parseInt(borderRadius.medium),
    radius: borderRadius,
  },
  h1: {
    fontSize: "font.size.10",
    background: "gradients.textGradient",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 800,
  },
  h2: {
    fontSize: "font.size.8",
    fontWeight: 700,
  },
  h3: {
    fontSize: "font.size.7",
    fontWeight: 700,
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows) as Shadows,
  animation,
  effects,
  gradients,
  componentTokens,
});

export default theme;
