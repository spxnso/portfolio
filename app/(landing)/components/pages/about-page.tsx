"use client";

import { TypingAnimation } from "@/components/animations/typing-animation";
import H1 from "@/components/elements/h1";
import Section from "@/components/elements/section";
import Image from "@/components/utils/image";
import { AboutTechItemType, AboutType, AuthorType } from "@/types";
import { PortableText, toPlainText } from "next-sanity";
import CustomPortableText from "../sanity/custom-portable-text";
import SectionHeading from "../elements/section-heading";
import Main from "@/components/elements/main";
import P from "@/components/elements/p";

interface TechListProps {
  items: AboutTechItemType[];
}

function TechList({ items }: TechListProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const slug = item.title.toLowerCase().replace(/\s+/g, "");
        const iconUrl = `https://cdn.simpleicons.org/${slug}/${slug}`;

        return (
          <div key={item.title} className="flex items-start gap-3 rounded-md">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image
                src={iconUrl}
                unoptimized
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base truncate whitespace-nowrap">
                {item.title}
              </h3>
              <P className="break-words">{item.description}</P>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage({
  author,
  about,
}: {
  author: AuthorType;
  about: AboutType;
}) {
  return (
    <Main className="flex flex-col lg:flex-row gap-12 max-w-full w-full">
      <div className="relative lg:border-r">
        <aside className="flex flex-col gap-y-8 sticky top-10 py-6 lg:px-6 px-0">
          <section className="pb-6">
            <address className="flex flex-col items-center mt-4 not-italic space-y-2">
              <div className="relative w-32 h-32 rounded-md overflow-hidden">
                <Image
                  src={about.profileImage.image}
                  alt={about.profileImage.alt || author.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-center flex gap-4 flex-col">
                <h3 className="font-semibold text-lg tracking-tight">
                  {author.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aspiring cybersecurity engineer
                </p>
                <p className="text-sm text-muted-foreground">
                  Saint-Martin-De-Crau, France
                </p>
                {/* {about.resume && (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="gap-2"
                                    >
                                        <Link
                                            href={about.resume.url}
                                            download
                                        >
                                            <Download className="w-5 h-5" />
                                            Download Resume
                                        </Link>
                                    </Button>
                                )} */}
              </div>
            </address>
          </section>
        </aside>
      </div>
      <div className="flex-1">
        <H1>
          I&apos;m {author.name}, a{" "}
          <TypingAnimation
            words={author.traits}
            className="text-primary"
            loop
          />
        </H1>

        <p className="text-justify leading-relaxed text-base sm:text-lg text-muted-foreground">
          {toPlainText(author.bio)}
        </p>

        <PortableText
          components={CustomPortableText}
          value={about.pageContent}
        />

        <div className="flex flex-col gap-8">
          <Section>
            <SectionHeading eyebrow="Languages" title="What I code with" />
            <TechList items={about.languages} />
          </Section>

          <Section>
            <SectionHeading
              eyebrow="Frameworks"
              title="What makes my life easier"
            />
            <TechList items={about.frameworks} />
          </Section>

          <Section>
            <SectionHeading eyebrow="Tools" title="What I use daily" />
            <TechList items={about.tools} />
          </Section>
        </div>
      </div>
    </Main>
  );
}
