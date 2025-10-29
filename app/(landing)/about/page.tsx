"use client";
import Section from "@/components/elements/section";
import ComingSoon from "../coming-soon/page";
import P from "@/components/elements/p";

export default function AboutPage() {
  return (
    <Section>
      <P className="text-muted-foreground flex items-center justify-center">
        hey! I lost motivation while writing this section! See you later
      </P>
      <ComingSoon />
    </Section>
  );
}
