import { PortableTextComponents } from "@portabletext/react";
import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import CustomPortableCodeBlock from "./sanity-code-block";
import { slugify } from "@/lib/utils";
import CustomPortableQuiz from "./custom-portable-quiz";
import CustomPortableTweet from "./custom-portable-tweet";
import CustomPortableCallout from "./custom-portable-callout";
import CustomPortableImage from "./custom-portable-image";
import CustomPortableYoutube from "./custom-portable-youtube";
import CustomPortableTable from "./custom-portable-table";

const CustomPortableText: PortableTextComponents = {
  types: {
    code: CustomPortableCodeBlock,
    quiz: CustomPortableQuiz,
    tweet: CustomPortableTweet,
    callout: CustomPortableCallout,
    image: CustomPortableImage,
    youtube: CustomPortableYoutube,
    table: CustomPortableTable,
  },
  block: {
    normal: ({ children }) => (
      <p className="mt-4 mb-6 text-justify leading-relaxed text-base sm:text-lg text-foreground">
        {children}
      </p>
    ),
    h2: ({ children }) => {
      const text = String(children);
      const id = slugify(text);

      return (
        <h2
          id={id}
          className="mt-8 mb-4 text-2xl sm:text-3xl font-bold text-foreground scroll-mt-24 group"
        >
          <Link href={`#${id}`} className="no-underline hover:underline">
            {children}
          </Link>
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-xl sm:text-2xl font-semibold text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-5 mb-2 text-lg sm:text-xl font-medium text-foreground">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-base sm:text-lg border-l-2 border-muted-foreground pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    highlight: ({ children }) => (
      <Highlighter action="highlight" color="#009966">
        {children}
      </Highlighter>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary font-medium underline hover:text-primary/80 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4 ml-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4 ml-4 space-y-2">
        {children}
      </ol>
    ),
  },
};

export default CustomPortableText;
