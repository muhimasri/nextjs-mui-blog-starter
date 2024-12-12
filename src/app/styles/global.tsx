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
          borderRadius: theme.shape.borderRadius.borderRadiusSmall,
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.grey[500],
          borderRadius: theme.shape.borderRadius.borderRadiusMedium,
        },
      },
    })}
  />
);

export default globalStyles;
