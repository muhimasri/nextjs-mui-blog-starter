"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Tag from "./Tag";
import { borderRadius } from "../styles/tokens";

const PostLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

interface PostCardProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  tags: string;
  description: string;
  link: string;
  maxWidth?: { xs: number; lg: number };
}

export default function PostCard({
  title,
  image,
  tags,
  description,
  link,
  maxWidth,
}: PostCardProps) {
  return (
    <Card
      sx={{
        maxWidth,
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(90deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-secondary-500) 100%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "initial" },
          overflow: "hidden",
          borderRadius: borderRadius.medium,
          m: 2,
        }}
      >
        <PostLink href={`/blogs/${link}/`}>
          <Box
            sx={{
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              style={{ borderRadius: borderRadius.medium, display: "block" }}
              width={355}
              height={200}
            />
          </Box>
        </PostLink>
      </Box>
      <CardContent sx={{ pt: 3, px: 3, pb: 2 }}>
        <PostLink href={`/blogs/${link}/`}>
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1.3,
              fontSize: "6",
              color: "text.primary",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
            gutterBottom
          >
            {title}
          </Typography>
        </PostLink>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "3",
            lineHeight: 1.7,
          }}
          component="p"
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 0, pl: 3, pb: 3, gap: 1 }}>
        {tags.split(",").map((cat, index) => (
          <Tag
            size="small"
            label={cat}
            link={`/blogs?tag=${cat.trimStart()}`}
            key={index}
            bgColor="postCard.tagBgColor"
          />
        ))}
      </CardActions>
    </Card>
  );
}
