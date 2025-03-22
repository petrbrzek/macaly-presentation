"use client";

import { motion } from "framer-motion";

export default function VennDiagramSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.h1 
        className="font-sans font-bold text-4xl md:text-6xl mb-8 tracking-[-3px] text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        The Coding <span className="font-serif italic font-normal tracking-[-1.8px]">Spectrum</span>
      </motion.h1>
      
      <div style={{ position: 'relative', width: '800px', height: '400px', margin: '0 auto' }}>
        {/* No-code Circle */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: '100px',
            top: '50px',
            zIndex: 1
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}>No-code</span>
        </motion.div>
        
        {/* Vibe code Circle */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            backgroundColor: 'rgba(168, 85, 247, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: '250px',
            top: '40px',
            zIndex: 3
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}>Vibe code</span>
        </motion.div>
        
        {/* Pro code Circle */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(34, 197, 94, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: '400px',
            top: '50px',
            zIndex: 2
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}>Pro code</span>
        </motion.div>
      </div>
    </div>
  );
}