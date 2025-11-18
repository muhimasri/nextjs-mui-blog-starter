"use client";
import { Box, Typography } from "@mui/material";

export default function RecentArticlesHeader() {
  return (
    <Box textAlign={{ xs: "left", lg: "center" }} mb={{ xs: 6, lg: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={(theme) => ({
          fontSize: "8",
          color: "text.primary",
          fontWeight: 800,
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: theme.componentTokens.recentArticles.accentBottom,
            left: "50%",
            transform: "translateX(-50%)",
            width: theme.componentTokens.recentArticles.accentWidth,
            height: theme.componentTokens.recentArticles.accentHeight,
            background: theme.gradients.accentBar,
            borderRadius: "100px",
          },
        })}
      >
        Recent Articles
      </Typography>
    </Box>
  );
}
