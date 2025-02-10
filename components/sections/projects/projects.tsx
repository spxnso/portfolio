"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectCard } from "./card";
import { Marquee } from "@/components/magicui/marquee";
import useRepos from "@/lib/hooks/useRepo";
import { siteConfig } from "@/lib/siteConfig";

export default function ProjectSection() {
    const { repos, loading, error } = useRepos(siteConfig.profile.username);

    if (loading) {
        return <p>Loading projects...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const repositories = repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description || "No description provided",
        img: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
        link: `https://github.com/${repo.owner.login}/${repo.name}`,
        website: {
            hasWebsite: repo.homepage ? true : false,
            link: repo.homepage || "",
        },
    }));
    const firstRow = repositories.slice(0, repositories.length / 2);
    const secondRow = repositories.slice(repositories.length / 2);
    return (
        <section id="projects" className="mt-16 max-w-full px-4">
            <h2 className="text-2xl font-bold text-center">Projects</h2>
            <div className="flex justify-center items-center mt-6">
                <motion.div
                    className="p-4 border rounded-lg shadow-md bg-background flex justify-center items-center w-full max-w-7xl"
                    whileHover={{ scale: 1.05 }}
                >
                    <Marquee pauseOnHover className="w-full">
                        {repositories.length > 0
                            ? (
                                repositories.map((project) => (
                                    <ProjectCard
                                        key={project.name}
                                        {...project}
                                    />
                                ))
                            )
                            : <p>No projects found</p>}
                    </Marquee>
                </motion.div>
            </div>
        </section>
    );
}

