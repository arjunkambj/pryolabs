"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -100);
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Black background with opacity for trail effect
      ctx.fillStyle = "rgba(5, 7, 5, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];

        // Gradient effect - characters fade as they fall
        const opacity = Math.max(0, 1 - (drops[i] * fontSize) / canvas.height);

        ctx.fillStyle = `rgba(0, 255, 0, ${opacity * 0.08})`;

        // Subtle glow effect
        ctx.shadowBlur = 2;
        ctx.shadowColor = "rgba(0, 255, 0, 0.2)";

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Vary speed for depth
        drops[i] += 0.5 + Math.random() * 0.5;
      }
    }

    const interval = setInterval(draw, 50);

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
      className="absolute inset-0 opacity-[0.05]"
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
