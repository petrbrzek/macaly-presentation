"use client";

import { motion } from "framer-motion";

export default function MacalyInterfaceSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="w-full max-w-[90%] mx-auto" // Increased to 90% of the slide width
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <img 
          src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/u9vjrmezkffza9fw3qvn805u/fiM9nmYsYqxWvO9Km6wMV/01-1-1.png" 
          alt="Macaly User Interface" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}