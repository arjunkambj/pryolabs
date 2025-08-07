"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MatrixRain } from "@/components/shared/matrix-rain";

const asciiLogo = [
  " ____                     _           _         ",
  "|  _ \\ _   _ _ __ ___   | |    __ _ | |__  ___ ",
  "| |_) | | | | '__/ _ \\  | |   / _` || '_ \\/ __|",
  "|  __/| |_| | | | (_) | | |__| (_| || |_) \\__ \\",
  "|_|    \\__, |_|  \\___/  |_____\\__,_||_.__/|___/",
  "       |___/                                    ",
];

const terminalCommands = [
  { prompt: "$ ", command: "pyro init my-mvp", delay: 0 },
  { prompt: "> ", command: "Understanding requirement...", delay: 100 },
  { prompt: "> ", command: "Making figma design...", delay: 200 },
  { prompt: "> ", command: "Low code working prototype...", delay: 300 },
  { prompt: "> ", command: "Adding figma design...", delay: 400 },
  { prompt: "> ", command: "Building production bundle...", delay: 500 },
  { prompt: "✓ ", command: "MVP ready in 21 days!", delay: 600 },
];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < terminalCommands.length; i++) {
        await new Promise((resolve) =>
          setTimeout(resolve, terminalCommands[i].delay),
        );
        setCurrentLine(i);
        const fullText =
          terminalCommands[i].prompt + terminalCommands[i].command;

        for (let j = 0; j <= fullText.length; j++) {
          setTypedText(fullText.slice(0, j));
          await new Promise((resolve) => setTimeout(resolve, 15));
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
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden pt-24">
      {/* Matrix Rain Background */}
      <MatrixRain />
      {/* CRT scanline effect */}
      <div className="scanline" />

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* ASCII Logo */}
          <div className="mb-8 flex justify-center">
            <pre className="text-primary text-[10px] sm:text-xs md:text-sm font-mono terminal-glow hidden sm:block">
              {asciiLogo.map((line, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
          </div>

          {/* Main headline with typing effect */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mb-8"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
              <span className="text-primary terminal-glow">Your MVP</span>
              <span className="text-secondary">.</span>
              <span className="text-success">Shipped</span>
              <span className="text-secondary">.</span>
              <span className="text-teal-400">21 Days</span>
              <span
                className={`inline-block w-3 h-6 bg-primary ml-1 ${showCursor ? "" : "opacity-0"}`}
              />
            </h1>
            <p className="text-lg text-primary/70 font-mono">
              &gt; Your Idea → Working Product in 21 Days
            </p>
            <p className="text-base sm:text-lg text-primary/60 font-mono mt-2">
              No coding knowledge needed - we handle everything
            </p>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 1 }}
          >
            <div className="bg-background/90 backdrop-blur border border-primary/50 rounded-sm shadow-[0_0_30px_rgba(0,255,0,0.2)] overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="bg-primary/10 border-b border-primary/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-danger/60" />
                  <span className="w-3 h-3 rounded-full bg-warning/60" />
                  <span className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <span className="text-xs text-primary/50 font-mono">
                  pyro-mvp-builder.sh
                </span>
                <span className="text-xs text-primary/30 font-mono">
                  ~/projects
                </span>
              </div>
              {/* Terminal Content */}
              <div className="p-6 text-left font-mono text-sm min-h-[240px]">
                <div className="mb-4 text-primary/50">
                  [SYSTEM] Pyro Labs MVP Builder v2.0.0
                </div>

                {terminalCommands.map((cmd, i) => (
                  <div
                    key={i}
                    className={`mb-1 transition-opacity duration-300 ${
                      i <= currentLine ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span
                      className={
                        cmd.prompt === "✓ " ? "text-success" : "text-primary"
                      }
                    >
                      {i <= currentLine ? cmd.prompt : ""}
                    </span>
                    <span
                      className={
                        cmd.prompt === "✓ "
                          ? "text-success font-bold"
                          : "text-foreground"
                      }
                    >
                      {i < currentLine
                        ? cmd.command
                        : i === currentLine
                          ? typedText.slice(cmd.prompt.length)
                          : ""}
                    </span>
                    {i === currentLine && (
                      <span
                        className={`inline-block w-2 h-4 bg-primary ml-1 ${showCursor ? "" : "opacity-0"}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              as={Link}
              className="bg-primary text-background font-mono font-bold px-6 sm:px-8 py-4 sm:py-6 hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(0,212,212,0.3)] transition-all duration-300 text-sm sm:text-base"
              href="#get-started"
              size="lg"
            >
              Book Now • 2 Slots Left
            </Button>
            <Button
              as={Link}
              className="border-primary text-primary font-mono px-6 sm:px-8 py-4 sm:py-6 hover:bg-primary/10 hover:border-teal-400 hover:text-teal-400 hover:shadow-[0_0_20px_rgba(0,212,212,0.2)] transition-all duration-300 text-sm sm:text-base"
              href="#portfolio"
              size="lg"
              variant="bordered"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mt-12 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-3xl mx-auto p-4 sm:p-6 md:p-8 border border-primary/20 bg-background/30 backdrop-blur mx-4 sm:mx-auto"
            initial={{ opacity: 0 }}
            transition={{ delay: 2 }}
          >
            {[
              { label: "MVPs Built", value: "3", prefix: "count" },
              { label: "Avg Days", value: "20", prefix: "const" },
              { label: "Success Rate", value: "100%", prefix: "float" },
            ].map((stat) => (
              <div key={stat.label} className="text-center font-mono">
                <div className="text-xs text-primary/50">{stat.prefix}</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  <span className="text-teal-400">{stat.value}</span>
                </div>
                <div className="text-xs text-primary/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background matrix effect */}
      <div className="absolute inset-0 opacity-5">
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
    </section>
  );
}
