'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "./section-taq";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => (
  <section className="bg-[#0B0F19] pt-28 pb-20  text-white relative w-full min-h-screen flex items-center overflow-hidden">
    {/* Background Blur */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] pointer-events-none" />

    {/* Content Container - Grid ensures text stays on the left */}
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr] pt-20 pb-6 gap-12 items-center relative z-20 w-full h-full">
      {/* Text Column */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-32  lg:py-0"
      >
        <motion.div variants={fadeInUp}>
          <SectionTag text="Experience The Best IT Solutions" dark  />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl  lg:text-6xl font-barlow font-extrabold  mb-6"
        >
          Where Creativity <br /> Meets{" "}
          <span className="text-primary ">Next-Gen</span> <br /> Technology
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-slate-400 font-concert text-lg mb-8 max-w-lg leading-relaxed"
        >
          We deliver enterprise-grade software solutions. Our team of experts
          ensures your digital transformation is seamless and scalable.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
          <button className="bg-primary hover:bg-primary/60 text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-2 ">
            Explore More <ArrowRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Empty div to maintain grid structure */}
      <div className="hidden lg:block"></div>
    </div>

    {/* Image Container - Positioned Absolute Right & Full Height */}

    {/* The Image */}
    {/* Image Container - Positioned Absolute Right & Full Height */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 right-0 w-full lg:w-1/2  h-full z-0"
    >
      {/* Gradient Overlay - Must have higher Z-index (z-20) to sit ON TOP of the image */}
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via- to-primary/70 z-20"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-20"></div> */}

      {/* Next.js Image Component */}
      <Image
        src="/sx-1.webp"
        alt="Hero Background"
        fill
        className="object-cover object-center opacity-80 mix-blend-overlay lg:mix-blend-normal z-10"
        priority // Loads this image immediately (good for SEO/Core Vitals)
      />
    </motion.div>
  </section>
);
export default Hero;