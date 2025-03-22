"use client";

import { motion } from "framer-motion";

export const PricingSlide = () => {
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
          Simple Pricing 💰
        </motion.h2>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800 mb-8">
            <p className="text-4xl font-bold mb-2">$10</p>
            <p className="text-xl text-gray-400 mb-6">One-time payment (not monthly!)</p>
            <p className="text-xl mb-4">Includes 50 messages</p>
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <p className="text-2xl font-bold mb-2">E2B Hackathon Special! 🎉</p>
            <p className="text-xl mb-2">50% discount with promo code:</p>
            <p className="text-2xl font-mono bg-black/30 py-2 px-4 rounded-md inline-block">"E2B"</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PricingSlide;