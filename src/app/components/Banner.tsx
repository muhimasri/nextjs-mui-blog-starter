import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { TagLine, ImageFrame } from "./banner-elements";

function Banner(): JSX.Element {
  return (
    <Box
      sx={{
        minHeight: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Container>
        <Grid
          container
          spacing={6}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                gap: 7,
              }}
            >
              <Stack>
                <Typography
                  sx={{
                    fontSize: { xs: "9", sm: "10" },
                    color: "green.300",
                    position: "relative",
                    maxWidth: 600,
                    fontWeight: 600,
                  }}
                >
                  Hi, I'm Mareli,
                </Typography>
                <TagLine />
                <Typography
                  sx={{
                    fontSize: { xs: "4", sm: "5" },
                    color: "grey.300",
                    position: "relative",
                    maxWidth: 560,
                    mt: 7,
                    fontWeight: 300,
                    pl: 3,
                    borderLeft: "3px solid",
                    borderColor: "purple.100",
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
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                    borderColor: "white",
                  }}
                  size="large"
                >
                  {" "}
                  Read Blog{" "}
                </Button>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: "100%" }}>
            <ImageFrame />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
