"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pricingPackages = [
  {
    name: "MVP PACKAGE",
    version: "v2.0",
    price: "$5,999",
    priceNote: "one-time",
    delivery: "21 days",
    guarantee: "100% money-back",
    features: [
      "Discovery & Requirements Analysis",
      "UI/UX Design in Figma",
      "Responsive Frontend Development",
      "Backend API & Database",
      "Authentication & User Management",
      "Payment Integration",
      "Cloud Deployment & Hosting",
      "Analytics & Monitoring",
      "Documentation & Code Handover",
      "1 Week Post-Launch Support",
      "Full Source Code Ownership",
    ],
    popular: true,
    cta: "Get Started",
    ctaLink: "#get-started",
  },
  {
    name: "ENTERPRISE PACKAGE",
    version: "v2.0",
    price: "Custom",
    priceNote: "flexible pricing",
    delivery: "Flexible timeline",
    guarantee: "SLA-backed delivery",
    features: [
      "Everything in MVP Package",
      "Extended Development (30-90 days)",
      "Multiple Product Modules",
      "Advanced Integrations",
      "Team Training & Handover",
      "Priority Support",
      "Quarterly Maintenance Updates",
      "Dedicated Project Manager",
      "Custom SLA Agreement",
      "White-label Options",
      "Performance Optimization",
    ],
    popular: false,
    cta: "Contact Sales",
    ctaLink: "#get-started",
  },
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
            <span className="sm:hidden">═════════════════════</span>
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            <span className="hidden sm:inline">TRANSPARENT PRICING</span>
            <span className="sm:hidden">PRICING</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═════════════════════</span>
          </h2>
          <p className="font-mono text-base text-primary/70 mt-4">
            Choose the package that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-teal-400 text-background px-3 py-1 text-sm font-mono font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`border ${pkg.popular ? "border-teal-400 shadow-[0_0_20px_rgba(0,212,212,0.2)]" : "border-primary/30"} bg-background/50 p-6 font-mono hover:border-teal-400 hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all duration-300 h-full flex flex-col`}
              >
                {/* Package Header */}
                <div className="mb-6 pb-4 border-b border-primary/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-primary">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-primary/50">
                      {pkg.version}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-teal-400">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-primary/50">
                        {pkg.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Key Details */}
                  <div className="mt-4 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-primary/70">Delivery:</span>
                      <span className="text-primary">{pkg.delivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary/70">Guarantee:</span>
                      <span className="text-primary">{pkg.guarantee}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow">
                  <div className="text-sm text-teal-400 font-bold mb-3">
                    INCLUDED FEATURES:
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-teal-400 mt-0.5">✓</span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-primary/30">
                  <Link
                    className={`block text-center py-3 px-6 font-bold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-teal-400 text-background hover:bg-teal-400/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)]"
                        : "bg-primary text-background hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)]"
                    }`}
                    href={pkg.ctaLink}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-base text-primary/70 mb-6">
            Limited slots available. Only 2 projects per month.
          </p>
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
