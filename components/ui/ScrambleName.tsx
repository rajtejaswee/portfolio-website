"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleProps {
  text: string;
  className?: string;
}

// Characters to cycle through (Tech/Code vibe)
const CYPHER_CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const ScrambleName = ({ text, className }: ScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHovering = useRef(false);

  const startScramble = () => {
    let iteration = 0;

    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            // If we've passed this index, show the real letter
            if (index < iteration) {
              return text[index];
            }
            // Otherwise show a random code character
            return CYPHER_CHARS[Math.floor(Math.random() * CYPHER_CHARS.length)];
          })
          .join("")
      );

      // Speed of decryption (higher denominator = slower solve)
      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      // 1/3rd of a letter solved per frame (makes it look smoother/techy)
      iteration += 1 / 3; 
    }, 30); // Speed of character flickering (ms)
  };

  useEffect(() => {
    startScramble(); // Trigger on mount
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <motion.h1
      className={className}
      onMouseEnter={() => startScramble()} // Re-scramble on hover (Interactive!)
      style={{ cursor: "default" }}
    >
      {displayText}
    </motion.h1>
  );
};