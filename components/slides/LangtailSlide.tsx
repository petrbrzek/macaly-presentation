"use client";

import { motion } from "framer-motion";

export default function LangtailSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-4xl px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mb-8"
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/9hdOWuGPm3r0xH5xFHB5p/screenshot-2025-03-22-at-1.39.50-pm.png" 
          alt="Langtail Logo" 
          className="h-16 md:h-20"
        />
      </motion.div>

      <motion.h1 
        className="font-sans font-bold text-4xl md:text-6xl mb-6 text-center tracking-[-3px] text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Dogfooding <span className="font-serif italic font-normal tracking-[-1.8px]">Langtail</span> 🐶
      </motion.h1>
      
      <motion.p
        className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        A prompt management and testing platform for LLMs
      </motion.p>
    </motion.div>
  );
}