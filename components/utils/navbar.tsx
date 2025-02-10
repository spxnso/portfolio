"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/siteConfig";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            className="sticky top-4 z-50 flex items-center justify-between px-4 py-2 shadow-md mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-6xl w-full rounded-lg border bg-background/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Avatar className="border-black">
                    <AvatarImage
                        src={`https://github.com/${siteConfig.profile.username}.png`}
                        className="border-black"
                    />
                    <AvatarFallback className="border-black">
                        {siteConfig.profile.username}
                    </AvatarFallback>
                </Avatar>

                <span className="font-bold text-sm">
                    {siteConfig.profile.username}
                </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-3">
                {["Home", "Projects", "Blog"].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.1, color: "#7C3AED" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link
                            href={item === "Home"
                                ? "/"
                                : `/${item.toLowerCase()}`}
                            className="flex items-center h-8 px-3 text-sm hover:text-[#7C3AED] text-primary"
                        >
                            {item}
                        </Link>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="hidden md:flex space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <motion.div
                    whileHover={{ scale: 1.1, color: "#7C3AED" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <ThemeToggle />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, color: "#7C3AED" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Button
                        variant="outline"
                        className="h-8 px-3 text-sm rounded-lg text-primary"
                    >
                        <Link href={siteConfig.contactLink}>
                            Get in touch
                        </Link>
                        <ArrowRight />
                    </Button>
                </motion.div>
            </motion.div>

            <div className="flex md:hidden items-center">
                <motion.button
                    className="text-gray-600 dark:text-gray-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    initial={false}
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen
                        ? <X className="w-6 h-6" />
                        : <Menu className="w-6 h-6" />}
                </motion.button>
            </div>

            {isMenuOpen && (
                <motion.div
                    className="absolute top-16 left-0 w-full border shadow-md bg-background/90 rounded-lg md:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col items-center space-y-3 py-4">
                        {["Home", "Dashboard", "Documentation"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === "Home"
                                        ? "/"
                                        : `/${item.toLowerCase()}`}
                                    className="block text-sm px-3 py-2 hover:text-violet-800 text-primary"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <li>
                                <ThemeToggle />
                            </li>
                            <li>
                                <Button
                                    variant="outline"
                                    className="h-8 px-3 text-sm rounded-lg text-primary"
                                >
                                    <Link href={siteConfig.contactLink}>
                                        Get in touch
                                    </Link>
                                    <ArrowRight />
                                </Button>
                            </li>
                        </div>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
