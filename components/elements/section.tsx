import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("flex flex-col gap-8 text-left", className)}
      {...props}
    >
      {children}
    </section>
  );
}
