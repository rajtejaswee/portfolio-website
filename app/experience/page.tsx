"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

export default function Experience() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* 1. BACKGROUND IMAGE                                  */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
          <Image
            src="/bg-images/exp-bg.webp"
            alt="Experience Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TOP NAVIGATION (Home / Contact)                   */}
      {/* ---------------------------------------------------- */}
      <div className="text-white absolute top-5 right-6 z-30 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4">
          Home
        </a>
        <a href="/contact" className="hover:underline underline-offset-4">
          Contact me
        </a>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. VERTICAL EMAIL (Right Side)                       */}
      {/* ---------------------------------------------------- */}
      <div className="text-white absolute right-3 top-0 bottom-0 z-30 hidden md:flex flex-col items-center">
        {/* Top Line */}
        <div className="w-[1px] bg-white flex-[2] opacity-60" />
        <a
          href="mailto:rajtejaswee02@gmail.com"
          className="writing-vertical-rl rotate-180 text-sm tracking-widest hover:text-gray-400 transition-colors font-playfair md:tracking-[-0.9px] md:text-base md:text-xl my-8"
        >
          rajtejaswee02@gmail.com
        </a>
        {/* Bottom Line */}
        <div className="w-[1px] bg-white flex-1 opacity-60" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. HEADER SECTION (Static)                           */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Experience
        </h1>
        {/* The thin line under the name */}
        <div className="w-30 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 5. SCROLLABLE CARD CONTAINER                         */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-[180px] md:top-[240px] left-1/2 -translate-x-1/2 w-[90%] md:w-[65%] lg:w-[85%] z-20 h-[calc(100vh-240px)] overflow-y-auto pb-32 no-scrollbar">
        
        <div className="flex flex-col gap-8 pb-10">
          
          {/* --- CARD 1: BACKEND DEVELOPER --- */}
          <div className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/30 rounded-[30px] p-6 md:p-10 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl tracking-[-0.9px] mb-1 text-purple-300">
                  Backend Developer Intern
                </h2>
                <p className="font-helvetica font-light text-base text-gray-200 tracking-wide mt-1">
                  Feb 2024 - Oct 2024
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <h3 className="font-helvetica text-lg md:text-2xl font-medium tracking-[-0.9px]">
                  DeltaX - Bengaluru, India
                </h3>
              </div>
            </div>

            {/* Body Text */}
            <div className="font-helvetica text-sm md:text-[1.05rem] leading-[1.6] text-gray-100 text-justify font-light tracking-wide space-y-4">
              <p>
                As a Backend Intern, my work was heavily focused on backend API
                development and optimization. I designed, built, and deployed
                multiple <span className="font-bold text-white">RESTful APIs</span> using <span className="font-bold text-white">TypeScript</span> and <span className="font-bold text-white">Node.js</span>, handling
                core business logic and data flow between services.
              </p>
              <p>
                I worked extensively on database-driven APIs, optimizing <span className="font-bold text-white">MySQL</span>
                queries, fixing inefficient joins and indexes, and enforcing a
                repository–service architecture to keep controllers thin and
                logic testable. This directly improved API response times and
                overall system reliability.
              </p>
              <p>
                I strengthened API robustness by implementing strict request
                validation, consistent error handling, and meaningful HTTP
                status codes, which significantly reduced production-side API
                failures. I also refactored legacy endpoints to improve
                throughput, concurrency handling, and scalability, including
                tuning resource usage and supporting load-balanced deployments
                under higher traffic.
              </p>
            </div>
          </div>

          {/* --- CARD 2: FLUTTER DEVELOPER --- */}
          <div className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/30 rounded-[30px] p-6 md:p-10 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl tracking-[-0.9px] mb-1 text-purple-300">
                  Flutter Developer Intern
                </h2>
                <p className="font-helvetica font-light text-base text-gray-200 tracking-wide mt-1">
                  May 2023 - Jul 2023
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <h3 className="font-helvetica text-lg md:text-2xl font-medium tracking-[-0.9px]">
                  IIIT-Hyderabad SPCRC Lab Project, India
                </h3>
              </div>
            </div>

            {/* Body Text */}
            <div className="font-helvetica text-sm md:text-[1.05rem] leading-[1.6] text-gray-100 text-justify font-light tracking-wide space-y-4">
              <p>
                App Link:{" "}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.mycompany.hydrow&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-white hover:text-purple-300 hover:underline transition-colors"
                >
                  HydrowVerse
                </a>
                <br />
                I worked primarily on the backend side of a <span className="font-bold text-white">Flutter-based</span> smart water device application, focusing on APIs, data flow, and
                system integration rather than UI. I designed and maintained
                backend services that handled device data ingestion, validation,
                and synchronization across multiple devices, ensuring reliable
                and consistent data exchange. 
                <br />
                I optimized backend data handling
                and API response performance, reducing load times and improving
                real-time responsiveness of the application. I also worked on
                improving backend–client contracts, stabilizing API schemas, and
                fixing data-related bugs that directly impacted app behavior. In
                addition, I supported production deployment by ensuring backend
                readiness for scale and seamless integration with the mobile
                client distributed via the <span className="font-bold text-white">Play Store</span>.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 6. FLOATING NAVBAR (Purple Hover)                    */}
      {/* ---------------------------------------------------- */}
      <Navbar hoverColorClass="group-hover:text-purple-300" />
    </main>
  );
}