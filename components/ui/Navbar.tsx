"use client";

import Link from "next/link";
import { motion } from "framer-motion"; 

interface NavbarProps {
  hoverColorClass?: string; // Optional prop for custom colors
}

const navItems = [
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Resume", path: "/resume.pdf" },
];

export const Navbar = ({ hoverColorClass = "group-hover:text-yellow-400" }: NavbarProps) => {
  return (
    // 2. Converted 'div' to 'motion.div' to enable animation
    <motion.div 
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
      
      // 3. The Floating Animation
      animate={{ y: [0, -10, 0] }} // Moves up 6px then down
      transition={{
        duration: 4,         // 4 seconds per loop (slow & calm)
        repeat: Infinity,    // Loops forever
        ease: "easeInOut"    // Smooth turning points
      }}
    >
      <nav 
        className="flex items-center gap-5 bg-black px-6 py-2 rounded-full border border-white/10 shadow-[8px_8px_5px_rgba(60,60,60,0.5)]"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="group relative px-4 py-2 rounded-full tracking-[-1.5px]"
          >
            {/* I updated scale-130 to scale-[1.3] to ensure it works */}
            <span className={`inline-block font-playfair text-lg md:text-xl text-white/90 transition-all duration-300 ease-out group-hover:scale-[1.3] ${hoverColorClass}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};