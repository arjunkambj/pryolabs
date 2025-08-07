"use client";

import { motion } from "framer-motion";

const gitLog = [
  {
    commit: "a3f4b2c",
    date: "Day 1-3",
    author: "team@pyro",
    message: "Initial commit: Project kickoff and discovery",
    changes: [
      "+ requirements.md",
      "+ user-stories.md",
      "+ tech-stack.md",
      "+ roadmap.md",
    ],
    stats: "4 files added, 120 insertions(+)",
  },
  {
    commit: "7d8e9f0",
    date: "Day 4-7",
    author: "design@pyro",
    message: "feat: Complete UI/UX design system",
    changes: [
      "+ figma/components.fig",
      "+ figma/design-system.fig",
      "+ assets/icons/*",
      "+ styles/theme.css",
    ],
    stats: "28 files added, 450 insertions(+)",
  },
  {
    commit: "1b2c3d4",
    date: "Day 8-14",
    author: "dev@pyro",
    message: "feat: Implement core application",
    changes: [
      "+ src/components/*",
      "+ src/api/*",
      "+ src/database/*",
      "+ tests/*",
    ],
    stats: "156 files changed, 8420 insertions(+)",
  },
  {
    commit: "5e6f7a8",
    date: "Day 15-18",
    author: "qa@pyro",
    message: "test: Complete testing and optimization",
    changes: [
      "M src/components/*.tsx",
      "+ tests/e2e/*",
      "+ .github/workflows/ci.yml",
      "M performance.config",
    ],
    stats: "82 files changed, 420 insertions(+), 180 deletions(-)",
  },
  {
    commit: "9c0d1e2",
    date: "Day 19-21",
    author: "devops@pyro",
    message: "deploy: Production release v1.0.0 🚀",
    changes: [
      "+ docker-compose.yml",
      "+ .env.production",
      "+ nginx.conf",
      "M package.json",
    ],
    stats: "12 files changed, 240 insertions(+)",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24" id="process">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="font-mono text-sm text-primary/50 mb-4">
            $ git log --oneline --graph --all
          </div>
          <h2 className="text-3xl font-mono font-bold text-primary mb-4">
            21-DAY DEVELOPMENT TIMELINE
          </h2>
        </motion.div>

        {/* Git Log Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="border border-primary/30 bg-background/50 p-6 font-mono">
            {gitLog.map((commit, index) => (
              <motion.div
                key={commit.commit}
                className="mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {/* Commit header */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-secondary">*</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-secondary font-bold">
                        commit {commit.commit}
                      </span>
                      <span className="text-primary/50">({commit.date})</span>
                    </div>
                    <div className="text-xs text-primary/50 mt-1">
                      Author: {commit.author}
                    </div>
                    <div className="text-sm text-foreground mt-2">
                      {commit.message}
                    </div>
                  </div>
                </div>

                {/* Changes */}
                <div className="ml-6 pl-3 border-l border-primary/20">
                  {commit.changes.map((change, i) => (
                    <div key={i} className="text-xs text-primary/70 mb-1">
                      <span
                        className={
                          change.startsWith("+")
                            ? "text-success"
                            : change.startsWith("M")
                              ? "text-secondary"
                              : "text-danger"
                        }
                      >
                        {change}
                      </span>
                    </div>
                  ))}
                  <div className="text-xs text-primary/50 mt-2">
                    {commit.stats}
                  </div>
                </div>

                {/* Separator */}
                {index < gitLog.length - 1 && (
                  <div className="mt-6 text-primary/20">│</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block border border-primary/30 bg-primary/5 px-6 py-3">
            <div className="text-sm text-primary">
              $ git checkout -b your-mvp
            </div>
            <div className="text-xs text-primary/50 mt-1">
              Ready to start your project? Let&apos;s begin the sprint.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
