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
  tight: string;
  snug: string;
  small: string;
  medium: string;
  large: string;
  relaxed: string;
  loose: string;
};

type Animation = {
  duration: {
    fastest: string;
    fast: string;
    normal: string;
    slow: string;
    slower: string;
  };
  easing: {
    standard: string;
    enter: string;
    exit: string;
    sharp: string;
  };
};

type Effects = {
  blur: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  opacity: {
    subtle: number;
    light: number;
    medium: number;
    strong: number;
    disabled: number;
  };
  transform: {
    liftSmall: string;
    lift: string;
    liftLarge: string;
    scale: string;
    scaleSmall: string;
    rotate: string;
  };
};

type Gradients = {
  primary: string;
  secondary: string;
  primaryToSecondary: string;
  textGradient: string;
  bannerLight: string;
  bannerQuote: string;
  emailSubscription: string;
  accentBar: string;
  accentBarVertical: string;
};

type Border = {
  width: {
    thin: string;
    medium: string;
    thick: string;
    heavy: string;
  };
};

type Layout = {
  contentWidth: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  nav: {
    mobileWidth: string;
    desktopHeight: string;
  };
  image: {
    cardWidth: string;
    cardHeight: string;
    featuredMaxWidth: string;
  };
};

type ZIndex = {
  dropdown: number;
  sticky: number;
  fixed: number;
  modalBackdrop: number;
  modal: number;
  popover: number;
  tooltip: number;
};

type Transitions = {
  color: string;
  transform: string;
  all: string;
  background: string;
  boxShadow: string;
};

type CustomShadows = {
  focus: string;
  inputHover: string;
  tagHover: string;
  cardHover: string;
  buttonHover: string;
};

type ComponentTokens = {
  banner: {
    borderWidth: string;
    borderRadius: string;
    accentWidth: string;
    accentHeight: string;
    quoteBarWidth: string;
  };
  button: {
    paddingSmall: string;
    paddingLarge: string;
    shadowColor: string;
    shadowBlur: string;
    shadowHover: string;
    borderWidth: string;
  };
  card: {
    borderWidth: string;
    accentHeight: string;
    hoverShadow: string;
  };
  header: {
    backdropBlur: string;
    iconBorderRadius: string;
    iconBorderWidth: string;
    bgLight: string;
    bgDark: string;
  };
  postCard: {
    imageRadius: string;
    imagePadding: string;
    accentHeight: string;
  };
  emailSubscription: {
    blobSize: string;
    blobPositionTop: string;
    blobPositionBottom: string;
    blobPositionLeft: string;
    blobPositionRight: string;
    maxWidth: string;
    contentMaxWidth: string;
  };
  footer: {
    accentWidth: string;
    accentHeight: string;
    borderRadius: string;
  };
  tag: {
    borderWidth: string;
    heightSmall: string;
    paddingSmall: string;
    paddingLarge: string;
  };
  input: {
    borderRadius: string;
    paddingVertical: string;
    fontSize: string;
    height: string;
  };
  recentArticles: {
    accentHeight: string;
    accentWidth: string;
    accentBottom: string;
  };
};

declare module "@mui/material/styles" {
  interface Theme {
    animation: Animation;
    effects: Effects;
    gradients: Gradients;
    componentTokens: ComponentTokens;
    customShadows: CustomShadows;
    border: Border;
    layout: Layout;
    zIndex: ZIndex;
    transitions: Transitions;
    letterSpacing: LetterSpacing;
    lineHeight: LineHeight;
    borderRadius: BorderRadius;
  }

  interface ThemeOptions {
    animation?: Animation;
    effects?: Effects;
    gradients?: Gradients;
    componentTokens?: ComponentTokens;
    customShadows?: CustomShadows;
    border?: Border;
    layout?: Layout;
    zIndex?: ZIndex;
    transitions?: Transitions;
    letterSpacing?: LetterSpacing;
    lineHeight?: LineHeight;
    borderRadius?: BorderRadius;
  }

  interface Palette {
    AppBar: {
      defaultBg: string;
      backgroundColor: string;
    };
    banner: {
      background: string;
      quoteBackground: string;
    };
    subscribe: {
      headerColor: string;
      background: string;
    };
    card: {
      borderColor: string;
      borderColorHover: string;
    };
    tag: {
      borderColor: string;
    };
  }

  interface PaletteOptions {
    AppBar?: {
      defaultBg?: string;
      backgroundColor?: string;
    };
    banner?: {
      background: string;
      quoteBackground?: string;
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
      background?: string;
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
    card?: {
      borderColor: string;
      borderColorHover: string;
    };
    tag?: {
      borderColor: string;
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
