import { readFileSync, readdirSync } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import rehypeSlug from "rehype-slug";

import rehypePrettyCode from "rehype-pretty-code";
import Counter from "@/app/components/Counter";
import { Box, Container, Stack, Typography } from "@mui/material";
import Header from "@/app/components/Header";
import { BlogContent, FeaturedImage } from "../blogs-elements";
import TableOfContents from "@/app/components/TableOfContents";
import Tag from "@/app/components/Tag";

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
    components: { Counter },
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: false,
            },
          ],
        ],
      },
      parseFrontmatter: true,
    },
  });

  return (
    <>
      <Header size="small" />
      <Box
        sx={{
          backgroundColor: "blog.headerBgColor",
          py: 8,
          position: "relative",
          ":after": {
            content: `""`,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "33%",
            backgroundColor: "background.default",
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h1"
            color="white"
            fontWeight="500"
            mb={3}
          >
            {frontmatter.title}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="300"
            color="purple.200"
            mb={6}
            maxWidth={554}
            mx="auto"
          >
            {frontmatter.description}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            mb={4}
            gap={2}
          >
            <Typography variant="body2" color="purple.200">
              Last Updated: {frontmatter.date}
            </Typography>
            <Stack direction="row" gap={1}>
              {frontmatter.tags.split(",").map((tag: string) => (
                <Tag
                  key={tag}
                  size="small"
                  label={tag}
                  link={`/blogs?tag=${tag}`}
                />
              ))}
            </Stack>
          </Stack>
          <Box>
            <FeaturedImage frontmatter={frontmatter} />
          </Box>
        </Container>
      </Box>
      <Container>
        <Stack gap={6} direction="row">
          <TableOfContents headings={headings} />
          <BlogContent mdxContent={mdxContent} />
        </Stack>
      </Container>
    </>
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
      slug: text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, ""), // Reaplce spaces with dashes and remove special characters
    });
  });

  return headings;
}
