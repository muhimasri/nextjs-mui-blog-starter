"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/system";
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
    <Card sx={{ maxWidth }}>
      <Box sx={{ display: { xs: "none", lg: "initial" } }}>
        <PostLink href={`/blogs/${link}/`}>
          <Image
            src={image.src}
            alt={image.alt}
            style={{ borderRadius: borderRadius.medium }}
            width={355}
            height={200}
          />
        </PostLink>
      </Box>
      <CardContent sx={{ pt: 3, px: 1, pb: 2 }}>
        <PostLink href={`/blogs/${link}/`}>
          <Typography
            sx={{
              fontWeight: 600,
              lineHeight: (theme) => theme.typography.lineHeight.small,
              fontSize: "6",
              color: "text.primary",
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
          }}
          component="p"
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 0, pl: 1 }}>
        {tags.split(",").map((cat, index) => (
          <Tag
            size="small"
            label={cat}
            link={`/blogs?category=${cat}`}
            key={index}
            bgColor="primary.200"
          />
        ))}
      </CardActions>
    </Card>
  );
}
