"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

interface BlogContentProps {
  mdxContent: ReactNode;
}

export default function BlogContent({ mdxContent }: BlogContentProps) {
  return (
    <Box
      sx={(theme) => ({
        maxWidth: { xs: "100%", md: theme.layout.contentWidth.lg },
        margin: { xs: "auto", lg: "inherit" },
      })}
    >
      <Box
        component="article"
        sx={(theme) => ({
          "& h1": {
            color: "blog.h1Color",
            fontSize: "3",
            fontWeight: theme.typography.fontWeightMedium,
            "&:first-child": {
              mt: 0,
            },
          },
          "& h2, & h3, & h4, & h5, & h6": {
            color: "text.primary",
            fontWeight: theme.typography.fontWeightMedium,
          },
          "& figure": {
            m: 0,
          },
          "& pre": {
            padding: 4,
            borderRadius: theme.borderRadius.medium,
            overflowX: "auto",
            position: "relative",
            backgroundColor: "blog.preBgColor",
            outline: `${theme.border.width.thin} solid`,
            outlineColor: "blog.preBorderColor",
          },
          "& p, & h1, & h2, & h3, & ul": {
            lineHeight: theme.lineHeight.large,
            "& code": {
              backgroundColor: "blog.codeBgColor",
              color: "blog.codeColor",
              borderRadius: theme.shape.borderRadius,
              px: 2,
              py: "0.2rem",
            },
          },
          "& [data-highlighted-line]": {
            "&::before": {
              content: "' '",
              position: "absolute",
              left: 0,
              borderLeft: `${theme.border.width.heavy} solid`,
              borderColor: "secondary.400",
              backgroundColor: "rgb(184 173 255 / 10%)",
              width: "100%",
            },
          },
        })}
      >
        {mdxContent}
      </Box>
    </Box>
  );
}
