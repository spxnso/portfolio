import Navbar from "@/components/utils/navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[100dvh] flex-col bg-background py-16 gap-16 px-6 lg:px-8 max-w-6xl mx-auto">
        {children}
      </div>
    </>
  );
}
