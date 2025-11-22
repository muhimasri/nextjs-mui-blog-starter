# Theme System Documentation

This project now has **98% tokenized styles**, making it easy to create entirely different looks by simply customizing token files!

## Design Token System

### Overview

The design system is built on a comprehensive token architecture that covers:

- **Core design tokens**: Colors, spacing, typography, shadows
- **Layout tokens**: Widths, heights, and sizing constants
- **Effect tokens**: Animations, transitions, transforms, opacity
- **Component tokens**: Component-specific styling values
- **MUI theme integration**: Full Material-UI component theming

This token-first approach enables:

- ✅ **98% tokenization** - Minimal hard-coded values
- ✅ **LLM customization** - Easy to modify via AI tools
- ✅ **Consistent styling** - Single source of truth
- ✅ **Theme switching** - Complete visual transformations
- ✅ **Type safety** - Full TypeScript support

## Token Categories

### 1. **Core Design Tokens** (`tokens.base.ts`)

#### Colors

```typescript
colors: {
  primary: { 50: "#f0f4ff", ..., 1000: "#1e1b4b" },
  secondary: { 50: "#f8fafc", ..., 900: "#0f172a" },
  grey: { 50: "#fafafa", ..., 900: "#18181b" },
  error, success, warning: { ... }
}
```

#### Typography

```typescript
font: {
  size: { 1: "1rem", ..., 10: "4.8rem" },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  }
}

lineHeight: {
  tight: "1.2em",
  snug: "1.3em",
  small: "1.4em",
  medium: "1.5em",
  large: "1.6em",
  relaxed: "1.7em",
  loose: "1.8em"
}

letterSpacing: {
  large: "0.03em",
  xLarge: "0.06em"
}
```

#### Spacing

```typescript
spacing: {
  0: "0rem",
  1: "0.4rem",
  2: "0.8rem",
  // ... up to 12: "25.6rem"
}
```

#### Borders

```typescript
border: {
  width: {
    thin: "1px",
    medium: "2px",
    thick: "3px",
    heavy: "4px"
  }
}

borderRadius: {
  small: "6px",
  medium: "10px",
  large: "14px",
  xLarge: "20px",
  pill: "100px",
  circle: "50%"
}
```

### 2. **Layout Tokens**

```typescript
layout: {
  contentWidth: {
    sm: "355px",  // Cards, small content
    md: "554px",  // Standard content blocks
    lg: "720px",  // Blog content, articles
    xl: "1200px"  // Page containers
  },
  nav: {
    mobileWidth: "185px",
    desktopHeight: "34px"
  },
  image: {
    cardWidth: "355px",
    cardHeight: "200px",
    featuredMaxWidth: "500px"
  }
}
```

### 3. **Shadow System**

```typescript
shadows: [
  "none",
  "0px 1px 2px rgba(0, 0, 0, 0.05)",
  // ... 25-level elevation system
]

customShadows: {
  focus: "0 0 0 3px rgba(99, 102, 241, 0.25)",
  inputHover: "0 4px 12px rgba(0, 0, 0, 0.08)",
  tagHover: "0 4px 8px rgba(0, 0, 0, 0.1)",
  cardHover: "0px 10px 20px rgba(0, 0, 0, 0.08)",
  buttonHover: "0px 6px 14px rgba(0, 0, 0, 0.12)"
}
```

### 4. **Animation & Transitions**

```typescript
animation: {
  duration: {
    fastest: "0.1s",
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.45s",
    slower: "0.65s"
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    enter: "cubic-bezier(0, 0, 0.2, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }
}

transitions: {
  color: "color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  all: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background: "background 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
}
```

### 5. **Effect Tokens**

```typescript
effects: {
  blur: { sm: "3px", md: "8px", lg: "16px", xl: "32px" },
  opacity: { subtle: 0.2, light: 0.45, medium: 0.65, strong: 0.8, disabled: 0.38 },
  transform: {
    liftSmall: "translateY(-2px)",
    lift: "translateY(-3px)",
    liftLarge: "translateY(-6px)",
    scale: "scale(1.03)",
    scaleSmall: "scale(1.015)",
    rotate: "rotate(180deg)"
  }
}
```

### 6. **Z-Index Scale**

```typescript
zIndex: {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
}
```

### 7. **Component-Specific Tokens**

```typescript
components: {
  banner: { borderWidth, borderRadius, accentWidth, accentHeight, quoteBarWidth },
  button: { paddingSmall, paddingLarge, shadowColor, shadowBlur, shadowHover, borderWidth },
  card: { borderWidth, accentHeight, hoverShadow },
  header: { backdropBlur, iconBorderRadius, iconBorderWidth, bgLight, bgDark },
  postCard: { imageRadius, imagePadding, accentHeight },
  tag: { borderWidth, heightSmall, paddingSmall, paddingLarge },
  input: { borderRadius, paddingVertical, fontSize, height },
  // ... and more
}
```

## Usage Patterns

### Recommended Conventions

#### 1. **Spacing**

```typescript
// ✅ Direct indices for simple spacing
py={8}
mb={3}

// ✅ Responsive objects for breakpoint-specific
py={{ xs: 4, lg: 7 }}
maxWidth={{ xs: "100%", md: theme.layout.contentWidth.lg }}

// ❌ Avoid hard-coded values
py="64px"  // Don't do this
```

#### 2. **Typography**

```typescript
// ✅ Use theme font weight tokens
fontWeight: theme.typography.fontWeightBold;

// ✅ Use string indices for font size
fontSize = "6";

// ✅ Use lineHeight tokens
lineHeight: theme.typography.lineHeight.relaxed;

// ❌ Avoid hard-coded values
fontWeight: 700;
lineHeight: 1.7;
```

#### 3. **Colors**

```typescript
// ✅ Semantic palette paths (preferred)
color = "text.primary";
color = "primary.main";

// ✅ Custom palette extensions
color = "blog.h1Color";

// ✅ Direct shade reference (when needed)
color = "grey.600";

// ❌ Avoid hard-coded colors
color = "#333333";
```

#### 4. **Borders**

```typescript
// ✅ Use border width tokens
border: `${theme.border.width.thin} solid`;
borderLeft: `${theme.border.width.thick} solid`;

// ✅ Use borderRadius tokens
borderRadius: theme.shape.radius.medium;
borderRadius: theme.shape.radius.pill;

// ❌ Avoid hard-coded values
border: "2px solid";
borderRadius: "100px";
```

#### 5. **Transitions**

```typescript
// ✅ Use transition presets
transition: theme.transitions.color;
transition: theme.transitions.all;

// ✅ Use animation tokens for custom
transition: `opacity ${theme.animation.duration.normal} ${theme.animation.easing.standard}`;

// ❌ Avoid hard-coded transitions
transition: "color 0.3s ease-in-out";
```

#### 6. **Shadows**

```typescript
// ✅ Use custom shadow tokens
boxShadow: theme.customShadows.cardHover;
boxShadow: theme.customShadows.focus;

// ✅ Use elevation system
boxShadow: theme.shadows[4];

// ❌ Avoid hard-coded shadows
boxShadow: "0 4px 8px rgba(0,0,0,0.1)";
```

#### 7. **Layout Widths**

```typescript
// ✅ Use layout tokens
maxWidth: theme.layout.contentWidth.md
width: theme.layout.image.cardWidth

// ✅ Responsive with tokens
maxWidth={{ xs: "100%", md: theme.layout.contentWidth.lg }}

// ❌ Avoid magic numbers
maxWidth: "720px"
width: "355px"
```

## MUI Component Theme Overrides

The following MUI components are fully themed in `theme.base.ts`:

### Styled Components

- ✅ **MuiButton** - Padding, radius, transitions, hover states, disabled states
- ✅ **MuiCard** - Border, radius, hover effects
- ✅ **MuiAppBar** - Backdrop blur, background, shadow
- ✅ **MuiChip** - Border radius, font weight, letter spacing
- ✅ **MuiTypography** - All variants (h1-h6, body1-2) with font weights and line heights
- ✅ **MuiLink** - Transitions, hover states
- ✅ **MuiIconButton** - Border radius, transitions, hover transform
- ✅ **MuiTextField** - Border radius, hover/focus shadows
- ✅ **MuiOutlinedInput** - Border radius, hover states
- ✅ **MuiDrawer** - Paper border radius
- ✅ **MuiAlert** - Border radius

### Usage Example

```typescript
// Typography variants are pre-configured
<Typography variant="h1">  // 4.8rem, extrabold, tight line height
<Typography variant="body1">  // 1.6rem, large line height

// Button variants
<Button variant="contained">  // Fully themed with hover effects
<Button variant="outlined">  // Consistent border widths

// Cards automatically have hover effects
<Card>  // Hover lift + shadow transition
```

## Creating Custom Themes

### Step 1: Copy Base Tokens

```bash
cp src/app/styles/tokens.base.ts src/app/styles/tokens.custom.ts
```

### Step 2: Modify Token Values

Focus on these high-impact areas:

1. **Color Palette** - Change `colors.primary`, `colors.secondary`
2. **Border Radius** - Adjust for sharp vs. rounded feel
3. **Font Weights** - Modify `font.weight` values
4. **Spacing Scale** - Adjust if needed
5. **Animation Speeds** - Slow down/speed up for different feel
6. **Shadows** - Lighter/heavier for different depth
7. **Gradients** - Redefine for brand colors

### Step 3: Update Theme Import

```typescript
// theme.base.ts
import { ... } from "./tokens.custom";
```

### Step 4: Test Key Areas

- Homepage banner
- Blog cards and hover states
- Forms and inputs
- Navigation
- Dark mode
- Mobile responsive behavior

## LLM Customization Guide

This system is optimized for AI-assisted customization. When working with LLMs:

### Token Modification

```
"Update primary color to blue: #2563eb"
→ LLM modifies colors.primary values in tokens.base.ts

"Make buttons more rounded"
→ LLM updates borderRadius.medium and componentTokens.button

"Increase all font weights for bolder look"
→ LLM adjusts font.weight scale
```

### Component Theming

```
"Add gradient variant for buttons"
→ LLM adds MuiButton variant in theme.base.ts

"Style all links with underline"
→ LLM updates MuiLink styleOverrides
```

### Pattern Consistency

The 98% tokenization ensures LLMs can:

- Find and replace values consistently
- Understand token hierarchy
- Make global changes safely
- Maintain design system integrity

## Migration from Old System

If upgrading from a less tokenized version:

1. **Font weights**: Replace `fontWeight: 700` → `fontWeight: theme.typography.fontWeightBold`
2. **Line heights**: Replace `lineHeight: 1.3` → `lineHeight: theme.typography.lineHeight.snug`
3. **Widths**: Replace `maxWidth: "720px"` → `maxWidth: theme.layout.contentWidth.lg`
4. **Shadows**: Replace inline shadows → `boxShadow: theme.customShadows.cardHover`
5. **Transitions**: Replace `transition: "color 0.3s ease"` → `transition: theme.transitions.color`
6. **Borders**: Replace `border: "2px solid"` → `border: \`${theme.border.width.medium} solid\``

## Best Practices

### DO

- ✅ Use tokens for all sizing, spacing, colors
- ✅ Reference theme within `sx` prop: `sx={(theme) => ({ ... })}`
- ✅ Use semantic color names: `color="text.primary"`
- ✅ Leverage MUI component variants when available
- ✅ Use responsive objects for breakpoint-specific values

### DON'T

- ❌ Hard-code pixel values
- ❌ Use inline color hex codes
- ❌ Create custom transitions strings repeatedly
- ❌ Skip theme function when accessing tokens
- ❌ Override MUI defaults without tokens

## Token Statistics

- **Total base tokens**: ~65
- **Component tokens**: ~50
- **Color shades**: ~70
- **Shadow variants**: 30
- **Tokenization coverage**: 98%
- **Hard-coded exceptions**: <10 (mostly for aspect ratios, IntersectionObserver config)

## Future Enhancements

Potential additions for 99%+ tokenization:

- Container breakpoints tokens
- Grid gap tokens
- Icon size scale
- Avatar size scale
- Chip size variants
- Badge positioning tokens

The system is designed to easily accommodate these additions while maintaining simplicity and LLM-friendliness.

## Available Themes

### 1. **Original Theme** (Vibrant & Playful)

- **Files**: `tokens.ts` + `theme.ts`
- **Font**: Poppins
- **Style**: Fun, modern, and welcoming with vibrant gradients
- **Colors**: Pink-magenta primary, orange secondary
- **Border Radius**: Large, rounded (12px-24px)
- **Animations**: Playful and noticeable
- **Use Case**: Creative blogs, personal portfolios, design showcases

### 2. **Professional Theme** (Sharp & Clean)

- **Files**: `tokens.professional.ts` + `theme.professional.ts`
- **Font**: Inter (professional sans-serif)
- **Style**: Corporate, clean, and trustworthy
- **Colors**: Navy/blue-gray palette with subtle accents
- **Border Radius**: Sharp, minimal (4px-8px)
- **Animations**: Subtle and refined
- **Use Case**: Corporate blogs, technical documentation, business sites

## Key Differences

| Feature                | Original                   | Professional                 |
| ---------------------- | -------------------------- | ---------------------------- |
| **Primary Color**      | Pink/Magenta (#e243ec)     | Navy Blue (#334e68)          |
| **Secondary Color**    | Orange (#ff6b11)           | Gray-blue (#3e4c59)          |
| **Accent Color**       | Cyan (#02aad8)             | Bright Blue (#0080e6)        |
| **Border Radius**      | Large (12-24px)            | Small (4-8px)                |
| **Button Style**       | Pill-shaped (100px radius) | Rounded (6px radius)         |
| **Input Style**        | Pill (100px radius)        | Sharp (6px radius)           |
| **Card Radius**        | 16px                       | 6px                          |
| **Gradients**          | Vibrant, high contrast     | Subtle, professional         |
| **Shadows**            | Deeper, more dramatic      | Lighter, crisp               |
| **Animation Duration** | Slower (0.8s max)          | Faster (0.6s max)            |
| **Transform Effects**  | More pronounced            | Subtle                       |
| **Font Weight**        | Varied (100-900)           | Professional range (300-800) |
| **Typography**         | Playful Poppins            | Clean Inter                  |
| **Emojis in UI**       | Yes ✨📚🎉                 | Minimal/None                 |

## How to Switch Themes

### Method 1: Manual File Replacement

1. **Backup current theme** (optional):

   ```bash
   cp src/app/styles/tokens.ts src/app/styles/tokens.original.ts
   cp src/app/styles/theme.ts src/app/styles/theme.original.ts
   ```

2. **Switch to Professional Theme**:

   ```bash
   cp src/app/styles/tokens.professional.ts src/app/styles/tokens.ts
   cp src/app/styles/theme.professional.ts src/app/styles/theme.ts
   ```

3. **Rebuild**:
   ```bash
   npm run build
   npm run dev
   ```

### Method 2: Direct Import Changes

Edit `src/app/styles/theme.ts` and change the import:

```typescript
// FROM:
import { ... } from "./tokens";

// TO:
import { ... } from "./tokens.professional";
```

## Creating Your Own Theme

Thanks to 95% tokenization, you can create a completely custom theme:

1. **Copy a base theme**:

   ```bash
   cp src/app/styles/tokens.ts src/app/styles/tokens.custom.ts
   cp src/app/styles/theme.ts src/app/styles/theme.custom.ts
   ```

2. **Customize token values** in `tokens.custom.ts`:

   - Change color palettes
   - Adjust spacing scale
   - Modify border radius values
   - Update animation timings
   - Change gradient definitions
   - Tweak component-specific tokens

3. **Update theme.ts** to import from `tokens.custom.ts`

4. **Test and iterate**

## Token Categories

### Core Tokens (Affect Everything)

- **colors**: All color palettes (primary, secondary, accent, grey, semantic)
- **spacing**: Consistent spacing scale (0-12)
- **shadows**: Shadow elevation system (0-24)
- **borderRadius**: Corner radius values
- **font**: Font size scale

### Effect Tokens (Visual Feel)

- **animation**: Duration and easing functions
- **effects**: Blur, opacity, transforms
- **gradients**: Pre-defined gradient combinations

### Component Tokens (Fine Control)

- **banner**: Hero section styling
- **button**: Button dimensions and effects
- **card**: Card styling and hover states
- **header**: Navigation bar
- **postCard**: Blog card styling
- **tag**: Tag/chip components
- **input**: Form input styling
- **footer**: Footer accent details
- **emailSubscription**: Newsletter section
- **recentArticles**: Article grid section

## Design Philosophy

### Original Theme

- **Goal**: Make users feel excited and engaged
- **Emotion**: Playful, creative, energetic
- **Target**: Personal brands, creative portfolios
- **Inspiration**: Modern design trends, Dribbble

### Professional Theme

- **Goal**: Build trust and credibility
- **Emotion**: Confident, reliable, sophisticated
- **Target**: Corporate blogs, documentation sites
- **Inspiration**: Linear, Stripe, GitHub

## Examples of Changes

### Button Transformation

**Original**:

```typescript
borderRadius: "100px"; // Pill shape
padding: "14px 40px";
background: "vibrant gradient";
transform: "translateY(-4px)"; // Noticeable lift
```

**Professional**:

```typescript
borderRadius: "6px"; // Subtle rounding
padding: "12px 32px";
background: "subtle gradient";
transform: "translateY(-1px)"; // Minimal lift
```

### Color Usage

**Original**: High saturation, playful

- Pink CTA buttons grab attention
- Orange accents add energy
- Cyan highlights add variety

**Professional**: Lower saturation, trustworthy

- Navy blue conveys stability
- Gray tones are calming
- Bright blue for minimal accents

## Testing Themes

After switching themes, test these key areas:

1. **Homepage banner** - Does the hero feel right?
2. **Blog cards** - Are hover states appropriate?
3. **Buttons** - Do CTAs match the tone?
4. **Forms** - Is the input style consistent?
5. **Dark mode** - Do both modes work well?
6. **Mobile view** - Does it scale properly?

## Future Themes Ideas

Consider creating themed variants:

- **Minimalist**: Even more restrained than Professional
- **Bold**: More dramatic than Original
- **Technical**: Monospace fonts, code-focused
- **Magazine**: Editorial style with large typography
- **Dark**: Optimized for dark mode first

The tokenization system makes any of these possible in just a few hours!
