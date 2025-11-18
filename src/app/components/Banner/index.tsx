"use client";
import React, { JSX } from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import BannerContainer from "./BannerContainer";
import TagLine from "./TagLine";
import ImageFrame from "./ImageFrame";
import Header from "../Header";
import Link from "next/link";

function Banner(): JSX.Element {
  return (
    <BannerContainer>
      <Container>
        <Grid
          container
          mt={{ xs: 2, lg: 6 }}
          gap={7}
          direction={{ xs: "column-reverse", lg: "row" }}
          flexWrap="nowrap"
          alignItems="center"
          width="auto"
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <Container
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
                maxWidth: 554,
                animation: `fadeInUp ${theme.animation.duration.slower} ${theme.animation.easing.standard}`,
              })}
            >
              <Stack>
                <TagLine />
                <Typography
                  sx={(theme) => ({
                    fontSize: { xs: "3", sm: "4" },
                    color: "text.secondary",
                    position: "relative",
                    maxWidth: 560,
                    mt: 7,
                    fontWeight: 400,
                    lineHeight: 1.8,
                    pl: 4,
                    borderLeft: `${theme.componentTokens.banner.quoteBarWidth} solid`,
                    borderColor: "primary.400",
                    background: theme.gradients.bannerQuote,
                    borderRadius: theme.componentTokens.banner.borderRadius,
                    py: 2,
                  })}
                  component="div"
                >
                  Empowering teams to build innovative and scalable software
                  solutions. My expertise in frontend development drives success
                  through cutting-edge technologies and best practices.
                </Typography>
              </Stack>
              <Stack direction="row" gap={3} flexWrap="wrap">
                <Button
                  href="/blogs/"
                  component={Link}
                  variant="contained"
                  size="large"
                  sx={(theme) => ({
                    background: theme.gradients.primary,
                    boxShadow: `${theme.componentTokens.button.shadowBlur} ${theme.componentTokens.button.shadowColor}`,
                  })}
                >
                  Read Blog
                </Button>
                <Button
                  href="/about/"
                  component={Link}
                  variant="outlined"
                  size="large"
                  sx={(theme) => ({
                    borderWidth: theme.componentTokens.button.borderWidth,
                    "&:hover": {
                      borderWidth: theme.componentTokens.button.borderWidth,
                      backgroundColor: "primary.50",
                    },
                  })}
                >
                  Learn More
                </Button>
              </Stack>
            </Container>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={(theme) => ({
              width: "100%",
              display: "flex",
              justifyContent: "center",
              animation: `fadeInUp ${theme.animation.duration.slower} ${theme.animation.easing.standard} 0.2s backwards`,
            })}
          >
            <ImageFrame />
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
}

export default Banner;
