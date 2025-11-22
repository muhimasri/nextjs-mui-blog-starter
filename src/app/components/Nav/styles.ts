export const pages = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blogs" },
  { name: "About", path: "/about" },
];

export const afterStyle = {
  position: "absolute",
  height: "2px",
  display: "block",
  content: '""',
  bottom: -5,
  transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: "primary.main",
};

// Function to get active styles based on current pathname
export const getActiveStyles = (currentPath: string, linkPath: string) =>
  currentPath === linkPath
    ? {
        color: "primary.main",
        "&::after": {
          width: 15,
          ...afterStyle,
        },
      }
    : {};
