"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    author: "SarahChen",
    avatar: "SC",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "LGTM! Pyro Labs delivered our MVP in 19 days. Clean code, great architecture, amazing documentation. Would definitely work with them again.",
    approved: true,
    changes: "+8,420 -0",
    files: "156 files",
  },
  {
    author: "MichaelRodriguez",
    avatar: "MR",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Approved ✅ The quality and speed were unmatched. Professional team, excellent communication, delivered exactly what we needed.",
    approved: true,
    changes: "+5,200 -180",
    files: "89 files",
  },
  {
    author: "EmilyWatson",
    avatar: "EW",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Ship it! 🚀 Best decision for our startup. They understood our vision and delivered a production-ready product that exceeded expectations.",
    approved: true,
    changes: "+12,350 -420",
    files: "234 files",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-20 bg-background/30 border-y border-primary/20"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-base text-primary/50 mb-4">
            $ git log --grep=&quot;review&quot; --pretty=format
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═══════════════</span>
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4">
            <span className="hidden sm:inline">CODE REVIEWS FROM FOUNDERS</span>
            <span className="sm:hidden">FOUNDER REVIEWS</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary mb-4 overflow-hidden">
            <span className="hidden sm:inline">
              ═══════════════════════════════════════
            </span>
            <span className="sm:hidden">═══════════════</span>
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0 overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={review.author}
              className="border border-primary/30 bg-background/50 p-3 sm:p-4 font-mono text-sm sm:text-base hover:border-teal-400 sm:hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all duration-300 max-w-full animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-sm text-primary font-bold">
                    {review.avatar}
                  </div>
                  <span className="text-base text-primary">
                    @{review.author}
                  </span>
                </div>
                {review.approved && (
                  <span className="text-sm text-success font-bold">
                    ✓ APPROVED
                  </span>
                )}
              </div>

              {/* Review Content */}
              <div className="mb-3">
                <div className="text-sm text-primary mb-2">{review.rating}</div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {review.review}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-primary/50 pt-3 border-t border-primary/20">
                <span>{review.files}</span>
                <span className="text-success">{review.changes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 text-center font-mono px-4 sm:px-0"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-block border border-primary/30 bg-background/50 px-6 py-3 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
            <div className="text-base text-primary">
              <span className="text-teal-400">✓</span> All checks passed •{" "}
              <span className="text-teal-400">100%</span> approval rate
            </div>
            <div className="text-sm text-primary/50 mt-1">
              3 successful deployments
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
