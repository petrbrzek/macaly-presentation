"use client";

import { motion } from "framer-motion";

export default function MacalyDescriptionSlide() {
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
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/zB24qf01zWC89VxwfYU9L/screenshot-2025-03-22-at-1.37.21-pm.png" 
          alt="Macaly Logo" 
          className="h-16 md:h-20"
        />
      </motion.div>

      <motion.h1 
        className="font-sans font-bold text-4xl md:text-6xl mb-3 text-center tracking-[-3px] text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        AI agent turning words <span className="font-serif italic font-normal tracking-[-1.8px]">into code</span>
      </motion.h1>
    </motion.div>
  );
}