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
        sx={(theme) => ({
          background: theme.gradients.primaryToSecondary,
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
            height: theme.componentTokens.banner.accentHeight,
            background: theme.gradients.accentBarVertical,
            borderRadius: "100px",
            opacity: theme.effects.opacity.subtle,
          },
        })}
      >
        Software Development
      </Typography>
    </Typography>
  );
}

export default TagLine;
