"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function DifferencesSlide() {
  const differences = [
    "GitHub integration with private repos",
    "Works with existing Next.js projects",
    "Works also as ambient agent",
    "Up-to-date framework knowledge",
    "Full history with rollback support",
    "Advanced voice mode (coming soon)"
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-12">
      <motion.h2 
        className="font-sans font-bold text-4xl md:text-6xl mb-12 tracking-[-3px] text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Why <span className="font-serif italic font-normal tracking-[-1.8px]">Macaly</span> is Different
      </motion.h2>
      
      <motion.div 
        className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {differences.map((difference, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-4 text-xl md:text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
          >
            <Check className="text-green-500 flex-shrink-0 h-6 w-6" />
            <span className="leading-tight">{difference}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}