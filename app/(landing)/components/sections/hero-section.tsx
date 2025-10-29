"use client";
import { Highlighter } from "@/components/animations/highlighter";
import { TextAnimate } from "@/components/animations/text-animate";
import Link from "next/link";
import { motion } from "motion/react";
import H1 from "@/components/elements/h1";
import { AuthorType } from "@/types";
import { ResolveIconByName } from "@/components/utils/icons";
import { toPlainText } from "next-sanity";

export interface HeroSectionProps {
  author: AuthorType;
}

export default function HeroSection({ author }: HeroSectionProps) {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-start gap-8">
      <div className="flex flex-col gap-6 max-w-lg text-left">
        <H1>
          Hi, I&apos;m{" "}
          <Highlighter action="highlight" color="#009966">
            {author.name}
          </Highlighter>
        </H1>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed"
        >
          {toPlainText(author.bio)}
        </TextAnimate>

        <div className="flex flex-wrap gap-4 justify-start">
          {author.socials.map((social, index) => {
            const Icon = ResolveIconByName(social.platform);
            return (
              <motion.div
                key={social.platform.toLocaleLowerCase()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                  <span className="text-foreground font-medium ">
                    {social.platform}
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
