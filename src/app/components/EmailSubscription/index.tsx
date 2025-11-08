import React, { JSX } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import EmailSubscriptionForm from "./EmailSubscriptionForm";

const EmailSubscription = (): JSX.Element => {
  return (
    <Box
      sx={{
        px: { xs: 2, lg: 4 },
        py: { xs: 9, lg: 10 },
        background:
          "linear-gradient(135deg, var(--mui-palette-primary-50) 0%, var(--mui-palette-secondary-50) 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--mui-palette-primary-200) 0%, transparent 70%)",
          opacity: 0.3,
          borderRadius: "50%",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-50%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--mui-palette-secondary-200) 0%, transparent 70%)",
          opacity: 0.3,
          borderRadius: "50%",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          m: "auto",
          maxWidth: "700px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "7",
            fontWeight: 800,
            mb: 3,
            background:
              "linear-gradient(135deg, var(--mui-palette-primary-700) 0%, var(--mui-palette-secondary-700) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Upskill Your Frontend Development Techniques 🚀
        </Typography>
        <Typography
          color="grey.700"
          fontSize="4"
          sx={{
            maxWidth: "600px",
            mb: 7,
            mx: "auto",
            textWrapStyle: "balance",
            lineHeight: 1.7,
          }}
        >
          Subscribe to stay up-to-date and receive quality frontend development
          tutorials straight to your inbox! 💌
        </Typography>
        <EmailSubscriptionForm />
        <Typography mt={5} fontSize="2.5" color="grey.500" fontWeight={500}>
          🔒 No spam, sales, or ads. Unsubscribe anytime you wish.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailSubscription;
