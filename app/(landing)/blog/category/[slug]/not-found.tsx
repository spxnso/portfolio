import Section from "@/components/elements/section";
import { getFeaturedPosts } from "@/lib/sanity.query";
import { PostType } from "@/types";
import CardAnimator from "@/components/animations/card";
import PageHeading from "@/app/(landing)/components/elements/page-heading";
import PostCard from "../../components/post-card";

export default async function NotFound() {
  const blogs: PostType[] = await getFeaturedPosts();
  return (
    <Section>
      <PageHeading
        title="Category Not Found"
        description="Looks like you've wandered off the path. The category you're looking for doesn't exist or may have been moved. Check out these featured posts while you're there!"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post, index) => (
          <CardAnimator index={index} key={post._id}>
            <PostCard post={post} key={post._id} />
          </CardAnimator>
        ))}
      </div>
    </Section>
  );
}
