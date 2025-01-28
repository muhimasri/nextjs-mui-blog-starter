import { Chip } from "@mui/material";
import Link from "next/link";
import { borderRadius } from "../styles/tokens";

type TagProps = {
  size?: "small" | "large";
  label: String;
  link: String;
  selected?: boolean;
  bgColor?: string;
  selectedColor?: string;
};

const chipStyle = (
  selected: boolean,
  bgColor?: string,
  selectedColor?: string
) => ({
  backgroundColor: selected ? selectedColor : bgColor,
  borderRadius: borderRadius.pill,
  color: "grey.800",
  // border: selected ? "2px solid" : "none",
  // borderColor: selected ? "primary.dark" : "transparent",
});

const largeStyle = {
  px: 2,
  fontSize: "2",
  cursor: "pointer",
};

const smallStyle = {
  height: "19px",
  cursor: "pointer",
  fontSize: "1",
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
