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
  "│  PRICE: $5,999 (one-time)                             │",
  "│  DELIVERY: 21 days                                     │",
  "│  GUARANTEE: 100% money-back                           │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-teal'>INCLUDED FEATURES:</span>                                    │",
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

const enterprisePackage = [
  "┌─────────────────────────────────────────────────────────┐",
  "│                                                         │",
  "│                ENTERPRISE PACKAGE v2.0                  │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  PRICE: Custom Quote                                   │",
  "│  DELIVERY: Flexible timeline                           │",
  "│  GUARANTEE: SLA-backed delivery                       │",
  "│                                                         │",
  "├─────────────────────────────────────────────────────────┤",
  "│                                                         │",
  "│  <span class='text-teal'>EVERYTHING IN MVP PLUS:</span>                               │",
  "│  ──────────────────────                                │",
  "│  [✓] Extended Development (30-90 days)                 │",
  "│  [✓] Multiple Product Modules                         │",
  "│  [✓] Advanced Integrations                            │",
  "│  [✓] Custom Infrastructure Setup                      │",
  "│  [✓] Team Training & Handover                         │",
  "│  [✓] Priority Support (3 months)                      │",
  "│  [✓] Quarterly Maintenance Updates                     │",
  "│  [✓] Dedicated Project Manager                        │",
  "│  [✓] Custom SLA Agreement                             │",
  "│  [✓] White-label Options                              │",
  "│  [✓] Compliance & Security Audit                      │",
  "│  [✓] Performance Optimization                         │",
  "│                                                         │",
  "└─────────────────────────────────────────────────────────┘",
];

export function Pricing() {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
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
          <h2 className="text-4xl font-mono font-bold text-primary mb-4">
            TRANSPARENT PRICING
          </h2>
          <p className="font-mono text-base text-primary/70">
            Choose the package that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* MVP Package */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <pre className="text-primary font-mono text-sm sm:text-base leading-relaxed">
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
                  <span dangerouslySetInnerHTML={{
                    __html: line
                      .replace(/\[✓\]/g, '<span class="text-teal-400">[✓]</span>')
                      .replace(/INCLUDED FEATURES:/g, '<span class="text-teal-400">INCLUDED FEATURES:</span>')
                  }} />
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
            <pre className="text-primary font-mono text-sm sm:text-base leading-relaxed">
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
                  <span dangerouslySetInnerHTML={{
                    __html: line
                      .replace(/\[✓\]/g, '<span class="text-teal-400">[✓]</span>')
                      .replace(/EVERYTHING IN MVP PLUS:/g, '<span class="text-teal-400">EVERYTHING IN MVP PLUS:</span>')
                  }} />
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
            className="inline-block bg-primary text-background font-mono font-bold px-12 py-4 hover:bg-primary/80 transition-colors text-lg"
            href="#get-started"
          >
            $ contact --get-started_
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
