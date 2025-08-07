"use client";

import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const processSteps = [
  {
    day: "Day 1-3",
    phase: "Discovery & Planning",
    title: "Understanding Your Vision",
    tasks: [
      "Requirements gathering",
      "User flow mapping",
      "Tech stack selection",
      "Project roadmap",
    ],
    icon: "solar:clipboard-text-bold-duotone",
    color: "text-primary",
  },
  {
    day: "Day 4-7",
    phase: "Design & Prototyping",
    title: "Creating Your Brand",
    tasks: [
      "UI/UX design",
      "Figma mockups",
      "Component library",
      "Design system",
    ],
    icon: "solar:palette-2-bold-duotone",
    color: "text-secondary",
  },
  {
    day: "Day 8-14",
    phase: "Development Sprint",
    title: "Building Your Product",
    tasks: [
      "Frontend development",
      "Backend API",
      "Database setup",
      "Integration testing",
    ],
    icon: "solar:code-square-bold-duotone",
    color: "text-primary",
  },
  {
    day: "Day 15-18",
    phase: "Polish & Testing",
    title: "Perfecting Every Detail",
    tasks: [
      "User testing",
      "Bug fixes",
      "Performance optimization",
      "Security audit",
    ],
    icon: "solar:shield-check-bold-duotone",
    color: "text-secondary",
  },
  {
    day: "Day 19-21",
    phase: "Launch & Deploy",
    title: "Going Live",
    tasks: [
      "Production deployment",
      "Domain setup",
      "Analytics integration",
      "Handover & training",
    ],
    icon: "solar:rocket-2-bold-duotone",
    color: "text-success",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative py-24 bg-background">
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
              Your MVP in 21 Days
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              A proven, systematic approach to building production-ready products
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-success opacity-20 hidden lg:block" />

            {/* Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10 hidden lg:flex">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                          <Icon
                            icon={step.icon}
                            className={step.color}
                            width={28}
                            height={28}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 border border-divider bg-content1/50 backdrop-blur hover:border-primary/50 transition-colors">
                      <CardBody className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-xs font-semibold text-primary">
                                {step.day}
                              </span>
                              <span className="text-xs text-foreground/40">
                                {step.phase}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              {step.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {step.tasks.map((task) => (
                                <div
                                  key={task}
                                  className="flex items-center gap-2 text-sm text-foreground/60"
                                >
                                  <Icon
                                    icon="solar:check-circle-bold"
                                    className="text-success shrink-0"
                                    width={16}
                                  />
                                  <span>{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Icon
                            icon={step.icon}
                            className={`${step.color} lg:hidden`}
                            width={32}
                            height={32}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Icon icon="solar:calendar-bold" className="text-primary" width={20} />
            <span className="text-sm font-medium text-primary">
              Ready to start? Book a free consultation today
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}