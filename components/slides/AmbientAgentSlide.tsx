"use client";

import { motion } from "framer-motion";

export default function AmbientAgentSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="w-full max-w-[90%] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/j3G_8id5kSc2WG9YUiZWC/screenshot-2025-03-22-at-2.59.27-pm.png" 
          alt="Macaly as an ambient agent" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}