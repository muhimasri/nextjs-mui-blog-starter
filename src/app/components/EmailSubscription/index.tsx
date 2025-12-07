"use client";
import React, { JSX } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import EmailSubscriptionForm from "./EmailSubscriptionForm";

const EmailSubscription = (): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
        px: { xs: 2, lg: 4 },
        py: { xs: 9, lg: 10 },
        mb: 0, // Remove any margin
        background: theme.vars.palette.subscribe.background,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: theme.componentTokens.emailSubscription.blobPositionTop,
          right: theme.componentTokens.emailSubscription.blobPositionRight,
          width: theme.componentTokens.emailSubscription.blobSize,
          height: theme.componentTokens.emailSubscription.blobSize,
          background: `radial-gradient(circle, ${theme.vars.palette.subscribe.blobPrimary} 0%, transparent 70%)`,
          opacity: theme.vars.palette.subscribe.blobOpacity,
          borderRadius: "50%",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: theme.componentTokens.emailSubscription.blobPositionBottom,
          left: theme.componentTokens.emailSubscription.blobPositionLeft,
          width: theme.componentTokens.emailSubscription.blobSize,
          height: theme.componentTokens.emailSubscription.blobSize,
          background: `radial-gradient(circle, ${theme.vars.palette.subscribe.blobSecondary} 0%, transparent 70%)`,
          opacity: theme.vars.palette.subscribe.blobOpacity,
          borderRadius: "50%",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          textAlign: "center",
          m: "auto",
          maxWidth: theme.componentTokens.emailSubscription.maxWidth,
          position: "relative",
          zIndex: 1,
        })}
      >
        <Typography
          variant="h4"
          sx={(theme) => ({
            fontWeight: 800,
            mb: 3,
            background: theme.gradients.textGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          })}
        >
          Upskill Your Frontend Development Techniques 🌟
        </Typography>
        <Typography
          variant="body1"
          color="grey.700"
          sx={(theme) => ({
            maxWidth: theme.componentTokens.emailSubscription.contentMaxWidth,
            mb: 7,
            mx: "auto",
            textWrapStyle: "balance",
            lineHeight: 1.7,
          })}
        >
          Subscribe to stay up-to-date and receive quality frontend development
          tutorials straight to your inbox!
        </Typography>
        <EmailSubscriptionForm />
        <Typography variant="caption" mt={5} color="grey.500" fontWeight={500}>
          No spam, sales, or ads. Unsubscribe anytime you wish.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailSubscription;
