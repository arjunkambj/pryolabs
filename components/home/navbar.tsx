"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItems = [
    { label: "process", href: "#process" },
    { label: "features", href: "#features" },
    { label: "portfolio", href: "#portfolio" },
    { label: "pricing", href: "#pricing" },
    { label: "faq", href: "#faq" },
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

      // Detect active section
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href),
      }));

      const current = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();

          return rect.top <= 150 && rect.bottom >= 150;
        }

        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        y: scrolled ? 15 : 25,
        opacity: 1,
        scale: scrolled ? 0.98 : 1,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Floating terminal bar */}
      <div className="relative bg-black/90 backdrop-blur-sm border border-primary/20 overflow-hidden">
        <div className="relative px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with typing cursor */}
            <Link
              className="flex items-center gap-2 font-mono text-sm sm:text-base group"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-teal-400">$</span>
              <span className="text-primary font-bold group-hover:text-teal-400 transition-all duration-300">
                pyro
              </span>
              <span className="text-primary/60 font-semibold">@labs</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                className="inline-block w-2 h-4 bg-teal-400/60 ml-1"
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="relative font-mono text-sm text-primary/80 hover:text-teal-400 transition-all duration-300 group font-medium"
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  <span className="text-primary/40 group-hover:text-teal-400/60 transition-all duration-300">
                    &gt;{" "}
                  </span>
                  <span className="group-hover:text-teal-400 transition-all duration-300">
                    {item.label}
                  </span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-teal-400/60"
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                className="font-mono text-xs sm:text-sm bg-teal-400/10 border border-teal-400/80 text-teal-400 px-4 sm:px-5 py-1.5 hover:bg-teal-400/20 hover:border-teal-400/60 hover:text-teal-400 transition-all duration-300 group"
                href="#get-started"
                onClick={(e) => handleSmoothScroll(e, "#get-started")}
              >
                <span className="inline-block">[</span>
                <span className="inline-block mx-1">CONTACT</span>
                <span className="inline-block">]</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
