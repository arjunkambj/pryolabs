"use client";

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
    <section className="py-20 bg-background" id="get-started">
      <div className="max-w-3xl mx-auto px-6">
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
            <div className="text-3xl font-bold text-primary terminal-glow mb-2">
              Ready to Build Your MVP?
            </div>
            <div className="text-base text-foreground/70">
              Start your 21-day sprint today.
            </div>

            {/* Terminal prompt display */}
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-primary">labs@Pyro</span>
              <span className="text-teal-400">$</span>
              <span className="text-primary">_</span>
              <span
                className={`w-2 h-5 bg-primary ${showCursor ? "" : "opacity-0"}`}
              />
            </div>

            {/* CTA Button */}
            <Link
              className="inline-block bg-primary text-background font-bold py-4 px-12 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)] transition-all duration-300 text-base mt-6 uppercase"
              href="mailto:hello@pyrolabs.io?subject=MVP%20Project%20Inquiry"
            >
              CONTACT US [ENTER] ⏎
            </Link>
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
    </section>
  );
}
