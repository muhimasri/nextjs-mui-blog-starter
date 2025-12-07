import React, { JSX } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BannerContainer from "../../components/Banner/BannerContainer";

const AboutHeader = (): JSX.Element => {
  return (
    <BannerContainer sx={{ pt: 0, pb: 0 }}>
      <Container>
        <Grid
          container
          mt={{ xs: 2, lg: 0 }}
          gap={7}
          direction={{ xs: "column", lg: "row" }}
          flexWrap="nowrap"
          alignItems="center"
          width="auto"
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
              }}
            >
              <Stack
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  maxWidth: { xs: "500px", lg: "100%" },
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "about.headerTitle",
                    mb: 7,
                  }}
                >
                  Hello, I'm Mareli 👋
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "about.headerText",
                    position: "relative",
                  }}
                  component="div"
                >
                  I am a software developer passionate about sharing knowledge
                  and best practices in the field of software development.
                  <br />
                  <br />
                  My blog covers a wide range of topics including frontend
                  development, backend development, DevOps, and more.
                  <br />
                  <br />
                  Join me on my journey to explore the latest trends and
                  technologies in the software industry.
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/images/about-image.png"
              alt="Profile"
              width={400}
              height={600}
            />
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
};

export default AboutHeader;
