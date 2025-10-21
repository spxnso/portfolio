"use client";
import HeroSection from "./components/sections/hero";
import ProjectsSection from "./components/sections/projects";

export default function Home() {
  return (
    <main className="space-y-16 px-6 lg:px-8 max-w-6xl mx-auto">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
