"use client";
import { Meteors } from "@/components/magicui/meteors";

import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectSection from "@/components/sections/projects/projects";
import Footer from "@/components/utils/footer";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative">
          <Meteors number={30} />
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
