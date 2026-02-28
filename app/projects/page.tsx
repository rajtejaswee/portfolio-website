"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// --- 1. PROJECT DATA ---
const projectsData = [
  {
    id: 1, 
    title: "Reddit MCP",
    subtitle: "Privacy-First Search Engine",
    description: "A high-performance search engine built with the Model Context Protocol. I engineered a tiered caching system (Redis + In-Memory) for <50ms latency, implemented IP-based rate limiting to prevent abuse, and deployed a fully Dockerized architecture on Railway and Vercel.",
    tech: ["Next.js", "TypeScript", "Redis", "Docker", "Node.js"],
    image: "https://images.unsplash.com/photo-1616509091215-57bbece93654?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    link: "https://reddit-mcp-nine.vercel.app/",
  },
  {
    "id": 2, 
    "title": "Slate",
    "subtitle": "Real-Time Collaborative Infinite Canvas",
    "description": "Architected a decoupled microservices monorepo for real-time spatial collaboration. Engineered a low-latency native WebSocket engine with auto-reconnection resilience, robust CORS/Preflight handling, and secure JWT/OAuth authentication deployed across Vercel and Railway.",
    "tech": ["TypeScript", "Next.js", "WebSockets", "Express.js", "Prisma", "PostgreSQL", "Turborepo"],
    "image": "https://i.pinimg.com/1200x/a5/61/24/a56124586a1a78712cf839193c9b83a9.jpg", 
    "link": "https://slate-web-murex.vercel.app" 
},
  {
    id: 3, 
    title: "ShortX",
    subtitle: "Scalable URL Shortener API",
    description: "Engineered a production-ready backend microservice for URL management. Features include atomic click analytics (race-condition proof), JWT authentication, and a fully Dockerized deployment pipeline on Render & NeonDB.",
    tech: ["TypeScript", "Node.js", "Docker", "PostgreSQL", "Drizzle ORM"],
    image: "https://i.pinimg.com/1200x/1b/2f/65/1b2f657c2469705f4780d16862f08fae.jpg", 
    link: "https://documenter.getpostman.com/view/35966589/2sBXVig9wv", 
},
{
    id: 4,
    title: "Chat Room",
    subtitle: "A Chat room service",
    description: "A full-stack real-time chat application featuring a dynamic 'Room Code' system for private messaging. Optimized for high performance and minimal overhead, the service enables seamless joining and room creation while maintaining a consistent message history across all connected clients.",
    tech: ["React.js", "TypeScript", "Websockets", "Node.js"],
    image: "https://i.pinimg.com/736x/c7/64/f5/c764f5f464c79be65261c1d7ce6b79b7.jpg",
    link: "https://github.com/rajtejaswee/chat-app",
  },
  {
    id: 5,
    title: "Designify",
    subtitle: "Full Stack AI Platform",
    description: "An AI-powered full-stack engine that architected and deployed entire web applications from single-line text prompts. Integrated LLMs to automate the generation of responsive UI components and backend API structures, significantly reducing time-to-market for MVP development.",
    tech: ["React.js", "Vite", "JavaScript", "HTTP"],
    image: "https://i.pinimg.com/1200x/72/83/00/72830043ca7a7b1d2c2e5c9a945685e5.jpg",
    link: "https://github.com/rajtejaswee/Designify/tree/main",
  },
  {
  id: 6,
  title: "Echoid",
  subtitle: "Second Brain Application",
  description: "Developed a digital second brain to store, organize, and intelligently retrieve links, videos, and tweets. Features include automated metadata scraping for seamless content ingestion, smart categorization, and a responsive glassmorphism UI with dark mode support.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  link: "https://github.com/rajtejaswee/Echoid",
},
  
  
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const activeProject = projectsData.find((p) => p.id === selectedId);

  return (
    <main className="relative w-full h-[100dvh] bg-black overflow-hidden selection:bg-green-300 selection:text-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/bg-images/projects-bg.webp"
            alt="Projects Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
      </div>

      {/* 2. TOP NAVIGATION */}
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

      {/* 4. HEADER SECTION */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          // FIX: Tighter tracking [-3px] for mobile to match the squished aesthetic
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Projects
        </h1>
        {/* FIX: Hidden on mobile (md:block) */}
        <div className="hidden md:block w-37 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* 5. SQUARE GRID (3 Columns) */}
      <div className="absolute top-[140px] md:top-[200px] left-1/2 -translate-x-1/2 w-[90%] z-20 h-[calc(100vh-160px)] md:h-[calc(100vh-250px)] overflow-y-auto pb-40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group relative w-full aspect-square rounded-[15px] md:rounded-[20px] overflow-hidden border border-white/20 cursor-pointer bg-black/40 backdrop-blur-sm shadow-lg hover:border-white/50 transition-colors"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:blur-md"
              />

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                {/* FIX: Text size scaled down dramatically for mobile (text-lg/xl) vs desktop (text-5xl) */}
                <h3 className="font-playfair text-xl md:text-4xl lg:text-5xl text-white [text-shadow:_0_0_15px_rgba(255,255,255,0.6)] font-bold tracking-tight md:tracking-[-0.9px] leading-none">
                  {project.title}
                </h3>
              </div>

              {/* Hover State: "Tap to View" Message */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="font-helvetica text-white text-xs md:text-base font-light tracking-wide border border-white/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Tap to view
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. DETAILS MODAL */}
      <AnimatePresence>
        {selectedId && activeProject && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 z-40 backdrop-blur-sm"
            />

            {/* The Active Card */}
            {/* FIX: Adjusted Mobile Positioning (top-24 bottom-24) to ensure content is visible and doesn't get covered by navbar/header */}
            <motion.div
              layoutId={`card-${selectedId}`}
              className="absolute z-50 left-4 right-4 md:left-[20%] md:right-[20%] top-24 bottom-24 md:top-[160px] md:bottom-[160px] bg-black/80 md:bg-white/10 backdrop-blur-xl border border-white/30 rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
              >
                <X size={20} color="white" />
              </button>

              {/* Left: Image Section */}
              <div className="relative w-full h-[200px] md:h-full md:w-[45%] shrink-0">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Right: Content Section */}
              <div className="flex-1 p-5 md:p-8 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                <div className="mb-4">
                  <motion.h2 className="font-playfair text-2xl md:text-4xl text-white mb-1">
                    {activeProject.title}
                  </motion.h2>
                  <p className="font-helvetica text-green-300 text-sm md:text-lg tracking-wide">
                    {activeProject.subtitle}
                  </p>
                </div>

                <motion.p className="font-helvetica text-gray-300 text-sm md:text-base leading-relaxed text-justify mb-6 font-light">
                  {activeProject.description}
                </motion.p>

                <div className="mb-6">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] md:text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pb-4 md:pb-0">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full md:w-auto text-center px-6 py-3 md:py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-green-300 transition-colors shadow-lg"
                  >
                    Visit Link
                  </a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Navbar hoverColorClass="group-hover:text-green-300" />
    </main>
  );
}