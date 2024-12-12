"use client";
import { Stack, Link, Drawer, Button } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Our Philosophy", id: "our-philosophy" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const afterStyle = {
  position: "absolute",
  height: 2,
  display: "block",
  content: `""`,
  bottom: -5,
  transition: "width 0.3s ease-in-out",
  backgroundColor: "primary.main",
};

const activeStyle = (pageId: string) =>
  document.location.hash.replace("#", "") === pageId
    ? {
        color: "primary.main",
        "&::after": {
          width: 15,
          ...afterStyle,
        },
      }
    : null;

const Nav = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        width="100%"
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Button
          variant="text"
          onClick={toggleDrawer(true)}
          sx={{ color: "grey.700" }}
        >
          <MenuIcon />
        </Button>
      </Stack>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", md: "none" },
        }}
      >
        <NavList openMenu={setOpen} />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", md: "inherit" },
        }}
        openMenu={() => {}}
      />
    </>
  );
};

const NavList = ({ openMenu, ...other }) => {
  return (
    <Stack
      overflow="auto"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ xs: "basline", md: "center" }}
      gap={5}
      ml={{ xs: 5, md: 5 }}
      mt={{ xs: 5, md: 0 }}
      width={{ xs: "185px", md: "100%" }}
      height={{ xs: "100%", md: "auto" }}
      {...other}
    >
      {pages.map((page) => (
        <Link
          key={page.id}
          href={`#${page.id}`}
          sx={{
            color: "grey.700",
            fontSize: "4",
            letterSpacing: (theme) => theme.typography.letterSpacingLarge,
            textDecoration: "none",
            position: "relative",
            transition: "color 0.3s ease-in-out",
            whiteSpace: "nowrap",
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
            ...activeStyle(page.id),
          }}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
};

export default Nav;
