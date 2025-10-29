"use client";

import { useMemo, useState } from "react";
import Icons from "@/components/utils/icons";
import { Input } from "@/components/ui/input";
import CardAnimator from "@/components/animations/card";

import { PostType } from "@/types";
import Section from "@/components/elements/section";
import PageHeading from "@/app/(landing)/components/elements/page-heading";
import PostCard from "./post-card";
import Pagination from "../../components/elements/pagination";

export default function CategorisedPostsPage({ posts }: { posts: PostType[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const query = search.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt?.toLowerCase().includes(query);
      const tagsMatch = post.tags?.some((tag) =>
        tag.toLowerCase().includes(query),
      );
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [posts, search]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useMemo(() => {
    setCurrentPage(1);
  }, []);

  return (
    <Section>
      <PageHeading
        title={posts[0].category.title}
        description={posts[0].category.description}
      />
      <div className="relative w-full mb-4">
        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-3 h-3" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-background rounded-md border border-border"
          placeholder="Search blog posts..."
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post, index) => (
          <CardAnimator key={post._id} index={index}>
            <PostCard post={post} />
          </CardAnimator>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-muted-foreground">No blog posts found.</p>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Section>
  );
}
