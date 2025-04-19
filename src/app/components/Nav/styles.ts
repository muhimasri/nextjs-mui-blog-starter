export const pages = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blogs" },
  { name: "About", path: "/about" },
];

export const afterStyle = {
  position: "absolute",
  height: 2,
  display: "block",
  content: '""',
  bottom: -5,
  transition: "width 0.3s ease-in-out",
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
