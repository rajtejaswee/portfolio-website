import { FlipWords } from "@/components/ui/FlipWords";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // MAIN CONTAINER
    <main className="relative w-full h-screen bg-[#F0F0F0] overflow-hidden text-black font-helvetica selection:bg-black selection:text-white">

      {/* Top Left: BIG NAME */}
      <div className="absolute top-6 left-4 z-20">
        <h1 className="font-oswald font-bold text-black leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          rajtejaswee
        </h1>
        {/* The thin line under the name */}
        <div className="w-94 h-[2px] bg-black ml-58 mt-3" />
      </div>

      {/* Top Right: LOCATION & CONTACT LINK */}
      <div className="absolute top-5 right-6 z-20 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <span>India</span>
        <a href="/contact" className="hover:underline underline-offset-5">
          Contact me
        </a>
      </div>


      
      {/* Right Side: VERTICAL EMAIL */}
      <div className="absolute right-3 top-0 bottom-0 z-20 hidden md:flex flex-col items-center ">
        {/* Top Line */}
        <div className="w-[1px] bg-black flex-[2] opacity-60" />
        <a 
          href="mailto:rajtejaswee02@gmail.com" 
          className="writing-vertical-rl rotate-180 text-sm tracking-widest hover:text-gray-500 transition-colors font-playfair md:tracking-[-0.9px] md:text-base md:text-xl"
        >
          rajtejaswee02@gmail.com
        </a>
        {/* Bottom Line */}
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
                 className="object-cover" 
                 priority
               />
            </div>
        </div>


        {/* HERO TEXT */}

        <div className="relative z-10 text-right max-w-4xl px-4 mt-2 md:tracking-[-0.7px]">
          <span className="font-helvetica md:text-xl  font-light text-black">
            Hi, I am Raj, a <span className="text-2xl font-bold">Web</span>{" "}
            
            {/* The Animated Part*/}
            <span className="font-playfair text-xl md:text-5xl font-bold text-black align-right md:tracking-[-0.9px]">
               <FlipWords />
            </span>
            <br />
            I build robust, production-ready digital products 
             <br />
            that blend <b>complex backend system</b> with seamless <b>user experiences</b>.
          </span>
        </div>

      </div>

    {/* Navbar Section */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
         {/* <Navbar /> goes here later */}
      </div>
      <Navbar hoverColorClass="group-hover:text-pink-400" />

    </main>
  );
}