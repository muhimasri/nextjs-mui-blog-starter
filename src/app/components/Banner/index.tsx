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
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
                maxWidth: 554,
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <Stack>
                <TagLine />
                <Typography
                  sx={{
                    fontSize: { xs: "3", sm: "4" },
                    color: "text.secondary",
                    position: "relative",
                    maxWidth: 560,
                    mt: 7,
                    fontWeight: 400,
                    lineHeight: 1.8,
                    pl: 4,
                    borderLeft: "4px solid",
                    borderColor: "primary.400",
                    background:
                      "linear-gradient(90deg, var(--mui-palette-primary-50) 0%, transparent 100%)",
                    borderRadius: "0 8px 8px 0",
                    py: 2,
                  }}
                  component="div"
                >
                  Empowering teams to build innovative and scalable software
                  solutions. My expertise in frontend development drives success
                  through cutting-edge technologies and best practices. ✨
                </Typography>
              </Stack>
              <Stack direction="row" gap={3} flexWrap="wrap">
                <Button
                  href="/blogs/"
                  component={Link}
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-primary-600) 100%)",
                    boxShadow: "0 4px 12px rgba(226, 67, 236, 0.3)",
                  }}
                >
                  📚 Read Blog
                </Button>
                <Button
                  href="/about/"
                  component={Link}
                  variant="outlined"
                  size="large"
                  sx={{
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                      backgroundColor: "primary.50",
                    },
                  }}
                >
                  👋 Learn More
                </Button>
              </Stack>
            </Container>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            <ImageFrame />
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
}

export default Banner;
