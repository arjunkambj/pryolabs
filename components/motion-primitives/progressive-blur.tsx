"use client";

import React from "react";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  blurIntensity?: number;
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  className = "",
  direction = "left",
  blurIntensity = 1,
}) => {
  const gradientDirection = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }[direction];

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${gradientDirection}, transparent, white)`,
        filter: `blur(${blurIntensity}px)`,
      }}
    />
  );
};
