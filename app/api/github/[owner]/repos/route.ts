// app/api/github/[owner]/repos/route.js


export async function GET(req: Request, { params } : { params: Promise<{ slug: string }> } ) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`https://api.github.com/users/${slug}/repos`);
    if (!res.ok) {
      throw new Error("Failed to fetch repository data");
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
