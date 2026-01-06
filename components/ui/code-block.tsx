"use client";

import Image from "next/image";
import { BundledTheme, codeToHtml } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import ClientComponentWrapper from "../utils/client-component-wrapper";
import CopyButton from "@/components/utils/copy-button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icons from "../utils/icons";

export interface CodeBlockProps {
  filename?: string;
  code: string;
  language: string;
  theme?: BundledTheme;
}

export default function CodeBlock({
  code,
  language,
  theme = "material-theme-darker",
}: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [iconError, setIconError] = useState(false);
  const { theme: siteTheme } = useTheme();
  const editorTheme = siteTheme === "dark" ? theme : "github-light";

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;

    (async () => {
      try {
        const generated = await codeToHtml(code, {
          lang: language || "text",
          theme: editorTheme,
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
          ],
        });
        if (!cancelled) setHtml(generated);
      } catch (err) {
        console.error("Failed to render code block:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code, language, editorTheme, mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-32 bg-background rounded-md border animate-pulse" />
    );
  }

  return (
    <div
      className="group relative w-full overflow-hidden rounded-md border bg-background backdrop-blur-sm"
      key={code}
    >
      <div className="flex items-center justify-between border-b bg-background px-4 py-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          {!iconError ? (
            <Image
              src={`https://cdn.simpleicons.org/${language}/${language}`}
              alt={language}
              width={16}
              height={16}
              unoptimized
              onError={() => setIconError(true)}
            />
          ) : (
            <Icons.FileCode className="w-4 h-4 text-muted-foreground" />
          )}
          <span className="font-medium">{language}</span>
        </div>
        <ClientComponentWrapper
          component={CopyButton}
          componentProps={{
            code,
          }}
        />
      </div>
      <div
        className="text-sm [&>pre]:overflow-x-auto [&>pre]:bg-transparent! [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
