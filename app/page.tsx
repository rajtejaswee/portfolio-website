import { FlipWords } from "@/components/ui/FlipWords";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // MAIN CONTAINER
    <main className="relative w-full h-[100dvh] bg-[#F0F0F0] overflow-hidden text-black font-helvetica selection:bg-black selection:text-white">

      {/* 1. BIG NAME */}
      <div className="absolute top-6 left-4 z-20">
        <h1 className="font-oswald font-bold text-black leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          rajtejaswee
        </h1>
        
        {/* DASH - HIDDEN ON MOBILE */}
        <div className="hidden md:block w-94 ml-58 h-[2px] bg-black mt-3" />
      </div>

      {/* 2. TOP RIGHT */}
      <div className="absolute top-10 right-6 z-20 flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-6 text-xs md:text-base md:top-2 md:right-19 md:font-medium tracking-tight md:tracking-[-0.9px] md:text-xl">
        <span className="opacity-80 md:opacity-100">India</span>
        <a href="/contact" className="hover:underline underline-offset-5 font-semibold md:font-normal">
          Contact me
        </a>
      </div>
      
      {/* Right Side: VERTICAL EMAIL (Hidden on Mobile) */}
      <div className="absolute right-3 top-0 bottom-0 z-20 hidden md:flex flex-col items-center ">
        <div className="w-[1px] bg-black flex-[2] opacity-60" />
        <a 
          href="mailto:rajtejaswee02@gmail.com" 
          className="writing-vertical-rl rotate-180 text-sm tracking-widest hover:text-gray-500 transition-colors font-playfair md:tracking-[-0.9px] md:text-base md:text-xl"
        >
          rajtejaswee02@gmail.com
        </a>
        <div className="w-[1px] bg-black flex-1 opacity-60" />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center relative">
        
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
               <Image 
                 src="/bg-images/home-bg.webp" 
                 alt="Creative Smoke Background" 
                 fill
                 className="object-cover object-center" 
                 priority
               />
            </div>
        </div>

        {/* 3. HERO TEXT - CENTERED ON MOBILE */}
        {/* Changed 'text-right' to 'text-center md:text-right' */}
        <div className="relative z-10 text-center md:text-right max-w-4xl px-6 mt-2 pb-24 md:pb-0 tracking-[-0.5px] md:tracking-[-0.7px]">
          <span className="font-helvetica text-sm md:text-xl font-light text-black leading-relaxed md:leading-normal">
            
            Hi, I am Raj, a{" "}
            
            {/* Removed whitespace-nowrap to allow natural wrapping when centered */}
            <span>
                <span className="text-xl md:text-3xl md:text-bold"> Web</span>
                {/* The Animated Part */}
                <span className="md:ml-[10px] ml-[120px] font-playfair text-3xl md:text-5xl font-bold text-black md:align-right md:tracking-[-0.9px]">
                   <FlipWords />
                </span>
            </span>
            
            <br />
            I build robust, production-ready digital products 
             <br />
            that blend <b>complex backend system</b> <br /> with seamless <b>user experiences</b>.
          </span>
        </div>

      </div>

    {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-pink-400" />

    </main>
  );
}