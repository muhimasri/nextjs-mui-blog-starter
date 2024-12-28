"use client";

import { Box } from "@mui/material";

function SearchContainer({ children }) {
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

export { SearchContainer };
