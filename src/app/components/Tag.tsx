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
    borderRadius: theme.borderRadius.pill,
    color: selected ? "white" : "text.primary",
    fontWeight: selected
      ? theme.typography.fontWeightSemibold
      : theme.typography.fontWeightMedium,
    border: `${theme.border.width.thin} solid`,
    borderColor: selected ? "transparent" : "tag.borderColor",
    transition: theme.transitions.all,
    "&:hover": {
      transform: theme.effects.transform.liftSmall,
      boxShadow: theme.customShadows.tagHover,
      borderColor: selected ? "transparent" : "primary.400",
    },
  });

const largeStyle = (theme: any) => ({
  px: theme.componentTokens.tag.paddingLarge,
  py: 1,
  cursor: "pointer",
});

const smallStyle = (theme: any) => ({
  height: theme.componentTokens.tag.heightSmall,
  cursor: "pointer",
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
