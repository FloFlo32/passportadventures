import raw from "./blog-posts.json";

export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  date: string;
  html: string;
  order: number;
};

export const blogPosts = raw as BlogPost[];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
