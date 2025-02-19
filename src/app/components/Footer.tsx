import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
  Stack,
  Container,
} from "@mui/material";
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
        py: 3,
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "grey.100",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: 2, md: 0 }}
        >
          <Stack
            direction="column"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Stack direction="row" gap={2}>
              <Link
                href="/"
                color="text.secondary"
                variant="body2"
                underline="hover"
              >
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
              <Link
                href="/blog"
                color="text.secondary"
                variant="body2"
                underline="hover"
              >
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
            <Typography variant="body2" color="text.secondary" mt={2}>
              © {currentYear} Mareli Ramos™ |{" "}
              <Link href="/terms" color="inherit" underline="always">
                Terms of Service
              </Link>
            </Typography>
          </Stack>
          <Stack
            direction="column"
            alignItems={{ xs: "center", md: "flex-end" }}
            mt={{ xs: 2, md: 0 }}
          >
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
            <Typography variant="body2" color="text.secondary" mt={1}>
              Made by
              <Link
                href="https://muhimasri.com"
                color="primary"
                underline="hover"
                variant="body2"
                px={1}
              >
                Muhi Masri
              </Link>
              with ❤️
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
