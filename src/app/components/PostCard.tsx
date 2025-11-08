"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { styled, useTheme } from "@mui/material/styles";
import Tag from "./Tag";

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
  const theme = useTheme();

  return (
    <Card
      sx={(theme) => ({
        maxWidth,
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: theme.componentTokens.postCard.accentHeight,
          background: theme.gradients.accentBar,
          opacity: 0,
          transition: `opacity ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
        },
        "&:hover::before": {
          opacity: 1,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: { xs: "none", lg: "initial" },
          overflow: "hidden",
          borderRadius: theme.componentTokens.postCard.imageRadius,
          m: theme.componentTokens.postCard.imagePadding,
        })}
      >
        <PostLink href={`/blogs/${link}/`}>
          <Box
            sx={(theme) => ({
              position: "relative",
              transition: `transform ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
              "&:hover": {
                transform: theme.effects.transform.scale,
              },
            })}
          >
            <Image
              src={image.src}
              alt={image.alt}
              style={{
                borderRadius: theme.componentTokens.postCard.imageRadius,
                display: "block",
              }}
              width={355}
              height={200}
            />
          </Box>
        </PostLink>
      </Box>
      <CardContent sx={{ pt: 3, px: 3, pb: 2 }}>
        <PostLink href={`/blogs/${link}/`}>
          <Typography
            sx={(theme) => ({
              fontWeight: 700,
              lineHeight: 1.3,
              fontSize: "6",
              color: "text.primary",
              transition: `color ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
              "&:hover": {
                color: "primary.main",
              },
            })}
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
