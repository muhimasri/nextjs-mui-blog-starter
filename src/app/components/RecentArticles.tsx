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

  const allBlogs = blogFolders
    .filter((folder) => folder !== "page.tsx")
    .map((folder) => {
      const filePath = path.join(blogsDirectory, folder, "page.mdx");

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data: frontmatter } = matter(fileContent);

      return {
        slug: folder,
        ...frontmatter,
      };
    }) as Blog[];

  const recentBlogs = allBlogs.slice(0, 6);

  return (
    <Container
      sx={{
        px: { xs: 3, lg: 5 },
        py: { xs: 8, lg: 9 },
        maxWidth: { xs: "100%", sm: 554, lg: 1200 },
      }}
    >
      <Box textAlign={{ xs: "left", lg: "center" }} mb={{ xs: 5, lg: 7 }}>
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
      <Grid
        container
        gap={{ xs: 4, lg: 2 }}
        sx={{ flexWrap: { xs: "wrap", lg: "nowrap" } }}
      >
        {recentBlogs.map((blog: Blog, index) => (
          <Grid item xs={12} lg={4} key={index}>
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
      <Stack
        alignItems="center"
        mt={6}
        sx={{ "& > a": { textDecoration: "none" } }}
      >
        <Link href="/blogs/">
          <Typography component="span" fontSize="4" color="primary">
            Read More Tutorials →
          </Typography>
        </Link>
      </Stack>
    </Container>
  );
}
