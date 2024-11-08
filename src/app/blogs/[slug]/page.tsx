import { existsSync, readFileSync, readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

interface BlogPostPageProps {
  params: { slug: string };
}

// Main page component for each dynamic blog post
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Construct the path to the MDX file
  const filePath = path.join(process.cwd(), "src/app/blogs", slug, "page.mdx");
  const fileContents = readFileSync(filePath, "utf8");

  // Compile the MDX content with remark and rehype plugins
  const { content: mdxContent } = await compileMDX({
    source: fileContents,
    options: {
      mdxOptions: {},
      parseFrontmatter: true,
    },
  });

  return (
    <div>
      <h1>{slug}asdasd</h1>
      <div>{mdxContent}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/app/blogs");
  const slugs = readdirSync(blogDir);

  // Generate params for each blog post based on the folder name
  return slugs.map((slug) => ({ slug }));
}
