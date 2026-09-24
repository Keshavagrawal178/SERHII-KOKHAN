"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const xValue = (event.clientX - rect.left) / rect.width - 0.5;

    const yValue = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xValue * 40);
    mouseY.set(yValue * 40);
  }

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x, y }}
        className="absolute left-1/2 top-1/2 h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
