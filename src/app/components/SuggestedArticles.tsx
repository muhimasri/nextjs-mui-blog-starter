import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import { Container, Box, Typography } from "@mui/material";

const blogsDirectory = path.join(process.cwd(), "content");

interface SuggestedArticlesProps {
  currentTags: string[];
}

export default function SuggestedArticles({
  currentTags,
}: SuggestedArticlesProps) {
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

  const suggestedBlogs = allBlogs
    .filter((blog) =>
      blog.tags.split(",").some((tag) => currentTags.includes(tag))
    )
    .slice(0, 3);

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
          Suggested Articles
        </Typography>
      </Box>
      <Grid
        container
        gap={{ xs: 4, lg: 2 }}
        sx={{ flexWrap: { xs: "wrap", lg: "nowrap" } }}
      >
        {suggestedBlogs.map((blog: Blog, index) => (
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
    </Container>
  );
}
