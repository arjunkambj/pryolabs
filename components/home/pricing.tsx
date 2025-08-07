"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const asciiBox = [
  "┌─────────────────────────────────────────────────────────┐",
  "│                                                         │",
  "│                    MVP PACKAGE v2.0                     │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  PRICE: $5,999 (one-time)                             │",
  "│  DELIVERY: 21 days                                     │",
  "│  GUARANTEE: 100% money-back                           │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  INCLUDED FEATURES:                                    │",
  "│  ─────────────────                                     │",
  "│  [✓] Discovery & Requirements Analysis                 │",
  "│  [✓] UI/UX Design in Figma                            │",
  "│  [✓] Responsive Frontend Development                   │",
  "│  [✓] Backend API & Database                           │",
  "│  [✓] Authentication & User Management                  │",
  "│  [✓] Payment Integration (Stripe)                     │",
  "│  [✓] Cloud Deployment & Hosting                       │",
  "│  [✓] CI/CD Pipeline Setup                             │",
  "│  [✓] Analytics & Monitoring                           │",
  "│  [✓] Documentation & Code Handover                    │",
  "│  [✓] 1 Week Post-Launch Support                       │",
  "│  [✓] Full Source Code Ownership                       │",
  "│                                                         │",
  "└─────────────────────────────────────────────────────────┘",
];

export function Pricing() {
  return (
    <section className="py-24 bg-content1/10" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-sm text-primary/50 mb-4">
            $ cat /etc/pricing.conf
          </div>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            TRANSPARENT PRICING
          </h2>
          <p className="font-mono text-sm text-primary/70">
            No hidden fees. No surprises. Just results.
          </p>
        </motion.div>

        {/* ASCII Pricing Box */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <pre className="text-primary font-mono text-xs sm:text-sm leading-relaxed">
            {asciiBox.map((line, i) => (
              <motion.div
                key={i}
                animate={{ opacity: 1 }}
                className={
                  line.includes("$5,999")
                    ? "text-success font-bold terminal-glow"
                    : line.includes("[✓]")
                      ? "text-success"
                      : line.includes("MVP PACKAGE")
                        ? "text-secondary font-bold"
                        : "text-primary"
                }
                initial={{ opacity: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                {line}
              </motion.div>
            ))}
          </pre>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Link
            className="inline-block bg-primary text-background font-mono font-bold px-8 py-4 hover:bg-primary/80 transition-colors"
            href="#get-started"
          >
            $ purchase --package=mvp --confirm_
          </Link>

          <div className="mt-6 font-mono text-xs text-primary/50">
            <div>Payment terms: 50% upfront, 50% on delivery</div>
            <div>Accepted methods: Wire, ACH, Credit Card</div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 font-mono text-center"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-block border border-primary/30 p-4">
            <div className="text-xs text-primary/50 mb-2">
              [STATS] Performance Metrics
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <span className="text-success">500+</span>
                <span className="text-primary/50"> MVPs</span>
              </div>
              <div>
                <span className="text-success">96%</span>
                <span className="text-primary/50"> Success</span>
              </div>
              <div>
                <span className="text-success">10x</span>
                <span className="text-primary/50"> ROI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
