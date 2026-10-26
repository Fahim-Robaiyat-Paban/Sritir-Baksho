"use client";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

const SmoothScrollProvider = ({ children }) => {
  return (
    <ReactLenis root>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
