/* eslint-disable @next/next/no-img-element */
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "motion/react";

interface PageHeadingProps {
  title: string;
  description: string;
  image?: string;
}

export function PageHeading({ title, description, image }: PageHeadingProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-3xl text-left items-start">
      <div className="flex flex-col gap-6 max-w-lg text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed"
        >
          {description}
        </TextAnimate>
      </div>

      {image && (
        <motion.div
          className="mt-4 lg:mt-2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
}
