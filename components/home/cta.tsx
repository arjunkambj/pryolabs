"use client";

import { Button, Input, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

export function CTA() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-background py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to Launch Your MVP?
        </h2>
        <p className="mt-3 text-foreground/70">
          Join founders who shipped faster with Pyro Labs. We can start in the
          next 48 hours.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            // hook up to your form handler or CRM
          }}
        >
          <Input
            aria-label="Email address"
            type="email"
            size="lg"
            placeholder="Enter your email"
            className="w-full"
            radius="full"
            startContent={
              <Icon
                icon="solar:letter-bold-duotone"
                width={20}
                height={20}
                className="text-foreground/60"
              />
            }
            required
          />
          <Button
            type="submit"
            color="primary"
            size="lg"
            radius="full"
            className="w-full sm:w-auto px-6 font-semibold"
            endContent={
              <Icon icon="solar:rocket-2-bold-duotone" width={20} height={20} />
            }
          >
            Start Building
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground/60">
          <Chip
            variant="flat"
            className="bg-default-100/40 border border-divider"
          >
            📦 21-Day Delivery
          </Chip>
          <Chip
            variant="flat"
            className="bg-default-100/40 border border-divider"
          >
            💰 Fixed Price
          </Chip>
          <Chip
            variant="flat"
            className="bg-default-100/40 border border-divider"
          >
            ✅ Money-Back Guarantee
          </Chip>
        </div>
      </div>
    </section>
  );
}
