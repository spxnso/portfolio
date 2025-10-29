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
import { Badge } from "@/components/ui/badge";

import Icons from "@/components/utils/icons";

import { PortableText } from "@portabletext/react";
import CustomPortableText from "../../components/sanity/custom-portable-text";
import { getPostBySlug } from "@/lib/sanity.query";
import { formatDate } from "@/lib/utils";
import { PostType } from "@/types";
import { notFound } from "next/navigation";
import { urlFor } from "@/lib/sanity.image";
import SectionHeading from "../../components/elements/section-heading";
import Comments from "../../components/elements/comments";

import H1 from "@/components/elements/h1";
import Main from "@/components/elements/main";
import P from "@/components/elements/p";
import Section from "@/components/elements/section";

export interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;

  const post: PostType = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title}`,
    metadataBase: new URL(`https://spxnso.dev/blog/${post.slug}`),
    description: post.excerpt,
    publisher: post.author.name,
    keywords: post.tags,
    openGraph: {
      images: urlFor(post.coverImage.image).width(1200).height(630).url(),
      url: `https://spxnso.dev/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      type: "article",
      siteName: "spxnso.dev",
      authors: post.author.name,
      tags: post.tags,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: urlFor(post.coverImage.image).width(680).height(340).url(),
      creator: `@${post.author.username}`,
      site: `@${post.author.username}`,
      card: "summary_large_image",
    },
  };
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const post: PostType = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Main>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
            <Link href="/blog">Blog</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.author && (
            <Link href={post.author.website || "https://spxnso.dev"}>
              <span className="flex items-center gap-2">
                <Image
                  src={post.author.avatar.image}
                  alt={post.author.username}
                  width={28}
                  height={28}
                  fill={false}
                  className="rounded-full object-cover"
                />
                {post.author.username}
              </span>
            </Link>
          )}
          <span className="flex gap-2 items-center">
            <Icons.Calendar className="w-4 h-4" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex gap-2 items-center">
            <Icons.Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <Link
            href="#comments"
            className="flex gap-2 items-center text-primary cursor-pointer hover:underline"
          >
            <Icons.Comment className="w-4 h-4" />
            Comments
          </Link>
        </div>
        <H1>{post.title}</H1>
        <P className="text-justify leading-relaxed text-base sm:text-lg text-muted-foreground">
          {post.excerpt}
        </P>
        <div className="relative w-full pt-[52.5%]">
          <Image
            src={post.coverImage.image}
            alt={post.coverImage.alt || post.title}
            fill
            quality={100}
            placeholder={post.coverImage.lqip ? "blur" : "empty"}
            blurDataURL={post.coverImage.lqip || ""}
          />
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-border/50">
            {post.category && (
              <Link
                href={`/blog/category/${post.category.slug}`}
                className="text-primary font-medium hover:underline flex items-center gap-2"
              >
                <Icons.FolderOpen className="w-4 h-4" />
                {post.category.title}
              </Link>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link href={`/blog/${tag.toLocaleLowerCase()}`} key={tag}>
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-2 py-1 font-medium"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="text-muted-foreground mr-2">Share:</span>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `https://spxnso.dev/blog/${post.slug}`,
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.X className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://spxnso.dev/blog/${post.slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.Linkedin className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://spxnso.dev/blog/${post.slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.Facebook className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `${post.title} — https://spxnso.dev/blog/${post.slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.Whatsapp className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
            <Link
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(
                `https://spxnso.dev/blog/${post.slug}`,
              )}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.Reddit className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
            <Link
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(
                `Check out this post: https://spxnso.dev/blog/${post.slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Icons.Envelope className="w-5 h-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </Link>
          </div>
        </div>
      </header>

      <article className="leading-relaxed tracking-tight">
        <PortableText value={post.body} components={CustomPortableText} />
      </article>

      <Section id="comments">
        <SectionHeading
          title="Share your thoughts about this post"
          eyebrow="Comments"
        />
        <Comments />
      </Section>
    </Main>
  );
}
