"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Stealth Startup", src: "/logos/stealth.svg" },
  { name: "Fintech Founder", src: "/logos/fintech.svg" },
  { name: "HealthTech", src: "/logos/health.svg" },
  { name: "AI Studio", src: "/logos/ai.svg" },
  { name: "DataOps", src: "/logos/data.svg" },
  { name: "CloudSync", src: "/logos/cloud.svg" },
];

export function Logos() {
  return (
    <section id="logos" className="relative bg-transparent py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground">
            Trusted by Builders and Founders
          </h3>
          <p className="mt-2 text-foreground/70">
            We’ve helped dozens of ambitious founders turn ideas into working
            products.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.03 }}
              className="group flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors"
            >
              {/* Use placeholder if asset not present */}
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80">
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
