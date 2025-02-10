import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import Link from "next/link";
export default function AboutSection() {
    return (
        <section id="about" className="mt-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">About Me</h2>
          {siteConfig.about}
        </motion.div>
      </section>
    );
}
