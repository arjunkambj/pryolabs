"use client";

import { motion } from "framer-motion";

const workingProcess = [
  {
    step: "01_requirements.md",
    title: "Requirements Gathering",
    items: [
      "→ Video call consultation",
      "→ Understand your vision",
      "→ Define success metrics",
      "→ Create project roadmap",
    ],
    time: "Day 1-2",
  },
  {
    step: "02_design.fig",
    title: "Figma Design",
    items: [
      "→ Professional UI mockups",
      "→ Mobile-responsive layouts",
      "→ Brand color integration",
      "→ Unlimited revisions",
    ],
    time: "Day 3-5",
  },
  {
    step: "03_prototype.demo",
    title: "Working Prototype",
    items: [
      "→ Clickable demo version",
      "→ Core features working",
      "→ Real user testing",
      "→ Feedback integration",
    ],
    time: "Day 6-10",
  },
  {
    step: "04_development.app",
    title: "Full Development",
    items: [
      "→ Frontend + Backend code",
      "→ Database setup",
      "→ API integrations",
      "→ Quality assurance",
    ],
    time: "Day 11-16",
  },
  {
    step: "05_payment.stripe",
    title: "Payment Integration",
    items: [
      "→ Stripe/PayPal setup",
      "→ Subscription handling",
      "→ Invoice generation",
      "→ Secure transactions",
    ],
    time: "Day 17-18",
  },
  {
    step: "06_deploy.live",
    title: "Launch & Deploy",
    items: [
      "→ Cloud hosting setup",
      "→ Domain configuration",
      "→ SSL security",
      "→ Go live! 🚀",
    ],
    time: "Day 19-21",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-background" id="process">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="font-mono text-base text-primary/50">
            $ cat /pyro/process/* | head -50
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-mono font-bold text-primary">
            Working Process
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-hidden">
          {workingProcess.map((process, index) => (
            <div
              key={process.step}
              className="border border-primary/30 bg-background/50 p-3 sm:p-4 font-mono text-sm sm:text-base hover:border-teal-400 sm:hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all duration-300 max-w-full animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step header */}
              <div className="mb-3 pb-2 border-b border-primary/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-teal-400 font-bold text-xs">
                    {process.step}
                  </span>
                  <span className="text-primary/50 text-xs">
                    {process.time}
                  </span>
                </div>
                <div className="text-primary font-bold">{process.title}</div>
              </div>

              {/* Process content */}
              <div className="space-y-1">
                {process.items.map((item, i) => (
                  <div key={i} className="flex">
                    <span className="text-primary/30 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* Step footer */}
              <div className="mt-3 pt-2 border-t border-primary/30 text-sm text-primary/30">
                [completed] ✓
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-16 text-center font-mono text-base text-primary/50"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="text-primary">
            [INFO] No technical knowledge needed
          </div>
          <div>[INFO] You focus on business, we handle the tech</div>
          <div>[INFO] Full product delivered in 21 days</div>
        </motion.div>
      </div>
    </section>
  );
}
