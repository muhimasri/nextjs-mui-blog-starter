"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { spacing } from "../styles/tokens";

interface TOCProps {
  headings: { text: string; slug: string; depth: number }[];
}

export default function TableOfContents({ headings }: TOCProps) {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id); // Set the active heading to the visible one
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 } // Adjust rootMargin to trigger earlier/later
    );

    // Observe all headings
    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup the observer on unmount
  }, [headings]);

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: spacing[6],
        height: `calc(100vh - ${spacing[6]})`,
        overflowY: "auto",
        display: { xs: "none", lg: "block" }, // Hide on mobile, show on desktop
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contents
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
        {headings.map(({ text, slug, depth }) => (
          <Box component="li" key={slug} sx={{ ml: `${depth - 1}rem`, mb: 1 }}>
            <Typography
              component="a"
              href={`#${slug}`}
              variant="body2"
              sx={{
                textDecoration: "none",
                color:
                  activeHeading === slug ? "text.primary" : "blog.linkColor",
                "&:hover, &:focus": { color: "text.primary" },
                fontWeight: activeHeading === slug ? "600" : "normal",
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
