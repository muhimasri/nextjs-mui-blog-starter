import React from "react";
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
          <Grid item xs={12} md={6}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
                maxWidth: 554,
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
                    pl: 3,
                    borderLeft: "3px solid",
                    borderColor: "purple.100",
                  }}
                  component="div"
                >
                  Empowering teams to build innovative and scalable software
                  solutions. My expertise in frontend development drives success
                  through cutting-edge technologies and best practices.
                </Typography>
              </Stack>
              <Stack direction="row" gap={3}>
                <Button
                  href="/blogs/"
                  component={Link}
                  variant="contained"
                  sx={{
                    fontWeight: 500,
                  }}
                  size="large"
                >
                  Read Blog
                </Button>
                <Button
                  href="/about/"
                  component={Link}
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
