"use client";

import { motion } from "framer-motion";

export default function EtymologySlide() {
  return (
    <div className="slide-content">
      <motion.div 
        className="etymology-slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="font-sans font-bold text-4xl md:text-6xl mb-6 tracking-[-3px] text-balance"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          How to pronounce <span className="font-serif italic font-normal tracking-[-1.8px]">Macaly</span> 🇨🇿 🍻
        </motion.h1>
        
        <motion.div
          className="etymology-content max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="text-xl mb-4">
            In czech you can pronounce it simply as "makali"
          </p>
          <p className="text-xl">
            For example <span className="font-serif italic">"Jsme makali 💪"</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}