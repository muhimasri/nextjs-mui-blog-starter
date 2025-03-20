"use client";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import NavList from "./NavList";
import useDrawer from "./useDrawer";

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

export default Nav;
