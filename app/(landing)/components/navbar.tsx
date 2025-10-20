/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { landingConfig } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "./theme-toggler";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavbarItemProps {
  title: string;
  href: string;
}

export default function Navbar() {
  const [sheetOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between h-[60px] w-[90%] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl rounded-md border bg-background/80 backdrop-blur-md shadow-md px-6 transition-all duration-300 ${
        hidden ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://github.com/spxnso.png"
            alt="spxnso"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-foreground text-base">spxnso</span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-center flex-grow gap-8">
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

      <div className="hidden lg:flex items-center gap-4">
        <AnimatedThemeToggler />
      </div>

      <div className="lg:hidden flex">
        <AnimatedThemeToggler />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`p-0 transition-transform duration-300 ${
                sheetOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {sheetOpen ? (
                <X className="w-5 h-5 transition-all duration-300" />
              ) : (
                <Menu className="w-5 h-5 transition-all duration-300" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col h-full w-full justify-start"
          >
            <VisuallyHidden>
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
            </VisuallyHidden>
            <div className="pt-8 pl-8 pr-8 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="https://github.com/spxnso.png"
                  alt="spxnso"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span className="text-foreground font-medium">spxnso</span>
              </Link>

              <SheetClose asChild>
                <Button variant="outline" size="icon" aria-label="Submit">
                  <X />
                </Button>
              </SheetClose>
            </div>

            <div className="mt-6 flex flex-col px-4 divide-y divide-muted h-full">
              {landingConfig.navbar.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 font-medium text-foreground py-4 hover:text-primary transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}{" "}
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
