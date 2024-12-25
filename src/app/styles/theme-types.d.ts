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
    green?: Record<string, string>;
    purple?: Record<string, string>;
  }
}

declare module "@mui/system/typography";
{
  interface Typography {
    letterSpacing: LetterSpacing;
  }

  interface TypographyOptions {
    letterSpacing: LetterSpacing;
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
