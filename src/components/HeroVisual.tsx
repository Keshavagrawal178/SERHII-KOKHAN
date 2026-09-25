"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const xValue = (event.clientX - rect.left) / rect.width - 0.5;
    const yValue = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(xValue * 60);
    mouseY.set(yValue * 60);
  }

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Main glow */}
      <motion.div
        style={{ x, y }}
        className="absolute left-1/2 top-1/2 h-[42vw] w-[42vw] min-h-[320px] min-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbit */}
      <motion.div
        style={{ x, y }}
        className="absolute left-[55%] top-[42%] h-[18vw] w-[18vw] min-h-[140px] min-w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </div>
  );
}
