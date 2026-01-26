"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =======================================
          DESKTOP VIEW (Original Dock Design) 
          Hidden on mobile (md:hidden)
      ======================================= */}
      <motion.div 
        className="hidden md:block fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,         
          repeat: Infinity,    
          ease: "easeInOut"    
        }}
      >
        <nav 
          className="flex items-center gap-5 bg-black px-6 py-2 rounded-full border border-white/10 shadow-[6px_6px_5px_rgba(60,60,60,0.5)]"
        >
          {navItems.map((item) => {
            const isResume = item.name === "Resume";
            
            return (
              <Link
                key={item.name}
                href={item.path}
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


      {/* =======================================
          MOBILE VIEW (Cinematic Menu Toggle)
          Visible only on mobile (md:hidden)
      ======================================= */}
      <motion.div 
        className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white/90 px-8 py-3 rounded-full border border-white/10 shadow-xl font-playfair text-lg tracking-wider"
        >
          MENU
        </button>
      </motion.div>


      {/* =======================================
          MOBILE OVERLAY (The Blur Black Screen)
      ======================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            // bg-black/80 + backdrop-blur-xl creates the "Blur Black" effect
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/60 text-sm font-helvetica uppercase tracking-widest hover:text-white p-4"
            >
              Close
            </button>

            {/* Links Stack */}
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => {
                const isResume = item.name === "Resume";
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      target={isResume ? "_blank" : undefined}
                      rel={isResume ? "noopener noreferrer" : undefined}
                      className="font-playfair text-4xl text-white/90 font-bold tracking-tight hover:text-gray-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};