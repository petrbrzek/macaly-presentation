"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export default function ProgressBar({ currentSlide, totalSlides }: ProgressBarProps) {
  const progress = (currentSlide / totalSlides) * 100;
  
  return (
    <motion.div 
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5 }}
    />
  );
}