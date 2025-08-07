"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "design.config",
    items: [
      "ui_framework: 'figma'",
      "responsive: true",
      "components: 50+",
      "design_system: true",
    ],
  },
  {
    title: "backend.yml",
    items: [
      "runtime: node_v20",
      "database: postgresql",
      "api: rest_graphql",
      "auth: jwt_oauth",
    ],
  },
  {
    title: "security.lock",
    items: [
      "encryption: AES-256",
      "rbac: enabled",
      "2fa: supported",
      "ssl: enforced",
    ],
  },
  {
    title: "payment.json",
    items: [
      "provider: 'stripe'",
      "subscriptions: true",
      "webhooks: configured",
      "pci: compliant",
    ],
  },
  {
    title: "deploy.sh",
    items: [
      "hosting: aws_vercel",
      "ci_cd: github_actions",
      "monitoring: enabled",
      "scaling: automatic",
    ],
  },
  {
    title: "package.json",
    items: [
      "react: '^18.0.0'",
      "next: '^14.0.0'",
      "typescript: '^5.0.0'",
      "tailwind: '^3.0.0'",
    ],
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-primary/50 mb-4">
            $ cat /pyro/features/* | head -50
          </div>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            ═══════════════════════════════════════
          </h2>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            SYSTEM CAPABILITIES
          </h2>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            ═══════════════════════════════════════
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-primary bg-background/50 p-4 font-mono text-sm hover:bg-primary/5 transition-colors"
            >
              {/* File header */}
              <div className="mb-3 pb-2 border-b border-primary/30">
                <span className="text-primary">~/config/</span>
                <span className="text-success font-bold">{feature.title}</span>
              </div>
              
              {/* File content */}
              <div className="space-y-1">
                {feature.items.map((item, i) => (
                  <div key={i} className="flex">
                    <span className="text-primary/30 mr-2">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* File footer */}
              <div className="mt-3 pt-2 border-t border-primary/30 text-xs text-primary/30">
                :wq [saved]
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center font-mono text-sm text-primary/50"
        >
          <div>[INFO] All features included in base package</div>
          <div>[INFO] No additional configuration required</div>
          <div>[INFO] Ready to deploy in 21 days</div>
        </motion.div>
      </div>
    </section>
  );
}