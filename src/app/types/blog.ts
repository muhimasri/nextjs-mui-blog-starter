interface Blog {
  slug: string;
  title: string;
  date: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  tags: string;
  description: string;
}
