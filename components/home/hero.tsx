"use client";

import { Button } from "@heroui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AsciiGrid } from "@/components/shared/ascii-grid";

// Simplified mobile ASCII
const mobileAscii = [
  "██████╗ ██╗   ██╗██████╗  ██████╗ ",
  "██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗",
  "██████╔╝ ╚████╔╝ ██████╔╝██║   ██║",
  "██╔═══╝   ╚██╔╝  ██╔══██╗██║   ██║",
  "██║        ██║   ██║  ██║╚██████╔╝",
  "╚═╝        ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ",
  "",
  "      ██╗      █████╗ ██████╗ ███████╗",
  "      ██║     ██╔══██╗██╔══██╗██╔════╝",
  "      ██║     ███████║██████╔╝███████╗",
  "      ██║     ██╔══██║██╔══██╗╚════██║",
  "      ███████╗██║  ██║██████╔╝███████║",
  "      ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝",
];

// Desktop ASCII logo
const desktopAscii = [
  " ____                     _           _         ",
  "|  _ \\ _   _ _ __ ___   | |    __ _ | |__  ___ ",
  "| |_) | | | | '__/ _ \\  | |   / _` || '_ \\/ __|",
  "|  __/| |_| | | | (_) | | |__| (_| || |_) \\__ \\",
  "|_|    \\__, |_|  \\___/  |_____\\__,_||_.__/|___/",
  "       |___/                                    ",
];

const terminalCommands = [
  {
    prompt: "$ ",
    command: "initializing pyro-engine...",
    delay: 0,
    type: "system",
  },
  {
    prompt: "> ",
    command: "[SUCCESS] Engine ready",
    delay: 100,
    type: "success",
  },
  {
    prompt: "$ ",
    command: "load client requirements",
    delay: 200,
    type: "system",
  },
  {
    prompt: "> ",
    command: "Analyzing project scope...",
    delay: 300,
    type: "info",
  },
  {
    prompt: "> ",
    command: "Generating architecture...",
    delay: 400,
    type: "info",
  },
  { prompt: "> ", command: "Deploying resources...", delay: 500, type: "info" },
  { prompt: "✓ ", command: "MVP READY: 21 days", delay: 600, type: "success" },
  { prompt: "$ ", command: "_", delay: 700, type: "cursor" },
];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Counter animations
  const mvpCount = useMotionValue(0);
  const successRate = useMotionValue(0);
  const daysCount = useMotionValue(0);

  const mvpRounded = useTransform(mvpCount, Math.round);
  const successRounded = useTransform(successRate, Math.round);
  const daysRounded = useTransform(daysCount, Math.round);

  useEffect(() => {
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);

    // Animate counters
    const mvpAnimation = animate(mvpCount, 24, { duration: 2, delay: 2.5 });
    const successAnimation = animate(successRate, 100, {
      duration: 2,
      delay: 2.7,
    });
    const daysAnimation = animate(daysCount, 20, { duration: 2, delay: 2.9 });

    return () => {
      mvpAnimation.stop();
      successAnimation.stop();
      daysAnimation.stop();
    };
  }, [mvpCount, successRate, daysCount]);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < terminalCommands.length; i++) {
        await new Promise((resolve) =>
          setTimeout(resolve, terminalCommands[i].delay),
        );
        setCurrentLine(i);

        if (terminalCommands[i].type !== "cursor") {
          const fullText =
            terminalCommands[i].prompt + terminalCommands[i].command;

          for (let j = 0; j <= fullText.length; j++) {
            setTypedText(fullText.slice(0, j));
            await new Promise((resolve) => setTimeout(resolve, 15));
          }
        }

        if (i < terminalCommands.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
    };

    typeText();

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-40">
      {/* ASCII Grid Background */}
      <AsciiGrid />

      {/* CRT scanline effect */}
      <div className="scanline" />

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          className="text-center"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* ASCII Logo - Responsive */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 sm:mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <pre className="text-primary text-[8px] sm:text-xs md:text-sm font-mono block sm:hidden">
              {mobileAscii.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
            <pre className="text-primary text-xs md:text-sm font-mono hidden sm:block">
              {desktopAscii.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
          </motion.div>

          {/* Tagline only */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.p
              animate={{ opacity: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-primary font-mono font-bold mb-3"
              initial={{ opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              &gt; From idea to revenue-generating product in 21 days
            </motion.p>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-sm sm:text-base md:text-lg text-primary/60 font-mono"
              initial={{ opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              No coding knowledge needed - we handle everything
            </motion.p>
          </motion.div>

          {/* Enhanced Terminal output */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 sm:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 1.2 }}
          >
            {/* ASCII Border Top */}
            <div className="text-primary/30 text-xs font-mono mb-1 text-center hidden sm:block">
              ╔══════════════════════════════════════════════════════════════╗
            </div>
            <div className="bg-background/95 backdrop-blur-xl border border-primary/40 overflow-hidden transform hover:scale-[1.01] transition-transform">
              {/* Terminal Title Bar */}
              <div className="bg-primary/20 border-b border-primary/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-danger/80" />
                  <span className="w-3 h-3 rounded-full bg-warning/80" />
                  <span className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <span className="text-xs text-primary/70 font-mono flex items-center gap-2">
                  <span className="text-amber-500">●</span>
                  pyro-mvp-builder.sh
                </span>
                <span className="text-xs text-primary/30 font-mono hidden sm:block">
                  ~/projects
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-6 text-left font-mono text-xs sm:text-sm md:text-base min-h-[200px] sm:min-h-[240px]">
                <div className="mb-4 text-primary/50">
                  [SYSTEM] Pyro Labs MVP Builder v2.0.0
                </div>

                {terminalCommands.map((cmd, i) => (
                  <motion.div
                    key={i}
                    animate={i === currentLine ? { x: [0, 2, 0] } : {}}
                    className={`mb-1 transition-all duration-300 ${
                      i <= currentLine ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span
                      className={
                        cmd.type === "success"
                          ? "text-success font-bold"
                          : cmd.type === "info"
                            ? "text-teal-400"
                            : "text-primary"
                      }
                    >
                      {i <= currentLine && cmd.type !== "cursor"
                        ? cmd.prompt
                        : ""}
                    </span>
                    <span
                      className={
                        cmd.type === "success"
                          ? "text-success font-bold"
                          : cmd.type === "info"
                            ? "text-primary/80"
                            : "text-foreground"
                      }
                    >
                      {i < currentLine && cmd.type !== "cursor"
                        ? cmd.command
                        : i === currentLine && cmd.type !== "cursor"
                          ? typedText.slice(cmd.prompt.length)
                          : ""}
                    </span>
                    {i === currentLine && cmd.type === "cursor" && (
                      <span
                        className={`inline-block w-2 h-4 bg-primary ${showCursor ? "" : "opacity-0"}`}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            {/* ASCII Border Bottom */}
            <div className="text-primary/30 text-xs font-mono mt-1 text-center hidden sm:block">
              ╚══════════════════════════════════════════════════════════════╝
            </div>
          </motion.div>

          {/* CTA Buttons with better animation */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 2 }}
          >
            <Button
              as={Link}
              className="bg-primary text-background font-mono font-bold px-6 sm:px-8 py-3 sm:py-4 hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base border border-primary"
              href="#get-started"
              size="md"
            >
              Book a Call
            </Button>
            <Button
              as={Link}
              className="border border-primary/50 text-primary font-mono px-6 sm:px-8 py-3 sm:py-4 hover:bg-primary/10 hover:border-teal-400 hover:text-teal-400 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
              href="#portfolio"
              size="md"
              variant="bordered"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            animate={{ opacity: 1 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto p-4 sm:p-6 md:p-8 border border-primary/30 bg-background/80"
            initial={{ opacity: 0 }}
            transition={{ delay: 2.3 }}
          >
            <div className="text-center font-mono">
              <div className="text-xs text-primary/50">count</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <motion.span className="text-teal-400">
                  {mvpRounded}
                </motion.span>
              </div>
              <div className="text-xs text-primary/70 mt-1">MVPs Built</div>
            </div>
            <div className="text-center font-mono">
              <div className="text-xs text-primary/50">const</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <motion.span className="text-teal-400">
                  {daysRounded}
                </motion.span>
              </div>
              <div className="text-xs text-primary/70 mt-1">Avg Days</div>
            </div>
            <div className="text-center font-mono">
              <div className="text-xs text-primary/50">float</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                <motion.span className="text-teal-400">
                  {successRounded}
                </motion.span>
                <span className="text-teal-400">%</span>
              </div>
              <div className="text-xs text-primary/70 mt-1">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Terminal scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 0, 0.02) 2px,
                rgba(0, 255, 0, 0.02) 3px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 0, 0.01) 2px,
                rgba(0, 255, 0, 0.01) 3px
              )
            `,
          }}
        />
      </div>
    </section>
  );
}
