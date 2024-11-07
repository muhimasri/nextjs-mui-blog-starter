import { readFileSync, readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

// Main page component for each dynamic blog post
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
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
      <h1>{slug}</h1>
      <div>{mdxContent}</div>
      {/* <MDXRemote {...source} /> */}
    </div>
  );
}

// generateStaticParams ensures all dynamic routes are generated at build time
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/app/blogs");
  const slugs = readdirSync(blogDir);

  // Generate params for each blog post based on the folder name
  return slugs.map((slug) => ({ slug }));
}
