"use client";

import { motion } from "framer-motion";

export default function GitHubIssueSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="w-full max-w-[90%] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/ErhYCUGuvf13gSWGk4Sel/screenshot-2025-03-22-at-3.04.36-pm.png" 
          alt="GitHub issue about broken image" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}