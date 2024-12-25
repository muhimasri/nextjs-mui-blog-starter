import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import { Container, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

const blogsDirectory = path.join(process.cwd(), "content");

export default function RecentArticles() {
  const blogFolders = fs.readdirSync(blogsDirectory);

  const allBlogs: Blog[] = blogFolders
    .filter((folder) => folder !== "page.tsx")
    .map((folder) => {
      const filePath = path.join(blogsDirectory, folder, "page.mdx");

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data: frontmatter } = matter(fileContent);

      return {
        slug: folder,
        ...frontmatter,
      } as Blog;
    });

  const recentBlogs = allBlogs.slice(0, 6);

  return (
    <Container sx={{ px: { xs: 3, lg: 5 }, py: { xs: 8, lg: 9 } }}>
      <Box textAlign="center" mb={7}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "8",
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          Recent Articles
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {recentBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostCard
              title={blog.title}
              image={blog.featuredImage}
              tags={blog.tags}
              description={blog.description}
              link={blog.slug}
            />
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center">
        <Link href="/blogs/">
          <Typography component="span" fontSize="4">
            Read More Tutorials →
          </Typography>
        </Link>
      </Stack>
    </Container>
  );
}
