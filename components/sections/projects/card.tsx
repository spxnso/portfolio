import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


export const ProjectCard = ({
    img,
    description,
    name,
    website,
    link,
}: {
    img: string;
    description: string;
    name: string;
    link: string;
    website?: {
        hasWebsite: boolean;
        link: string;
    };
}) => {
    return (
        <figure
            className={cn(
                "relative w-full max-w-xs sm:max-w-sm md:max-w-md cursor-pointer overflow-hidden rounded-xl border p-5",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-background/[.10] dark:hover:bg-background/[.15]",
                "flex flex-col justify-between",
            )}
        >
            <img
                className="w-full object-cover rounded-md border"
                alt={name}
                src={img}
            />
            <Separator className="mt-4" />
            <div className="flex flex-col mt-4">
                <figcaption className="text-lg font-semibold text-primary">
                    {name}
                </figcaption>
                <blockquote className="mt-2 text-sm text-muted-foreground">
                    {description}
                </blockquote>
            </div>
            <div className="flex gap-2">
                <div className="mt-4 flex justify-start">
                    <Link href={link || "nil"}>
                        <Button
                            variant="outline"
                            className="px-4 py-2 text-sm text-primary rounded-md"
                        >
                            View Project
                            <FaGithub />
                        </Button>
                    </Link>
                </div>
                {website && website.hasWebsite && website.link && (
                    <div className="mt-4 flex justify-start">
                        <Link href={website.link}>
                            <Button
                                variant="outline"
                                className="px-4 py-2 text-sm text-primary rounded-md"
                            >
                                Website
                                <CiGlobe />
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </figure>
    );
};

