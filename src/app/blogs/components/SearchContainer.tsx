"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SearchContainerProps {
  children: ReactNode;
}

export default function SearchContainer({ children }: SearchContainerProps) {
  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      sx={{
        pt: 1,
        pb: 7,
        background: (theme) => theme.vars.palette.banner.background,
      }}
    >
      {children}
    </Box>
  );
}
