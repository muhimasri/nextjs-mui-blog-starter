"use client";
import { Drawer } from "@mui/material";
import NavList from "./NavList";
import MobileMenuButton from "./MobileMenuButton";
import { useState } from "react";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileMenuButton setOpen={setOpen} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
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
    </>
  );
};

export default MobileDrawer;
