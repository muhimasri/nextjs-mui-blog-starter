"use client";
import { Chip } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";

type TagProps = {
  size?: "small" | "large";
  label: String;
  link: String;
  selected?: boolean;
  bgColor?: string;
  selectedColor?: string;
  key?: number | string;
};

const chipStyle =
  (selected: boolean, bgColor?: string, selectedColor?: string) =>
  (theme: any) => ({
    backgroundColor: selected ? selectedColor : bgColor,
    borderRadius: theme.shape.radius.pill,
    color: selected ? "white" : "grey.700",
    fontWeight: selected ? 600 : 500,
    border: `${theme.componentTokens.tag.borderWidth} solid`,
    borderColor: selected ? "transparent" : "grey.300",
    transition: `all ${theme.animation.duration.fast} ${theme.animation.easing.standard}`,
    "&:hover": {
      transform: theme.effects.transform.liftSmall,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderColor: selected ? "transparent" : "primary.300",
    },
  });

const largeStyle = (theme: any) => ({
  px: theme.componentTokens.tag.paddingLarge,
  py: 1,
  fontSize: "2",
  cursor: "pointer",
});

const smallStyle = (theme: any) => ({
  height: theme.componentTokens.tag.heightSmall,
  cursor: "pointer",
  fontSize: "1.2rem",
  px: theme.componentTokens.tag.paddingSmall,
});

const Tag = ({
  size,
  label,
  link,
  selected = false,
  bgColor,
  selectedColor,
  ...other
}: TagProps): JSX.Element => {
  return (
    <Link href={`${link}`}>
      <Chip
        {...other}
        label={label?.replace("-", " ")}
        sx={(theme: any) =>
          size === "small"
            ? {
                ...chipStyle(selected, bgColor, selectedColor)(theme),
                ...smallStyle(theme),
              }
            : {
                ...chipStyle(selected, bgColor, selectedColor)(theme),
                ...largeStyle(theme),
              }
        }
      />
    </Link>
  );
};

export default Tag;
