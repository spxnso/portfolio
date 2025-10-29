"use client";

import { useMemo, useState } from "react";
import Icons from "@/components/utils/icons";
import { Input } from "@/components/ui/input";
import CardAnimator from "@/components/animations/card";

import { PostType } from "@/types";
import PageHeading from "../../components/elements/page-heading";
import PostCard from "./post-card";
import Section from "@/components/elements/section";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "../../components/elements/pagination";

export default function PostsPage({ posts }: { posts: PostType[] }) {
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
      const categoryMatch = post.category.title.toLowerCase().includes(query);

      return titleMatch || excerptMatch || tagsMatch || categoryMatch;
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

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const allCategories = posts.map((post) => post.category.title);
    return Array.from(new Set(allCategories));
  }, [posts]);
  return (
    <Section>
      <PageHeading
        title="Blog"
        description="Insights, tutorials, and updates on software development, web technologies, and cybersecurity."
      />

      <div className="relative w-full flex items-center gap-2">
        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-3 h-3" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-background rounded-md border border-border"
          placeholder="Search blog posts..."
        />
        <Select
          value={selectedCategory || "all"}
          onValueChange={(value) => {
            setSelectedCategory(value);
          }}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="all">All ({posts.length})</SelectItem>
              {categories.map((cat) => {
                const count = posts.filter(
                  (p) => p.category.title === cat,
                ).length;
                return (
                  <SelectItem key={cat} value={cat}>
                    {cat} ({count})
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
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
