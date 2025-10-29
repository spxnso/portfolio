import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function H1({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("text-3xl sm:text-4xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
}
