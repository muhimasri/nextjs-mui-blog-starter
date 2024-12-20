import { Chip } from "@mui/material";
import Link from "next/link";
import { borderRadius } from "../styles/tokens";

type TagProps = {
  size?: "small" | "large";
  label: String;
  link: String;
};

const chipStyle = {
  backgroundColor: "green.200",
  fontSize: "1",
  borderRadius: borderRadius.borderRadiusMedium,
  color: "grey.800",
};

const largeStyle = {
  mr: 1,
  mb: 1,
  height: "21px",
  fontSize: "2",
  cursor: "pointer",
};

const smallStyle = {
  height: "19px",
  cursor: "pointer",
};

const Tag = ({ size, label, link, ...other }: TagProps): JSX.Element => {
  return (
    <Link href={`${link}`}>
      <Chip
        {...other}
        label={label?.replace("-", " ")}
        sx={
          size === "small"
            ? { ...smallStyle, ...chipStyle }
            : { ...largeStyle, ...chipStyle }
        }
      />
    </Link>
  );
};

export default Tag;
