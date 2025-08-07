"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "design.config",
    items: [
      "tool: 'Figma'",
      "responsive: true",
      "pages: 10-15",
      "iterations: unlimited",
    ],
  },
  {
    title: "frontend.yml",
    items: [
      "framework: Next.js",
      "styling: TailwindCSS",
      "components: React",
      "typescript: enabled",
    ],
  },
  {
    title: "backend.json",
    items: [
      "database: Supabase/Convex",
      "api: REST/GraphQL",
      "realtime: WebSockets",
      "cloud: Serverless",
    ],
  },
  {
    title: "auth.lock",
    items: [
      "provider: Clerk",
      "oauth: Google/GitHub",
      "2fa: supported",
      "rbac: configured",
    ],
  },
  {
    title: "payment.sh",
    items: [
      "gateway: Stripe",
      "subscriptions: yes",
      "webhooks: automated",
      "invoices: generated",
    ],
  },
  {
    title: "deploy.config",
    items: [
      "hosting: Vercel",
      "ci_cd: automated",
      "monitoring: included",
      "ssl: enforced",
    ],
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-base text-primary/50 mb-4">
            $ cat /pyro/features/* | head -50
          </div>
          <h2 className="text-4xl font-mono font-bold text-primary mb-4">
            ═══════════════════════════════════════
          </h2>
          <h2 className="text-4xl font-mono font-bold text-primary mb-4">
            SYSTEM FEATURES
          </h2>
          <h2 className="text-4xl font-mono font-bold text-primary mb-4">
            ═══════════════════════════════════════
          </h2>
          <p className="font-mono text-base text-primary/70 mt-4">
            Our proven tech stack for building your MVP
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="border border-primary/30 bg-background/50 p-4 font-mono text-base hover:border-teal-400 hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* File header */}
              <div className="mb-3 pb-2 border-b border-primary/30">
                <span className="text-primary">~/stack/</span>
                <span className="text-teal-400 font-bold">{feature.title}</span>
              </div>

              {/* File content */}
              <div className="space-y-1">
                {feature.items.map((item, i) => (
                  <div key={i} className="flex">
                    <span className="text-primary/30 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* File footer */}
              <div className="mt-3 pt-2 border-t border-primary/30 text-sm text-primary/30">
                :wq [saved]
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-16 text-center font-mono text-base text-primary/50"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="text-primary">[INFO] Battle-tested tech stack</div>
          <div>[INFO] Everything configured and ready</div>
          <div>[INFO] Full deployment in 21 days</div>
        </motion.div>
      </div>
    </section>
  );
}
