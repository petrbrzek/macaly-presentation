"use client";

import { motion } from "framer-motion";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (slideNumber: number) => void;
}

export default function NavigationControls({
  currentSlide,
  totalSlides,
  goToNextSlide,
  goToPrevSlide,
  goToSlide,
}: NavigationControlsProps) {
  return (
    <>
      <div className="navigation-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentSlide === index + 1 ? "active" : ""}`}
            onClick={() => goToSlide(index + 1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      
      <div className="navigation-controls">
        <motion.button
          className="control-button"
          onClick={goToPrevSlide}
          disabled={currentSlide === 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ opacity: currentSlide === 1 ? 0.5 : 1 }}
        >
          ←
        </motion.button>
        <motion.button
          className="control-button"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ opacity: currentSlide === totalSlides ? 0.5 : 1 }}
        >
          →
        </motion.button>
      </div>
    </>
  );
}