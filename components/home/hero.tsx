"use client";

import { Button } from "@heroui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AsciiGrid } from "@/components/shared/ascii-grid";

export function Hero() {
  // Counter animations
  const mvpCount = useMotionValue(0);
  const successRate = useMotionValue(0);
  const daysCount = useMotionValue(0);

  const mvpRounded = useTransform(mvpCount, Math.round);
  const successRounded = useTransform(successRate, Math.round);
  const daysRounded = useTransform(daysCount, Math.round);

  const [mvp, setMvp] = useState(0);
  const [success, setSuccess] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
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
    const unsubMvp = mvpCount.on("change", (latest) =>
      setMvp(Math.round(latest))
    );
    const unsubSuccess = successRate.on("change", (latest) =>
      setSuccess(Math.round(latest))
    );
    const unsubDays = daysCount.on("change", (latest) =>
      setDays(Math.round(latest))
    );
    return () => {
      unsubMvp?.();
      unsubSuccess?.();
      unsubDays?.();
    };
  }, [mvpCount, successRate, daysCount]);

  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 bg-background"
      id="hero"
    >
      {/* ASCII Grid Background + scanline for terminal vibe */}
      <AsciiGrid />
      <div className="scanline" />
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-400/10 blur-2xl"
          animate={{ x: [0, 15, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, -20, 10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,255,198,0.08) 0%, rgba(0,0,0,0) 65%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center font-mono">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-sm border border-teal-400/30 bg-teal-400/5 px-3 py-1 text-xs text-teal-300"
        >
          <span>●</span>
          <span>Pyro Labs - Web Dev Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-balance text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-primary"
        >
          Launch a Revenue Ready MVP in 21 days
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-sm sm:text-base text-primary/70"
        >
          A WebDev Agency to turn your idea into something customers can try.
          Design, frontend, backend, and deployment — handled end‑to‑end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            as={Link}
            href="#get-started"
            className="bg-primary text-background px-6 py-2 hover:bg-primary/90"
            size="md"
          >
            Start your 21‑day sprint
          </Button>
          <Button
            as={Link}
            href="#portfolio"
            variant="bordered"
            className="border border-primary/50 text-primary/80 px-6 py-2 hover:border-primary/70 hover:text-primary"
            size="md"
          >
            See our work
          </Button>
        </motion.div>

        <TerminalWindow />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <div className="rounded-sm border border-primary/15 bg-background/50 px-4 py-3">
            <div className="text-2xl font-semibold text-primary">
              {mvp}
              <span className="text-primary/50">+</span>
            </div>
            <div className="text-xs text-primary/60 mt-1">MVPs shipped</div>
          </div>
          <div className="rounded-sm border border-primary/15 bg-background/50 px-4 py-3">
            <div className="text-2xl font-semibold text-primary">
              {success}%
            </div>
            <div className="text-xs text-primary/60 mt-1">
              Found product‑market fit
            </div>
          </div>
          <div className="rounded-sm border border-primary/15 bg-background/50 px-4 py-3">
            <div className="text-2xl font-semibold text-primary">{days}</div>
            <div className="text-xs text-primary/60 mt-1">days to launch</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalWindow() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [loginTime, setLoginTime] = useState<string>("");

  const terminalCommands = [
    {
      prompt: "pyro@labs:~$ ",
      command: "start-project",
      delay: 0,
      type: "command",
    },
    {
      prompt: "",
      command: "Getting your idea ready to build...",
      delay: 120,
      type: "info",
    },
    {
      prompt: "",
      command: "Collecting goals and success criteria",
      delay: 240,
      type: "loading",
    },
    {
      prompt: "",
      command: "Shaping a simple, testable product plan",
      delay: 360,
      type: "process",
    },
    {
      prompt: "",
      command: "Designing the first version your customers can try",
      delay: 480,
      type: "process",
    },
    {
      prompt: "",
      command: "Setting up hosting and payments (done)",
      delay: 600,
      type: "process",
    },
    {
      prompt: "",
      command: "Preparing a frictionless onboarding",
      delay: 720,
      type: "process",
    },
    {
      prompt: "",
      command: "\nReady: Your MVP can be demoed to users",
      delay: 840,
      type: "success",
    },
    {
      prompt: "\npyro@labs:~$ ",
      command: "_",
      delay: 960,
      type: "cursor",
    },
  ];

  useEffect(() => {
    setLoginTime(
      new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, []);

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < terminalCommands.length; i++) {
        const delayScale = 0.5; // speed up sequence vs. original
        await new Promise((resolve) =>
          setTimeout(resolve, terminalCommands[i].delay * delayScale)
        );
        setCurrentLine(i);

        if (terminalCommands[i].type !== "cursor") {
          const fullText =
            terminalCommands[i].prompt + terminalCommands[i].command;

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
          setTypedText(terminalCommands[i].prompt);
        }

        if (i < terminalCommands.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
      }
    };

    const startTimeout = setTimeout(() => {
      void typeText();
    }, 120);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 sm:mb-12 max-w-4xl mx-auto mt-10"
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.45 }}
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
              <span className="text-primary">Project setup</span> —
              <span className="text-teal-400"> guided mode</span>
            </span>
            <span className="text-xs text-primary/30 font-mono hidden sm:block">
              no code needed
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
              <span className="text-primary/50">Welcome back!</span> Last visit{" "}
              <span className="text-primary/50">was</span> {loginTime}
            </div>

            {terminalCommands.map((cmd, i) => (
              <motion.div
                key={i}
                animate={i <= currentLine ? { opacity: 1, x: 0 } : {}}
                className={`${
                  i <= currentLine ? "opacity-100" : "opacity-0"
                } ${cmd.type === "command" ? "mb-2" : "mb-1"}`}
                initial={{ opacity: 0, x: -10 }}
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
            <span className="text-teal-400">Step 1 of 4</span>
            <span className="text-primary/30">|</span>
            <span>Clear plan</span>
            <span className="text-primary/30">|</span>
            <span>Less jargon</span>
          </div>
          <div className="text-xs text-primary/50 font-mono font-medium flex items-center gap-2">
            <span className="text-green-400/70">●</span>
            <span className="text-primary">Your team + our team</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
