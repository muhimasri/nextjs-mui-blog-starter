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
  }

  interface PaletteOptions {
    banner?: {
      background: string;
    };
    blog?: {
      headerBgColor: string;
      h1Color: string;
      preBorderColor: string;
      preBgColor: string;
      codeBgColor: string;
      codeColor: string;
      linkColor: string;
    };
    subscribe?: {
      headerColor: string;
    };
    about?: {
      headerTitle: string;
      headerText: string;
      sectionBorder: string;
      sectionTitle: string;
      sectionText: string;
      sectionIcon: string;
    };
    postCard?: {
      tagBgColor: string;
    };
    blogs?: {
      tagBgColor: string;
      tagSelectedColor: string;
    };
    button?: {
      disabledBgColor: string;
      disabledColor: string;
    };
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
