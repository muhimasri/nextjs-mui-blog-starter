"use client";
import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        height: "100%",
        fontSize: "62.5%",
        fontFamily: theme.typography.fontFamily,
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
          width: 12,
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.grey[400],
          borderRadius: "100px",
          border: "3px solid transparent",
          backgroundClip: "padding-box",
          transition: "background 0.3s ease",
          "&:hover": {
            background: theme.palette.grey[500],
            backgroundClip: "padding-box",
          },
        },
      },
      body: {
        overflowX: "hidden",
      },
      "*": {
        boxSizing: "border-box",
      },
      "::selection": {
        backgroundColor: "var(--mui-palette-primary-200)",
        color: "var(--mui-palette-primary-900)",
      },
      "@keyframes fadeInUp": {
        from: {
          opacity: 0,
          transform: "translateY(20px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      "@keyframes pulse": {
        "0%, 100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.8,
        },
      },
    })}
  />
);

export default globalStyles;
