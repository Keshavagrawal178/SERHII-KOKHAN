"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type ProjectProps = {
  number: string;
  title: string;
  description: string;
  // year: string;
};

export default function Project({
  number,
  title,
  description,
  // year,
}: ProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const xValue = (event.clientX - rect.left) / rect.width - 0.5;

    const yValue = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xValue * 25);
    mouseY.set(yValue * 25);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <article>
      {/* Project meta */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="meta">{number}</span>
          <span className="meta">{description}</span>
        </div>

        {/* <span className="meta">{year}</span> */}
      </div>

      {/* Project visual */}
      <motion.div
        ref={containerRef}
        data-cursor="VIEW"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-[16/9] overflow-hidden bg-[#111111]"
        whileHover="hover"
      >
        {/* Background glow */}
        <motion.div
          style={{ x, y }}
          className="absolute left-1/2 top-1/2 h-[45%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Project title */}
        <motion.div
          style={{ x, y }}
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            hover: {
              scale: 1.04,
            },
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3 className="text-[clamp(3rem,8vw,8rem)] font-medium tracking-[-0.06em]">
            {title}
          </h3>
        </motion.div>

        {/* View project */}
        <motion.div
          className="absolute bottom-6 right-6"
          initial={{
            opacity: 0,
            y: 12,
          }}
          variants={{
            hover: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <span className="meta">View Project ↗</span>
        </motion.div>

        {/* Border */}
        <motion.div
          className="absolute inset-0 border border-white/10"
          variants={{
            hover: {
              borderColor: "rgba(255,255,255,0.25)",
            },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </article>
  );
}
