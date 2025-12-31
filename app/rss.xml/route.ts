import { getPosts } from "@/lib/sanity.query";
import { NextResponse } from "next/server";
import RSS from "rss";

export async function GET() {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.SITE_URL;

  const feed = new RSS({
    title: "Blog Posts - spxnso.dev",
    description: "Latest blog posts from spxnso.dev",
    site_url: url as string,
    feed_url: `${url}/rss.xml`,
    pubDate: new Date(),
  });

  const posts = (await getPosts()).slice(0, 3);
  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${url}/blog/${post.slug}`,
      guid: post._id,
      date: post.publishedAt,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
