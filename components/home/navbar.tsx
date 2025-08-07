"use client";

import Link from "next/link";

export function Navbar() {
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
          <Link className="flex items-center gap-2 font-mono" href="/">
            <span className="text-primary font-bold">labs@Pyro</span>
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
                className="font-mono text-sm text-primary/70 hover:text-primary transition-all group"
                href={item.href}
              >
                <span className="text-primary/50 group-hover:text-teal-400 transition-colors">$ </span>
                <span className="group-hover:text-teal-400 group-hover:text-shadow-[0_0_8px_rgba(0,212,212,0.6)] transition-all">
                  {item.cmd} {item.label.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            className="font-mono text-sm bg-primary text-background px-4 py-2 hover:bg-teal-400 hover:shadow-[0_0_15px_rgba(0,212,212,0.5)] transition-all"
            href="#get-started"
          >
            $ contact --now_
          </Link>
        </div>
      </div>
    </nav>
  );
}
