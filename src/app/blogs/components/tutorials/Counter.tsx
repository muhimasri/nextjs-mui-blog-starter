"use client";

import { useState } from "react";
import { Button, Box, Typography, Stack } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={decrement}
        sx={{ fontSize: "6" }}
      >
        -
      </Button>
      <Typography variant="h6">{count}</Typography>
      <Button
        disableElevation
        variant="contained"
        color="primary"
        onClick={increment}
        sx={{ fontSize: "6" }}
      >
        +
      </Button>
    </Stack>
  );
}
