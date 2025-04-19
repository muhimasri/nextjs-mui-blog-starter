"use client";

import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { afterStyle, getActiveStyles } from "./styles";
import { NavLinkProps } from "./types";

const NavLink = ({ name, path, onMenuToggle }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <MUILink
      href={path}
      component={Link}
      onClick={() => onMenuToggle(false)}
      sx={{
        color: "text.primary",
        fontSize: "4",
        letterSpacing: (theme) => theme.typography.letterSpacing.large,
        textDecoration: "none",
        position: "relative",
        transition: "color 0.3s ease-in-out",
        whiteSpace: "nowrap",
        fontWeight: 500,
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
      }}
    >
      {name}
    </MUILink>
  );
};

export default NavLink;
