"use client";

import { Box } from "@mui/material";

function SearchContainer({ children }) {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      sx={{
        pt: 1,
        pb: 7,
        background: (theme) => theme.vars.palette.banner.background,
      }}
    >
      {children}
    </Box>
  );
}

function FeaturedImage({ frontmatter }) {
  return (
    <Box
      component="img"
      src={frontmatter.featuredImage.src}
      alt={frontmatter.featuredImage.alt}
      sx={{
        maxWidth: "600px",
        borderRadius: (theme) => theme.vars.shape.radius.large,
        position: "relative",
        zIndex: 2,
      }}
    />
  );
}

function BlogContent({ mdxContent }) {
  return (
    <Box sx={{ maxWidth: "720px" }}>
      <Box
        component="article"
        sx={{
          "& h1": {
            color: "secondary.main",
            fontSize: "8",
            fontWeight: "600",
            "&:first-child": {
              mt: 0,
            },
          },
          "& h2, & h3, & h4, & h5, & h6": {
            color: "text.primary",
            fontWeight: "500",
          },
          "& figure": {
            m: 0,
          },
          "& pre": {
            padding: 4,
            borderRadius: (theme) => theme.vars.shape.radius.medium,
            overflowX: "auto",
          },
          "& p": {
            lineHeight: (theme) => theme.typography.lineHeight.large,
            "& code": {
              backgroundColor: "purple.50",
              color: "purple.400",
              borderRadius: (theme) => theme.vars.shape.radius.medium,
              px: 2,
              py: "0.2rem",
            },
          },
        }}
      >
        {mdxContent}
      </Box>
    </Box>
  );
}

export { SearchContainer, FeaturedImage, BlogContent };
