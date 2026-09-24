"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.6,
      }}
    >
      <nav className="flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-tight">
          SERHII KOKHAN
        </a>

        <button
          type="button"
          className="meta transition-opacity hover:opacity-60"
        >
          MENU
        </button>
      </nav>
    </motion.header>
  );
}
