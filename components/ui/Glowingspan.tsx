"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingSpanProps {
  children: ReactNode;
}

export const GlowingSpan = ({ children }: GlowingSpanProps) => {
  return (
    <motion.span
      // FIXED: Removed 'inline-block'. 
      // Using standard 'font-bold' keeps the flow exactly like your original text.
      className="font-bold text-cyan-400"
      
      animate={{
        // We animate the Shadow instead of Size to prevent layout gaps
        textShadow: [
          "0 0 0px rgba(250, 204, 21, 0)",       // No glow
          "0 0 15px rgba(250, 204, 21, 0.8)",    // Intense Yellow Glow (Bloom)
          "0 0 0px rgba(250, 204, 21, 0)",       // Back to normal
        ],
        // Optional: Slight color pulse to white for extra "shining" effect
        color: [
         "#22d3ee", // Cyan-400 base
          "#a5f3fc", // Cyan-200 (brighter/whiter peak)
          "#22d3ee", // Back to base
        ]
      }}
      transition={{
        duration: 2.5,           
        repeat: Infinity,        
        repeatType: "reverse",   
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
};