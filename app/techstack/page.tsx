"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- 1. ICON IMPORTS ---
import { 
  JavaIcon, PythonIcon, 
  HtmlIcon, CssIcon, TailwindIcon, JavaScriptIcon, ReactIcon, DockerIcon, KubernetesIcon, AWSIcon, TurborepoIcon, WebsocketIcon,
  NodeIcon, ExpressIcon, PostgresIcon, MongoIcon, TypescriptIcon, 
  GitIcon, NextjsIcon, CppIcon, FigmaIcon, AfterEffectsIcon, PhotoshopIcon
} from "@/components/icons/Icons";

// --- 2. REUSABLE ANIMATED CAPSULE COMPONENT ---
const TechCapsule = ({ name, Icon }: { name: string; Icon: any }) => {
  
  const containerVars: Variants = {
    initial: { 
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)", 
    },
    hover: {
      scale: 1.15,
      backgroundColor: "rgba(255, 255, 255, 0.2)", 
      transition: {
        duration: 0.2,
        staggerChildren: 0.05, 
      },
    },
  };

  const letterVars: Variants = {
    initial: { y: 0 },
    hover: {
      y: [0, -3, 3, 0], 
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="group relative flex items-center gap-3 border border-white/20 px-4 py-2 md:px-5 md:py-2.5 rounded-full cursor-pointer w-fit shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      
      variants={containerVars}
      initial="initial"
      whileHover="hover"
      
      animate={{ y: [0, -8, 0] }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    >
      {/* Icon - Scaled down slightly for mobile */}
      <div className="w-5 h-5 md:w-8 md:h-8 relative">
        <Icon className="w-full h-full object-contain fill-current text-white invert" />
      </div>

      {/* Text */}
      <div className="font-helvetica font-medium text-white text-xs md:text-lg tracking-[-0.5px] md:tracking-[-0.9px] whitespace-nowrap overflow-hidden flex">
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
    <main className="relative w-full h-[100dvh] bg-black overflow-hidden selection:bg-red-500 selection:text-white">
      
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
      {/* FIX: Stacked vertically (flex-col items-end) and moved down (top-10) for mobile */}
      <div className="text-white absolute top-10 right-6 z-30 flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-6 text-xs md:text-base md:top-2 md:right-19 md:font-medium tracking-tight md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4 font-semibold md:font-normal opacity-80 md:opacity-100">Home</a>
        <a href="/contact" className="hover:underline underline-offset-4 font-semibold md:font-normal">Contact me</a>
      </div>

      {/* Email Section (Hidden on Mobile) */}
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
          // FIX: Tight tracking (-3px) on mobile
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Tech Stack
        </h1>
        {/* FIX: Hidden dash on mobile */}
        <div className="hidden md:block w-70 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* --- MAIN TECH STACK CONTENT --- */}
      {/* FIX: 
          1. Changed top position: top-[140px] (Mobile) vs top-[200px] (Desktop) to reduce gap.
          2. Added padding x: pl-4 pr-4 to prevent edge collision.
          3. Added scrollbar hiding classes.
      */}
      <div className="absolute top-[140px] md:top-[200px] left-0 md:left-12 z-20 w-full md:w-[85%] h-[calc(100vh-160px)] md:h-[calc(100vh-220px)] overflow-y-auto pl-4 pr-4 md:pl-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          
          {/* --- LEFT COLUMN --- */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Programming Languages */}
            <div>
              <h3 className="font-playfair text-lg md:text-2xl text-white mb-4 md:mb-6 border-b border-white/40 tracking-[-0.5px] md:tracking-[-0.9px] inline-block w-full">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-6">
                <TechCapsule name="C++" Icon={CppIcon} />
                <TechCapsule name="JAVA" Icon={JavaIcon} />
                <TechCapsule name="Python" Icon={PythonIcon} />
              </div>
            </div>

            {/* Frontend Development */}
            <div>
              <h3 className="font-playfair text-lg md:text-2xl text-white mb-4 md:mb-6 border-b border-white/40 inline-block w-full tracking-[-0.5px] md:tracking-[-0.9px]">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-6 md:mr-15">
                <TechCapsule name="TypeScript" Icon={TypescriptIcon} />
                <TechCapsule name="NextJs" Icon={NextjsIcon} />
                <TechCapsule name="ReactJs" Icon={ReactIcon} />
                <TechCapsule name="Tailwind CSS" Icon={TailwindIcon} /> 
                <TechCapsule name="Turborepo" Icon={TurborepoIcon} />
                <TechCapsule name="JavaScript" Icon={JavaScriptIcon} />
                <TechCapsule name="CSS" Icon={CssIcon} />
                <TechCapsule name="HTML" Icon={HtmlIcon} />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Backend Development */}
            <div>
              <h3 className="font-playfair text-lg md:text-2xl text-white mb-4 md:mb-6 border-b border-white/40 tracking-[-0.5px] md:tracking-[-0.9px] inline-block w-full">
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-6">
                <TechCapsule name="Node" Icon={NodeIcon} />
                <TechCapsule name="ExpressJs" Icon={ExpressIcon} />
                <TechCapsule name="PostgreSQL" Icon={PostgresIcon} />
                <TechCapsule name="WebSockets" Icon={WebsocketIcon} />
                <TechCapsule name="MongoDB" Icon={MongoIcon} />
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-playfair text-lg md:text-2xl text-white mb-4 md:mb-6 border-b border-white/40 tracking-[-0.5px] md:tracking-[-0.9px] inline-block w-full">
                Others
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-6">
                <TechCapsule name="Git" Icon={GitIcon} />
                <TechCapsule name="Docker" Icon={DockerIcon} />
                <TechCapsule name="AWS" Icon={AWSIcon} />
                <TechCapsule name="Kubernetes" Icon={KubernetesIcon} />
                 <TechCapsule name="Figma" Icon={FigmaIcon} />
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