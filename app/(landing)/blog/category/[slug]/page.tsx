import { getPostsByCategory } from "@/lib/sanity.query";
import CategorisedPostsPage from "../../components/categorised-posts-page";
import { notFound } from "next/navigation";

export interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const posts = await getPostsByCategory(resolvedParams.slug);

  if (posts.length === 0) {
    notFound();
  }

  return <CategorisedPostsPage posts={posts} />;
}
