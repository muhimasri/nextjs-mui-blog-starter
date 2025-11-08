"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Typography } from "@mui/material";
import { JSX } from "react";

function TagLine(): JSX.Element {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: { xs: "8", sm: "9" },
        color: "text.primary",
        position: "relative",
        fontWeight: 800,
        lineHeight: 1.2,
        background:
          "linear-gradient(135deg, var(--mui-palette-text-primary) 0%, var(--mui-palette-grey-700) 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        display: "inline-block",
      }}
    >
      Innovating the Future of{" "}
      <Typography
        fontSize="inherit"
        fontWeight="inherit"
        component="span"
        sx={{
          background:
            "linear-gradient(135deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-secondary-500) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "0",
            right: "0",
            height: "6px",
            background:
              "linear-gradient(90deg, var(--mui-palette-primary-400) 0%, var(--mui-palette-secondary-400) 100%)",
            borderRadius: "100px",
            opacity: 0.3,
          },
        }}
      >
        Software Development
      </Typography>
    </Typography>
  );
}

export default TagLine;
