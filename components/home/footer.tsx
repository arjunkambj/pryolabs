"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-primary bg-background font-mono">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-base">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-primary mb-3 text-lg font-bold">
              <span className="text-teal-400">labs@Pyro</span>
              <span className="text-primary">:</span>
              <span className="text-success">~</span>
              <span className="text-primary">$</span>
              <span className="ml-2 text-base">whoami</span>
            </div>
            <div className="text-foreground/70 text-sm space-y-2">
              <div>Pyro Labs - Ship Fast. Ship Right.</div>
              <div>Building MVPs in 21 days since 2020</div>
              <div>500+ successful products delivered</div>
              <div className="text-teal-400">96% client satisfaction rate</div>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                className="text-primary/50 hover:text-teal-400 transition-colors text-sm"
                href="https://twitter.com/pyrolabs"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              <a
                className="text-primary/50 hover:text-teal-400 transition-colors text-sm"
                href="https://github.com/pyrolabs"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-primary/50 hover:text-teal-400 transition-colors text-sm"
                href="https://linkedin.com/company/pyrolabs"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-primary mb-3 font-bold">$ ls services/</div>
            <div className="space-y-2 text-sm">
              <Link
                className="block text-foreground/70 hover:text-teal-400 transition-colors"
                href="#features"
              >
                → Tech Stack
              </Link>
              <Link
                className="block text-foreground/70 hover:text-teal-400 transition-colors"
                href="#portfolio"
              >
                → Portfolio
              </Link>
              <Link
                className="block text-foreground/70 hover:text-teal-400 transition-colors"
                href="#pricing"
              >
                → Pricing
              </Link>
              <Link
                className="block text-foreground/70 hover:text-teal-400 transition-colors"
                href="#faq"
              >
                → FAQ
              </Link>
              <Link
                className="block text-foreground/70 hover:text-teal-400 transition-colors"
                href="#testimonials"
              >
                → Reviews
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-primary mb-3 font-bold">$ cat contact.txt</div>
            <div className="space-y-2 text-sm text-foreground/70">
              <div>
                Email: <span className="text-teal-400">hello@pyrolabs.io</span>
              </div>
              <div>
                Slack: <span className="text-teal-400">pyrolabs.slack.com</span>
              </div>
              <div>
                Discord:{" "}
                <span className="text-teal-400">discord.gg/pyrolabs</span>
              </div>
              <div className="pt-2">
                <div className="text-success">Office Hours:</div>
                <div>Mon-Fri: 9am-6pm PST</div>
                <div>Response: &lt; 24 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-primary/50">
              <div>© 2024 Pyro Labs Inc. All rights reserved.</div>
              <div className="mt-2 space-x-4">
                <Link
                  className="hover:text-teal-400 transition-colors"
                  href="/terms"
                >
                  Terms of Service
                </Link>
                <Link
                  className="hover:text-teal-400 transition-colors"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:text-teal-400 transition-colors"
                  href="/sla"
                >
                  SLA
                </Link>
              </div>
            </div>
            <div className="text-sm text-right text-primary/50 hidden md:block">
              <div className="text-teal-400">System Status: ● OPERATIONAL</div>
              <div>Uptime: 99.99% | Load: 0.42 | Memory: 16GB</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
