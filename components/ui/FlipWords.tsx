"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [" DEVELOPER", " BACKEND", "FRONTEND"];

export const FlipWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Slower interval (3s) to let the animation breathe
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block relative min-w-[300px] text-center align-bottom h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        {/* We use a key based on index to force re-render for new words */}
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }, // The "Wave" delay
            },
          }}
          className="absolute inset-0 flex items-end"
        >
          {words[index].split("").map((letter, i) => (
            <motion.span
              key={`${words[index]}-${i}`}
              variants={{
                hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
                visible: { y: 0, opacity: 1, filter: "blur(0px)" },
              }}
              transition={{
                duration: 0.4,
                ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic-bezier for "snappy" feel
              }}
              className="inline-block" // preserves spaces
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};