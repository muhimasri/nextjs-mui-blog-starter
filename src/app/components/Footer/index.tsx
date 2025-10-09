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
        py: 3,
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "common.background",
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
