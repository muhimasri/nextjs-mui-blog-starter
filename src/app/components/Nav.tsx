"use client";
import { Stack, Link as MUILink, Drawer, Button } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SxProps, Theme } from "@mui/system";

const pages = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blogs" },
  { name: "About", path: "/about" },
];

const afterStyle = {
  position: "absolute",
  height: 2,
  display: "block",
  content: '""',
  bottom: -5,
  transition: "width 0.3s ease-in-out",
  backgroundColor: "primary.main",
};

// Function to get active styles based on current pathname
const getActiveStyles = (currentPath: string, linkPath: string) =>
  currentPath === linkPath
    ? {
        color: "primary.main",
        "&::after": {
          width: 15,
          ...afterStyle,
        },
      }
    : {};

// Custom hook to manage drawer state
const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return { open, setOpen, toggleDrawer };
};

const Nav = (): JSX.Element => {
  const { open, setOpen, toggleDrawer } = useDrawer();

  return (
    <>
      <MobileMenuButton toggleDrawer={toggleDrawer} />
      <MobileDrawer open={open} toggleDrawer={toggleDrawer} setOpen={setOpen} />

      {/* Desktop Navigation */}
      <NavList
        sx={{
          display: { xs: "none", md: "inherit" },
        }}
        onMenuToggle={() => {}}
      />
    </>
  );
};

const MobileMenuButton = ({
  toggleDrawer,
}: {
  toggleDrawer: (open: boolean) => () => void;
}) => (
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
);

const MobileDrawer = ({
  open,
  toggleDrawer,
  setOpen,
}: {
  open: boolean;
  toggleDrawer: (open: boolean) => () => void;
  setOpen: (open: boolean) => void;
}) => (
  <Drawer
    open={open}
    onClose={toggleDrawer(false)}
    anchor="right"
    sx={{
      display: { xs: "inherit", md: "none" },
    }}
    elevation={1}
  >
    <NavList
      onMenuToggle={setOpen}
      sx={{
        pl: 4,
      }}
    />
  </Drawer>
);

const NavList = ({
  onMenuToggle,
  sx,
  ...other
}: {
  onMenuToggle: (open: boolean) => void;
  sx?: SxProps<Theme>;
}) => {
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

export default Nav;
