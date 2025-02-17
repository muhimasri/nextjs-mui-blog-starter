"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface AboutSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <Box
      sx={{
        breakInside: "avoid",
        width: "100%",
        mb: 5,
        p: 4,
        backgroundColor: "about.sectionBg",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "about.sectionBorder",
      }}
    >
      <Stack direction="row" alignItems="center" gap={2} mb={4}>
        {icon}
        <Typography variant="h6" color="about.sectionTitle">
          {title}
        </Typography>
      </Stack>
      <Typography variant="body1" color="about.sectionText">
        {children}
      </Typography>
    </Box>
  );
};

export default AboutSection;
