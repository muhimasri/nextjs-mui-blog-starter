"use client";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";

interface RecentArticlesGridProps {
  blogs: Blog[];
}

export default function RecentArticlesGrid({ blogs }: RecentArticlesGridProps) {
  return (
    <Grid container rowGap={{ xs: 4, lg: 6 }} columnSpacing={{ lg: 4 }}>
      {blogs.map((blog: Blog, index) => (
        <Grid
          size={{ xs: 12, lg: 4 }}
          key={index}
          sx={(theme) => ({
            animation: `fadeInUp ${theme.animation.duration.normal} ${
              theme.animation.easing.standard
            } ${index * 0.1}s backwards`,
          })}
        >
          <PostCard
            title={blog.title}
            image={blog.featuredImage}
            tags={blog.tags}
            description={blog.description}
            link={blog.slug}
            maxWidth={{ xs: 554, lg: 355 }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
