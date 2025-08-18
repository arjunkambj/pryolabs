"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "How It Works", href: "#process" },
    { label: "Success Stories", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            className="flex items-center gap-2 group"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              PyroLabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            as={Link}
            className="bg-primary text-white font-medium px-6 hover:bg-primary/90 transition-all shadow-sm"
            href="#get-started"
            radius="md"
            size="sm"
            onClick={(e: any) => handleSmoothScroll(e, "#get-started")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
