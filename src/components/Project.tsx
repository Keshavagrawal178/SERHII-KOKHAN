"use client";

import { motion } from "framer-motion";

type ProjectProps = {
  number: string;
  title: string;
  description: string;
};

export default function Project({ number, title, description }: ProjectProps) {
  return (
    <article>
      <div className="mb-5 flex items-center justify-between">
        <span className="meta">{number}</span>

        <span className="meta">{description}</span>
      </div>

      <motion.div
        data-cursor="VIEW"
        className="group relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#111111]"
        whileHover="hover"
      >
        <motion.span
          className="text-4xl font-medium tracking-tight md:text-7xl"
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.span>

        <motion.div
          className="absolute bottom-6 right-6"
          initial={{
            opacity: 0,
            y: 10,
          }}
          variants={{
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <span className="meta">View Project ↗</span>
        </motion.div>
      </motion.div>
    </article>
  );
}
