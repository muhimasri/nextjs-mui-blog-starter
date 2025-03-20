"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Typography } from "@mui/material";

function TagLine(): JSX.Element {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: { xs: "8", sm: "9" },
        color: "text.primary",
        position: "relative",
        fontWeight: 700,
        lineHeight: (theme) => theme.typography.lineHeight.small,
      }}
    >
      Innovating the Future of{" "}
      <Typography
        fontSize="inherit"
        fontWeight="inherit"
        component="span"
        sx={{ color: "primary.main" }}
      >
        Software Development
      </Typography>
    </Typography>
  );
}

export default TagLine;
