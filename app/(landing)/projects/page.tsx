import { getProjects } from "@/lib/sanity.query";

import { ProjectType } from "@/types";
import ProjectsPage from "./components/projects-page";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return <ProjectsPage projects={projects} />;
}
