"use client";

import { Button } from "@heroui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AsciiGrid } from "@/components/shared/ascii-grid";

// Clean ASCII logo for all screens
const asciiLogo = [
  "╔═══════════════════════════════════════╗",
  "║  ██████╗ ██╗   ██╗██████╗  ██████╗   ║",
  "║  ██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗  ║",
  "║  ██████╔╝ ╚████╔╝ ██████╔╝██║   ██║  ║",
  "║  ██╔═══╝   ╚██╔╝  ██╔══██╗██║   ██║  ║",
  "║  ██║        ██║   ██║  ██║╚██████╔╝  ║",
  "║  ╚═╝        ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ║",
  "╠═══════════════════════════════════════╣",
  "║         L A B S  ·  2 0 2 5          ║",
  "╚═══════════════════════════════════════╝",
];

const terminalCommands = [
  {
    prompt: "pyro@labs:~$ ",
    command: "./init-mvp-builder.sh",
    delay: 0,
    type: "command",
  },
  {
    prompt: "",
    command: "[*] Initializing Pyro Engine v2.0.0",
    delay: 100,
    type: "info",
  },
  {
    prompt: "",
    command: "[+] Loading client requirements...",
    delay: 200,
    type: "loading",
  },
  {
    prompt: "",
    command: "[*] Analyzing project scope........... ✓",
    delay: 300,
    type: "process",
  },
  {
    prompt: "",
    command: "[*] Generating architecture........... ✓",
    delay: 400,
    type: "process",
  },
  {
    prompt: "",
    command: "[*] Setting up CI/CD pipeline......... ✓",
    delay: 500,
    type: "process",
  },
  {
    prompt: "",
    command: "[*] Deploying cloud resources......... ✓",
    delay: 600,
    type: "process",
  },
  {
    prompt: "",
    command: "\n[SUCCESS] MVP Ready in 21 days",
    delay: 700,
    type: "success",
  },
  {
    prompt: "\npyro@labs:~$ ",
    command: "_",
    delay: 800,
    type: "cursor",
  },
];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginTime, setLoginTime] = useState<string>("");

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

    // Set login time to avoid hydration mismatch
    setLoginTime(
      new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    );

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
          setTimeout(resolve, terminalCommands[i].delay + 300),
        );
        setCurrentLine(i);

        if (terminalCommands[i].type !== "cursor") {
          const fullText =
            terminalCommands[i].prompt + terminalCommands[i].command;

          // Faster typing for certain command types
          const typeSpeed =
            terminalCommands[i].type === "command"
              ? 25
              : terminalCommands[i].type === "process"
                ? 10
                : 15;

          for (let j = 0; j <= fullText.length; j++) {
            setTypedText(fullText.slice(0, j));
            await new Promise((resolve) => setTimeout(resolve, typeSpeed));
          }
        } else {
          // Show cursor immediately
          setTypedText(terminalCommands[i].prompt);
        }

        if (i < terminalCommands.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 150));
        }
      }
    };

    // Start animation after a short delay
    setTimeout(() => {
      typeText();
    }, 500);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
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
          {/* ASCII Logo */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 sm:mb-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            <pre className="text-primary text-[9px] sm:text-xs lg:text-sm font-mono leading-tight select-none">
              {asciiLogo.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center"
                  initial={{ opacity: 0, x: -30 }}
                  transition={{
                    delay: 0.4 + i * 0.08,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
          </motion.div>

          {/* Tagline */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl md:text-3xl text-primary font-mono mb-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-teal-400">&gt;</span> From idea to
              revenue-generating product in{" "}
              <span className="text-teal-400">21 days</span>
            </motion.p>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-sm sm:text-base md:text-lg text-primary/70 font-mono font-medium"
              initial={{ opacity: 0 }}
              transition={{ delay: 1.6 }}
            >
              No coding knowledge needed - we handle everything
            </motion.p>
          </motion.div>

          {/* Enhanced Terminal output */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="relative bg-black/95 backdrop-blur-sm border border-primary/20 overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="bg-black/90 border-b border-primary/20 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-primary/60 font-mono flex items-center gap-2 font-medium">
                    <span className="text-teal-400/70">●</span>
                    <span className="text-primary">bash</span> -{" "}
                    <span className="text-teal-400">pyro@labs</span>
                  </span>
                  <span className="text-xs text-primary/30 font-mono hidden sm:block">
                    ~/projects/mvp-builder
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="relative px-6 py-5 sm:px-8 sm:py-6 text-left font-mono text-xs sm:text-sm min-h-[280px] sm:min-h-[340px] bg-black">
                {/* Terminal scanlines effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0, 255, 0, 0.03) 2px,
                      rgba(0, 255, 0, 0.03) 4px
                    )`,
                    }}
                  />
                </div>

                <div className="relative">
                  <div className="mb-4 text-teal-400 text-xs font-medium">
                    <span className="text-primary/50">Last login:</span>{" "}
                    {loginTime} <span className="text-primary/50">on</span>{" "}
                    <span className="text-teal-400">ttys001</span>
                  </div>

                  {terminalCommands.map((cmd, i) => (
                    <motion.div
                      key={i}
                      animate={i <= currentLine ? { opacity: 1, x: 0 } : {}}
                      className={`${
                        i <= currentLine ? "opacity-100" : "opacity-0"
                      } ${cmd.type === "command" ? "mb-2" : "mb-1"}`}
                      initial={{ opacity: 0, x: -10 }}
                      transition={{ delay: cmd.delay / 1000 }}
                    >
                      <span
                        className={
                          cmd.type === "command"
                            ? "text-primary/80"
                            : cmd.type === "success"
                              ? "text-green-400"
                              : cmd.type === "loading"
                                ? "text-yellow-400/80"
                                : cmd.type === "process"
                                  ? "text-primary/60"
                                  : cmd.type === "info"
                                    ? "text-primary/70"
                                    : "text-primary"
                        }
                      >
                        {i <= currentLine && cmd.type !== "cursor"
                          ? cmd.prompt
                          : cmd.type === "cursor" && i === currentLine
                            ? cmd.prompt
                            : ""}
                      </span>
                      <span
                        className={
                          cmd.type === "command"
                            ? "text-white"
                            : cmd.type === "success"
                              ? "text-green-400"
                              : cmd.type === "loading"
                                ? "text-yellow-400/80"
                                : cmd.type === "process"
                                  ? "text-primary/80"
                                  : "text-primary/70"
                        }
                      >
                        {i < currentLine && cmd.type !== "cursor"
                          ? cmd.command
                          : i === currentLine && cmd.type !== "cursor"
                            ? typedText.slice(cmd.prompt.length)
                            : ""}
                      </span>
                      {i === currentLine && cmd.type === "cursor" && (
                        <motion.span
                          animate={{ opacity: showCursor ? 1 : 0 }}
                          className="inline-block w-2 h-4 bg-teal-400 ml-1"
                          transition={{ duration: 0.1 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Terminal status bar */}
              <div className="bg-black/90 border-t border-primary/20 px-4 py-1 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-primary/50 font-mono font-medium">
                  <span className="text-teal-400">100%</span>
                  <span className="text-primary/30">|</span>
                  <span>UTF-8</span>
                  <span className="text-primary/30">|</span>
                  <span>UNIX</span>
                </div>
                <div className="text-xs text-primary/50 font-mono font-medium flex items-center gap-2">
                  <span className="text-green-400/70">●</span>
                  <span className="text-primary">Connected</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 2 }}
          >
            <Button
              as={Link}
              className="bg-primary text-background font-mono px-6 sm:px-8 py-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
              href="#get-started"
              size="md"
            >
              Book a Call
            </Button>
            <Button
              as={Link}
              className="border border-primary/50 text-primary/80 font-mono px-6 sm:px-8 py-2 hover:border-primary/70 hover:text-primary transition-colors text-sm sm:text-base"
              href="#portfolio"
              size="md"
              variant="bordered"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto p-4 sm:p-6 border border-primary/20 bg-black/50"
            initial={{ opacity: 0, y: 30 }}
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
