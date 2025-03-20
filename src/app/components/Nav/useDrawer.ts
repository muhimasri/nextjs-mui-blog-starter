import { useState } from "react";

const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return { open, setOpen, toggleDrawer };
};

export default useDrawer;
