import { sanityFetch } from "@/lib/sanity.live";
import PostsPage from "./components/posts-page";

import { postQuery } from "@/lib/sanity.query";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
  };
}

export default async function Blog() {
  const posts = await sanityFetch({
    query: postQuery,
    tags: ["post", "author", "category"],
  });

  return <PostsPage posts={posts.data} />;
}
