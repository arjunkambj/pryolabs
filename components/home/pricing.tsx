"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const mvpPackage = [
  "┌─────────────────────────────────────────────────────────┐",
  "│                                                         │",
  "│                    MVP PACKAGE v2.0                     │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-2xl font-bold'>PRICE: $5,999</span> (one-time)                        │",
  "│  DELIVERY: 21 days                                      │",
  "│  GUARANTEE: 100% money-back                             │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-teal'>INCLUDED FEATURES:</span>                                    │",
  "│  ─────────────────                                      │",
  "│  [✓] Discovery & Requirements Analysis                  │",
  "│  [✓] UI/UX Design in Figma                              │",
  "│  [✓] Responsive Frontend Development                    │",
  "│  [✓] Backend API & Database                             │",
  "│  [✓] Authentication & User Management                   │",
  "│  [✓] Payment Integration                                │",
  "│  [✓] Cloud Deployment & Hosting                         │",
  "│  [✓] Analytics & Monitoring                             │",
  "│  [✓] Documentation & Code Handover                      │",
  "│  [✓] 1 Week Post-Launch Support                         │",
  "│  [✓] Full Source Code Ownership                         │",
  "│                                                         │",
  "└─────────────────────────────────────────────────────────┘",
];

const enterprisePackage = [
  "┌─────────────────────────────────────────────────────────┐",
  "│                                                         │",
  "│                ENTERPRISE PACKAGE v2.0                  │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-2xl font-bold'>PRICE: Custom Quote</span>                          │",
  "│  DELIVERY: Flexible timeline                            │",
  "│  GUARANTEE: SLA-backed delivery                         │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-teal'>EVERYTHING IN MVP PLUS:</span>                                │",
  "│  ──────────────────────                                 │",
  "│  [✓] Extended Development (30-90 days)                  │",
  "│  [✓] Multiple Product Modules                           │",
  "│  [✓] Advanced Integrations                              │",
  "│  [✓] Team Training & Handover                           │",
  "│  [✓] Priority Support                                   │",
  "│  [✓] Quarterly Maintenance Updates                      │",
  "│  [✓] Dedicated Project Manager                          │",
  "│  [✓] Custom SLA Agreement                               │",
  "│  [✓] White-label Options                                │",
  "│  [✓] Performance Optimization                           │",
  "│                                                         │",
  "└─────────────────────────────────────────────────────────┘",
];

export function Pricing() {
  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-base text-primary/50 mb-4">
            $ cat /etc/pricing.conf
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═══════════════</span>
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            <span className="hidden sm:inline">TRANSPARENT PRICING</span>
            <span className="sm:hidden">PRICING</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═══════════════</span>
          </h2>
          <p className="font-mono text-base text-primary/70 mt-4">
            Choose the package that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0 overflow-x-auto">
          {/* MVP Package */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <pre className="text-primary font-mono text-[10px] sm:text-xs md:text-base leading-relaxed overflow-x-hidden">
              {mvpPackage.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1 }}
                  className={
                    line.includes("$5,999")
                      ? "text-teal-400 font-bold"
                      : line.includes("MVP PACKAGE")
                        ? "text-primary font-bold"
                        : line.includes("INCLUDED FEATURES")
                          ? "text-primary"
                          : "text-primary"
                  }
                  initial={{ opacity: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(
                          /\[✓\]/g,
                          '<span class="text-teal-400">[✓]</span>'
                        )
                        .replace(
                          /INCLUDED FEATURES:/g,
                          '<span class="text-teal-400">INCLUDED FEATURES:</span>'
                        ),
                    }}
                  />
                </motion.div>
              ))}
            </pre>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <pre className="text-primary font-mono text-[10px] sm:text-xs md:text-base leading-relaxed overflow-x-hidden">
              {enterprisePackage.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1 }}
                  className={
                    line.includes("Custom Quote")
                      ? "text-teal-400 font-bold"
                      : line.includes("ENTERPRISE PACKAGE")
                        ? "text-primary font-bold"
                        : "text-primary"
                  }
                  initial={{ opacity: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(
                          /\[✓\]/g,
                          '<span class="text-teal-400">[✓]</span>'
                        )
                        .replace(
                          /EVERYTHING IN MVP PLUS:/g,
                          '<span class="text-teal-400">EVERYTHING IN MVP PLUS:</span>'
                        ),
                    }}
                  />
                </motion.div>
              ))}
            </pre>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Link
            className="inline-block bg-primary text-background font-mono font-bold px-8 sm:px-12 py-3 sm:py-4 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)] transition-all duration-300 text-base sm:text-lg"
            href="#get-started"
          >
            Book Your Slot Now
          </Link>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          className="mt-8 text-center font-mono text-sm text-primary/50"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div>Payment terms: 50% upfront, 50% on delivery</div>
          <div>Accepted methods: Wire, ACH, Credit Card, Crypto</div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 font-mono text-center"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-block border border-primary/30 p-4">
            <div className="text-sm text-primary/50 mb-2">
              [STATS] Performance Metrics
            </div>
            <div className="grid grid-cols-3 gap-8 text-base">
              <div>
                <span className="text-success">24</span>
                <span className="text-primary/50"> MVPs</span>
              </div>
              <div>
                <span className="text-success">100%</span>
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
