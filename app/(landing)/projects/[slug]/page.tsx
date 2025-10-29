import Link from "next/link";
import Image from "@/components/utils/image";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Icons from "@/components/utils/icons";

import { PortableText } from "@portabletext/react";
import CustomPortableText from "../../components/sanity/custom-portable-text";
import { getProjectBySlug } from "@/lib/sanity.query";
import { notFound } from "next/navigation";
import { urlFor } from "@/lib/sanity.image";
import SectionHeading from "../../components/elements/section-heading";
import Comments from "../../components/elements/comments";

import H1 from "@/components/elements/h1";
import Main from "@/components/elements/main";
import P from "@/components/elements/p";
import { ProjectType } from "@/types";
import Section from "@/components/elements/section";

export interface ProjectProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params;

  const project: ProjectType = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.name}`,
    metadataBase: new URL(`https://spxnso.dev/projects/${project.slug}`),
    description: project.description,
    publisher: project.author.name,
    keywords: project.tags,
    openGraph: {
      images: urlFor(project.coverImage.image).width(1200).height(630).url(),
      url: `https://spxnso.dev/projects/${project.slug}`,
      title: project.name,
      description: project.description,
      type: "article",
      siteName: "spxnso.dev",
      authors: project.author.name,
      tags: project.tags,
    },
    twitter: {
      title: project.name,
      description: project.description,
      images: urlFor(project.coverImage.image).width(680).height(340).url(),
      creator: `@${project.author.username}`,
      site: `@${project.author.username}`,
      card: "summary_large_image",
    },
  };
}

// TODO: refacotr
export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const project: ProjectType = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Main>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
            <Link href="/projects">Projects</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {project.author && (
            <Link href={project.author.website || "https://spxnso.dev"}>
              <span className="flex items-center gap-2">
                <Image
                  src={project.author.avatar.image}
                  alt={project.author.username}
                  width={28}
                  height={28}
                  fill={false}
                  className="rounded-full object-cover"
                />
                {project.author.username}
              </span>
            </Link>
          )}
          &middot;
          {project.github && (
            <>
              <Link
                href={project.github}
                className="flex gap-2 items-center text-muted-foreground cursor-pointer hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Github />
                Github
              </Link>
              <span>&middot;</span>
            </>
          )}
          {project.liveDemo && (
            <>
              <Link
                href={project.liveDemo}
                className="flex gap-2 items-center text-muted-foreground cursor-pointer hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.ExternalLink />
                Live Demo
              </Link>
              <span>&middot;</span>
            </>
          )}
          <Link
            href="#comments"
            className="flex gap-2 items-center text-primary cursor-pointer hover:underline"
          >
            <Icons.Comment className="w-4 h-4" />
            Comments
          </Link>
        </div>
        <H1>{project.name}</H1>
        <P className="text-justify leading-relaxed text-base sm:text-lg text-muted-foreground">
          {project.description}
        </P>
        <div className="relative w-full pt-[52.5%]">
          <Image
            src={project.coverImage.image}
            alt={project.coverImage.alt || project.name}
            fill
            quality={100}
            placeholder={project.coverImage.lqip ? "blur" : "empty"}
            blurDataURL={project.coverImage.lqip || ""}
          />
        </div>
      </header>

      <article className="leading-relaxed tracking-tight">
        <PortableText value={project.body} components={CustomPortableText} />
      </article>

      <Section id="comments">
        <SectionHeading
          title="Share your thoughts about this project"
          eyebrow="Comments"
        />
        <Comments />
      </Section>
    </Main>
  );
}
