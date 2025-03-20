"use client";
import { Stack, Link as MUILink } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavListProps } from "./types";
import { afterStyle, getActiveStyles, pages } from "./styles";

const NavList = ({ onMenuToggle, sx, ...other }: NavListProps) => {
  const pathname = usePathname();

  return (
    <Stack
      sx={sx}
      overflow="auto"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ xs: "baseline", md: "center" }}
      gap={6}
      mt={{ xs: 5, md: 0 }}
      width={{ xs: "185px", md: "100%" }}
      height={{ xs: "100%", md: "34px" }}
      {...other}
    >
      {pages.map(({ name, path }) => (
        <MUILink
          key={path}
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
      ))}
    </Stack>
  );
};

export default NavList;
