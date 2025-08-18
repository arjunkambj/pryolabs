"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import React from "react";
import { useScroll, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Solution", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        className="fixed z-20 w-full pt-2"
        data-state={menuState ? "active" : ""}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl",
          )}
        >
          <motion.div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                aria-label="home"
                className="flex items-center space-x-2"
                href="/"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">PyroLabs</span>
              </Link>

              <button
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                onClick={() => setMenuState(!menuState)}
              >
                <Icon
                  className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"
                  icon="lucide:menu"
                />
                <Icon
                  className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"
                  icon="lucide:x"
                />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="text-default-500 hover:text-foreground block duration-150"
                        href={item.href}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-default-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="text-default-500 hover:text-foreground block duration-150"
                        href={item.href}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button as={Link} href="#" size="sm" variant="bordered">
                  Login
                </Button>
                <Button as={Link} color="primary" href="#" size="sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
