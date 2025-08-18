"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-32" id="get-started">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to Launch Your MVP?
          </h2>
          <p className="mt-4 text-default-600">
            Join 40+ founders who&apos;ve successfully launched with Pyro Labs.
          </p>

          <form
            className="mx-auto mt-10 max-w-sm lg:mt-12"
            onSubmit={handleSubmit}
          >
            <div className="relative grid grid-cols-[1fr_auto] items-center rounded-2xl border border-default-200 bg-background pr-3 shadow shadow-default-100/5 transition-all duration-200 has-[input:focus]:ring-2 has-[input:focus]:ring-default-200">
              <Icon
                className="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-default-400"
                icon="heroicons:envelope"
              />

              <input
                required
                className="h-14 w-full bg-transparent pl-12 pr-3 placeholder:text-default-400 focus:outline-none"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  aria-label="submit"
                  className="font-medium"
                  color="primary"
                  radius="lg"
                  size="md"
                  type="submit"
                >
                  <span className="hidden md:block">Launch My MVP</span>
                  <Icon
                    className="relative mx-auto size-5 md:hidden"
                    icon="heroicons:paper-airplane"
                  />
                </Button>
              </div>
            </div>
          </form>

          {submitted && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-success flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
            >
              <Icon className="size-5" icon="heroicons:check-circle-solid" />
              <span>
                Thank you! We&apos;ll contact you within 24 hours to discuss
                your MVP.
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
