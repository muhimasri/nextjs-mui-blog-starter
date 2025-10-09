import React, { JSX } from "react";
import { IconButton, Stack } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const SocialLinks = (): JSX.Element => (
  <Stack direction="row" gap={1}>
    <IconButton
      component="a"
      size="small"
      href="https://twitter.com"
      sx={{
        color: "text.secondary",
        "&:hover": { color: "primary.main" },
      }}
      aria-label="Twitter"
    >
      <TwitterIcon fontSize="small" />
    </IconButton>
    <IconButton
      component="a"
      size="small"
      href="https://linkedin.com"
      sx={{
        color: "text.secondary",
        "&:hover": { color: "primary.main" },
      }}
      aria-label="LinkedIn"
    >
      <LinkedInIcon fontSize="small" />
    </IconButton>
    <IconButton
      component="a"
      size="small"
      href="https://github.com"
      sx={{
        color: "text.secondary",
        "&:hover": { color: "primary.main" },
      }}
      aria-label="GitHub"
    >
      <GitHubIcon fontSize="small" />
    </IconButton>
    <IconButton
      component="a"
      size="small"
      href="mailto:someone@example.com"
      sx={{
        color: "text.secondary",
        "&:hover": { color: "primary.main" },
      }}
      aria-label="Email"
    >
      <EmailIcon fontSize="small" />
    </IconButton>
  </Stack>
);

export default SocialLinks;
