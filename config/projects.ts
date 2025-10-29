import { getProjects, getFeaturedProjects } from "@/lib/sanity.query";
import { ProjectType } from "@/types";

export default async function getSiteProjects() {
  const projects: ProjectType[] = await getProjects();

  const featuredProjects: ProjectType[] = await getFeaturedProjects();

  return {
    projects,
    featuredProjects,
  };
}
