import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icons from "../utils/icons";

const calloutVariants = cva(
  "relative w-full rounded-md border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        info: "border-blue-500 text-blue-500 border-l-4 [&>svg]:text-blue-500",
        success:
          "border-green-500 text-green-500 border-l-4 [&>svg]:text-green-500",
        warning:
          "border-yellow-500 text-yellow-500 border-l-4 [&>svg]:text-yellow-500",
        error: "border-red-500 text-red-500 border-l-4 [&>svg]:text-red-500",
      },
    },
    defaultVariants: { variant: "info" },
  },
);

function Callout({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>) {
  const Icon = {
    info: Icons.Info,
    success: Icons.CheckCircle,
    warning: Icons.Warning,
    error: Icons.Alert,
  }[variant || "info"];
  return (
    <div
      role="alert"
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    >
      {Icon && <Icon />} {children}
    </div>
  );
}

function CalloutTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-medium text-sm sm:text-base line-clamp-1 min-h-4 tracking-tight",
        className,
      )}
      {...props}
    />
  );
}
function CalloutDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 mt-1 text-sm text-muted-foreground [&>p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Callout, CalloutDescription, CalloutTitle };
