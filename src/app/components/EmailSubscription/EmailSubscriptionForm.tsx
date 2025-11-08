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
          sx={{
            "& input": {
              pt: 3,
              pb: 3,
              fontSize: "1.6rem",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "100px",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              },
              "&.Mui-focused": {
                boxShadow: "0 4px 16px rgba(226, 67, 236, 0.15)",
              },
            },
          }}
          placeholder="✉️ Enter your email"
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
          sx={{
            fontSize: "4",
            width: "200px",
            height: "56px",
            background:
              "linear-gradient(135deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-primary-600) 100%)",
            boxShadow: "0 4px 12px rgba(226, 67, 236, 0.3)",
            "&.Mui-disabled": {
              backgroundColor: "grey.200",
            },
          }}
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
            sx={{
              mt: 3,
              borderRadius: "12px",
              animation: "fadeInUp 0.5s ease-out",
            }}
          >
            🎉 Subscribed successfully!
          </Alert>
        )}
      </Box>
    </form>
  );
};

export default EmailSubscriptionForm;
