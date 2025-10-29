import Link from "next/link";
import Image from "@/components/utils/image";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types";
import P from "@/components/elements/p";

export interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="group flex flex-col h-full overflow-hidden rounded-md border border-border hover:shadow-lg transition-all duration-200">
        <div className="w-full h-48 overflow-hidden border-b border-border relative">
          <Image
            src={project.coverImage?.image}
            alt={project.coverImage?.alt || project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 flex flex-col flex-1 gap-3">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>

          {project.description && (
            <P className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </P>
          )}
          <div className="flex items-center gap-3 mt-auto pt-4 text-sm">
            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-2 py-1 font-medium"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
