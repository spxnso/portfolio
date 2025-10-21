import { TextAnimate } from "@/components/ui/text-animate";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {eyebrow && (
        <TextAnimate
          animation="blurIn"
          as="p"
          className="text-sm sm:text-base text-primary"
        >
          {eyebrow}
        </TextAnimate>
      )}
      <TextAnimate
        animation="fadeIn"
        by="character"
        as="h2"
        className="text-3xl sm:text-4xl font-bold"
      >
        {title}
      </TextAnimate>
    </div>
  );
}
