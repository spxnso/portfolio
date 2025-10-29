import PageHeading from "../../components/elements/page-heading";
import ProjectCard from "../components/project-card";

import CardAnimator from "@/components/animations/card";
import Section from "@/components/elements/section";

import { getFeaturedProjects } from "@/lib/sanity.query";
import { ProjectType } from "@/types";

export default async function NotFound() {
  const projects: ProjectType[] = await getFeaturedProjects();
  return (
    <Section>
      <PageHeading
        title="Project Not Found"
        description="Looks like you've wandered off the path. The project you're looking for doesn't exist or may have been moved. Check out these project while you're there!"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <CardAnimator key={project._id} index={index}>
            <ProjectCard project={project} key={project._id} />
          </CardAnimator>
        ))}
      </div>
    </Section>
  );
}
