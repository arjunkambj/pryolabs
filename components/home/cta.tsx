"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CTA() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-20 bg-background"
      id="get-started"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="border border-primary bg-background/50 p-8 font-mono text-center"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-center gap-2 mb-6 pb-4 border-b border-primary/30">
            <span className="w-3 h-3 rounded-full bg-danger/60" />
            <span className="w-3 h-3 rounded-full bg-warning/60" />
            <span className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-4 text-base text-primary/50">
              pyro-cli v2.0.0
            </span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-6">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              2 Slots Available for this month
            </div>
            <div className="text-sm sm:text-base text-foreground/70">
              Start your 21-day sprint today.
            </div>

            {/* Terminal prompt display */}
            <div className="bg-black/50 border border-primary/20 p-4 rounded-sm font-mono text-left max-w-md mx-auto">
              <div className="text-xs text-primary/50 mb-2">
                ~/projects/mvp-builder
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400">$</span>
                <span className="text-primary">./book-slot.sh</span>
                <span
                  className={`w-2 h-4 bg-teal-400 ${showCursor ? "" : "opacity-0"}`}
                />
              </div>
            </div>

            {/* CTA Button */}
            <Button
              as={Link}
              className="bg-primary text-background font-mono px-8 py-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
              href="mailto:hello@pyrolabs.io?subject=MVP%20Project%20Inquiry"
              size="md"
            >
              Book Your Slot
            </Button>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          className="mt-6 text-center text-sm text-primary/50 font-mono"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div>✓ 100% money-back guarantee</div>
          <div>✓ No commitment until you approve the plan</div>
          <div>✓ Response within 24 hours</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
