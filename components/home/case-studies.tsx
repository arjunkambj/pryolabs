"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <>
      {/* Content Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            The Pyro ecosystem brings together our expertise.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4">
              <p className="text-default-600">
                Pyro Labs is evolving to be more than just an agency.{" "}
                <span className="text-foreground font-bold">
                  It supports an entire ecosystem
                </span>{" "}
                — from products to innovative solutions.
              </p>
              <p className="text-default-600">
                It supports an entire ecosystem — from products to the APIs and
                platforms helping developers and businesses innovate
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4" icon="carbon:lightning" />
                    <h3 className="text-sm font-medium">Fast Delivery</h3>
                  </div>
                  <p className="text-default-600 text-sm">
                    We deliver MVPs in just 28 days, helping you launch and
                    iterate quickly.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4" icon="carbon:chip" />
                    <h3 className="text-sm font-medium">Powerful Tech</h3>
                  </div>
                  <p className="text-default-600 text-sm">
                    Built with modern tech stack ensuring scalability and
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-6 sm:mt-0">
              <div className="aspect-[67/34] relative rounded-2xl bg-gradient-to-b from-default-200 to-transparent p-px">
                <div className="rounded-[15px] bg-default-100 h-full w-full flex items-center justify-center">
                  <img
                    alt="MVP Dashboard Illustration"
                    className="rounded-[15px] shadow"
                    height={612}
                    src="https://placehold.co/1206x612/f8f9fa/6b7280?text=MVP+Dashboard"
                    width={1206}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-32 bg-default-50">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <motion.div
            className="relative z-10 mx-auto max-w-xl space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-medium lg:text-5xl">
              Pyro Labs in numbers
            </h2>
            <p className="text-default-600">
              We&apos;ve helped non-technical founders launch successful MVPs
              that generate real revenue and attract investment.
            </p>
          </motion.div>

          <div className="grid gap-12 divide-y divide-default-200 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              className="space-y-4 pt-12 md:pt-0"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl font-bold">40+</div>
              <p className="text-default-600">Successful MVPs Launched</p>
            </motion.div>
            <motion.div
              className="space-y-4 pt-12 md:pt-0"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl font-bold">$2.5M+</div>
              <p className="text-default-600">Total Client Revenue</p>
            </motion.div>
            <motion.div
              className="space-y-4 pt-12 md:pt-0"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl font-bold">100%</div>
              <p className="text-default-600">On-Time Delivery</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
