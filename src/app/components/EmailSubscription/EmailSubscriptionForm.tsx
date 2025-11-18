"use client";

import React, { JSX, useState } from "react";
import {
  TextField,
  Button,
  Stack,
  CircularProgress,
  InputAdornment,
  Alert,
  Box,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";

const EmailSubscriptionForm = (): JSX.Element => {
  const [subscribed, setSubscribed] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const subscribeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === false) {
      setEmailError(true);
      return;
    }
    setInProgress(true);
    setTimeout(() => {
      setInProgress(false);
      setSubscribed(true);
      setEmailError(false);
    }, 1500);
  };

  return (
    <form onSubmit={subscribeHandler} noValidate>
      <Stack flexWrap="nowrap" direction="row" spacing={2}>
        <TextField
          fullWidth
          sx={(theme) => ({
            "& input": {
              pt: theme.componentTokens.input.paddingVertical,
              pb: theme.componentTokens.input.paddingVertical,
              fontSize: theme.componentTokens.input.fontSize,
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: theme.componentTokens.input.borderRadius,
              transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              },
              "&.Mui-focused": {
                boxShadow: `0 4px 16px ${theme.componentTokens.button.shadowColor}`,
              },
            },
          })}
          placeholder="Enter your email"
          type="email"
          required
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ""}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline sx={{ color: "primary.main" }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={(theme) => ({
            fontSize: "4",
            width: "200px",
            height: theme.componentTokens.input.height,
            background: theme.gradients.primary,
            boxShadow: `${theme.componentTokens.button.shadowBlur} ${theme.componentTokens.button.shadowColor}`,
            "&.Mui-disabled": {
              backgroundColor: "grey.200",
            },
          })}
          endIcon={
            inProgress ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "grey.400",
                }}
              />
            ) : null
          }
          disabled={inProgress}
        >
          Subscribe
        </Button>
      </Stack>
      <Box>
        {subscribed && (
          <Alert
            severity="success"
            sx={(theme) => ({
              mt: 3,
              borderRadius: "12px",
              animation: `fadeInUp ${theme.animation.duration.slow} ${theme.animation.easing.standard}`,
            })}
          >
            🎉 Subscribed successfully!
          </Alert>
        )}
      </Box>
    </form>
  );
};

export default EmailSubscriptionForm;
