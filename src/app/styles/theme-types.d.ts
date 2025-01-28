import "@mui/material/styles";
import "@mui/system/typography";
import "@mui/system/createTheme/shape";

type BorderRadius = {
  small: string;
  medium: string;
  large: string;
  pill: string;
  circle: string;
};

type LetterSpacing = {
  large: string;
  xLarge: string;
};

type LineHeight = {
  small: string;
  medium: string;
  large: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    banner: {
      background: string;
    };
    green: Record<string, string>;
    purple: Record<string, string>;
  }

  interface PaletteOptions {
    banner?: {
      background: string;
    };
    blog?: {
      headerBgColor: string;
      h1Color: string;
      preBgColor: string;
      preBorderColor: string;
      codeBgColor: string;
      codeColor: string;
      linkColor: string;
    };
    subscribe?: {
      bgColor: string;
      headerColor: string;
    };
    green?: Record<string, string>;
    purple?: Record<string, string>;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    letterSpacing: LetterSpacing;
    lineHeight: LineHeight;
  }
  interface TypographyOptions {
    letterSpacing?: LetterSpacing;
    lineHeight?: LineHeight;
  }
}

declare module "@mui/system/createTheme/shape" {
  interface Shape {
    radius: BorderRadius;
  }
  interface ShapeOptions {
    radius: BorderRadius;
  }
}
