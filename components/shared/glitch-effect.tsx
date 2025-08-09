"use client";

import { useEffect, useState } from "react";

export function GlitchEffect() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000); // Glitch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!glitch) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            )
          `,
          animation: "glitch 0.2s linear infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 212, 212, 0.02) 2px,
              rgba(0, 212, 212, 0.02) 4px
            )
          `,
          animation: "glitch-2 0.15s linear infinite",
        }}
      />
      <style>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(-1px, -1px);
          }
          60% {
            transform: translate(1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            transform: translate(0) scaleY(1);
          }
          20% {
            transform: translate(-2px) scaleY(1.01);
          }
          40% {
            transform: translate(2px) scaleY(0.99);
          }
          60% {
            transform: translate(-1px) scaleY(1.01);
          }
          80% {
            transform: translate(1px) scaleY(0.99);
          }
          100% {
            transform: translate(0) scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}
