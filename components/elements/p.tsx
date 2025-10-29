import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function P({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground line-clamp-3", className)}
      {...props}
    >
      {children}
    </p>
  );
}
