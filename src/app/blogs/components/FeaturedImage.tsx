"use client";

import { Box } from "@mui/material";

interface FeaturedImageProps {
  [key: string]: any;
}

export default function FeaturedImage({ frontmatter }: FeaturedImageProps) {
  return (
    <Box
      component="img"
      src={frontmatter.featuredImage.src}
      alt={frontmatter.featuredImage.alt}
      sx={{
        maxWidth: "500px",
        borderRadius: (theme) => theme.vars.shape.radius.large,
        position: "relative",
        zIndex: 2,
      }}
    />
  );
}
