import { existsSync, readFileSync, readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content", slug, "page.mdx");
  const fileContents = readFileSync(filePath, "utf8");

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
    </div>
  );
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content");
  const slugs = readdirSync(blogDir);

  return slugs.map((slug) => ({ slug }));
}
