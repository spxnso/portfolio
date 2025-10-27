"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { landingConfig } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Icons from "./icons";
import { AnimatedThemeToggler } from "./theme-toggler";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export interface NavbarItemProps {
  title: string;
  href: string;
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur-md z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/146754550?v=4"
            alt="spxnso"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-foreground text-base font-medium">spxnso</span>
        </Link>

        {/* Center: Nav links (desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {landingConfig.navbar.items.map((item: NavbarItemProps) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right: theme + mobile menu */}
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
                    <Image
                      src="https://avatars.githubusercontent.com/u/146754550?v=4"
                      alt="spxnso"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <span className="text-foreground font-medium">spxnso</span>
                  </Link>

                  <SheetClose asChild>
                    <Button variant="outline" size="icon" aria-label="Close">
                      <Icons.X />
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-6 flex flex-col px-4 divide-y divide-muted">
                  {landingConfig.navbar.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-3 font-medium text-foreground py-4 hover:text-primary transition-colors"
                      >
                        {Icon && (
                          <Icon className="w-4 h-4 text-muted-foreground" />
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
