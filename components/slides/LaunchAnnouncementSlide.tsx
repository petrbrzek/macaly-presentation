"use client";

import { motion } from "framer-motion";

export const LaunchAnnouncementSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2 
          className="text-5xl font-bold mb-10 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Launching Today! 🚀
        </motion.h2>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-2xl mb-12">
            We're excited to announce that Macaly is officially launching today!
          </p>
          
          <div className="space-y-6 mx-auto max-w-md">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-xl">Website completed 🌐</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-xl">Stripe integration added 💳</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-xl">Image support implemented 🖼️</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-xl">Numerous bugs fixed 🐛</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LaunchAnnouncementSlide;