"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

const BannerImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.shape.radius.large,
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
        lineHeight: (theme) => theme.typography.lineHeight.small,
      }}
    >
      I help developers and teams build quality software
    </Typography>
  );
}

function BannerContainer({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: object;
}) {
  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      sx={{
        pt: { xs: 0, lg: 6 },
        pb: 8,
        background: (theme) => theme.vars.palette.banner.background,
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}

export { ImageFrame, TagLine, BannerContainer };
