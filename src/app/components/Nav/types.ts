import { SxProps, Theme } from "@mui/system";

export interface Page {
  name: string;
  path: string;
}

export interface NavListProps {
  onMenuToggle: (open: boolean) => void;
  sx?: SxProps<Theme>;
  [key: string]: any;
}

export interface MobileDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => () => void;
  setOpen: (open: boolean) => void;
}

export interface MobileMenuButtonProps {
  toggleDrawer: (open: boolean) => () => void;
}
