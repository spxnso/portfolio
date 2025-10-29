import "server-only";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/lib/env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  perspective: "published",
});
