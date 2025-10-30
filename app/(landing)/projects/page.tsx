import { getProjects } from "@/lib/sanity.query";

import { ProjectType } from "@/types";
import ProjectsPage from "./components/projects-page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
  };
}

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return <ProjectsPage projects={projects} />;
}
