import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
        mt: 5,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {currentYear} YourSiteName™
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/about" color="inherit" underline="hover">
          About
        </Link>
        <Link href="/blog" color="inherit" underline="hover">
          Blog
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <IconButton
          component="a"
          href="https://twitter.com"
          color="inherit"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          color="inherit"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com"
          color="inherit"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:someone@example.com"
          color="inherit"
          aria-label="Email"
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
