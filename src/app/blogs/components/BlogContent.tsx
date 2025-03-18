"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

interface BlogContentProps {
  mdxContent: ReactNode;
}

export default function BlogContent({ mdxContent }: BlogContentProps) {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "720px" },
        margin: { xs: "auto", lg: "inherit" },
      }}
    >
      <Box
        component="article"
        sx={{
          "& h1": {
            color: "blog.h1Color",
            fontSize: "2.8rem",
            fontWeight: 500,
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
            position: "relative",
            backgroundColor: "common.background",
            outline: "1px solid",
            outlineColor: "blog.preBorderColor",
          },
          "& p, & h1, & h2, & h3, & ul": {
            lineHeight: (theme) => theme.typography.lineHeight.large,
            "& code": {
              backgroundColor: "blog.codeBgColor",
              color: "blog.codeColor",
              borderRadius: (theme) => theme.vars.shape.radius.medium,
              px: 2,
              py: "0.2rem",
            },
          },
          "& [data-highlighted-line]": {
            "&::before": {
              content: "' '",
              position: "absolute",
              left: 0,
              borderLeft: "4px solid",
              borderColor: "purple.400",
              backgroundColor: "rgb(184 173 255 / 10%)",
              width: "100%",
            },
          },
        }}
      >
        {mdxContent}
      </Box>
    </Box>
  );
}
