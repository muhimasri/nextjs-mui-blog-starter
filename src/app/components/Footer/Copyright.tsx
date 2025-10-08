import React, { JSX } from "react";
import { Typography, Link } from "@mui/material";

const Copyright = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" mt={2}>
      © {currentYear} Mareli Ramos™ |{" "}
      <Link href="/terms" color="inherit" underline="always">
        Terms of Service
      </Link>
    </Typography>
  );
};

export default Copyright;
