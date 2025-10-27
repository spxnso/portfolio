import { Highlighter } from "@/components/ui/highlighter";
import { TextAnimate } from "@/components/ui/text-animate";
import { authorConfig } from "@/config/author";
import { landingConfig } from "@/config/landing";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-start gap-8">
      <div className="flex flex-col gap-6 max-w-lg text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Hi, I&apos;m{" "}
          <Highlighter action="highlight" color="#009966">
            {authorConfig.name}
          </Highlighter>
        </h1>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed"
        >
          {landingConfig.hero.description}
        </TextAnimate>

        <div className="flex flex-wrap gap-4 justify-start">
          {authorConfig.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                  <span className="text-foreground font-medium ">
                    {social.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
