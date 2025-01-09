import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Tag from "../components/Tag";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import { SearchContainer } from "./blogs-elements";

const blogsDirectory = path.join(process.cwd(), "content");

export default function BlogsPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const selectedTag = searchParams?.tag;
  console.log(selectedTag);
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

  const allTags = ["react", "material-ui", "mdx", "nextjs"];

  const handleTagClick = (tag: string) => {
    if (tag === selectedTag) {
      return "/blogs";
    }
    return `/blogs?tag=${tag}`;
  };

  const filteredBlogs = selectedTag
    ? allBlogs.filter((blog: Blog) => blog.tags?.includes(selectedTag))
    : allBlogs;

  return (
    <>
      <Header />
      <SearchContainer>
        <Container>
          <Typography variant="h5" component="h1" sx={{ mb: 5, px: 3 }}>
            {" "}
            Search by topic:{" "}
          </Typography>
          <Stack gap={3} direction="row" px={3}>
            {allTags.map((tag, index) => (
              <Tag
                label={tag}
                link={handleTagClick(tag)}
                key={index}
                size="large"
                selected={tag === selectedTag}
              />
            ))}
          </Stack>
        </Container>
      </SearchContainer>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          {filteredBlogs.map((blog: Blog, index) => (
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
    </>
  );
}
