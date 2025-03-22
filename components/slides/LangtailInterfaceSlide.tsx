"use client";

import { motion } from "framer-motion";

export default function LangtailInterfaceSlide() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-5xl px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="w-full rounded-lg overflow-hidden shadow-2xl"
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/JIbHD6vDth9_jXLTawZKi/langtail-the-low-code-platform-for-testing-ai-apps-9.42am-10-26-2.png" 
          alt="Langtail Interface" 
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}