"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";

import { media } from "sanity-plugin-media";
import { youtubeInput } from "sanity-plugin-youtube-input";

import { apiVersion, dataset, projectId } from "@/lib/env";
import { sanityTheme } from "@/lib/sanity.theme";

import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "spxnso",
  title: "spxnso.dev",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    codeInput(),
    youtubeInput({ apiKey: process.env.GOOGLE_API_KEY! }),
    table(),
  ],
  theme: sanityTheme,
});
