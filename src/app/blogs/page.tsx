import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Tag from "../components/Tag";
import { Box, Container, Grid, Stack } from "@mui/material";
import PostCard from "../components/PostCard";

const blogsDirectory = path.join(process.cwd(), "content");

export default function BlogsPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const selectedTag = searchParams?.tag;

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
    });

  const allTags = ["react", "material-ui", "mdx", "nextjs"];

  const filteredBlogs = selectedTag
    ? allBlogs.filter((blog: Blog) => blog.tags?.includes(selectedTag))
    : allBlogs;

  return (
    <Container>
      <h2>Search by topic</h2>
      <Stack gap={3} direction="row">
        {allTags.map((tag, index) => (
          <Tag
            label={tag}
            link={`/blogs?tag=${tag}`}
            key={index}
            size="large"
          />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {filteredBlogs.map((blog, index) => (
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
    </Container>
  );
}
