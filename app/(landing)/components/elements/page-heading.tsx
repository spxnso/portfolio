"use client";
import { TextAnimate } from "@/components/animations/text-animate";

export interface PageHeadingProps {
  title: string;
  description: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-start gap-8">
      <div className="flex flex-col gap-6 max-w-lg text-left">
        <TextAnimate
          animation="fadeIn"
          by="character"
          as="h1"
          className="text-3xl sm:text-4xl font-bold"
        >
          {title}
        </TextAnimate>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-sm sm:text-base text-muted-foreground"
        >
          {description}
        </TextAnimate>
      </div>
    </section>
  );
}
