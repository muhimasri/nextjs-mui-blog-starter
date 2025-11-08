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

  // Sort blogs by date
  allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const recentBlogs = allBlogs.slice(0, 6);

  return (
    <Container
      sx={{
        px: { xs: 3, lg: 5 },
        py: { xs: 8, lg: 9 },
        maxWidth: { xs: "100%", sm: 554, lg: 1200 },
      }}
    >
      <Box textAlign={{ xs: "left", lg: "center" }} mb={{ xs: 6, lg: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "8",
            color: "text.primary",
            fontWeight: 800,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "4px",
              background:
                "linear-gradient(90deg, var(--mui-palette-primary-500) 0%, var(--mui-palette-secondary-500) 100%)",
              borderRadius: "100px",
            },
          }}
        >
          📚 Recent Articles
        </Typography>
      </Box>
      <Grid container rowGap={{ xs: 4, lg: 6 }} columnSpacing={{ lg: 4 }}>
        {recentBlogs.map((blog: Blog, index) => (
          <Grid
            size={{ xs: 12, lg: 4 }}
            key={index}
            sx={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
            }}
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
      <Stack
        alignItems="center"
        mt={8}
        sx={{ "& > a": { textDecoration: "none" } }}
      >
        <Link href="/blogs/">
          <Typography
            component="span"
            fontSize="5"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                transform: "translateX(8px)",
              },
            }}
          >
            Read More Tutorials →
          </Typography>
        </Link>
      </Stack>
    </Container>
  );
}
