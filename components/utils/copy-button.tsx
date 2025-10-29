"use client";
import Icons from "./icons";
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition"
      title="Copy code"
    >
      {copied ? <Icons.Check size={14} /> : <Icons.Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
