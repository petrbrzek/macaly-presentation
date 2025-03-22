"use client";

import { motion } from "framer-motion";

export default function TweetImageSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="w-full max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/zkMLnwd49gcqpGd6AHP0x/screenshot-2025-03-22-at-2.24.10-pm.png" 
          alt="Tweet about Bolt.new limitations" 
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}