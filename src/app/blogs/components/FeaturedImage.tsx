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
      sx={(theme) => ({
        maxWidth: theme.layout.image.featuredMaxWidth,
        borderRadius: theme.borderRadius.large,
        position: "relative",
        zIndex: 2,
      })}
    />
  );
}
