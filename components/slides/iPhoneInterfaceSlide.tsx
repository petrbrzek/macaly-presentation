"use client";

import { motion } from "framer-motion";

export default function iPhoneInterfaceSlide() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/wSEHRTtD_a2FwpuXEr8wk/i-phone-15-pro-light.png" 
          alt="Macaly iPhone Interface" 
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </motion.div>
    </div>
  );
}