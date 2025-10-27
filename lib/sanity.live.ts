import { defineLive } from "next-sanity/live";
import { sanityClient } from "./sanity.client";

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  browserToken: false,
  serverToken: false,
});

// TODO: Implement this
