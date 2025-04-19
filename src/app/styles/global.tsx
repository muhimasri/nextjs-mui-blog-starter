"use client";
import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        height: "100%",
        fontSize: "62.5%",
        fontFamily: theme.typography.fontFamily,
        "&::-webkit-scrollbar": {
          width: 10,
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: theme.shape.radius.small,
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.grey[500],
          borderRadius: theme.shape.radius.medium,
        },
      },
    })}
  />
);

export default globalStyles;
