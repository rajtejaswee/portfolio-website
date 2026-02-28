"use client";

import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";
import { 
  LinkedinIcon, GithubIcon, XIcon, DiscordIcon, FigIcon, LeetcodeIcon, InstagramIcon, 
  CodeforcesIcon, GmailIcon, BehanceIcon
} from "@/components/icons/Icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactMe() {
  
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/raj-tejaswee-147603247/", visible: "block" },
    { Icon: GithubIcon, href: "https://github.com/rajtejaswee", visible: "block" },
    { Icon: XIcon, href: "https://x.com/raj_tejaswee", visible: "block" },
    { Icon: DiscordIcon, href: "https://discord.com/users/802192725150531624", visible: "block" },
    { Icon: BehanceIcon, href: "https://www.behance.net/rajtejaswee", visible: "hidden md:block" }, 
    { Icon: LeetcodeIcon, href: "https://leetcode.com/u/now_raj/", visible: "block" },
    { Icon: CodeforcesIcon, href: "https://codeforces.com/profile/rajtejaswee", visible: "block" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/rajtejaswee/", visible: "block" },
    { Icon: GmailIcon, href: "mailto:rajtejaswee02@gmail.com", visible: "hidden md:block" } 
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "53e96730-1660-43f5-9d06-27ff1a5a910b"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (e.target as HTMLFormElement).reset(); 
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <main className="relative w-full h-[100dvh] bg-black overflow-hidden selection:bg-orange-500 selection:text-white">
      
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
      <div className="text-white absolute top-10 right-6 z-30 flex flex-col items-end md:flex-row md:items-center gap-1 md:gap-6 text-xs md:text-base md:top-2 md:right-19 md:font-medium tracking-tight md:tracking-[-0.9px] md:text-xl">
        <a href="/" className="hover:underline underline-offset-4 font-semibold md:font-normal opacity-90">
          Home
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

      {/* Header Section */}
      <div className="absolute top-6 left-4 z-30 pointer-events-none">
        <h1
          className="font-oswald font-bold text-white leading-[0.8] 
          text-[15vw] md:text-[128px] 
          tracking-[-3px] md:tracking-[-6.6px] md:mt-6 md:ml-4"
        >
          Contact Me
        </h1>
        <div className="hidden md:block w-120 h-[2px] bg-white ml-51 mt-3" />
      </div>

     {/* Main Content Container - Adjusted top offset for mobile */}
      <div className="absolute top-[110px] md:top-[200px] left-4 md:left-20 z-20 w-[90%] md:w-[60%]">
        
        {/* Let's Connect Text */}
        <div className="mb-4 md:mb-6">
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-2 tracking-[-1px] md:tracking-[-2.5px]">Let’s Connect</h2>
          <p className="font-helvetica italic text-white text-xs md:text-xl font-light tracking-wide md:tracking-[-0.9px] leading-relaxed">
            If you want to know more about me or my work, or if you would just like to say hello,<br className="hidden md:block"/>
            send me a message. I’d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_auto] md:gap-4 w-full">
          
          <input 
            type="email" 
            name="email" 
            required    
            placeholder="Email" 
            className="w-full md:w-[650px] bg-white/20 backdrop-blur-md border border-white/60 rounded-[15px] md:rounded-[20px] px-4 py-2 md:px-6 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:bg-white/30 transition-all text-sm md:text-base md:col-start-1 md:row-start-1"
          />
          
          <textarea 
            name="message" 
            required       
            placeholder="Message" 
            rows={4}
            className="w-full bg-white/20 backdrop-blur-md border border-white/60 rounded-[15px] md:rounded-[20px] px-4 py-3 md:px-6 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/30 transition-all resize-none text-sm md:text-base md:col-span-2 md:row-start-2"
          />

          <button
            type="submit"
            disabled={isSubmitting} 
            className="
              bg-white/20 backdrop-blur-md border border-white/60 rounded-[15px] md:rounded-[20px] 
              text-white font-medium transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:scale-105 active:scale-95 text-sm md:text-base
              w-fit mx-auto px-10 py-2 mt-1 md:w-[190px] md:mx-0 md:px-0 md:py-0 md:mt-0 md:col-start-2 md:row-start-1
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
             {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Success Message Display */}
        {result && (
          <p className="mt-2 md:mt-4 text-center md:text-left text-white text-sm md:text-base font-medium tracking-wide">
            {result}
          </p>
        )}

      </div>

      {/* Social Media Dock - Adjusted bottom offset and gap for mobile */}
      <motion.div 
        className="absolute bottom-28 md:bottom-40 left-1/2 -translate-x-1/2 z-30 w-[90%] md:w-auto"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 md:gap-6 bg-white/20 backdrop-blur-lg border border-white/10 px-4 py-3 md:px-8 md:py-3 rounded-[20px] transition-all duration-300 hover:bg-orange-500 group">
          {socialLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-white hover:scale-125 md:hover:scale-150 transition-all duration-200 ${item.visible}`}
            >
              <item.Icon className="w-5 h-5 md:w-8 md:h-8 fill-current" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Navbar Section */}
      <Navbar hoverColorClass="group-hover:text-orange-300" />
    </main>
  );
}