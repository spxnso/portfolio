import getSiteAuthor from "@/config/author";
import HeroSection from "./components/sections/hero-section";
import ProjectsSection from "./components/sections/projects-section";
import PostsSection from "./components/sections/posts-section";
import { getFeaturedProjects, getPosts } from "@/lib/sanity.query";

export default async function Home() {
  const author = await getSiteAuthor();
  const projects = await getFeaturedProjects();
  const posts = await getPosts();
  return (
    <>
      <HeroSection author={author} />
      <ProjectsSection featuredProjects={projects} />
      <PostsSection posts={posts} />
    </>
  );
}
