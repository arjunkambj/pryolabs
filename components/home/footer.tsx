"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const links = [
  { title: "Features", href: "#features" },
  { title: "Solution", href: "#solution" },
  { title: "Customers", href: "#testimonials" },
  { title: "Pricing", href: "#pricing" },
  { title: "Help", href: "#faq" },
  { title: "About", href: "#about" },
];

const socialLinks = [
  { name: "X/Twitter", icon: "ri:twitter-x-line", href: "#" },
  { name: "LinkedIn", icon: "ri:linkedin-fill", href: "#" },
  { name: "Facebook", icon: "ri:facebook-fill", href: "#" },
  { name: "Threads", icon: "tabler:brand-threads", href: "#" },
  { name: "Instagram", icon: "ri:instagram-line", href: "#" },
  { name: "TikTok", icon: "ri:tiktok-fill", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo */}
        <Link aria-label="go home" className="mx-auto block size-fit" href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold">PyroLabs</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              className="text-default-500 hover:text-primary block duration-150"
              href={link.href}
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              aria-label={social.name}
              className="text-default-500 hover:text-primary block transition-colors"
              href={social.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-6" icon={social.icon} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-default-500 block text-center text-sm">
          © {currentYear} PyroLabs, All rights reserved
        </span>
      </div>
    </footer>
  );
}
