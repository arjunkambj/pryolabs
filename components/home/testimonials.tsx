"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    author: "SarahChen",
    avatar: "SC",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "LGTM! Pyro Labs delivered our MVP in 19 days. Production quality code, great architecture. We went from idea to $50K MRR in under 3 months. Would definitely work with again.",
    approved: true,
    changes: "+8,420 -0",
    files: "156 files",
  },
  {
    author: "MichaelRodriguez",
    avatar: "MR",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Approved ✅ The quality and speed were unmatched. Clean code, proper tests, excellent documentation. Our investors were blown away by what we accomplished in just 3 weeks.",
    approved: true,
    changes: "+5,200 -180",
    files: "89 files",
  },
  {
    author: "EmilyWatson",
    avatar: "EW",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Ship it! 🚀 We saved 6 months and $200K by working with Pyro Labs. Code quality exceeds our internal standards. Best decision for our startup.",
    approved: true,
    changes: "+12,350 -420",
    files: "234 files",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-content1/10" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-sm text-primary/50 mb-4">
            $ git log --grep=\"review\" --pretty=format
          </div>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            CODE REVIEWS FROM FOUNDERS
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              className="border border-primary/30 bg-background/50 p-4 font-mono hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-bold">
                    {review.avatar}
                  </div>
                  <span className="text-sm text-primary">@{review.author}</span>
                </div>
                {review.approved && (
                  <span className="text-xs text-success font-bold">
                    ✓ APPROVED
                  </span>
                )}
              </div>

              {/* Review Content */}
              <div className="mb-3">
                <div className="text-xs text-secondary mb-2">
                  {review.rating}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {review.review}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-primary/50 pt-3 border-t border-primary/20">
                <span>{review.files}</span>
                <span className="text-success">{review.changes}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="inline-block border border-success/30 bg-success/5 px-6 py-3">
            <div className="text-sm text-success">
              ✓ All checks passed • 96% approval rate
            </div>
            <div className="text-xs text-success/50 mt-1">
              500+ successful deployments
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
