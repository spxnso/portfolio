"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { landingConfig } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Icons from "./icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "./image";
import { usePathname } from "next/navigation";

// Hydration mismatch fix (not sure about this one?)
const AnimatedThemeToggler = dynamic(
  () => import("./theme-toggler").then((m) => m.AnimatedThemeToggler),
  { ssr: false },
);

export interface NavbarItemProps {
  title: string;
  href: string;
}

export function NavbarUserDisplay() {
  return (
    <div className="w-9 h-9 relative">
      <Image
        src="https://avatars.githubusercontent.com/u/146754550?v=4"
        alt="spxnso"
        className="rounded-full"
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur-md z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <NavbarUserDisplay />
          <span className="text-foreground text-base font-medium">spxnso</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {landingConfig.navbar.items.map((item: NavbarItemProps) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler />

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icons.Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col h-full w-full"
              >
                <VisuallyHidden>
                  <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                </VisuallyHidden>

                <div className="pt-8 pl-8 pr-8 flex justify-between items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <NavbarUserDisplay />
                    <span className="text-foreground font-medium">spxnso</span>
                  </Link>

                  <SheetClose asChild>
                    <Button variant="outline" size="icon" aria-label="Close">
                      <Icons.XMark />
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-6 flex flex-col px-4 divide-y divide-muted">
                  {landingConfig.navbar.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={`flex items-center gap-3 font-medium text-foreground py-4 hover:text-primary transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`w-4 h-4 ${
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        )}
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
