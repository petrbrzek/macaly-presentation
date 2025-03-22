"use client";

import { motion } from "framer-motion";

export default function ImageSlide() {
  return (
    <div className="slide-content">
      <motion.div 
        className="image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img 
          src="https://pbs.twimg.com/media/Gl-CeWoXEAAsXR5?format=jpg&name=medium" 
          alt="Macaly presentation image" 
          className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        />
      </motion.div>
    </div>
  );
}