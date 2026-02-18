'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "./section-taq";
import { motion } from "framer-motion";

// 1. UPDATE: Use the same "Premium" easing as your FadeIn component
const premiumEase = [0.21, 0.47, 0.32, 0.98];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // Slightly faster stagger for the Hero
      delayChildren: 0.2 
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, // Add Blur for consistency
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.2, // Slower duration = "Heavier" feel
      ease: premiumEase 
    } 
  },
};

const Hero = () => (
  <section className="bg-[#0B0F19] pt-24 pb-12 lg:pt-28 lg:pb-20 text-white relative w-full min-h-screen flex items-center overflow-hidden">
    
    {/* Background Blur */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-primary/40 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none z-10" />

    {/* Content Container */}
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center relative z-30 w-full h-full">
      
      {/* Text Column */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="pt-20 pb-10 lg:py-0 flex flex-col justify-center"
      >
        <motion.div variants={fadeInUp}>
          <SectionTag text="Experience The Best IT Solutions" dark />
        </motion.div>
        
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-barlow font-extrabold mb-6 leading-tight"
        >
          Where Creativity <br /> Meets{" "}
          <span className="text-primary">Next-Gen</span> <br /> Technology
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-slate-300 lg:text-slate-400 font-concert text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
        >
          We deliver enterprise-grade software solutions. Our team of experts
          ensures your digital transformation is seamless and scalable.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 lg:gap-6">
          {/* Added 'active:scale-95' for a satisfying click press */}
          <button className="bg-primary hover:bg-primary/80 active:scale-95 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20">
            Explore More <ArrowRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Empty div for layout */}
      <div className="hidden lg:block"></div>
    </div>

    {/* --- IMAGE BACKGROUND --- */}
    <motion.div
      initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: premiumEase }}
      className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0"
    >
      {/* CLEANER GRADIENT LOGIC:
         Since the Hero is always dark (#0B0F19), we don't need 'dark:' classes.
         We just need one robust overlay that handles both Mobile and Desktop.
      */}
      <div className="absolute inset-0 z-20 
        bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/60 to-[#0B0F19] 
        lg:bg-gradient-to-r block dark:hidden lg:from-[#0B0F19] lg:via-transparent lg:to-primary/20" 
      />
      <div className="absolute inset-0 dark:block hidden bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via- to-primary/60 z-20"></div>


      <Image
        src="/sx-1.webp"
        alt="Hero Background"
        fill
        className="object-cover object-center z-10 opacity-50 lg:opacity-80 mix-blend-normal lg:mix-blend-overlay"
        priority 
      />
    </motion.div>
  </section>
);

export default Hero;