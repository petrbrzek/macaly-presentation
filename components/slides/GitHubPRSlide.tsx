"use client";

import { motion } from "framer-motion";

export default function GitHubPRSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/y5OJwS160nldSFi36uVMd/screenshot-2025-03-22-at-3.09.48-pm.png" 
          alt="GitHub PR showing Macaly fixing broken avatar image" 
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}