"use client";

import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { GlowingSpan } from "@/components/ui/Glowingspan";

export default function About() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-black selection:bg-cyan-400 selection:text-black">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
          <Image
            src="/bg-images/about-bg.webp"
            alt="Creative Smoke Background"
            fill
            className="object-cover opacity-80 md:opacity-100"
            priority
          />
        </div>
      </div>

       {/* Top navbar */}
      <div className="text-white absolute top-10 right-6 z-20 flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-6 text-xs md:text-base md:top-2 md:right-19 md:font-medium tracking-tight md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-5 font-semibold md:font-normal opacity-90">Home</a>
        <a href="/contact" className="hover:underline underline-offset-5 font-semibold md:font-normal">
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

      {/* Header */}
      <div className="absolute top-6 left-4 z-20">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          About Me
        </h1>
        {/* Dash */}
        <div className="w-[60vw] md:w-72 h-[2px] bg-white md:mr-100 ml-1 md:ml-0 mt-2 md:mt-3" />
      </div>

      {/* Sub-Header (Web Developer...) */}
      {/* FIX: Moved down to top-[115px] to leave space from Contact. Increased size to text-sm. */}
      <div className="absolute top-[90px] md:top-[90px] right-4 md:left-155 z-20 w-auto md:w-[55%] flex justify-end md:pr-12 md:tracking-[-1.9px]">
        <div className="text-right font-playfair text-white text-sm md:text-3xl leading-tight opacity-90">
          <p>Web Developer</p>
          <p>Web Designer & Problem Solver</p>
        </div>
      </div>

      {/* PARAGRAPH SECTION */}
      {/* FIX: Adjusted top spacing to top-[160px] to accommodate larger subtitles */}
      <div className="absolute top-[150px] md:top-[190px] left-4 md:left-6 z-20 w-[90%] md:w-[70%] pb-32 pr-2 md:pr-12">
        {/* Paragraphs */}
        <div className="font-helvetica text-justify text-white text-[11px] md:text-[1.05rem] leading-[1.6] md:leading-[1.8] space-y-3 md:space-y-6 md:tracking-[-0.9px] 
        [&_span]:!text-white [&_span]:!shadow-none [&_span]:!animate-none [&_span]:!font-normal
        md:[&_span]:!text-cyan-400 md:[&_span]:!font-medium">
          
          {/* FIX: Added manual spaces {" "} around spans and breaks to prevent sticky words */}
          My name is <GlowingSpan>Raj Tejaswee</GlowingSpan>,
          and I am from <GlowingSpan>India</GlowingSpan>. I’m
          24 years old and have completed my undergraduate education in{" "}
          <GlowingSpan>Computer Science and Engineering</GlowingSpan>{" "}
          from <GlowingSpan>IIIT Vadodara, India</GlowingSpan>.
          
          <span className="hidden md:inline">
            <br className="md:block hidden" />{" "}
            For me, software development started as a curiosity, but it has
            evolved into a drive to{" "}
            <GlowingSpan>engineer scalable, production-ready systems</GlowingSpan>.
          </span>
          
          <br className="md:block hidden" />{" "}
          I specialize in the modern <GlowingSpan>JavaScript</GlowingSpan> and{" "}
          <GlowingSpan>TypeScript</GlowingSpan> ecosystem,
          crafting high-performance user experiences with{" "}
          <GlowingSpan>React</GlowingSpan> and{" "}
          {/* Added explicit space here 👇 */}
          <br className="md:block hidden" />{" "}
          <GlowingSpan>Next.js</GlowingSpan>, while
          architecting robust backends using <GlowingSpan>Node</GlowingSpan>,{" "}
          <GlowingSpan>Postgres</GlowingSpan>, and{" "}
          <GlowingSpan>WebSockets</GlowingSpan>. I look
          beyond just writing code—focusing on the
          <br className="md:block hidden" />{" "}
          bigger picture by managing{" "}
          <GlowingSpan>complex architectures with Turborepo</GlowingSpan>{" "}
          and handling cloud-native deployments via{" "}
          <GlowingSpan>Docker and AWS</GlowingSpan>.
          
          <p className="mt-2 md:mt-2">
            I’m generally outgoing and enjoy meeting new people and exchanging
            ideas. I pay close <GlowingSpan>attention to detail</GlowingSpan> and tend toward{" "}
            <br className="md:block hidden"/>{" "}
            perfectionism, which helps me produce work that feels thoughtful and
            complete.{" "}
            <span className="hidden md:inline">
              I take <GlowingSpan>responsibility</GlowingSpan> seriously, enjoy{" "}
              <br className="md:block hidden" />{" "}
              tackling challenges, and stay deeply involved in projects that genuinely
              interest me.{" "}
            </span>
            Outside of work, I spend time at
            <br className="md:block hidden" />{" "}
            the <GlowingSpan>gym</GlowingSpan>, <GlowingSpan>reading books</GlowingSpan>, and
            exploring <GlowingSpan>cinema</GlowingSpan>, with a strong interest in creative
            design—especially experimenting
            <br className="md:block hidden" />{" "}
            with <GlowingSpan>animations</GlowingSpan>, <GlowingSpan>motion graphics</GlowingSpan>,
            and digital art to blend technology with <GlowingSpan>creativity</GlowingSpan>.
          </p>
        </div>

        {/* Signature Section */}
        {/* FIX: Changed items-end to items-center (Mobile) to center align the block */}
        <div className="mt-2 md:mt-10 mr-45 md:mr-[-50px] flex flex-col items-center md:items-end">
            <div className="relative w-32 h-16 md:w-48 md:h-20 mr-0 md:mr-70">
                 <Image 
                    src="/bg-images/signature.png" 
                    alt="Raj Tejaswee Signature" 
                    fill 
                    className="object-contain mt-0 md:mt-[-35px]" 
                 />
            </div>

            {/* Academic Details */}
            {/* FIX: Changed text-right to text-center for Mobile */}
            <div className="font-helvetica text-center md:text-center text-[9px] md:text-large text-white/80 md:text-white tracking-tight md:tracking-[-0.9px] mt-[-10px] md:mt-[-55px] md:mr-85 font-light">
                <p>B.Tech</p>
                <p>Computer Science and Engineering,</p>
                <p>IIIT Vadodara</p>
                <p>2020-2024</p>
            </div>
        </div>
      </div>
      
      {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-cyan-400" />
    </main>
  );
}