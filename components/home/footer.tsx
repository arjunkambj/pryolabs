"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-content1 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <Icon
              icon="solar:fire-bold-duotone"
              className="text-primary"
              width={22}
              height={22}
            />
            <span className="font-semibold">
              Pyro Labs | Ship Fast. Ship Right.
            </span>
          </div>
          <p className="mt-1 text-xs text-foreground/60">
            © 2025 Pyro Labs. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="#terms"
            className="text-foreground/80 hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="#privacy"
            className="text-foreground/80 hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            <Icon icon="mdi:linkedin" width={18} height={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-foreground"
          >
            <Icon icon="mdi:twitter" width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
