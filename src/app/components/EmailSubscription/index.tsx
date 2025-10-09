import React, { JSX } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import EmailSubscriptionForm from "./EmailSubscriptionForm";

const EmailSubscription = (): JSX.Element => {
  return (
    <Box
      bgcolor="common.background"
      sx={{ px: { xs: 2, lg: 4 }, py: { xs: 7, lg: 8 } }}
    >
      <Box sx={{ textAlign: "center", m: "auto", maxWidth: "700px" }}>
        <Typography
          sx={{
            fontSize: "7",
            fontWeight: "fontWeightBold",
            mb: 3,
          }}
        >
          Upskill Your Frontend Development Techniques 🌟
        </Typography>
        <Typography
          color="grey.600"
          fontSize="4"
          sx={{
            maxWidth: "600px",
            mb: 6,
            mx: "auto",
            textWrapStyle: "balance",
          }}
        >
          Subscribe to stay up-to-date and receive quality frontend development
          tutorials straight to your inbox!
        </Typography>
        <EmailSubscriptionForm />
        <Typography mt={5} fontSize="2" color="grey.500">
          No spam, sales, or ads. Unsubscribe anytime you wish.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailSubscription;
