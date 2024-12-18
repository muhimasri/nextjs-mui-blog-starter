import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { BannerContainer, TagLine, ImageFrame } from "./banner-elements";
import Header from "../Header";

function Banner(): JSX.Element {
  return (
    <BannerContainer>
      <Header />
      <Container>
        <Grid
          container
          mt={6}
          spacing={6}
          direction={{ xs: "column-reverse", lg: "row" }}
          alignItems="center"
          width="auto"
        >
          <Grid item xs={12} md={6}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
                maxWidth: "541px",
              }}
            >
              <Stack>
                <TagLine />
                <Typography
                  sx={{
                    fontSize: { xs: "4", sm: "5" },
                    color: "text.secondary",
                    position: "relative",
                    maxWidth: 560,
                    mt: 7,
                    fontWeight: 300,
                    pl: 3,
                    borderLeft: "3px solid",
                    borderColor: "purple.200",
                  }}
                  component="div"
                >
                  I teach thousands of developers monthly through my tutorials
                  to build efficient, reusable components with React. My
                  dedication to the frontend space empowers teams through expert
                  consulting.
                </Typography>
              </Stack>
              <Stack direction="row" gap={3}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 500,
                  }}
                  size="large"
                >
                  Read Blog
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                  }}
                  size="large"
                >
                  Learn More
                </Button>
              </Stack>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ImageFrame />
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
}

export default Banner;

// background: linear-gradient(180deg, #0c0c0c 61%, #141517);
