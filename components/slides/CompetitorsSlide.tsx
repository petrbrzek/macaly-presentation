"use client";

import { motion } from "framer-motion";

export default function CompetitorsSlide() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <motion.h2 
        className="font-sans font-bold text-4xl md:text-6xl mb-12 tracking-[-3px] text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Our <span className="font-serif italic font-normal tracking-[-1.8px]">Competitors</span>
      </motion.h2>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="bg-[#0A1929] p-8 rounded-lg w-full md:w-1/3 flex items-center justify-center">
          <img 
            src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/5nVq8WyFEk67vymT9zQJx/0-x9xhk-ozkw3ik-yci.jpg" 
            alt="Bolt" 
            className="w-full max-w-[200px]"
          />
        </div>
        
        <div className="bg-[#1A1A1A] p-8 rounded-lg w-full md:w-1/3 flex items-center justify-center">
          <img 
            src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/RGL0sU5G3AMXcRI7K3kGl/screenshot-2025-03-22-at-12.35.57-pm.png" 
            alt="Lovable" 
            className="w-full max-w-[200px]"
          />
        </div>
      </motion.div>
    </div>
  );
}