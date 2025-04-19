import { Stack } from "@mui/material";
import { NavListProps } from "./types";
import { pages } from "./styles";
import NavLink from "./NavLink";

const NavList = ({ onMenuToggle, sx, ...other }: NavListProps) => {
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
        <NavLink 
          key={path}
          name={name}
          path={path}
          onMenuToggle={onMenuToggle}
        />
      ))}
    </Stack>
  );
};

export default NavList;
