import { Post, posts } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { MDXContent } from "@/components/mdx-components";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PostPageProps {
  params: Promise<{ slug: string[] }>; // theoe
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) =>
    Promise.resolve({
      slug: post.slugAsParams.split("/"),
    })
  );
}

export async function generateMetadata({ params }: { params: PostPageProps["params"] }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.title },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function PostPage({ params }: { params: PostPageProps["params"] }) {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams);
  if (!post || !post.published) {
    notFound();
  }

  return (
    <div>
      <article className="container py-6 px-4 md:px-6 prose dark:prose-invert max-w-3xl mx-auto">
        <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>
        
        <h1 className="mt-4 mb-2">{post.title}</h1>
        {post.description ? <p className="text-xl mt-0 text-muted-foreground">{post.description}</p> : null}
        <Separator className="my-4" />
        <MDXContent code={post.body} />
      </article>
    </div>
  );
}
