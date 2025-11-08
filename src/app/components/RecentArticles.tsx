import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@mui/material";
import RecentArticlesHeader from "./RecentArticlesHeader";
import RecentArticlesGrid from "./RecentArticlesGrid";
import RecentArticlesFooter from "./RecentArticlesFooter";

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
      <RecentArticlesHeader />
      <RecentArticlesGrid blogs={recentBlogs} />
      <RecentArticlesFooter />
    </Container>
  );
}
