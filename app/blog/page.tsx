import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "My blogs",
  description: "Welcome to my blogs!",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <div className="container max-w-3xl sm:max-w-4xl py-16">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-2 sm:space-y-4">
            <h1 className="inline-block font-bold text-3xl sm:text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Explore the latest insights, updates, and stories.
            </p>
          </div>
        </div>
        <hr className="mt-6 sm:mt-8" />
        {displayPosts?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
            {displayPosts.map((post) => {
              const { slug, title, date, description, image } = post;
              return (
                <PostItem
                  key={slug}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  image={image}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-lg mt-6">Nothing to see here yet</p>
        )}
        <QueryPagination className="justify-center sm:justify-end mt-6" totalPages={totalPages} />
      </div>
    </div>
  );
}
