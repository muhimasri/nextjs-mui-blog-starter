"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

const BannerImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusLarge,
  boxShadow: theme.shadows[4],
  maxWidth: "100%",
  maxHeight: "fit-content",
}));

function ImageFrame(): JSX.Element {
  return (
    <BannerImage
      alt="banner-image"
      src="/images/banner-image.jpg"
      width={500}
      height={320}
    />
  );
}

function TagLine(): JSX.Element {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: { xs: "8", sm: "9" },
        color: "text.primary",
        position: "relative",
        fontWeight: 500,
        maxWidth: 551,
        lineHeight: (theme) => theme.typography.letterSpacingSmall,
      }}
    >
      I help developers and teams build quality software
    </Typography>
  );
}

function BannerContainer({ children }) {
  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      sx={{
        pt: 6,
        pb: 8,
        background: (theme) => theme.vars.palette.banner.background,
      }}
    >
      {children}
    </Stack>
  );
}

export { ImageFrame, TagLine, BannerContainer };
