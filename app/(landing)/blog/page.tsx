import PostsPage from "./components/posts-page";

import { getPosts } from "@/lib/sanity.query";

import { PostType } from "@/types";

export type Blog = {
  title: string;
  description: string;
  image: string;
  published: string;
  readTime: string;
};

export default async function Blog() {
  const posts: PostType[] = await getPosts();
  return <PostsPage posts={posts} />;
}
