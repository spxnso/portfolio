"use client";

import { useMemo, useState } from "react";
import Icons from "@/components/utils/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardAnimator from "@/components/animations/card";

import { ProjectType } from "@/types";
import PageHeading from "../../components/elements/page-heading";
import ProjectCard from "./project-card";
import Section from "@/components/elements/section";

export default function ProjectsPage({
  projects,
}: {
  projects: ProjectType[];
}) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();
    return projects.filter((project) => {
      const nameMatch = project.name.toLowerCase().includes(query);
      const descriptionMatch = project.description
        ?.toLowerCase()
        .includes(query);
      const tagsMatch = project.tags?.some((tag) =>
        tag.toLowerCase().includes(query),
      );
      return nameMatch || descriptionMatch || tagsMatch;
    });
  }, [projects, search]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useMemo(() => {
    setCurrentPage(1);
  }, []);

  return (
    <Section>
      <PageHeading
        title="Projects"
        description="A showcase of recent work, experiments, and open-source projects."
      />

      <div className="relative w-full">
        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-3 h-3" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 bg-background rounded-md border border-border"
          placeholder="Search projects..."
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <CardAnimator key={project._id} index={index}>
            <ProjectCard project={project} />
          </CardAnimator>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-muted-foreground">No projects found.</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </Section>
  );
}
