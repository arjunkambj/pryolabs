"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Our standard MVP development takes exactly 4 weeks from start to finish. We guarantee delivery within this timeframe.",
  },
  {
    question: "What if I'm not technical? Can you still help me?",
    answer:
      "Absolutely! We specialize in helping non-technical founders. We handle all the technical aspects while keeping you involved in key decisions.",
  },
  {
    question: "What's included in the MVP development process?",
    answer:
      "Everything from initial consultation and design to development, deployment, and 2 weeks of post-launch support.",
    list: [
      "Complete UI/UX design in Figma",
      "Full-stack development and deployment",
      "14 days of post-launch support",
      "Private Slack channel for communication",
    ],
    listType: "unordered",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we provide 14 days of post-launch support and maintenance. We also offer ongoing support packages for continued growth.",
  },
  {
    question: "Can you help with investor presentations?",
    answer:
      "Yes, we can help prepare your product for investor demos and provide technical documentation for due diligence.",
  },
  {
    question: "What makes Pyro Labs different from other agencies?",
    answer:
      "Our team's Silicon Valley experience, focus on non-technical founders, and proven track record of launching revenue-generating MVPs in just 28 days.",
    list: [
      "Ex-Amazon, Adobe & YC team members",
      "28-day delivery guarantee",
      "Focus on non-technical founders",
      "40+ successful MVP launches",
    ],
    listType: "unordered",
  },
];

export function FAQ() {
  return (
    <section
      className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 bg-default-50"
      id="faq"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          {/* Header */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p className="text-default-600">
              Everything you need to know about working with us
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            className="divide-y divide-dashed divide-default-200 sm:mx-auto sm:max-w-lg lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className={index === 0 ? "pb-6" : "py-6"}>
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-default-500 mt-4">{faq.answer}</p>

                {faq.list &&
                  (faq.listType === "ordered" ? (
                    <ol className="list-outside list-decimal space-y-2 pl-4">
                      {faq.list.map((item, i) => (
                        <li key={i} className="text-default-500 mt-4">
                          {item}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="list-outside list-disc space-y-2 pl-4 mt-4">
                      {faq.list.map((item, i) => (
                        <li key={i} className="text-default-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
