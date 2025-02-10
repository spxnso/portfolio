import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/siteConfig";
export default function HeroSection() {
    return (
        <section id="hero" className="max-w-3xl w-full relative mt-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-4xl/none"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi, I'm {""}
                    <span className="text-violet-800">{siteConfig.profile.username}</span>
                </motion.h1>
                <motion.p
                    className="mx-auto max-w-[700px] text-muted-foreground mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {siteConfig.description}
                </motion.p>
                <motion.div
                    className="flex space-x-4 mt-6 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Button variant="outline" asChild>
                        <Link href={siteConfig.contactLink}>Contact Me</Link>
                    </Button>
                    <motion.div
                        whileHover={{ scale: 1.1, color: "#7C3AED" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Button
                            asChild
                            className="bg-violet-800 hover:bg-violet-800"
                        >
                            <Link href="/cv">Download CV</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
