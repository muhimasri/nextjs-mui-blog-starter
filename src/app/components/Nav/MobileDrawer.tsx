import { Drawer } from "@mui/material";
import { MobileDrawerProps } from "./types";
import NavList from "./NavList";

const MobileDrawer = ({ open, toggleDrawer, setOpen }: MobileDrawerProps) => (
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

export default MobileDrawer;
