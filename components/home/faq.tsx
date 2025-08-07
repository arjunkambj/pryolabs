"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    command: "man how-fast",
    question: "How do you deliver MVPs in just 21 days?",
    answer:
      "We use a proven process: Week 1 for design and planning, Week 2 for building core features, Week 3 for polish and deployment. No delays, no scope creep, just focused execution.",
  },
  {
    command: "man tech-stack",
    question: "What technologies do you use?",
    answer:
      "Figma for design, Next.js for frontend, Supabase or Convex for backend, Vercel for hosting, Stripe for payments, and Clerk for authentication. Modern, reliable, scalable.",
  },
  {
    command: "man after-launch",
    question: "What happens after the MVP is delivered?",
    answer:
      "You get 1 week of free support for fixes and minor tweaks. We also provide full documentation and code handover. For major updates, we offer additional sprint packages.",
  },
  {
    command: "man ownership",
    question: "Do I own everything you build?",
    answer:
      "Yes, 100%. All code, designs, documentation, and intellectual property belong to you. We transfer everything to your GitHub and hosting accounts.",
  },
  {
    command: "man pricing",
    question: "What does $5,999 include?",
    answer:
      "Everything needed for a working product: design, frontend, backend, database, authentication, payments, deployment, and 1 week of support. No hidden fees.",
  },
  {
    command: "man guarantee",
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 100% money-back guarantee. If we can't deliver what we promised within 21 days, you get a full refund. Simple as that.",
  },
  {
    command: "man process",
    question: "How do you work with clients?",
    answer:
      "We communicate daily via Slack or Discord. You get access to a private channel, daily updates, and can review progress anytime. Full transparency throughout.",
  },
  {
    command: "man team",
    question: "Who will work on my project?",
    answer:
      "A dedicated team of 2-3 experts: a designer, a full-stack developer, and a project lead. All senior-level with 5+ years of experience building products.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 bg-background/30 border-y border-primary/20"
      id="faq"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-base text-primary/50 mb-4">
            $ man pyro | grep -E &quot;faq|help&quot;
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═════════════════════</span>
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            <span className="hidden sm:inline">FREQUENTLY ASKED QUESTIONS</span>
            <span className="sm:hidden">FAQ</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═════════════════════</span>
          </h2>
          <p className="font-mono text-base text-primary/70 mt-4">
            Everything you need to know about our service
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="border border-primary/30 bg-background/50 p-4 sm:p-6 font-mono">
          <div className="mb-4 text-sm text-primary/50">
            PYRO LABS FAQ v2.0.0
            <br />
            Select a topic to learn more:
          </div>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <button
                className="w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-2 py-3 sm:py-2 hover:bg-primary/5 transition-colors duration-300 px-2 -mx-2 min-h-[44px]">
                  <span className="text-primary">
                    {openIndex === index ? "▼" : "▶"}
                  </span>
                  <span className="text-teal-400 text-sm sm:text-base">
                    {faq.command}
                  </span>
                  <span className="text-primary/50 text-sm sm:text-base hidden sm:inline">
                    --
                  </span>
                  <span className="text-foreground/80 text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  animate={{ opacity: 1, height: "auto" }}
                  className="ml-6 pl-4 border-l border-primary/30 mt-2 mb-4"
                  exit={{ opacity: 0, height: 0 }}
                  initial={{ opacity: 0, height: 0 }}
                >
                  <div className="text-base text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}

          <div className="mt-8 pt-4 border-t border-primary/30 text-sm text-primary/50">
            Still have questions?
            <br />
            <span className="text-primary">
              $ contact --email=
              <span className="text-teal-400">hello@pyrolabs.io</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
