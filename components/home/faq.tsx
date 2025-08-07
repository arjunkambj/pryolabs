"use client";

import { Accordion, AccordionItem, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "How do you deliver MVPs so fast?",
    a: "A proven, repeatable playbook: scoped outcomes, parallel workstreams (design, backend, frontend), battle-tested templates, and tight async communication. No reinventing the wheel.",
    icon: "solar:rocket-2-bold-duotone",
  },
  {
    q: "What tech stack do you use?",
    a: "Next.js, Node.js, Postgres, Prisma, HeroUI (NextUI), Tailwind, Stripe, OAuth/JWT, and Vercel/Fly/Render for deploy. We adapt to your constraints when needed.",
    icon: "solar:cpu-bolt-bold-duotone",
  },
  {
    q: "What if I need changes after delivery?",
    a: "We include 1 week of post-launch support for tweaks and fixes. For larger iterations, we can schedule a scoped follow-on sprint.",
    icon: "solar:refresh-square-bold-duotone",
  },
  {
    q: "Who owns the IP and code?",
    a: "You do. All deliverables, repos, and cloud assets are transferred at the end of the engagement.",
    icon: "solar:shield-keyhole-bold-duotone",
  },
  {
    q: "What's included in the $5,999 package?",
    a: "Design system, landing page, backend API, auth & RBAC, Stripe subscriptions, admin dashboard, CI/CD & production deploy, 21-day delivery, 1 week support.",
    icon: "solar:card-transfer-bold-duotone",
  },
  {
    q: "What if I’m not happy with the result?",
    a: "Money-back guarantee. If we miss the mark and can’t make it right within the scope, we’ll refund you.",
    icon: "solar:smile-circle-bold-duotone",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">FAQs</h2>
          <p className="mt-3 text-foreground/70">You might be wondering...</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-divider bg-content1 p-2 backdrop-blur">
          <Accordion
            selectionMode="multiple"
            itemClasses={{
              base: "px-2",
              title: "text-base",
              content: "text-foreground/80",
              trigger: "py-4",
              indicator: "data-[open=true]:rotate-180",
            }}
            dividerProps={{ className: "bg-white/10" }}
          >
            {faqs.map((f, idx) => (
              <AccordionItem
                key={idx}
                title={
                  <div className="flex items-center gap-2">
                    <Icon
                      icon={f.icon}
                      className="text-primary"
                      width={20}
                      height={20}
                    />
                    <span>{f.q}</span>
                  </div>
                }
                aria-label={f.q}
              >
                <div className="text-sm leading-relaxed">{f.a}</div>
              </AccordionItem>
            ))}
          </Accordion>
          <Divider className="mt-2 bg-divider" />
        </div>
      </div>
    </section>
  );
}
