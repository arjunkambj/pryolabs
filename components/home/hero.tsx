"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { HeroHeader } from "./hero-header";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

export function Hero() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold">
                  Build Your MVP 10x Faster with Pyro Labs
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-default-600">
                  From idea to revenue-ready product in just 28 days. We handle
                  everything from design to deployment for non-technical
                  founders.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    as={Link}
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                    color="primary"
                    href="#get-started"
                    size="lg"
                  >
                    <span className="text-nowrap">Start Building</span>
                    <Icon className="ml-1 size-5" icon="lucide:chevron-right" />
                  </Button>
                  <Button
                    as={Link}
                    className="h-12 rounded-full px-5 text-base hover:bg-default-100"
                    href="#pricing"
                    size="lg"
                    variant="ghost"
                  >
                    <span className="text-nowrap">View Pricing</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-default-200/50 lg:aspect-video lg:rounded-[3rem]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover opacity-50"
                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
              />
            </div>
          </div>
        </section>

        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-default-200 md:pr-6">
                <p className="text-end text-sm text-default-600">
                  Trusted by leading startups
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider gap={112} speed={40} speedOnHover={20}>
                  <div className="flex">
                    <img
                      alt="Nvidia Logo"
                      className="mx-auto h-5 w-fit opacity-60"
                      height="20"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="Column Logo"
                      className="mx-auto h-4 w-fit opacity-60"
                      height="16"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="GitHub Logo"
                      className="mx-auto h-4 w-fit opacity-60"
                      height="16"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="Nike Logo"
                      className="mx-auto h-5 w-fit opacity-60"
                      height="20"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="Lemon Squeezy Logo"
                      className="mx-auto h-5 w-fit opacity-60"
                      height="20"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="Laravel Logo"
                      className="mx-auto h-4 w-fit opacity-60"
                      height="16"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="Lilly Logo"
                      className="mx-auto h-7 w-fit opacity-60"
                      height="28"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      alt="OpenAI Logo"
                      className="mx-auto h-6 w-fit opacity-60"
                      height="24"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20" />
                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20" />
                <ProgressiveBlur
                  blurIntensity={1}
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                />
                <ProgressiveBlur
                  blurIntensity={1}
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
