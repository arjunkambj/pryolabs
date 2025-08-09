"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const pkgs = [
  {
    name: "MVP PACKAGE",
    version: "v2.1",
    price: "$5,999",
    priceNote: "one-time",
    delivery: "21 days",
    guarantee: "100% money-back",
    features: [
      "Design in Figma",
      "Frontend + Backend",
      "Database & Auth",
      "Payments & Analytics",
      "Deployment & Docs",
      "1 Week Support",
      "Full Source Code",
    ],
    popular: true,
    cta: "Get Started",
    ctaLink: "#get-started",
  },
  {
    name: "ENTERPRISE",
    version: "v2.1",
    price: "Custom",
    priceNote: "flexible pricing",
    delivery: "Flexible timeline",
    guarantee: "SLA-backed delivery",
    features: [
      "All MVP features",
      "Extended Development",
      "Advanced Integrations",
      "Priority Support",
      "Team Training",
      "Custom SLA",
    ],
    popular: false,
    cta: "Contact Sales",
    ctaLink: "#get-started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-base text-primary/50">
            $ cat /etc/pricing.conf
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-mono font-bold text-primary">
            Transparent Pricing
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {pkgs.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="bg-teal-400 px-3 py-1 font-mono text-sm font-bold text-background">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div
                className={`flex h-full flex-col border bg-background/50 p-6 font-mono transition-all duration-300 ${
                  pkg.popular
                    ? "border-teal-400 shadow-[0_0_20px_rgba(0,212,212,0.2)]"
                    : "border-primary/30"
                }`}
              >
                <div className="mb-6 border-b border-primary/30 pb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-primary">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-primary/50">
                      {pkg.version}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-teal-400">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-primary/50">
                      {pkg.priceNote}
                    </span>
                  </div>
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
                <div className="flex-grow">
                  <div className="mb-3 text-sm font-bold text-teal-400">
                    INCLUDED FEATURES:
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-teal-400">✓</span>
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-primary/30 pt-4">
                  <Button
                    as={Link}
                    href={pkg.ctaLink}
                    size="md"
                    className={`w-full px-6 py-2 text-sm ${
                      pkg.popular
                        ? "bg-primary text-background hover:bg-primary/90"
                        : "border border-primary/50 text-primary/80 hover:border-primary/70 hover:text-primary bg-transparent"
                    }`}
                    variant={pkg.popular ? "solid" : "bordered"}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
