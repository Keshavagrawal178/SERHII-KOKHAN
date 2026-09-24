"use client";

import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-end px-6 pb-10 md:px-10 md:pb-14"
      onMouseMove={() => {}}
    >
      <HeroVisual />

      <div className="relative z-10">
        <motion.p
          className="meta mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          SERHII
          <br />
          KOKHAN
        </motion.h1>
      </div>

      <motion.div
        className="absolute bottom-10 right-6 md:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="meta">Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
}
