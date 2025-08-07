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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
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
            <pre className="text-primary text-xs sm:text-sm font-mono terminal-glow">
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
            <h1 className="text-3xl sm:text-5xl font-mono font-bold mb-4">
              <span className="text-primary terminal-glow">labs@Pyro</span>
              <span className="text-secondary">:</span>
              <span className="text-success">~</span>
              <span className="text-primary">$ </span>
              <span className="text-foreground">build-mvp --days=21</span>
              <span
                className={`inline-block w-3 h-6 bg-primary ml-1 ${showCursor ? "" : "opacity-0"}`}
              />
            </h1>
            <p className="text-lg text-primary/70 font-mono">
              &gt; Your Idea → Working Product in 21 Days
            </p>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 max-w-3xl mx-auto"
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
                <span className="text-xs text-primary/50 font-mono">pyro-mvp-builder.sh</span>
                <span className="text-xs text-primary/30 font-mono">~/projects</span>
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              as={Link}
              className="bg-primary text-background font-mono font-bold px-8 py-6 hover:bg-primary/80 transition-colors"
              href="#get-started"
              size="lg"
            >
              $ execute --start-now_
            </Button>
            <Button
              as={Link}
              className="border-primary text-primary font-mono px-8 py-6 hover:bg-primary/10 transition-colors"
              href="#process"
              size="lg"
              variant="bordered"
            >
              $ man pyro-process_
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto p-8 border border-primary/20 bg-background/30 backdrop-blur"
            initial={{ opacity: 0 }}
            transition={{ delay: 2 }}
          >
            {[
              { label: "Success Rate", value: "96%", prefix: "float" },
              { label: "Avg Days", value: "19", prefix: "const" },
              { label: "ROI", value: "10x", prefix: "return" },
            ].map((stat) => (
              <div key={stat.label} className="text-center font-mono">
                <div className="text-xs text-primary/50">{stat.prefix}</div>
                <div className="text-2xl font-bold text-success terminal-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-primary/70 mt-1">
                  {stat.label}
                </div>
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
