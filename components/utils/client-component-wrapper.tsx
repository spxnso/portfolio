"use client";
import React, { ComponentType } from "react";

interface ClientComponentWrapperProps<T extends object> {
  component: ComponentType<T>;
  componentProps: T;
  className?: string;
}

export default function ClientComponentWrapper<T extends object>({
  component: Component,
  componentProps,
  className,
}: ClientComponentWrapperProps<T>) {
  return (
    <div className={className}>
      <Component {...componentProps} />
    </div>
  );
}
