"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    command: "man pyro-deliver",
    question: "How do you deliver MVPs so fast?",
    answer:
      "A proven, repeatable playbook: scoped outcomes, parallel workstreams (design, backend, frontend), battle-tested templates, and tight async communication. No reinventing the wheel.",
  },
  {
    command: "man tech-stack",
    question: "What tech stack do you use?",
    answer:
      "Next.js, Node.js, Postgres, Prisma, HeroUI (NextUI), Tailwind, Stripe, OAuth/JWT, and Vercel/Fly/Render for deploy. We adapt to your constraints when needed.",
  },
  {
    command: "man post-launch",
    question: "What if I need changes after delivery?",
    answer:
      "We include 1 week of post-launch support for tweaks and fixes. For larger iterations, we can schedule a scoped follow-on sprint.",
  },
  {
    command: "man ownership",
    question: "Who owns the IP and code?",
    answer:
      "You do. All deliverables, repos, and cloud assets are transferred at the end of the engagement.",
  },
  {
    command: "man pricing",
    question: "What's included in the $5,999 package?",
    answer:
      "Design system, landing page, backend API, auth & RBAC, Stripe subscriptions, admin dashboard, CI/CD & production deploy, 21-day delivery, 1 week support.",
  },
  {
    command: "man guarantee",
    question: "What if I'm not happy with the result?",
    answer:
      "Money-back guarantee. If we miss the mark and can't make it right within the scope, we'll refund you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-sm text-primary/50 mb-4">
            $ man pyro | grep -E \"faq|help\"
          </div>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            PYRO(1) - User Manual
          </h2>
          <p className="font-mono text-sm text-primary/70">
            Version 2.0.0 | Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="border border-primary/30 bg-background/50 p-6 font-mono">
          <div className="mb-4 text-xs text-primary/50">
            NAME
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pyro - MVP development service
            <br />
            <br />
            SYNOPSIS
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pyro [OPTIONS] --project=NAME --days=21
            <br />
            <br />
            FREQUENTLY ASKED QUESTIONS
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
                <div className="flex items-center gap-2 py-2 hover:bg-primary/5 transition-colors px-2 -mx-2">
                  <span className="text-primary">
                    {openIndex === index ? "▼" : "▶"}
                  </span>
                  <span className="text-success text-sm">{faq.command}</span>
                  <span className="text-primary/50 text-sm">--</span>
                  <span className="text-foreground/80 text-sm">
                    {faq.question}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  animate={{ opacity: 1, height: "auto" }}
                  className="ml-6 pl-4 border-l border-primary/20 mt-2 mb-4"
                  exit={{ opacity: 0, height: 0 }}
                  initial={{ opacity: 0, height: 0 }}
                >
                  <div className="text-sm text-foreground/70 leading-relaxed">
                    DESCRIPTION:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}

          <div className="mt-8 pt-4 border-t border-primary/30 text-xs text-primary/50">
            SEE ALSO
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pricing(1), portfolio(1), contact(1)
            <br />
            <br />
            AUTHORS
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Pyro Labs Development Team
            &lt;team@pyro.dev&gt;
            <br />
            <br />
            COPYRIGHT
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;© 2024 Pyro Labs. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
