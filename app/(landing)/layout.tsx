import type { ReactNode } from "react";
import Navbar from "../../components/utils/navbar";

export interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[100dvh] flex-col bg-background sm:px-24 lg:px-48 py-32 gap-16">
        {children}
      </div>
    </div>
  );
}
