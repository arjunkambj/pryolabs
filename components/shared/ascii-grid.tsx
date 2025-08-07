"use client";

import { useEffect, useRef } from "react";

export function AsciiGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ASCII characters for the grid
    const chars = ["◦", "•", "×", "+", "─", "│", "┌", "┐", "└", "┘"];
    const gridSize = 40;
    const grid: { char: string; opacity: number }[][] = [];

    // Initialize grid
    for (let x = 0; x < Math.ceil(canvas.width / gridSize); x++) {
      grid[x] = [];
      for (let y = 0; y < Math.ceil(canvas.height / gridSize); y++) {
        grid[x][y] = {
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.1 + 0.02,
        };
      }
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px monospace";

      for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
          const cell = grid[x][y];

          // Slowly fade in and out
          cell.opacity += (Math.random() - 0.5) * 0.002;
          cell.opacity = Math.max(0.02, Math.min(0.15, cell.opacity));

          // Occasionally change character
          if (Math.random() > 0.999) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
          }

          ctx.fillStyle = `rgba(0, 255, 0, ${cell.opacity})`;
          ctx.fillText(cell.char, x * gridSize, y * gridSize);
        }
      }
    }

    const interval = setInterval(draw, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-50"
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
