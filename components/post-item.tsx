"use client";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    image?: string;
}

export function PostItem(
    { slug, title, description, date, image }: PostItemProps,
) {
    return (
        <article className="group border border-border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md flex flex-col w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {image && (
                <motion.div
                    className="relative w-full h-40 sm:h-48 border-b overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            )}
            <div className="p-3 sm:p-4 flex flex-col gap-2 hover:shadow-md">
                <h2 className="text-lg sm:text-2xl font-bold transition-colors">
                    <Link className="group-hover:text-violet-800" href={slug}>
                        {title}
                    </Link>
                </h2>
                {description && (
                    <p className="text-sm sm:text-base text-muted-foreground">
                        {description}
                    </p>
                )}
                <div className="flex items-center justify-between mt-2">
                    <dl className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time
                            dateTime={date}
                            className="text-xs sm:text-sm font-medium"
                        >
                            {formatDate(date)}
                        </time>
                    </dl>
                    <Link
                        href={slug}
                        className={cn(
                            buttonVariants({ variant: "link" }),
                            "text-xs sm:text-sm",
                        )}
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </article>
    );
}
