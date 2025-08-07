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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-[#050705]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            className="flex items-center gap-1 sm:gap-2 font-mono text-sm sm:text-base"
            href="/"
          >
            <span className="text-primary font-bold">labs@Pyro</span>
            <span className="text-secondary hidden sm:inline">:</span>
            <span className="text-success hidden sm:inline">~</span>
            <span className="text-primary">$</span>
            <span className="text-xs text-primary/50 ml-1 sm:ml-2 hidden sm:inline">
              v2.0.0
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="font-mono text-sm text-primary/70 hover:text-teal-400 transition-all duration-300 group"
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                <span className="text-primary/50 transition-colors">$ </span>
                <span className="group-hover:text-teal-400 transition-all duration-300">
                  {item.cmd} {item.label.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            className="font-mono text-xs sm:text-sm bg-primary text-background px-3 sm:px-4 py-2 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)] transition-all duration-300 uppercase font-bold"
            href="#get-started"
            onClick={(e) => handleSmoothScroll(e, '#get-started')}
          >
            $ CONTACT_
          </Link>
        </div>
      </div>
    </nav>
  );
}
