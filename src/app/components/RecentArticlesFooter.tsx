"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function RecentArticlesFooter() {
  return (
    <Stack
      alignItems="center"
      mt={8}
      sx={{ "& > a": { textDecoration: "none" } }}
    >
      <Link href="/blogs/">
        <Typography
          component="span"
          fontSize="5"
          sx={(theme) => ({
            color: "primary.main",
            fontWeight: 600,
            transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              transform: "translateX(8px)",
            },
          })}
        >
          Read More Tutorials →
        </Typography>
      </Link>
    </Stack>
  );
}
