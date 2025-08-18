"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  speed = 20,
  speedOnHover = 10,
  gap = 16,
  className = "",
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        className="flex"
        style={{ gap: `${gap}px` }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isPaused ? speedOnHover : speed,
            ease: "linear",
          },
        }}
      >
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </motion.div>
    </div>
  );
};
