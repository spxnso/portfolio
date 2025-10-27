import { authorConfig } from "@/config/author";
import Icons from "@/components/utils/icons";
import SectionHeading from "../section-heading";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-8 text-left">
      <SectionHeading
        eyebrow="Highlighted projects"
        title="What I've worked on"
      />

      <div className="flex flex-col gap-6 mt-4 max-w-sm sm:max-w-none mx-auto w-full">
        {authorConfig.projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Link
              href={project.href}
              className="group relative flex flex-col sm:flex-row items-start gap-3 p-4 rounded-md border border-border
            hover:bg-primary/10 hover:border-primary transform hover:scale-105 transition-all duration-300 w-full max-w-md sm:max-w-none mx-auto"
            >
              <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary font-bold">
                <Icons.ExternalLink />
              </span>

              <div className="rounded-sm overflow-hidden">
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt={`${project.title} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                    <Icons.Github className="text-foreground w-6 h-6" />
                  </div>
                )}
              </div>

              <div className="flex flex-col text-left mt-2 sm:mt-0">
                <h3 className="text-sm sm:text-base font-semibold">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 hover:text-primary text-sm sm:text-base"
        >
          View all my projects
          <Icons.ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
