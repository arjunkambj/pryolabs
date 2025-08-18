"use client";

import { motion } from "framer-motion";

export default function LogoCloud() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Your favorite companies are our partners.
        </motion.h2>
        <motion.div
          className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img
            alt="Nvidia Logo"
            className="h-5 w-fit opacity-60"
            height="20"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            width="auto"
          />
          <img
            alt="Column Logo"
            className="h-4 w-fit opacity-60"
            height="16"
            src="https://html.tailus.io/blocks/customers/column.svg"
            width="auto"
          />
          <img
            alt="GitHub Logo"
            className="h-4 w-fit opacity-60"
            height="16"
            src="https://html.tailus.io/blocks/customers/github.svg"
            width="auto"
          />
          <img
            alt="Nike Logo"
            className="h-5 w-fit opacity-60"
            height="20"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            width="auto"
          />
          <img
            alt="Laravel Logo"
            className="h-4 w-fit opacity-60"
            height="16"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            width="auto"
          />
          <img
            alt="Lilly Logo"
            className="h-7 w-fit opacity-60"
            height="28"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            width="auto"
          />
          <img
            alt="Lemon Squeezy Logo"
            className="h-5 w-fit opacity-60"
            height="20"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            width="auto"
          />
          <img
            alt="OpenAI Logo"
            className="h-6 w-fit opacity-60"
            height="24"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            width="auto"
          />
          <img
            alt="Tailwind CSS Logo"
            className="h-4 w-fit opacity-60"
            height="16"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            width="auto"
          />
          <img
            alt="Vercel Logo"
            className="h-5 w-fit opacity-60"
            height="20"
            src="https://html.tailus.io/blocks/customers/vercel.svg"
            width="auto"
          />
          <img
            alt="Zapier Logo"
            className="h-5 w-fit opacity-60"
            height="20"
            src="https://html.tailus.io/blocks/customers/zapier.svg"
            width="auto"
          />
        </motion.div>
      </div>
    </section>
  );
}