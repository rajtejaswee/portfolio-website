"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { 
  LinkedinIcon, GithubIcon, XIcon, DiscordIcon, FigIcon, LeetcodeIcon, InstagramIcon, 
  CodeforcesIcon,
  GmailIcon,
  BehanceIcon
} from "@/components/icons/Icons";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full md:w-[100%] md:h-[100%]">
          <Image
            src="/bg-images/contact-bg.webp"
            alt="Contact Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
      </div>

      {/* Top Navbar */}
      <div className="text-white absolute top-5 right-6 z-30 flex gap-6 text-sm md:text-base md:top-2 md:right-19 md:font-medium md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4">
          Home
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
      {/* Header Section */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-1px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Contact Me
        </h1>
        {/* The thin line under the name */}
        <div className="w-120 h-[2px] bg-white ml-51 mt-3" />
      </div>
     {/* Main Content Container */}
      <div className="absolute top-[200px] left-4 left-20 z-20 w-[90%] md:w-[60%]">
        
        {/* Let's Connect Text */}
        <div className="mb-6">
          <h2 className="font-playfair text-5xl text-white mb-2 tracking-[-2.5px]">Let’s Connect</h2>
          <p className="font-helvetica italic text-white text-xl font-light tracking-[-0.9px]">
            If you want to know more about me or my work, or if you would just like to say hello,<br className="hidden md:block"/>
            send me a message. I’d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full ">
          
          {/* Row: Email Input + Send Button */}
          <div className="flex w-full gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              // Changed w-[60%] to flex-1 so it shares space with the button
              className="flex w-[650px] bg-white/20 backdrop-blur-md border border-white/60 rounded-[20px] px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:bg-white/30 transition-all"
            />
            
            <button
              type="submit"
              // Matches Input styles exactly + Orange Hover
              className="px-8 w-[190px] bg-white/20 backdrop-blur-md border border-white/60 rounded-[20px] text-white font-medium transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:scale-105"
            >
              Send
            </button>
          </div>
          
          {/* Message Input */}
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full bg-white/20 backdrop-blur-md border border-white/60 rounded-[20px] px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/30 transition-all resize-none"
          />
        </form>
      </div>

      {/* Social Media Dock */}
      {/* Centered at bottom */}
      <motion.div 
        className="absolute  bottom-5 left-1/2 -translate-x-1/2 z-30"
        // The Floating Animation
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
      <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-6 bg-white/20 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-[20px] transition-all duration-300 hover:bg-orange-500 ">
          {/* Using map for cleaner code, adjust links as needed */}
          {[
            { Icon: LinkedinIcon, href: "#" },
            { Icon: GithubIcon, href: "#" },
            { Icon: XIcon, href: "#" },
            { Icon: DiscordIcon, href: "#" },
            {Icon: BehanceIcon, href: "#" },
            { Icon: FigIcon, href: "#" },
            { Icon: LeetcodeIcon, href: "#" },
            { Icon: CodeforcesIcon, href: "#" },
            { Icon: InstagramIcon, href: "#" },
            { Icon: GmailIcon, href: "#" }

          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:scale-150 transition-all duration-200"
            >
              {/* Render the icon component */}
              <item.Icon className="w-8 md:h-8" />
            </a>
          ))}
        </div>
      </div>
      </motion.div>
      {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-orange-300" />
      </main>
  )
}