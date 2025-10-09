import React, { JSX } from "react";
import { Link, Stack } from "@mui/material";

const FooterNav = (): JSX.Element => (
  <Stack direction="row" gap={2}>
    <Link href="/" color="text.secondary" variant="body2" underline="hover">
      Home
    </Link>
    <Link
      href="/about"
      color="text.secondary"
      variant="body2"
      underline="hover"
    >
      About
    </Link>
    <Link href="/blog" color="text.secondary" variant="body2" underline="hover">
      Blog
    </Link>
    <Link
      href="/contact"
      color="text.secondary"
      variant="body2"
      underline="hover"
    >
      Contact
    </Link>
  </Stack>
);

export default FooterNav;
