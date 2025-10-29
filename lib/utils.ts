import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getTweetId(url: string): string | undefined {
  const regex = /status\/(\d+)/;
  const match = regex.exec(url);
  return match?.[1];
}

export function getYoutubeVideoId(url: string) {
  const regex =
    /(?:v=|\/(?:embed|shorts|live)\/|\.be\/)([a-zA-Z0-9_-]{11})(?:[&?/]|$)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
