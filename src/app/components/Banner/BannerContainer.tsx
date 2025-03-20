"use client";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

function BannerContainer({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: object;
}) {
  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      sx={{
        pt: { xs: 0, lg: 6 },
        pb: 8,
        background: (theme) => theme.vars.palette.banner.background,
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}

export default BannerContainer;
