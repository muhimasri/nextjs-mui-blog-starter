import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Banner(): JSX.Element {
  return (
    <Box
      sx={{
        position: "relative",
        height: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "purple.300",
      }}
    >
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
              fontFamily: "fontFamilySemibold",
              maxWidth: 600,
            }}
          >
            Hi, I'm Muhi,
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "8", sm: "9" },
              color: "#fff",
              position: "relative",
              fontFamily: "wotfardmedium",
              maxWidth: 551,
              // lineHeight: (theme) => theme.typography.letterSpacingXsmall,
            }}
          >
            I help developers and teams build quality software
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "4", sm: "5" },
              color: "grey.300",
              position: "relative",
              maxWidth: 560,
              mt: 7,
              fontFamily: "fontFamilyLight",
              pl: 3,
              // borderLeft: (theme) => `3px solid ${theme.palette.purple[300]}`,
            }}
            component="div"
          >
            I teach thousands of developers monthly through my tutorials to
            build efficient, reusable components with React. My dedication to
            the frontend space empowers teams through expert consulting.
          </Typography>
        </Stack>
        <Stack direction="row" gap={3}>
          <Button
            variant="contained"
            sx={{
              fontFamily: "wotfardmedium",
            }}
            size="large"
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "wotfardmedium",
              borderColor: "white",
            }}
            size="large"
          >
            {" "}
            Read Blog{" "}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
