import { Button, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileMenuButtonProps } from "./types";

const MobileMenuButton = ({ setOpen }: MobileMenuButtonProps) => (
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
      onClick={() => setOpen(true)}
      sx={{ color: "grey.700" }}
    >
      <MenuIcon />
    </Button>
  </Stack>
);

export default MobileMenuButton;
