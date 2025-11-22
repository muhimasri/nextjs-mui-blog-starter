"use client";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { styled } from "@mui/material";
import Image from "next/image";
import { JSX } from "react";

const BannerImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.borderRadius.large,
  boxShadow: theme.shadows[2],
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

export default ImageFrame;
