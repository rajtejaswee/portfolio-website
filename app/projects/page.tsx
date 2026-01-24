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
    title: "Tube - Tweet",
    subtitle: "Combined Backend System",
    description: "A robust back-end system combining YouTube and Twitter features. I implemented 5+ controllers and validators for secure login, channel subscriptions, and seamless video interactions.",
    tech: ["Node.js", "MongoDB", "Express.js", "JWT"],
    image: "https://i.pinimg.com/1200x/66/8a/78/668a789fbcf7a8ac35fec0454a8fe83f.jpg", 
    link: "https://github.com/your-username/tube-tweet",
  },
  {
    id: 2,
    title: "Designify",
    subtitle: "AI Website Generator",
    description: "Developed an innovative platform that generates responsive website layouts from simple text prompts using OpenAI's API. It interprets natural language to create functional HTML/CSS structures.",
    tech: ["OpenAI API", "React.js", "TailwindCSS"],
    image: "https://i.pinimg.com/1200x/62/55/46/62554617c86e5339ab798f189b6364b8.jpg",
    link: "https://designify.ai",
  },
  {
    id: 3,
    title: "Z - Chat Web App",
    subtitle: "Real-Time Messaging",
    description: "Built a high-performance real-time messaging platform using Socket.io. Features include room-based chat, instant message delivery, online status indicators, and persistent chat history storage.",
    tech: ["Socket.io", "React.js", "Node.js", "CSS"],
    image: "https://i.pinimg.com/1200x/34/81/c6/3481c633a849b08bafdc1f4f9241823b.jpg",
    link: "https://z-chat-app.com",
  },
  {
    id: 4,
    title: "E - Commerce",
    subtitle: "Full Stack Platform",
    description: "A comprehensive e-commerce solution featuring dynamic product listings, secure cart management, and Stripe payment gateway integration. Optimized for SEO and fast load times.",
    tech: ["React.js", "Redux", "Stripe", "MongoDB"],
    image: "https://i.pinimg.com/1200x/5f/37/aa/5f37aabbeb4d01d9faf9c7311588dde2.jpg",
    link: "https://ecommerce-demo.com",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const activeProject = projectsData.find((p) => p.id === selectedId);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      
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
      <div className="text-white absolute top-5 right-6 z-30 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4">Home</a>
        <a href="/contact" className="hover:underline underline-offset-4">Contact me</a>
      </div>

      {/* Email Section */}
      <div className="text-white absolute right-3 top-0 bottom-0 z-20 hidden md:flex flex-col items-center ">
        {/* Top Line */}
        <div className="w-[1px] bg-white flex-[2] opacity-60" />
        <a
          href="mailto:rajtejaswee02@gmail.com"
          className="writing-vertical-rl rotate-180 text-sm tracking-widest hover:text-gray-500 transition-colors font-playfair md:tracking-[-0.9px] md:text-base md:text-xl"
        >
          rajtejaswee02@gmail.com
        </a>
        {/* Bottom Line */}
        <div className="w-[1px] bg-white flex-1 opacity-60" />
      </div>

      {/* 4. HEADER SECTION */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Projects
        </h1>
        <div className="w-37 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* 5. SQUARE GRID (3 Columns) */}
      {/* Width increased to 70% to accommodate 3 columns */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[90%] z-20 h-[calc(100vh-250px)] overflow-y-auto pb-40 no-scrollbar">
        
        {/* CHANGED: grid-cols-2 -> md:grid-cols-3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group relative w-full aspect-square rounded-[20px] overflow-hidden border border-white/20 cursor-pointer bg-black/40 backdrop-blur-sm shadow-lg hover:border-white/50 transition-colors"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:blur-md"
              />

              {/* Normal State: Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-playfair text-5xl text-white [text-shadow:_0_0_15px_rgba(255,255,255,0.6)] font-bold tracking-[-0.9px]">{project.title}</h3>
              </div>

              {/* Hover State: "Tap to View" Message */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="font-helvetica text-white text-medium font-light tracking-wide border border-white/60 px-3 py-1 rounded-full backdrop-blur-md">
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
            <motion.div
              layoutId={`card-${selectedId}`}
              className="absolute z-50 left-4 right-4 md:left-[20%] md:right-[20%] top-[160px] bottom-[160px] bg-white/10 backdrop-blur-xl border border-white/30 rounded-[30px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X size={20} color="white" />
              </button>

              {/* Left: Image Section */}
              <div className="relative w-full md:w-[45%] h-[180px] md:h-full">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Right: Content Section */}
              <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto no-scrollbar">
                
                <div className="mb-4">
                  <motion.h2 className="font-playfair text-3xl md:text-4xl text-white mb-1">
                    {activeProject.title}
                  </motion.h2>
                  <p className="font-helvetica text-green-300 text-lg tracking-wide">
                    {activeProject.subtitle}
                  </p>
                </div>

                <motion.p className="font-helvetica text-gray-200 text-sm md:text-base leading-relaxed text-justify mb-6 font-light">
                  {activeProject.description}
                </motion.p>

                <div className="mb-6">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-70">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/20 border border-white/10 rounded-full text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-green-300 transition-colors shadow-lg"
                  >
                    Visit Website
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