"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

export default function Experience() {
  return (
    <main className="relative w-full h-[100dvh] bg-black overflow-hidden selection:bg-purple-300 selection:text-black">
      
      {/* BACKGROUND IMAGE */}
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

      {/* Top Navbar (Home/Contact Links) */}
      <div className="text-white absolute top-10 right-6 z-30 flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-6 text-xs md:text-base md:top-2 md:right-19 md:font-medium tracking-tight md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4 font-semibold md:font-normal opacity-80 md:opacity-100">
          Home
        </a>
        <a href="/contact" className="hover:underline underline-offset-4 font-semibold md:font-normal">
          Contact me
        </a>
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

      {/* HEADER SECTION (Title & Dash) */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Experience
        </h1>
        {/* DASH: Hidden on Mobile (md:block) */}
        <div className="hidden md:block w-30 h-[2px] bg-white md:ml-5 mt-3" />
      </div>

      {/* CARD CONTAINER */}
      {/* FIX: Replaced 'scrollbar-hide' class and <style> tag with Tailwind arbitrary variants:
         [&::-webkit-scrollbar]:hidden  -> Hides scrollbar in Chrome/Safari/Edge
         [-ms-overflow-style:none]      -> Hides in IE/Edge
         [scrollbar-width:none]         -> Hides in Firefox
      */}
      <div className="absolute top-[140px] md:top-[240px] left-1/2 -translate-x-1/2 w-[90%] md:w-[65%] lg:w-[85%] z-20 h-[calc(100vh-160px)] md:h-[calc(100vh-240px)] overflow-y-auto pb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-col gap-6 md:gap-8 pb-10">
          
          {/* --- CARD 1: BACKEND DEVELOPER --- */}
          <div className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/30 rounded-[20px] md:rounded-[30px] p-5 md:p-10 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-2 md:gap-0">
              <div>
                <h2 className="font-playfair text-2xl md:text-4xl tracking-[-0.5px] md:tracking-[-0.9px] mb-1 text-purple-300 leading-tight">
                  Backend Developer Intern
                </h2>
                <p className="font-helvetica font-regular text-sm md:text-base text-gray-300 tracking-wide md:text-end mt-1 md:mt-0">
                  Feb 2024 - Oct 2024
                </p>
              </div>
              <div className="mt-1 md:mt-0 md:text-right">
                <h3 className="font-helvetica text-base md:text-2xl font-medium tracking-tight md:tracking-[-0.9px] opacity-90">
                  DeltaX - Bengaluru, India
                </h3>
              </div>
            </div>

            {/* Body Text */}
            <div className="font-helvetica text-sm md:text-[1.05rem] leading-[1.6] text-gray-100 text-justify font-light tracking-wide space-y-4">
              <p>
                As a Backend Intern, my work was heavily focused on backend API
                development and optimization. I designed, built, and deployed
                multiple{" "}
                <span className="font-bold text-white">RESTful APIs</span> using{" "}
                <span className="font-bold text-white">TypeScript</span> and{" "}
                <span className="font-bold text-white">Node.js</span>, handling
                core business logic and data flow between services.
              </p>
              
              <p className="hidden md:block">
                I worked extensively on database-driven APIs, optimizing{" "}
                <span className="font-bold text-white">MySQL</span>
                queries, fixing inefficient joins and indexes, and enforcing a
                repository-service architecture to keep controllers thin and
                logic testable. This directly improved API response times and
                overall system reliability.
              </p>
              
              {/* Mobile Summary */}
              <p className="md:hidden">
                Optimized <span className="font-bold text-white">MySQL</span> queries and enforced repository-service architecture.
                Strengthened API robustness with strict validation and error handling, reducing production failures.
              </p>

              <p className="hidden md:block">
                I strengthened API robustness by implementing strict request
                validation, consistent error handling, and meaningful HTTP
                status codes, which significantly reduced production-side API
                failures. I also refactored legacy endpoints to improve
                throughput, concurrency handling, and scalability.
              </p>
            </div>
          </div>

          {/* --- CARD 2: FLUTTER DEVELOPER --- */}
          <div className="group relative w-full bg-white/10 backdrop-blur-lg border border-white/30 rounded-[20px] md:rounded-[30px] p-5 md:p-10 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-2 md:gap-0">
              <div>
                <h2 className="font-playfair text-2xl md:text-4xl tracking-[-0.5px] md:tracking-[-0.9px] mb-1 text-purple-300 leading-tight">
                  Flutter Developer Intern
                </h2>
                <p className="font-helvetica font-regular text-sm md:text-base text-gray-300 tracking-wide md:text-end mt-1 md:mt-0">
                  May 2023 - Jul 2023
                </p>
              </div>
              <div className="mt-1 md:mt-0 md:text-right">
                <h3 className="font-helvetica text-base md:text-2xl font-medium tracking-tight md:tracking-[-0.9px] opacity-90">
                  IIIT-Hyderabad SPCRC Lab
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
                <span className="block mt-2">
                I worked primarily on the backend side of a{" "}
                <span className="font-bold text-white">Flutter-based</span>{" "}
                smart water device application. Designed backend services for data ingestion, validation, and synchronization.
                </span>
              </p>
              
              <p className="hidden md:block">
                I designed and maintained backend services that handled device data ingestion, validation,
                and synchronization across multiple devices, ensuring reliable
                and consistent data exchange.
                I optimized backend data handling and API response
                performance, reducing load times.
              </p>

               {/* Mobile Summary */}
               <p className="md:hidden">
                Optimized API response performance and fixed data-related bugs. Supported production deployment and Play Store distribution.
              </p>

              <p className="hidden md:block">
                 I also worked on improving backend-client contracts, stabilizing API schemas, and fixing
                data-related bugs. Supported production deployment ensuring backend
                readiness for scale and seamless integration with the mobile client.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-purple-300" />
      
    </main>
  );
}