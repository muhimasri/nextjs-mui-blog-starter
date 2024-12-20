"use client";

import { backdropClasses, createTheme } from "@mui/material";
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
        },
        AppBar: {
          defaultBg: "white",
        },
        banner: {
          background:
            "linear-gradient(180deg, #fff 10%, var(--mui-palette-purple-50))",
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
        },
        banner: {
          background:
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
  typography: {
    htmlFontSize: 10,
    fontFamily: poppins.style.fontFamily,
    ...letterSpacing,
    ...lineHeight,
    ...font.size,
  },
  shape: {
    borderRadius: 4,
    ...borderRadius,
  },
  spacing: Object.values(spacing),
  shadows: Object.values(shadows),
});

export default theme;

// #98f3bf
// #6767c6

declare module "@mui/material/styles" {
  interface PaletteOptions {
    banner: {
      background: string;
    };
    green: Record<string, string>;
    purple: Record<string, string>;
  }
  interface Palette {
    banner: {
      background: string;
    };
    green: Record<string, string>;
    purple: Record<string, string>;
  }
}

declare module "@mui/material/styles" {
  interface Shape {
    borderRadiusSmall: string;
    borderRadiusMedium: string;
    borderRadiusLarge: string;
    borderRadiusPill: string;
    borderRadiusCircle: string;
  }
}
