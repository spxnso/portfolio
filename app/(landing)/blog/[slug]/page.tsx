import Link from "next/link";
import Image from "next/image";
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
import { getPostBySlug } from "@/lib/sanity.query";
import { formatDate } from "@/lib/utils";
import { PostType } from "@/types";
import { notFound } from "next/navigation";
import { urlFor } from "@/lib/sanity.image";
import SectionHeading from "../../components/section-heading";
import Comments from "../../components/blog/comments";

export interface PostProps {
  params: {
    slug: string;
  };
}

// TODO: Not found
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
    metadataBase: new URL(`https://victoreke.com/blog/${post.slug}`),
    description: post.excerpt,
    publisher: post.author.name,
    keywords: post.tags,
    openGraph: {
      images: urlFor(post.coverImage.image).width(1200).height(630).url(),
      url: `https://victoreke.com/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      type: "article",
      siteName: "victoreke.com",
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
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-muted-foreground mt-2">
          Sorry, we couldn&apos;t find that article.
        </p>
      </main>
    );
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-5 flex flex-col gap-8">
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
              <p className="flex gap-2 items-center">
                <Image
                  src={post.author.avatar.image}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                {`${post.author.username}`}
              </p>
            </Link>
          )}
          <p className="flex gap-2 items-center">
            <Icons.Calendar className="w-4 h-4" />
            {formatDate(post.publishedAt)}
          </p>
          <p className="flex gap-2 items-center">
            <Icons.Clock className="w-4 h-4" />
            {post.readTime}
          </p>
          <Link
            href="#comments"
            className="flex gap-2 items-center text-primary cursor-pointer hover:underline"
          >
            <Icons.Comment className="w-4 h-4" />
            Comments
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          {post.excerpt}
        </p>
        {post.coverImage?.image && (
          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-md border object-cover"
              src={post.coverImage.image}
              alt={post.coverImage.alt || post.title}
              fill
              quality={100}
              placeholder={post.coverImage.lqip ? "blur" : "empty"}
              blurDataURL={post.coverImage.lqip || ""}
            />
          </div>
        )}
      </header>

      <article className="leading-relaxed tracking-tight">
        <PortableText value={post.body} components={CustomPortableText} />
      </article>

      <section id="comments" className="flex flex-col gap-8 text-left">
        <SectionHeading
          title="Share your thoughts about this post"
          eyebrow="Comments"
        />
        <Comments />
      </section>
    </main>
  );
}
