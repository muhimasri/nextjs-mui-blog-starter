"use client";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const EmailSubscriptionForm = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted: ", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Subscribe
      </Button>
    </form>
  );
};

export default EmailSubscriptionForm;
