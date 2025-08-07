"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  { prompt: "> ", command: "Initializing project structure...", delay: 1000 },
  { prompt: "> ", command: "Setting up authentication...", delay: 1500 },
  { prompt: "> ", command: "Configuring database...", delay: 2000 },
  { prompt: "> ", command: "Installing dependencies...", delay: 2500 },
  { prompt: "> ", command: "Building production bundle...", delay: 3000 },
  { prompt: "✓ ", command: "MVP ready in 21 days!", delay: 3500 },
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
          await new Promise((resolve) => setTimeout(resolve, 30));
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <span className="text-primary terminal-glow">root@pyro</span>
              <span className="text-secondary">:</span>
              <span className="text-success">~</span>
              <span className="text-primary">$ </span>
              <span className="text-foreground">build-mvp --days=21</span>
              <span
                className={`inline-block w-3 h-6 bg-primary ml-1 ${showCursor ? "" : "opacity-0"}`}
              />
            </h1>
            <p className="text-lg text-primary/70 font-mono">
              &gt; Transform your idea into production-ready MVP
            </p>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 1 }}
          >
            <div className="border border-primary bg-background/50 backdrop-blur p-6 text-left font-mono text-sm">
              <div className="mb-2 text-primary/50">
                [SYSTEM] Pyro Labs MVP Builder v2.0.0
              </div>
              <div className="mb-4 text-primary/50">
                [SYSTEM] Initializing 21-day sprint...
              </div>

              {terminalCommands.slice(0, currentLine + 1).map((cmd, i) => (
                <div key={i} className="mb-1">
                  <span
                    className={
                      cmd.prompt === "✓ " ? "text-success" : "text-primary"
                    }
                  >
                    {cmd.prompt}
                  </span>
                  <span
                    className={
                      cmd.prompt === "✓ "
                        ? "text-success font-bold"
                        : "text-foreground"
                    }
                  >
                    {i === currentLine
                      ? typedText.slice(cmd.prompt.length)
                      : cmd.command}
                  </span>
                  {i === currentLine && (
                    <span
                      className={`inline-block w-2 h-4 bg-primary ml-1 ${showCursor ? "" : "opacity-0"}`}
                    />
                  )}
                </div>
              ))}
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
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ delay: 2 }}
          >
            {[
              { label: "MVPs Built", value: "500+", prefix: "int" },
              { label: "Success Rate", value: "96%", prefix: "float" },
              { label: "Avg Days", value: "19", prefix: "const" },
              { label: "ROI", value: "10x", prefix: "return" },
            ].map((stat) => (
              <div key={stat.label} className="text-center font-mono">
                <div className="text-xs text-primary/50">{stat.prefix}</div>
                <div className="text-2xl font-bold text-success terminal-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-primary/70">// {stat.label}</div>
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
