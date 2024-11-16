import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
    ? allBlogs.filter((blog: any) => blog.tags?.includes(selectedTag))
    : allBlogs;

  return (
    <div>
      <div>
        <h2>Tags</h2>
        <ul>
          {allTags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blogs?tag=${tag}`}
                style={{
                  fontWeight: tag === selectedTag ? "bold" : "normal",
                }}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h1>All Blogs</h1>
      <ul>
        {filteredBlogs.map((blog: any) => (
          <li key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
