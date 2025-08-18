"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { HeroHeader } from "./hero-header";


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

      </main>
    </>
  );
}
