"use client";

import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { afterStyle, getActiveStyles } from "./styles";
import { NavLinkProps } from "./types";
import { font } from "../../styles/tokens.base";

const NavLink = ({ name, path, onMenuToggle }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <MUILink
      href={path}
      component={Link}
      onClick={() => onMenuToggle(false)}
      sx={(theme) => ({
        color: "text.primary",
        letterSpacing: theme.letterSpacing.large,
        textDecoration: "none",
        position: "relative",
        transition: theme.transitions.color,
        whiteSpace: "nowrap",
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: font.size[4],
        "&::after": {
          width: 0,
          ...afterStyle,
        },
        "&:hover": {
          color: "primary.main",
          "&::after": {
            width: 15,
          },
        },
        ...getActiveStyles(pathname, path),
      })}
    >
      {name}
    </MUILink>
  );
};

export default NavLink;
