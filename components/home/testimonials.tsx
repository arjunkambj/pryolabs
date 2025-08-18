"use client";

import { Card, CardBody, CardHeader, Avatar } from "@heroui/react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-default-50" id="testimonials">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        {/* Header */}
        <motion.div
          className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-medium lg:text-5xl">
            Built by ex-Silicon Valley teams, loved by non-technical founders
          </h2>
          <p className="text-default-600">
            Pyro Labs is evolving to be more than just an agency. We&apos;re
            your technical co-founder, helping you innovate and scale.
          </p>
        </motion.div>

        {/* Testimonials Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Large Featured Card - spans 2 cols and 2 rows */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader className="pb-0">
              <img
                alt="TaskFlow Logo"
                className="h-6 w-fit"
                height="24"
                src="https://placehold.co/120x30/1a1a1a/666666?text=TaskFlow"
                width="auto"
              />
            </CardHeader>
            <CardBody className="p-0 sm:p-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Pyro Labs transformed the way we build products. Their Silicon
                  Valley expertise and proven process delivered our MVP in
                  exactly 28 days. The flexibility to iterate quickly allowed us
                  to find product-market fit faster. We&apos;ve already secured
                  our first round of funding. Pyro Labs is a game-changer for
                  non-technical founders.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar
                    className="size-12"
                    src="https://i.pravatar.cc/150?u=sarah"
                  />
                  <div>
                    <cite className="text-sm font-medium not-italic">
                      Sarah Mitchell
                    </cite>
                    <span className="text-default-500 block text-sm">
                      Founder, TaskFlow
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardBody>
          </Card>

          {/* Medium Card - spans 2 cols */}
          <Card className="md:col-span-2">
            <CardBody className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Pyro Labs is really extraordinary. As a non-technical founder,
                  they made everything simple. A real goldmine for startups.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar
                    className="size-12"
                    src="https://i.pravatar.cc/150?u=david"
                  />
                  <div>
                    <cite className="text-sm font-medium not-italic">
                      David Chen
                    </cite>
                    <span className="text-default-500 block text-sm">
                      CEO, DataInsight
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardBody>
          </Card>

          {/* Small Card 1 */}
          <Card>
            <CardBody className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Great work on our MVP. This is one of the best development
                  experiences we&apos;ve had. 4 weeks as promised!
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar
                    className="size-12"
                    src="https://i.pravatar.cc/150?u=maria"
                  />
                  <div>
                    <cite className="text-sm font-medium not-italic">
                      Maria Rodriguez
                    </cite>
                    <span className="text-default-500 block text-sm">
                      Founder, HealthTrack
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardBody>
          </Card>

          {/* Small Card 2 */}
          <Card>
            <CardBody className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  The team&apos;s expertise shows. They delivered exactly what
                  we needed. Investors were impressed!
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar
                    className="size-12"
                    src="https://i.pravatar.cc/150?u=emily"
                  />
                  <div>
                    <p className="text-sm font-medium">Emily Watson</p>
                    <span className="text-default-500 block text-sm">
                      CEO, FinanceFlow
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
