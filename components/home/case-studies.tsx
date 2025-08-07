"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    name: "Meyoo.io",
    category: "eCommerce",
    description:
      "Unified dashboard for eCommerce merchants to manage multiple stores",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=Meyoo.io",
    metrics: {
      time: "21 days",
    },
    tech: ["Next.js", "Supabase", "Stripe"],
    color: "from-teal-400/20 to-teal-400/5",
  },
  {
    name: "OneGPT.sh",
    category: "AI / Web3",
    description: "AI chat application designed specifically for Web3 users",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=OneGPT.sh",
    metrics: {
      time: "19 days",
    },
    tech: ["React", "Node.js", "OpenAI"],
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "MegaGPT",
    category: "AI Platform",
    description:
      "Comprehensive AI chat platform integrating all major language models",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=MegaGPT",
    metrics: {
      time: "20 days",
    },
    tech: ["Next.js", "Convex", "Multiple APIs"],
    color: "from-secondary/20 to-secondary/5",
  },
];

export function CaseStudies() {
  return (
    <section className="relative py-24 bg-background" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold tracking-tight font-mono text-primary">
              DELIVERED MVPs
            </h2>
            <p className="mt-4 text-lg text-foreground/60 font-mono">
              Real products we&apos;ve built that are now thriving businesses
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="group h-full overflow-hidden border border-primary/30 bg-background/90 backdrop-blur hover:border-teal-400 hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all rounded-sm">
                  {/* Terminal Header */}
                  <div className="relative h-48 bg-background border-b border-primary/30 p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-danger/60" />
                      <span className="w-2 h-2 rounded-full bg-warning/60" />
                      <span className="w-2 h-2 rounded-full bg-success/60" />
                      <span className="ml-2 text-primary/50 text-xs">{study.name.toLowerCase()}.sh</span>
                    </div>
                    <div className="text-primary/50 mb-2">$ cat project.info</div>
                    <div className="text-teal-400">[{study.category}]</div>
                    <div className="text-primary mt-2">
                      <span className="text-success">Status:</span> <span className="text-primary">DEPLOYED</span>
                    </div>
                    <div className="text-primary/50 mt-1">
                      <span className="text-success">Built in:</span> <span className="text-primary">{study.metrics.time}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-primary/30">Last commit: {study.metrics.time} ago</div>
                    </div>
                  </div>

                  <CardBody className="p-6 font-mono">
                    {/* Title & Description */}
                    <h3 className="mb-2 text-xl font-semibold text-primary group-hover:text-teal-400 transition-colors">
                      {study.name}
                    </h3>
                    <p className="mb-4 text-sm text-foreground/60">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="mb-4 rounded-lg bg-content2/50 p-3 text-center">
                      <div className="text-xs text-foreground/50">
                        Built in
                      </div>
                      <div className="text-sm font-semibold text-success">
                        {study.metrics.time}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-default-100 text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="bg-background/90 border border-primary/30 rounded-sm p-8 font-mono shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: "Success Rate", value: "96%" },
                { label: "Avg. Time to Market", value: "19 days" },
                { label: "Client Retention", value: "89%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <span className="text-teal-400">{stat.value}</span>
                  </div>
                  <div className="mt-1 text-xs text-primary/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
