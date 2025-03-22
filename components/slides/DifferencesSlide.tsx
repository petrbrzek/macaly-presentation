"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function DifferencesSlide() {
  const differences = [
    "We have great Github integration (works with private repos)",
    "You can use existing projects (currently only Next.js)",
    "It's not just a web view, but also an ambient agent",
    "It has up to date info about frameworks and libraries",
    "Every interaction is saved so you can always rollback"
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-12">
      <motion.h2 
        className="font-sans font-bold text-4xl md:text-6xl mb-8 tracking-[-3px] text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Why <span className="font-serif italic font-normal tracking-[-1.8px]">Macaly</span> is Different
      </motion.h2>
      
      <motion.div 
        className="flex flex-col gap-4 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {differences.map((difference, index) => (
          <motion.div 
            key={index}
            className="flex items-start gap-3 text-xl md:text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
          >
            <Check className="text-green-500 mt-1 flex-shrink-0" />
            <span>{difference}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}