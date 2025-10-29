import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  tags: string[];
};

export async function POST(req: NextRequest) {
  console.log("[Webhook] Received POST request");

  try {
    const secret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
    if (!secret) {
      console.error(
        "[Webhook] Missing environment variable SANITY_REVALIDATE_SECRET",
      );
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 },
      );
    }

    console.log("[Webhook] Parsing body...");
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      secret,
      true,
    );
    console.log("[Webhook] Signature valid?", isValidSignature);
    console.log("[Webhook] Body received:", body);

    if (!isValidSignature) {
      const message = "Invalid signature";
      console.warn("[Webhook] " + message);
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!Array.isArray(body?.tags) || !body.tags.length) {
      const message = "Bad Request — tags missing or empty";
      console.warn("[Webhook] " + message);
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    console.log("[Webhook] Revalidating tags...");
    for (const tag of body.tags) {
      console.log(`[Webhook] Revalidating tag: ${tag}`);
      try {
        await revalidateTag(tag, "default");
        console.log(`[Webhook] Successfully revalidated tag: ${tag}`);
      } catch (err) {
        console.error(`[Webhook] Failed to revalidate tag: ${tag}`, err);
      }
    }

    console.log("[Webhook] Revalidation complete.");
    return NextResponse.json({ body });
  } catch (err) {
    console.error("[Webhook] Error processing request:", err);
    return new Response((err as Error).message, { status: 500 });
  }
}
