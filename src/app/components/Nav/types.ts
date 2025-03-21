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

export interface MobileMenuButtonProps {
  setOpen: (open: boolean) => void;
}

export interface NavLinkProps {
  name: string;
  path: string;
  onMenuToggle: (open: boolean) => void;
}