"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FloatingCTA() {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: 0 }}
      transition={{ delay: 2, duration: 0.3 }}
    >
      <Link
        className="flex items-center gap-2 bg-primary text-background px-4 py-3 sm:px-6 sm:py-4 rounded-full font-mono font-bold text-sm sm:text-base hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,212,212,0.4)] transition-all duration-300 group animate-pulse hover:animate-none"
        href="mailto:hello@pyrolabs.io?subject=MVP%20Project%20Inquiry"
      >
        <span className="hidden sm:inline">Contact Now</span>
        <span className="sm:hidden">Contact</span>
        <span className="text-xs sm:text-sm opacity-80">• 2 slots</span>
      </Link>
    </motion.div>
  );
}
