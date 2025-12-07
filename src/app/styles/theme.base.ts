"use client";

import { createTheme, darken, Shadows } from "@mui/material";
import {
  borderRadius,
  border,
  colors,
  font,
  letterSpacing,
  lineHeight,
  shadows,
  customShadows,
  spacing,
  animation,
  effects,
  gradients,
  components as componentTokens,
  layout,
  zIndex,
  transitions,
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
          contrastText: colors.white,
          ...colors.primary,
        },
        secondary: {
          main: colors.secondary[600],
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
          default: colors.white,
          paper: colors.white,
        },
        AppBar: {
          defaultBg: componentTokens.header.bgLight,
          backgroundColor: colors.primary[50],
        },
        banner: {
          background: `linear-gradient(180deg, ${colors.primary[50]} 0%, ${colors.primary[50]} 20%, ${colors.grey[50]} 100%)`,
          quoteBackground: `linear-gradient(90deg, ${colors.primary[50]} 0%, transparent 100%)`,
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
          background: `linear-gradient(135deg, ${colors.grey[50]} 0%, ${colors.primary[50]} 100%)`,
          blobPrimary: colors.primary[200],
          blobSecondary: colors.secondary[200],
          blobOpacity: 0.2,
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
        card: {
          borderColor: colors.grey[200],
          borderColorHover: colors.grey[300],
        },
        tag: {
          borderColor: colors.grey[300],
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
          defaultBg: componentTokens.header.bgDark,
          backgroundColor: colors.grey[900],
        },
        banner: {
          background: `linear-gradient(180deg, ${colors.grey[900]} 0%, ${colors.grey[900]} 40%, rgba(79, 70, 229, 0.08) 70%, rgba(100, 116, 139, 0.08) 100%)`,
          quoteBackground: `linear-gradient(90deg, ${colors.grey[800]} 0%, transparent 100%)`,
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
          background: colors.grey[900],
          blobPrimary: colors.primary[800],
          blobSecondary: colors.secondary[800],
          blobOpacity: 0.1,
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
        card: {
          borderColor: colors.grey[700],
          borderColorHover: colors.grey[600],
        },
        tag: {
          borderColor: colors.grey[600],
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
          fontWeight: font.weight.semibold,
          borderRadius: borderRadius.medium,
          padding: componentTokens.button.paddingSmall,
          transition: transitions.all,
          letterSpacing: letterSpacing.large,
          "&:hover": {
            transform: effects.transform.liftSmall,
            boxShadow: customShadows.buttonHover,
          },
          "&.MuiButton-contained.Mui-disabled": {
            backgroundColor: colors.grey[200],
            color: colors.grey[400],
          },
        },
        outlined: {
          borderWidth: border.width.medium,
          "&:hover": {
            borderWidth: border.width.medium,
            backgroundColor: "action.hover",
          },
        },
        sizeLarge: {
          padding: componentTokens.button.paddingLarge,
          fontSize: font.size[4],
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: borderRadius.medium,
          transition: transitions.all,
          border: `${border.width.thin} solid`,
          borderColor: theme.vars.palette.card.borderColor,
          "&:hover": {
            transform: effects.transform.lift,
            boxShadow: customShadows.cardHover,
            borderColor: theme.vars.palette.card.borderColorHover,
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backdropFilter: componentTokens.header.backdropBlur,
          backgroundColor: theme.vars.palette.AppBar.backgroundColor,
          boxShadow: "none",
        }),
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
          fontWeight: font.weight.medium,
          letterSpacing: letterSpacing.large,
          fontSize: font.size[2],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          fontSize: font.size[9],
          fontWeight: font.weight.extrabold,
          lineHeight: lineHeight.tight,
          [theme.breakpoints.up("sm")]: {
            fontSize: font.size[10],
          },
        }),
        h2: ({ theme }) => ({
          fontSize: font.size[8],
          fontWeight: font.weight.bold,
          lineHeight: lineHeight.tight,
          [theme.breakpoints.up("sm")]: {
            fontSize: font.size[9],
          },
        }),
        h3: ({ theme }) => ({
          fontSize: font.size[7],
          fontWeight: font.weight.bold,
          lineHeight: lineHeight.snug,
          [theme.breakpoints.up("sm")]: {
            fontSize: font.size[8],
          },
        }),
        h4: ({ theme }) => ({
          fontSize: font.size[6],
          fontWeight: font.weight.semibold,
          lineHeight: lineHeight.snug,
          [theme.breakpoints.up("sm")]: {
            fontSize: font.size[7],
          },
        }),
        h5: {
          fontSize: font.size[6],
          fontWeight: font.weight.semibold,
          lineHeight: lineHeight.small,
        },
        h6: {
          fontSize: font.size[5],
          fontWeight: font.weight.semibold,
          lineHeight: lineHeight.small,
        },
        body1: {
          fontSize: font.size[4],
          lineHeight: lineHeight.large,
        },
        body2: {
          fontSize: font.size[3],
          lineHeight: lineHeight.medium,
        },
        caption: {
          fontSize: font.size[2],
          lineHeight: lineHeight.medium,
        },
        overline: {
          fontSize: font.size[1],
          fontWeight: font.weight.medium,
          lineHeight: lineHeight.medium,
          textTransform: "uppercase",
          letterSpacing: letterSpacing.xLarge,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          transition: transitions.color,
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.medium,
          transition: transitions.all,
          "&:hover": {
            transform: effects.transform.liftSmall,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            transition: transitions.boxShadow,
            "&:hover": {
              boxShadow: customShadows.inputHover,
            },
            "&.Mui-focused": {
              boxShadow: customShadows.focus,
            },
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: `${borderRadius.large} 0 0 ${borderRadius.large}`,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.medium,
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: inter.style.fontFamily,
    fontWeightLight: font.weight.light,
    fontWeightRegular: font.weight.regular,
    fontWeightMedium: font.weight.medium,
    fontWeightBold: font.weight.bold,
    ...font.size,
  },
  shape: {
    borderRadius: parseInt(borderRadius.medium),
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows) as Shadows,
  customShadows,
  border,
  layout,
  zIndex,
  transitions,
  animation,
  effects,
  gradients,
  componentTokens,
  letterSpacing,
  lineHeight,
  borderRadius,
});

export default theme;
