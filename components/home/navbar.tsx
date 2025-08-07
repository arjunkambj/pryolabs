"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [command, setCommand] = useState("");

  const navItems = [
    { cmd: "ls", label: "Process", href: "#process" },
    { cmd: "cat", label: "Features", href: "#features" },
    { cmd: "git log", label: "Portfolio", href: "#portfolio" },
    { cmd: "echo", label: "Pricing", href: "#pricing" },
    { cmd: "man", label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary bg-background/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-mono">
            <span className="text-primary font-bold">root@pyro</span>
            <span className="text-secondary">:</span>
            <span className="text-success">~</span>
            <span className="text-primary">$</span>
            <span className="text-xs text-primary/50 ml-2">v2.0.0</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-primary/70 hover:text-primary transition-colors"
              >
                <span className="text-primary/50">$ </span>
                <span className="hover:terminal-glow">{item.cmd} {item.label.toLowerCase()}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#get-started"
            className="font-mono text-sm bg-primary text-background px-4 py-2 hover:bg-primary/80 transition-colors"
          >
            $ contact --now_
          </Link>
        </div>

        {/* Command line hint */}
        <div className="hidden md:block pb-2">
          <div className="font-mono text-xs text-primary/30">
            Type 'help' for available commands | Use TAB for autocomplete
          </div>
        </div>
      </div>
    </nav>
  );
}