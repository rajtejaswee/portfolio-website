import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { GlowingSpan } from "@/components/ui/Glowingspan";


export default function About() {
  return (
    <main>
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
          <Image
            src="/bg-images/about.jpg"
            alt="Creative Smoke Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
       {/* Top navbar */}
      <div className=" text-white absolute top-5 right-6 z-20 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-5">Home</a>
        <a href="/contact" className="hover:underline underline-offset-5">
          Contact me
        </a>
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

      {/* Header */}
      <div className="absolute top-6 left-4 z-20">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          About Me
        </h1>
        {/* The thin line under the name */}
        <div className="w-72 h-[2px] bg-white mr-100 ml-0 mt-3" />
      </div>
      <div className="absolute top-[90px] left-4 md:left-155 z-20 w-[90%] md:w-[55%] flex justify-end pr-4 md:pr-12 md:tracking-[-1.9px]">
        <div className="text-right font-playfair text-white text-lg md:text-3xl leading-tight opacity-90">
          <p>Web Developer</p>
          <p>Web Designer & Problem Solver</p>
        </div>
      </div>
      {/* PARAGRAPH SECTION */}
      <div className="absolute top-[190px] left-4 md:left-6 z-20 w-[90%] md:w-[70%] pb-32 pr-4 md:pr-12">
        {/* Paragraphs */}
        <div className="font-helvetica text-justify text-white text-sm md:text-[1.05rem] leading-[1.8] space-y-6 md:tracking-[-0.9px]">
          My name is <GlowingSpan>Raj Tejaswee</GlowingSpan>,
          and I am from <GlowingSpan>India</GlowingSpan>. I’m
          24 years old and have recently completed my undergraduate education in{" "}
          <GlowingSpan>
            Computer Science and Engineering
          </GlowingSpan>{" "}
          from{" "}
          <GlowingSpan>IIIT Vadodara, India</GlowingSpan>.
          <br />
          For me, software development started as a curiosity, but it has
          evolved into a drive to{" "}
          <GlowingSpan>
            engineer scalable, production-ready systems
          </GlowingSpan>
          .
          <br />I specialize in the modern{" "}
          <GlowingSpan>JavaScript</GlowingSpan> and{" "}
          <GlowingSpan>TypeScript</GlowingSpan> ecosystem,
          crafting high-performance user experiences with{" "}
          <GlowingSpan>React</GlowingSpan> and
          <br />
          <GlowingSpan>Next.js</GlowingSpan>, while
          architecting robust backends using{" "}
          <GlowingSpan>Node</GlowingSpan>,{" "}
          <GlowingSpan>Postgres</GlowingSpan>, and{" "}
          <GlowingSpan>WebSockets</GlowingSpan>. I look
          beyond just writing code—focusing on the
          <br />
          bigger picture by managing{" "}
          <GlowingSpan>
            complex architectures with Turborepo
          </GlowingSpan>{" "}
          and handling cloud-native deployments via{" "}
          <GlowingSpan>Docker and AWS</GlowingSpan>.
          <p className="mt-2">
            I’m generally outgoing and enjoy meeting new people and exchanging
            ideas. I pay close <GlowingSpan>attention to detail</GlowingSpan>. and tend toward <br />
            perfectionism, which helps me produce work that feels thoughtful and
            complete. I take <GlowingSpan>responsibility</GlowingSpan> seriously, enjoy <br />tackling
            challenges, and stay deeply involved in projects that genuinely
            interest me. Outside of work, I spend time at<br /> the <GlowingSpan>gym</GlowingSpan>, <GlowingSpan>reading books</GlowingSpan>, and
            exploring <GlowingSpan>cinema</GlowingSpan>, with a strong interest in creative
            design—especially experimenting<br />with <GlowingSpan>animations</GlowingSpan>, <GlowingSpan>motion graphics</GlowingSpan>,
            and digital art to blend technology with <GlowingSpan>creativity</GlowingSpan>.
          </p>
        </div>
        {/* Signature Section */}
        <div className="mt-10 mr-5 flex flex-col items-center md:items-end">
            <div className="relative w-48 h-20 mb- mr-70">
                 <Image 
                    src="/bg-images/signature.png" 
                    alt="Raj Tejaswee Signature" 
                    fill 
                    className="object-contain mt-[-35px]" 
                 />
            </div>

            {/* Academic Details */}
            <div className="font-helvetica text-center text-center text-medium text-white tracking-[-0.9px] mt-[-55px] mr-60 font-light">
                <p>B.Tech</p>
                <p>Computer Science and Engineering,</p>
                <p>Indian Institute of Information Technology, Vadodara</p>
                <p>2020-2024</p>
            </div>
        </div>
      </div>
        {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-cyan-400" />
    </main>
  );
}