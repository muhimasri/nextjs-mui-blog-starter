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
            },
          }}
          placeholder="Enter your email"
          type="email"
          required
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ""}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline sx={{ color: "grey.300" }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "4",
            width: "200px",
            height: "48px",
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
          disableElevation
        >
          Subscribe
        </Button>
      </Stack>
      <Box>
        {subscribed && (
          <Alert severity="success" sx={{ mt: 3 }}>
            {" "}
            Subscribed successfully!{" "}
          </Alert>
        )}
      </Box>
    </form>
  );
};

export default EmailSubscriptionForm;
