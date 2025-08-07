"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    name: "TaskFlow",
    category: "Project Management",
    description: "AI-powered project management platform with team collaboration",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=TaskFlow",
    metrics: {
      users: "5,000+",
      revenue: "$50K MRR",
      time: "19 days",
    },
    tech: ["Next.js", "Supabase", "Stripe"],
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "HealthTrack",
    category: "Healthcare",
    description: "Patient monitoring system with real-time analytics dashboard",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=HealthTrack",
    metrics: {
      users: "10,000+",
      revenue: "$120K MRR",
      time: "21 days",
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    name: "EduLearn",
    category: "EdTech",
    description: "Online learning platform with video courses and certifications",
    image: "https://placehold.co/600x400/1a1a1a/666666?text=EduLearn",
    metrics: {
      users: "25,000+",
      revenue: "$200K MRR",
      time: "20 days",
    },
    tech: ["Vue.js", "Django", "AWS"],
    color: "from-success/20 to-success/5",
  },
];

export function CaseStudies() {
  return (
    <section id="portfolio" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              MVPs That Scale
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Real products we've built that are now thriving businesses
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border border-divider bg-content1/50 backdrop-blur hover:border-primary/50 hover:shadow-xl transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-content2 to-content3">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color}`} />
                    <Image
                      src={study.image}
                      alt={study.name}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Chip
                        variant="flat"
                        className="bg-background/80 backdrop-blur"
                        size="sm"
                      >
                        {study.category}
                      </Chip>
                    </div>
                  </div>

                  <CardBody className="p-6">
                    {/* Title & Description */}
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {study.name}
                    </h3>
                    <p className="mb-4 text-sm text-foreground/60">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="mb-4 grid grid-cols-3 gap-2 rounded-lg bg-content2/50 p-3">
                      <div className="text-center">
                        <div className="text-xs text-foreground/50">Users</div>
                        <div className="text-sm font-semibold text-primary">
                          {study.metrics.users}
                        </div>
                      </div>
                      <div className="text-center border-x border-divider">
                        <div className="text-xs text-foreground/50">Revenue</div>
                        <div className="text-sm font-semibold text-success">
                          {study.metrics.revenue}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-foreground/50">Built in</div>
                        <div className="text-sm font-semibold text-secondary">
                          {study.metrics.time}
                        </div>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { label: "Total MVPs Built", value: "500+" },
                { label: "Success Rate", value: "96%" },
                { label: "Avg. Time to Market", value: "19 days" },
                { label: "Client Retention", value: "89%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-foreground/60">
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