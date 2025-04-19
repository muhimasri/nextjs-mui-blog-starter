import MobileDrawer from "./MobileDrawer";
import NavList from "./NavList";

const Nav = (): JSX.Element => {
  return (
    <>
      <MobileDrawer />

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
