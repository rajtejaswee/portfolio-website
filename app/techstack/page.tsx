"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- 1. ICON IMPORTS ---
import { 
  JavaIcon, PythonIcon, 
  HtmlIcon, CssIcon, TailwindIcon, JavaScriptIcon, ReactIcon,
  NodeIcon, ExpressIcon, PostgresIcon, MongoIcon, TypescriptIcon, GitIcon, NextjsIcon, CppIcon, FigmaIcon, MySqlIcon, AfterEffectsIcon, PhotoshopIcon
} from "@/components/icons/Icons";

// --- 2. REUSABLE ANIMATED CAPSULE COMPONENT ---
const TechCapsule = ({ name, Icon }: { name: string; Icon: any }) => {
  
  // FIXED: Merged hover styles (scale, bg) into variants to avoid duplicate props error
  const containerVars: Variants = {
    initial: { 
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Default glass
    },
    hover: {
      scale: 1.15,
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Brighter glass
      transition: {
        duration: 0.2,
        staggerChildren: 0.05, // Delays each letter
      },
    },
  };

  const letterVars: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, -3, 3, 0], // The "Wave" motion
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="group relative flex items-center gap-3 border border-white/20 px-5 py-2.5 rounded-full cursor-pointer w-fit shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      
      // ANIMATION & VARIANTS
      variants={containerVars}
      initial="initial"
      whileHover="hover"
      
      // FLOATING EFFECT (Loops forever)
      animate={{ y: [0, -8, 0] }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    >
      {/* Icon - Added 'invert' to turn black icons white */}
      <div className="w-6 h-6 md:w-8 md:h-8 relative">
        <Icon className="w-full h-full object-contain fill-current text-white invert" />
      </div>

      {/* Text with Wave Animation */}
      <div className="font-helvetica font-medium text-white text-sm md:text-lg tracking-[-0.9px] whitespace-nowrap overflow-hidden flex">
        {name.split("").map((letter, i) => (
          <motion.span key={i} variants={letterVars} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function TechStack() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
          <Image
            src="/bg-images/stack-bg.webp"
            alt="Tech Stack Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
      </div>

      {/* Top Navbar */}
      <div className="text-white absolute top-5 right-6 z-30 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4">Home</a>
        <a href="/contact" className="hover:underline underline-offset-4">Contact me</a>
      </div>

      {/* Email Section */}
      <div className="text-white absolute right-3 top-0 bottom-0 z-20 hidden md:flex flex-col items-center ">
        <div className="w-[1px] bg-white flex-[2] opacity-60" />
        <a
          href="mailto:rajtejaswee02@gmail.com"
          className="writing-vertical-rl rotate-180 text-sm tracking-widest hover:text-gray-500 transition-colors font-playfair md:tracking-[-0.9px] md:text-base md:text-xl"
        >
          rajtejaswee02@gmail.com
        </a>
        <div className="w-[1px] bg-white flex-1 opacity-60" />
      </div>

      {/* Header Section */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Tech Stack
        </h1>
        <div className="w-70 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* --- MAIN TECH STACK CONTENT --- */}
      <div className="absolute top-[200px] left-0 md:left-12 z-20 w-[90%] md:w-[85%] h-[calc(100vh-220px)] overflow-y-auto no-scrollbar pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* --- LEFT COLUMN --- */}
          <div className="space-y-12">
            
            {/* Programming Languages */}
            <div>
              <h3 className="font-playfair text-xl md:text-2xl text-white mb-6 border-b border-white/40 tracking-[-0.9px] inline-block w-full">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <TechCapsule name="C++" Icon={CppIcon} />
                <TechCapsule name="JAVA" Icon={JavaIcon} />
                <TechCapsule name="Python" Icon={PythonIcon} />
              </div>
            </div>

            {/* Frontend Development */}
            <div>
              <h3 className="font-playfair text-xl md:text-2xl text-white mb-6 border-b border-white/40  inline-block w-full tracking-[-0.9px]">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-6 mr-15">
                <TechCapsule name="TypeScript" Icon={TypescriptIcon} />
                <TechCapsule name="NextJs" Icon={NextjsIcon} />
                <TechCapsule name="ReactJs" Icon={ReactIcon} />
                <TechCapsule name="Tailwind CSS" Icon={TailwindIcon} /> 
                <TechCapsule name="JavaScript" Icon={JavaScriptIcon} />
                <TechCapsule name="CSS" Icon={CssIcon} />
                <TechCapsule name="HTML" Icon={HtmlIcon} />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-12">
            
            {/* Backend Development */}
            <div>
              <h3 className="font-playfair text-xl md:text-2xl text-white mb-6 border-b border-white/40 tracking-[-0.9px] inline-block w-full">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <TechCapsule name="Node" Icon={NodeIcon} />
                <TechCapsule name="ExpressJs" Icon={ExpressIcon} />
                <TechCapsule name="MySql" Icon={MongoIcon} />
                <TechCapsule name="PostgreSQL" Icon={PostgresIcon} />
                <TechCapsule name="MySql" Icon={MySqlIcon} />
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-playfair text-xl md:text-2xl text-white mb-6 border-b border-white/40 tracking-[-0.9px] inline-block w-full">
                Others
              </h3>
              {/* Removed 'invert' class from here because it's now handled inside TechCapsule */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <TechCapsule name="Figma" Icon={FigmaIcon} />
                <TechCapsule name="Git" Icon={GitIcon} />
                <TechCapsule name="Adobe After Effects" Icon={AfterEffectsIcon} />
                <TechCapsule name="Adobe Photoshop" Icon={PhotoshopIcon} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-red-500" />
    </main>
  );
}