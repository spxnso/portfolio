import Icons from "@/components/utils/icons";
import { Input } from "@/components/ui/input";

import PageHeading from "../components/page-heading";
import PostCard from "../components/blog/post-card";

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
  const blogs: PostType[] = await getPosts();
  return (
    <>
      <PageHeading
        title="Blog"
        description="Insights, tutorials, and updates on software development, web technologies, and cybersecurity."
      />
      <section className="flex flex-col gap-8 text-left">
        <div className="relative w-full">
          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            className="w-full pl-10 bg-background rounded-md border border-border"
            placeholder="Search blog posts..."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </section>
    </>
  );
}
