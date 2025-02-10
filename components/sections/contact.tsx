import { siteConfig } from "@/lib/siteConfig";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ContactSection() {
    const github = siteConfig.profile.links.find((link) =>
        link.link.includes("github")
      );
    return (
        <section id="contact" className="mt-16 max-w-2xl mb-16">
            <h2 className="text-2xl font-bold">Let's Connect</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3">
                Feel free to reach out for collaborations, freelance work, or
                just to say hi!
            </p>
            <div className="mt-6 flex justify-center gap-4">
                <Button asChild className="bg-violet-800">
                    <Link href={siteConfig.contactLink}>Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href={github && github.link || ""} target="_blank">
                        GitHub
                    </Link>
                </Button>
            </div>
        </section>
    );
}
