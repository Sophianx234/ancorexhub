'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "./section-taq";
import { motion } from "framer-motion";

// 1. UPDATE: Use the strong ease-out curve from Emil's design engineering standards
const premiumEase = [0.23, 1, 0.32, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, // Stagger delay reduced (80ms)
      delayChildren: 0.1 
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.95 }, // Start from scale 0.95 instead of 1
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.8, // Faster, snappier duration
      ease: premiumEase 
    } 
  },
};

const Hero = () => (
  <section className="bg-[#0B0F19] text-white relative w-full flex-1 h-full flex items-center overflow-hidden pt-20">
    
    {/* Background Blur */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-primary/40 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none z-10" />

    {/* Content Container */}
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center relative z-30 w-full h-full">
      
      {/* Text Column */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="pt-20 sm:pt-8 pb-10 lg:py-0 flex flex-col justify-center"
      >
       {/*  <motion.div variants={fadeInUp}>
          <SectionTag text="Experience The Best IT Solutions" dark />
        </motion.div> */}
        
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-barlow font-extrabold mb-4 leading-tight "
        >
          Where Creativity <br /> Meets{" "}
          <span className="text-primary">Next-Gen</span> <br /> Technology
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-slate-300 lg:text-slate-400 font-concert text-sm sm:text-base mb-6 max-w-lg leading-relaxed"
        >
          We deliver enterprise-grade software solutions. Our team of experts
          ensures your digital transformation is seamless and scalable.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 lg:gap-6">
          <a 
            href="#services" 
            className="bg-primary hover:bg-primary/80 active:scale-[0.97] text-white px-6 py-3 rounded-full text-sm font-semibold transition-[transform,background-color,box-shadow] duration-[160ms] ease-out flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            Explore Services <ArrowRight size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* Empty div for layout */}
      <div className="hidden lg:block"></div>
    </div>

    {/* --- IMAGE BACKGROUND --- */}
    <motion.div
      initial={{ opacity: 0, x: 20, filter: "blur(10px)", scale: 0.95 }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.8, ease: premiumEase }}
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
        alt="AncoreXHub software engineering and digital products showcase"
        fill
        className="object-cover object-center z-10"
        priority 
      />
    </motion.div>
  </section>
);

export default Hero;