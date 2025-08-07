"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CTA() {
  const [email, setEmail] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setTerminalOutput([
        ...terminalOutput,
        `$ contact --email="${email}"`,
        "> Validating email...",
        "> ✓ Email valid",
        "> Sending to team@pyro...",
        "> ✓ Message sent successfully!",
        "> We'll respond within 24 hours.",
      ]);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-content1/10" id="get-started">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="border border-primary bg-background/50 p-8 font-mono"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/30">
            <span className="w-3 h-3 rounded-full bg-danger/60" />
            <span className="w-3 h-3 rounded-full bg-warning/60" />
            <span className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-4 text-sm text-primary/50">
              pyro-cli v2.0.0 - Contact Terminal
            </span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary terminal-glow mb-2">
              Ready to Launch Your MVP?
            </div>
            <div className="text-sm text-foreground/70">
              Execute the command below to start your 21-day sprint.
            </div>

            {/* Command Input */}
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-success">contact</span>
                <span className="text-secondary">--email=</span>
                <input
                  required
                  className="flex-1 bg-transparent outline-none text-foreground placeholder-primary/30"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span
                  className={`w-2 h-4 bg-primary ${showCursor ? "" : "opacity-0"}`}
                />
              </div>
            </form>

            {/* Terminal Output */}
            {terminalOutput.length > 0 && (
              <div className="mt-4 pt-4 border-t border-primary/20">
                {terminalOutput.map((line, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm mb-1 ${
                      line.startsWith(">")
                        ? line.includes("✓")
                          ? "text-success"
                          : "text-primary/70"
                        : "text-foreground"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-primary/30">
              <div className="text-xs text-primary/50 mb-3">
                Available commands:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link
                  className="border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors text-center"
                  href="#pricing"
                >
                  $ view --pricing
                </Link>
                <Link
                  className="border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors text-center"
                  href="#process"
                >
                  $ show --timeline
                </Link>
                <Link
                  className="border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors text-center"
                  href="#portfolio"
                >
                  $ list --projects
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full mt-6 bg-primary text-background font-bold py-3 hover:bg-primary/80 transition-colors"
              type="submit"
              onClick={handleSubmit}
            >
              EXECUTE COMMAND [ENTER] ⏎
            </button>
          </div>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          className="mt-4 flex items-center justify-between text-xs text-primary/50 font-mono"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <span>Ready • 24/7 Support • Instant Response</span>
          <span>Type 'help' for more options</span>
        </motion.div>
      </div>
    </section>
  );
}
