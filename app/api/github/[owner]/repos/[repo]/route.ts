// app/api/repo/[owner]/[repo]/route.js

import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: any } }
) {
  const { username, repo } = params.slug;
  console.log("Hello")
  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    if (!res.ok) {
      throw new Error("Failed to fetch repository data");
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
