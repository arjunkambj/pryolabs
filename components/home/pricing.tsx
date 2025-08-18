"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/ mo",
    description: "Per editor",
    features: [
      "Basic Analytics Dashboard",
      "5GB Cloud Storage",
      "Email and Chat Support",
    ],
    buttonVariant: "bordered" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mo",
    description: "Per editor",
    features: [
      "Everything in Free Plan",
      "5GB Cloud Storage",
      "Email and Chat Support",
      "Access to Community Forum",
      "Single User Access",
      "Access to Basic Templates",
      "Mobile App Access",
      "1 Custom Report Per Month",
      "Monthly Product Updates",
      "Standard Security Features",
    ],
    buttonVariant: "solid" as const,
    popular: true,
  },
  {
    name: "Startup",
    price: "$29",
    period: "/ mo",
    description: "Per editor",
    features: [
      "Everything in Pro Plan",
      "5GB Cloud Storage", 
      "Email and Chat Support",
    ],
    buttonVariant: "bordered" as const,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-32" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-2xl space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p className="text-default-600">
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {plan.popular && (
                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-br from-violet-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-default-100/5">
                  Popular
                </span>
              )}
              
              <Card className="flex h-full flex-col border-none shadow-none bg-default-100">
                <CardHeader className="pb-4">
                  <h3 className="font-medium text-lg">{plan.name}</h3>
                  <div className="my-3">
                    <span className="text-2xl font-semibold">{plan.price}</span>
                    <span className="text-default-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-default-500">{plan.description}</p>
                </CardHeader>

                <CardBody className="flex-1 space-y-4 pt-0">
                  <hr className="border-dashed border-default-300" />
                  
                  <ul className="list-outside space-y-3 text-sm">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Icon 
                          icon="lucide:check" 
                          className="size-3 text-foreground flex-shrink-0"
                        />
                        <span className="text-default-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter className="mt-auto pt-4">
                  <Button
                    as={Link}
                    href="#get-started"
                    className="w-full"
                    color={plan.popular ? "primary" : "default"}
                    variant={plan.popular ? "solid" : "bordered"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}