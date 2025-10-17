import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 gap-6 text-white">
      <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
        Hi, I&apos;m <span className="text-primary">spxnso</span>
      </h1>

      <p className="max-w-xl text-lg sm:text-xl md:text-2xl text-gray-300">
        I&apos;m a passionate developer specializing in web development,
        software, and cybersecurity. Always curious, always learning, always
        coding.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Button asChild variant="ghost" size="lg">
          <a
            href="https://github.com/spxnso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <a
            href="https://twitter.com/spxnso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Twitter className="w-5 h-5" /> Twitter
          </a>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <a
            href="https://linkedin.com/in/spxnso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <a
            href="https://instagram.com/spxnso"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
        </Button>

        <Button asChild variant="ghost" size="lg">
          <a
            href="mailto:contact@overflxw.com"
            className="flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
        </Button>
      </div>
    </section>
  );
}
