import { readFileSync, readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content", slug, "page.mdx");
  const fileContents = readFileSync(filePath, "utf8");

  const { content, data: frontmatter } = matter(fileContents);

  const headings = await extractHeadings(content);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
      parseFrontmatter: true,
    },
  });

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <p>{frontmatter.author}</p>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.tags}</p>
      <ul>
        {headings?.map(({ text, slug, depth }) => (
          <li key={slug} style={{ marginLeft: `${depth - 1}rem` }}>
            <a href={`#${slug}`}>{text}</a>
          </li>
        ))}
      </ul>
      <div>{mdxContent}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content");
  const slugs = readdirSync(blogDir);

  return slugs.map((slug) => ({ slug }));
}

interface Heading {
  depth: number;
  text: string;
  slug: string;
}

async function extractHeadings(content: string): Promise<Heading[]> {
  const headings: Heading[] = [];

  // Walk through the AST to extract heading nodes
  const processor = unified().use(remarkParse).use(remarkMdx);

  const ast = processor.parse(content);

  visit(ast, "heading", (node: any) => {
    const text = node.children.map((child: any) => child.value).join("");
    headings.push({
      depth: node.depth, // h1, h2, h3, etc.
      text,
      slug: text, // Create a slug for anchor links
    });
  });

  return headings;
}
