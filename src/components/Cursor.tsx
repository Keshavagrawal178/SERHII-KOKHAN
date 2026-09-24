"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const cursorType = target
        .closest("[data-cursor]")
        ?.getAttribute("data-cursor");

      setLabel(cursorType || "");
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden items-center justify-center rounded-full bg-white text-[9px] font-medium text-black md:flex"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        width: label ? 60 : 10,
        height: label ? 60 : 10,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {label}
    </motion.div>
  );
}
