interface ComingSoonLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: ComingSoonLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 gap-4 p-8">
      {children}
    </div>
  );
}
