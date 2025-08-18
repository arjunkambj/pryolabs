"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { HeroHeader } from "./hero-header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function Hero() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-[560px] h-[1280px] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[1280px] absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[1280px] -translate-y-[350px] absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <motion.div
                  animate="visible"
                  initial="hidden"
                  variants={transitionVariants}
                >
                  <Link
                    className="hover:bg-background bg-default-100 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-default-950/5 transition-colors duration-300"
                    href="#"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI-Powered MVPs
                    </span>
                    <span className="block h-4 w-0.5 border-l bg-default-300" />

                    <div className="bg-background group-hover:bg-default-100 size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <Icon
                            className="m-auto size-3"
                            icon="lucide:arrow-right"
                          />
                        </span>
                        <span className="flex size-6">
                          <Icon
                            className="m-auto size-3"
                            icon="lucide:arrow-right"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.h1
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  className="mt-8 text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl"
                  initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Build Your MVP in
                  <span className="text-primary"> 28 Days</span>
                  <br />
                  with Silicon Valley Expertise
                </motion.h1>

                <motion.p
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-default-600"
                  initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  From idea to revenue-ready product. We handle everything from
                  design to deployment for non-technical founders. Built by
                  ex-Amazon, Adobe & YC teams.
                </motion.p>

                <motion.div
                  animate="visible"
                  className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
                  initial="hidden"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.6,
                      },
                    },
                  }}
                >
                  <motion.div
                    className="bg-foreground/10 rounded-[calc(theme(borderRadius.lg)+0.125rem)] border p-0.5"
                    variants={transitionVariants}
                  >
                    <Button
                      as={Link}
                      className="px-8 text-base font-medium"
                      color="primary"
                      href="#get-started"
                      radius="lg"
                      size="lg"
                    >
                      <span className="text-nowrap">Start Building</span>
                      <Icon className="ml-2 size-4" icon="lucide:arrow-right" />
                    </Button>
                  </motion.div>
                  <motion.div variants={transitionVariants}>
                    <Button
                      as={Link}
                      className="px-8 text-base"
                      href="#pricing"
                      radius="lg"
                      size="lg"
                      variant="ghost"
                    >
                      <span className="text-nowrap">View Pricing</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative mt-16 overflow-hidden px-2 sm:mt-20 md:mt-24"
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div
                aria-hidden
                className="bg-gradient-to-b from-transparent from-35% to-background absolute inset-0 z-10"
              />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-default-200 bg-background p-4 shadow-xl shadow-default-950/15">
                <div className="aspect-[16/9] relative rounded-xl bg-gradient-to-br from-default-100 to-default-200 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="size-full object-cover opacity-50 rounded-xl"
                    src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Icon
                        className="size-20 text-white/80 mb-4"
                        icon="lucide:play-circle"
                      />
                      <p className="text-white text-lg font-medium">
                        See How We Build MVPs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logo Cloud Section */}
        <section className="bg-default-50 pb-16 pt-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <motion.div
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                className="block text-sm duration-150 hover:opacity-75"
                href="#testimonials"
              >
                <span>Trusted by Industry Leaders</span>
                <Icon
                  className="ml-1 inline-block size-3"
                  icon="lucide:chevron-right"
                />
              </Link>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 opacity-60 transition-all duration-500 group-hover:opacity-30 group-hover:blur-[2px] sm:gap-x-16 sm:gap-y-14"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex">
                <img
                  alt="Nvidia Logo"
                  className="mx-auto h-5 w-fit"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Column Logo"
                  className="mx-auto h-4 w-fit"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="GitHub Logo"
                  className="mx-auto h-4 w-fit"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Nike Logo"
                  className="mx-auto h-5 w-fit"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lemon Squeezy Logo"
                  className="mx-auto h-5 w-fit"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Laravel Logo"
                  className="mx-auto h-4 w-fit"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lilly Logo"
                  className="mx-auto h-7 w-fit"
                  height="28"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="OpenAI Logo"
                  className="mx-auto h-6 w-fit"
                  height="24"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  width="auto"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
