import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function Main({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        "w-full max-w-4xl mx-auto px-4 sm:px-5 flex flex-col gap-8",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
