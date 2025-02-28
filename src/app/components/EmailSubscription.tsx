"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";
import Alert from "@mui/material/Alert";

const EmailSubscription = (): JSX.Element => {
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
        </form>
        <Typography mt={5} fontSize="2" color="grey.500">
          {" "}
          No spam, sales, or ads. Unsubscribe anytime you wish.{" "}
        </Typography>{" "}
        {subscribed && (
          <Alert severity="success" sx={{ mt: 3 }}>
            {" "}
            Subscribed successfully!{" "}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default EmailSubscription;
