import { Chip } from "@mui/material";
import Link from "next/link";
import { borderRadius } from "../styles/tokens";
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

const chipStyle = (
  selected: boolean,
  bgColor?: string,
  selectedColor?: string
) => ({
  backgroundColor: selected ? selectedColor : bgColor,
  borderRadius: borderRadius.pill,
  color: selected ? "white" : "grey.700",
  fontWeight: selected ? 600 : 500,
  border: "1px solid",
  borderColor: selected ? "transparent" : "grey.300",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderColor: selected ? "transparent" : "primary.300",
  },
});

const largeStyle = {
  px: 3,
  py: 1,
  fontSize: "2",
  cursor: "pointer",
};

const smallStyle = {
  height: "24px",
  cursor: "pointer",
  fontSize: "1.2rem",
  px: 1.5,
};

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
        sx={
          size === "small"
            ? { ...chipStyle(selected, bgColor, selectedColor), ...smallStyle }
            : { ...chipStyle(selected, bgColor, selectedColor), ...largeStyle }
        }
      />
    </Link>
  );
};

export default Tag;
