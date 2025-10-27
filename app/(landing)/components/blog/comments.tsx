"use client";
import Giscus from "@giscus/react";
import {
  giscusRepo,
  giscusRepoId,
  giscusCategory,
  giscusCategoryId,
} from "@/lib/env";
import { useTheme } from "next-themes";

export default function Comments() {
  const { theme } = useTheme();
  const giscusTheme = theme === "dark" ? "transparent_dark" : "light";
  return (
    <Giscus
      repo={giscusRepo}
      repoId={giscusRepoId}
      category={giscusCategory}
      categoryId={giscusCategoryId}
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      inputPosition="bottom"
      theme={giscusTheme}
      lang="en"
    />
  );
}
