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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [pageInput, setPageInput] = useState(1);

  const itemsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const query = search.toLowerCase().trim();

    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt?.toLowerCase().includes(query) ?? false;
      const tagsMatch =
        post.tags?.some((tag) => tag.toLowerCase().includes(query)) ?? false;
      const categoryMatch = post.category.title.toLowerCase().includes(query);

      const matchesSearch =
        query.length === 0
          ? true
          : titleMatch || excerptMatch || tagsMatch || categoryMatch;

      const matchesCategory =
        selectedCategory === "all"
          ? true
          : post.category.title === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / itemsPerPage),
  );

  const currentPage = Math.min(pageInput, totalPages);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
          onChange={(e) => {
            setSearch(e.target.value);
            setPageInput(1); // reset on user interaction (not in an effect)
          }}
          className="pl-10 bg-background rounded-md border border-border"
          placeholder="Search blog posts..."
        />

        <Select
          value={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value);
            setPageInput(1); // reset on user interaction (not in an effect)
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="bg-background rounded-md">
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
        setCurrentPage={setPageInput}
      />
    </Section>
  );
}
