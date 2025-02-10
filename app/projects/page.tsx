"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/sections/projects/card";
import useRepos from "@/lib/hooks/useRepo";
import { siteConfig } from "@/lib/siteConfig";
import { Input } from "@/components/ui/input"
 
export default function ProjectsPage() {
    const { repos, loading, error } = useRepos(siteConfig.profile.username);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRepos, setFilteredRepos] = useState<any[]>([]);

    useEffect(() => {
        if (repos) {
            const transformedRepos = repos.map((repo: any) => ({
                ...repo,
                name: repo.name,
                description: repo.description || "No description provided",
                img: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
                link: `https://github.com/${repo.owner.login}/${repo.name}`,
                website: {
                    hasWebsite: !!repo.homepage,
                    link: repo.homepage || "",
                },
            }));

            setFilteredRepos(
                transformedRepos.filter(
                    (repo) =>
                        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        repo.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [repos, searchQuery]);

    if (loading) {
        return <p>Loading projects...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const containerVariants = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="projects" className="mt-16 max-w-full px-4">
            <h2 className="text-2xl font-bold text-center">Projects</h2>
            <div className="flex justify-center mt-6">
                <Input placeholder="Search for a project..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  className="w-full max-w-md p-2 border rounded-lg" />

            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-center"
            >
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((project) => (
                        <motion.div key={project.name} variants={itemVariants} className="flex justify-center">
                            <ProjectCard {...project} />
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center col-span-full">No projects found</p>
                )}
            </motion.div>
        </section>
    );
}
