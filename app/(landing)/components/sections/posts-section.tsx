"use client";

import Link from "next/link";
import CardAnimator from "@/components/animations/card";
import { PostType } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import PostCard from "../../blog/components/post-card";
import SectionHeading from "../elements/section-heading";
import Section from "@/components/elements/section";

export default function PostsSection({ posts }: { posts: PostType[] }) {
  const visibleCount = 3;
  const displayedPosts = posts.slice(0, visibleCount);

  return (
    <Section className="flex flex-col gap-8 text-left">
      <div className="flex items-center justify-between">
        <SectionHeading title="Latest posts" eyebrow="Writing" />
        <Link href="/blog" className="hover:text-primary flex items-center">
          View All
          <FaArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, index) => (
            <CardAnimator key={post._id} index={index}>
              <PostCard post={post} />
            </CardAnimator>
          ))
        ) : (
          <p className="text-muted-foreground">No posts found.</p>
        )}
      </div>
    </Section>
  );
}
