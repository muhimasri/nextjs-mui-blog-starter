# Technologies and Tools

This project leverages the following technologies and tools to build a modern, responsive, and feature-rich blog application:

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Material-UI (MUI)**: A popular React UI framework for building responsive and accessible user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling and error checking.
- **MDX**: A format that allows you to write JSX in Markdown, enabling the use of React components in blog posts.
- **rehype-pretty-code**: A plugin for syntax highlighting in code blocks within MDX files.
- **CSS Variables**: Used for dynamic styling and theme management.

## Running the Project

To run the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd nextjs-mui-blog-starter
   ```

2. **Install Dependencies**:
   Use your preferred package manager (e.g., npm or yarn) to install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:
   Run the following command to start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

4. **Build for Production**:
   To create an optimized production build, use the following command:

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Run the Production Build**:
   After building the project, you can start the production server with:

   ```bash
   npm start
   # or
   yarn start
   ```

6. **Linting and Formatting**:
   To check for linting errors and format the code, use:
   ```bash
   npm run lint
   npm run format
   # or
   yarn lint
   yarn format
   ```

By following these steps, you can set up and run the project locally for development or production purposes.

# Developer Guide for Next.js Blog Template with MUI

This guide provides an overview of the project structure and styling system to help developers navigate, understand, and extend the codebase efficiently.

## Project Structure Guide

This section provides an overview of the project structure, explaining the purpose of each folder and file to help developers navigate and understand the codebase.

### Overview

The project is organized into the following main directories:

- `content/`: Contains the blog posts written in MDX format.
- `public/`: Stores static assets like images and videos.
- `src/`: Contains the source code for the application, including components, pages, and styles.

---

### content/

The `content/` directory holds all the blog posts. Each blog post is stored in its own folder, with a `page.mdx` file containing the content and frontmatter metadata (e.g., title, description, date, tags).

#### Example Structure:

```
content/
  react-usestate/
    page.mdx
  react-useeffect/
    page.mdx
  css-border/
    page.mdx
```

#### Key Features:

- **Frontmatter**: Metadata like `title`, `description`, `date`, and `tags` is defined at the top of each MDX file.
- **Dynamic Routing**: Blog posts are dynamically routed based on their folder names.

---

### public/

The `public/` directory contains static assets that are directly accessible via the browser. This includes images, videos, and other media files.

#### Example Structure:

```
public/
  images/
    banner-image.jpg
    css-border.jpg
    react-usestate.jpg
```

#### Key Features:

- **Static Assets**: Files in this directory are served as-is and can be referenced using relative paths (e.g., `/images/banner-image.jpg`).

---

### src/

The `src/` directory contains the core application code, organized into subdirectories for components, pages, and styles.

#### app/

The `app/` directory follows the Next.js App Router structure, with subdirectories for each route and shared components.

##### Key Subdirectories:

- **`about/`**: Contains the `About` page and its components.

  - `page.tsx`: The main entry point for the `About` page.
  - `components/`: Includes reusable components like `AboutHeader` and `AboutSectionsGrid`.

- **`blogs/`**: Contains the `Blogs` page and dynamic blog post pages.

  - `page.tsx`: Lists all blog posts with filtering options.
  - `[slug]/`: Dynamic route for individual blog posts.
    - `page.tsx`: Fetches and renders the content of a specific blog post.
  - `components/`: Includes blog-specific components like `SearchContainer` and `FeaturedImage`.

- **`components/`**: Contains shared components used across the application.

  - `Header.tsx`: The main navigation header.
  - `Footer/`: Includes footer components like `SocialLinks` and `Copyright`.
  - `Banner/`: Contains components for the homepage banner.

- **`styles/`**: Contains styling-related files.

  - `tokens.ts`: Defines design tokens like colors, spacing, and typography.
  - `theme.ts`: Configures the Material-UI theme using the design tokens.
  - `global.tsx`: Defines global CSS styles.

- **`fonts/`**: Stores custom font files used in the application.

#### Example Structure:

```
src/
  app/
    about/
      page.tsx
      components/
        AboutHeader.tsx
        AboutSectionsGrid.tsx
    blogs/
      page.tsx
      [slug]/
        page.tsx
      components/
        SearchContainer.tsx
        FeaturedImage.tsx
    components/
      Header.tsx
      Footer/
        SocialLinks.tsx
      Banner/
        BannerContainer.tsx
    styles/
      tokens.ts
      theme.ts
      global.tsx
```

---

## Blog System

This section provides a detailed explanation of how the blog system works, including its structure, features, and how to add new blog posts.

### Blog Pages

#### All Blogs Page

The `Blogs` page (`src/app/blogs/page.tsx`) displays a list of all blog posts with filtering options based on tags.

- **Tag Filtering**: Users can filter blogs by clicking on tags. The selected tag is passed as a query parameter (`?tag=tagName`) to filter the displayed blogs.
- **Dynamic Data**: Blog data is fetched from the `content/` directory, where each blog post is stored in its own folder with a `page.mdx` file.
- **Components Used**:
  - `PostCard`: Displays a preview of each blog post, including the title, description, tags, and featured image.
  - `Tag`: Renders clickable tags for filtering.
  - `SearchContainer`: Wraps the search and filtering UI.

#### Blog Post Page

The dynamic blog post page (`src/app/blogs/[slug]/page.tsx`) renders the content of a specific blog post based on its `slug`.

- **Features**:
  - **Table of Contents**: Automatically generated from the headings in the blog post.
  - **Code Syntax Highlighting**: Uses the `rehype-pretty-code` plugin for styled code blocks.
  - **Frontmatter**: Metadata like `title`, `description`, `date`, and `tags` is extracted from the MDX file.
  - **MDX Support**: Allows embedding React components directly in the blog content.
  - **Interactive Components**: Includes reusable React components like `Counter` for interactive examples.
  - **Tags**: Displays tags associated with the blog post, linking to filtered blog lists.

### Adding a New Blog Post

To add a new blog post:

1. **Create a Folder**: Add a new folder under the `content/` directory. The folder name will be used as the `slug` for the blog post.
2. **Add an MDX File**: Create a `page.mdx` file inside the folder.
3. **Define Frontmatter**: Add metadata at the top of the MDX file:

   ```mdx
   ---
   title: "Your Blog Title"
   description: "A brief description of the blog post."
   date: "2025-03-29"
   tags: "tag1, tag2, tag3"
   featuredImage: "/images/your-image.jpg"
   ---
   ```

4. **Write Content**: Add the blog content below the frontmatter. You can include Markdown, code blocks, and React components.

5. **Add a Featured Image**: Place the image in the `public/images/` directory and reference it in the `featuredImage` field of the frontmatter.

6. **Test the Blog Post**: Run the development server and navigate to `/blogs/[slug]` to view the new blog post.

---

By following this guide, developers can easily manage and extend the blog system, ensuring a seamless experience for both authors and readers.

---

## Styling Guide

This section explains the structure and usage of the styling files in this project, specifically `tokens.ts`, `theme.ts`, and `global.tsx`. These files are essential for managing the design system and ensuring consistent styling across the application.

### tokens.ts

The `tokens.ts` file defines the foundational design tokens for the project. These tokens are reusable values that represent the core design elements, such as colors, typography, spacing, and shadows. They are used throughout the application to maintain consistency.

#### Key Exports

- **Colors**: Defines color palettes for green, purple, grey, error, and success states. Each color has multiple shades (e.g., `100`, `200`, etc.) for flexibility.
- **Font Sizes**: Provides a range of font sizes, from `1rem` to `4.8rem`, for typography.
- **Spacing**: Specifies spacing values in `rem` units, ranging from `0rem` to `25.6rem`.
- **Shadows**: Includes an array of shadow styles for different elevation levels.
- **Border Radius**: Defines border radius values for small, medium, large, pill, and circle shapes.
- **Letter Spacing**: Contains predefined letter spacing values for large and extra-large spacing.
- **Line Height**: Provides line height values for small, medium, and large text.

These tokens are imported into other files, such as `theme.ts`, to build the design system.

---

### theme.ts

The `theme.ts` file creates the Material-UI theme for the project. It uses the design tokens from `tokens.ts` to define the light and dark color schemes, typography, component styles, and other theme properties.

#### Key Features

1. **Color Schemes**:

   - **Light Mode**: Defines the primary, secondary, and common colors, as well as text and background colors for the light theme.
   - **Dark Mode**: Specifies the same properties for the dark theme, with darker shades and higher contrast.

2. **Component Overrides**:

   - **MuiButton**: Customizes the button styles, including text transformation and disabled states.
   - **MuiCard**: Sets the default elevation to `0`.
   - **MuiOutlinedInput**: Adjusts the hover state for input fields.

3. **Typography**:

   - Sets the base font size to `10px` for easier `rem` calculations.
   - Uses the Poppins font family for all text.
   - Incorporates letter spacing and line height values from `tokens.ts`.

4. **Shape and Spacing**:

   - Defines border radius values and spacing options using the tokens.

5. **Shadows**:
   - Maps the shadow styles from `tokens.ts` to the Material-UI theme.

The theme is exported and used throughout the application to provide consistent styling.

---

### global.tsx

The `global.tsx` file defines global CSS styles for the application using Material-UI's `GlobalStyles` component. These styles apply to the entire application and ensure a consistent base styling.

#### Key Styles

- **HTML**:

  - Sets the height to `100%` and the font size to `62.5%` (10px base for `rem` units).
  - Applies the Poppins font family from the theme.

- **Scrollbar**:
  - Customizes the scrollbar width, track, and thumb styles using the theme's border radius and color tokens.

These global styles are imported into the application to provide a consistent base for all pages and components.

### Component Styling

The component styling in this project leverages the power of Material-UI (MUI) 6 and its integration with the design tokens defined in the `theme.ts` file. Below are the key aspects of how component styling is implemented:

#### Using Tokens from the Theme

Tokens from the theme, such as `borderColor: "purple.100"` or `color: "text.primary"`, are used extensively to ensure consistent styling across components. These tokens are defined in the `theme.ts` file and provide a centralized way to manage design elements like colors, spacing, and typography. For example:

```tsx
sx={{
  borderColor: "purple.100",
  color: "text.primary",
}}
```

This approach ensures that any changes to the theme are automatically reflected across all components.

#### Font Sizes as Numbers

Font sizes can be specified using numbers because the `font.size` object is spread into the `typography` property of the theme. This allows developers to use shorthand syntax for font sizes, making the code more concise and readable. For example:

```tsx
sx={{
  fontSize: "4", // Maps to a specific font size defined in the theme
}}
```

#### CSS Variables and Dynamic Styling

MUI 6 automatically converts theme tokens into CSS variables, making it easier to implement dynamic styling. For example, a token like `button.disabledBgColor` in the theme is converted to a CSS variable such as `var(--mui-palette-button-disabledBgColor)`. These variables can be directly used in CSS files if needed, providing flexibility for custom styling outside of the MUI system. For instance:

```css
.my-custom-class {
  background-color: var(--mui-palette-button-disabledBgColor);
}
```

This feature is particularly powerful for supporting light and dark modes, as the CSS variables are updated based on the active color scheme. For example:

```css
--mui-palette-text-primary: #333333; /* Light mode */
--mui-palette-text-primary: #ffffff; /* Dark mode */
```

This dynamic behavior ensures that components adapt seamlessly to different themes while also allowing developers to leverage the CSS variables in custom styles.

#### Responsive Design

Responsive design is achieved using MUI's breakpoint system, which allows developers to specify styles for different screen sizes. Breakpoints like `xs`, `md`, and `lg` are used to define styles for mobile, tablet, and desktop views. For example:

```tsx
sx={{
  display: { xs: "block", md: "flex" },
  fontSize: { xs: "3", lg: "4" },
}}
```

This approach ensures that components are optimized for various devices and screen sizes.

#### Using Functions for Certain Properties

In some cases, properties like `lineHeight` are defined using functions instead of shorthand syntax. For example:

```tsx
lineHeight: (theme) => theme.typography.lineHeight.large,
```

This is necessary because MUI's system does not yet support shorthand syntax for all CSS properties. Using a function ensures that the correct value is retrieved from the theme, providing greater flexibility and compatibility.
