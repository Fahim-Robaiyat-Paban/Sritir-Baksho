"use client";
import { motion } from "motion/react";
import { EASE } from "@/lib/utils/motion";

const Reveal = ({ as = "div", delay = 0, className = "", children }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
