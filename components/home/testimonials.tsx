"use client";

import { Avatar, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Pyro Labs delivered our MVP in 19 days. We went from idea to $50K MRR in under 3 months. Incredible execution.",
    author: "Sarah Chen",
    role: "CEO, TaskFlow",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "The quality and speed were unmatched. Our investors were blown away by what we accomplished in just 3 weeks.",
    author: "Michael Rodriguez",
    role: "Founder, HealthTrack",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "We saved 6 months and $200K by working with Pyro Labs. Best decision for our startup.",
    author: "Emily Watson",
    role: "CTO, EduLearn",
    avatar: "EW",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-content1/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Founders Love Working with Us
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Real feedback from real startups
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-divider bg-background/50 backdrop-blur hover:border-primary/30 transition-colors">
                  <CardBody className="p-6">
                    {/* Rating */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="solar:star-bold"
                          className="text-warning"
                          width={18}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-6 text-sm leading-relaxed text-foreground/80">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={testimonial.avatar}
                        size="sm"
                        className="bg-gradient-to-br from-primary to-secondary text-white font-semibold"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-foreground/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-success/10 px-4 py-2">
            <Icon icon="solar:verified-check-bold" className="text-success" width={20} />
            <span className="text-sm font-medium text-success">
              96% Client Satisfaction Rate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}