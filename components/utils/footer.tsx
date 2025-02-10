"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";

export default function Footer() {
    return (
        <motion.footer
            className="sticky bottom-4 z-50 flex items-center justify-center space-x-4 px-4 py-2 shadow-md mx-auto max-w-max w-full rounded-lg border bg-background/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            {siteConfig.profile.links.map(({ link, icon }, index) => (
                <motion.a
                    key={index}
                    href={link}
                    whileHover={{ scale: 1.2, color: "#7C3AED" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-primary"
                >
                    {icon && React.createElement(icon, { size: 24, className: "text-primary hover:text-violet-800"})}
                </motion.a>
            ))}
        </motion.footer>
    );
}
