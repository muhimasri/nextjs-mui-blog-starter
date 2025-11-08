import { Box, Container, Stack } from "@mui/material";
import Attribution from "./Attribution";
import Copyright from "./Copyright";
import FooterNav from "./FooterNav";
import SocialLinks from "./SocialLinks";
import { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        mt: 10,
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "common.background",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "4px",
          background:
            "linear-gradient(90deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-secondary-500) 100%)",
          borderRadius: "0 0 100px 100px",
        },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: 4, md: 0 }}
        >
          <Stack
            direction="column"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <FooterNav />
            <Copyright />
          </Stack>
          <Stack
            direction="column"
            alignItems={{ xs: "center", md: "flex-end" }}
            mt={{ xs: 2, md: 0 }}
          >
            <SocialLinks />
            <Attribution />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
