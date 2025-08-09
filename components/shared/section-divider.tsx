"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      className="my-10 sm:my-14 flex justify-center"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="h-px w-full max-w-6xl mx-6 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </motion.div>
  );
}
