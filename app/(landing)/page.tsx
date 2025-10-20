"use client";
import HeroSection from "./components/sections/hero";

export default function Home() {
  return (
    <main className="space-y-16 px-6 lg:px-8 max-w-6xl mx-auto">
      <HeroSection />

      {/* <section className="flex flex-col px-6 lg:px-8 justify-center max-w-6xl mx-auto gap-8 text-center lg:text-left">
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base text-primary">
            Highlighted projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What I&apos;ve worked on
          </h2>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          {authorConfig.projects.slice(0, 3).map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex items-center gap-x-4 p-4 rounded-lg border border-border 
               hover:bg-primary/10 hover:border-primary transform hover:scale-105 
               transition-all duration-300"
            >
              <div className="rounded-sm overflow-hidden">
                <Image
                  src={project.icon}
                  alt={`${project.title} logo`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </main>
  );
}
