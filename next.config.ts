import withMdx from "@next/mdx";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

const mdxConfig = {
  // Add plugins here
};

export default withMdx(mdxConfig)(nextConfig);
