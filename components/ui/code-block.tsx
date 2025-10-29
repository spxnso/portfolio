"use client";

import { BundledTheme, codeToHtml } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import Icons from "../utils/icons";
import ClientComponentWrapper from "../utils/client-component-wrapper";
import CopyButton from "@/components/utils/copy-button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export interface CodeBlockProps {
  filename?: string;
  code: string;
  language: string;
  theme?: BundledTheme;
}

export default function CodeBlock({
  filename = "code",
  code,
  language,
  theme = "material-theme-darker",
}: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const { theme: siteTheme } = useTheme();
  const editorTheme = siteTheme === "dark" ? theme : "github-light";

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const generated = await codeToHtml(code, {
          lang: language,
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
  }, [code, language, editorTheme]);

  return (
    <div className="group relative w-full overflow-hidden rounded-md border bg-background backdrop-blur-sm">
      <div className="flex items-center justify-between border-b bg-background px-4 py-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Icons.FileCode size={16} className="text-muted-foreground" />
          <span className="font-medium">{filename}</span>
        </div>
        <ClientComponentWrapper
          component={CopyButton}
          componentProps={{
            code,
          }}
        />
      </div>
      <div
        className="text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-transparent [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
