import { getPostsByCategory } from "@/lib/sanity.query";
import CategorisedPostsPage from "../../components/categorised-posts-page";

export interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const posts = await getPostsByCategory(resolvedParams.slug);

  return <CategorisedPostsPage posts={posts} />;
}
