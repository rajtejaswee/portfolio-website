"use client";

import Link from "next/link";
import { motion } from "framer-motion"; 

interface NavbarProps {
  hoverColorClass?: string;
}

const navItems = [
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/techstack" },
  { name: "Resume", path: "/rajtejaswee-resume.pdf" },
];

export const Navbar = ({ hoverColorClass = "group-hover:text-yellow-400" }: NavbarProps) => {
  return (
    <motion.div 
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,         
        repeat: Infinity,    
        ease: "easeInOut"    
      }}
    >
      <nav 
        className="flex items-center gap-5 bg-black px-6 py-2 rounded-full border border-white/10 shadow-[8px_8px_5px_rgba(60,60,60,0.5)]"
      >
        {navItems.map((item) => {
          // Check if the current item is Resume
          const isResume = item.name === "Resume";
          
          return (
            <Link
              key={item.name}
              href={item.path}
              // Conditionally add target="_blank" only for Resume
              target={isResume ? "_blank" : undefined}
              rel={isResume ? "noopener noreferrer" : undefined}
              className="group relative px-4 py-2 rounded-full tracking-[-1.5px]"
            >
              <span className={`inline-block font-playfair text-lg md:text-xl text-white/90 transition-all duration-300 ease-out group-hover:scale-[1.3] ${hoverColorClass}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};