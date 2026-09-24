"use client";

import { AnimatePresence, motion } from "framer-motion";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col bg-[#050505] px-6 py-6 md:px-10 md:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-tight">
              SERHII KOKHAN
            </span>

            <button
              type="button"
              onClick={onClose}
              className="meta transition-opacity hover:opacity-60"
            >
              CLOSE ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="w-fit text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.06em] transition-opacity hover:opacity-50"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * index,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-end justify-between">
            <span className="meta">Frontend Developer</span>

            <span className="meta">Available for work</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
