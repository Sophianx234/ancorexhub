'use client'

import { Briefcase, HandCoins, Play, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable Price",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <HandCoins size={32} strokeWidth={1.5} />,
    },
    {
      title: "Professional Team",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Users size={32} strokeWidth={1.5} />,
    },
    {
      title: "18+ Years Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Briefcase size={32} strokeWidth={1.5} />,
    },
    {
      title: "Award Winning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Trophy size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-primary-deep relative overflow-hidden font-sans">
      
      {/* 1. Background Watermark - Slow Fade */}
      <FadeIn delay={0.2} className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
        <span className="text-[120px] font-black text-white/5 uppercase tracking-widest whitespace-nowrap pl-10 block">
          Why Choose Us
        </span>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary font-bold text-lg italic">//</span>
                <span className="text-slate-400 font-medium text-sm tracking-wide uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Why Trust Us for <br /> Your IT Needs?
              </h2>
            </FadeIn>
          </div>

          {/* Call to Action Button - Slides in from right/up */}
          <FadeIn direction="left" delay={0.3}>
             <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2 group">
               Get A Quote
             </button>
          </FadeIn>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Video / Image Card - THE HERO OBJECT (3D Reveal) */}
          <PerspectiveIn delay={0.2} className="h-full">
            <div className="relative group h-full">
              <div className="rounded-[32px] overflow-hidden h-[400px] border border-white/10 relative shadow-2xl">
                <Image
                  fill
                  src="/img-5.webp"
                  alt="Office Meeting"
                  className="w-full h-full object-cover opacity-80 transition duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-slate-900/30"></div>

                {/* Play Button (Internal animation kept as is) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.button
                    initial="initial"
                    whileHover="hover"
                    className="relative group outline-none"
                  >
                    {/* Ripple */}
                    <motion.div
                      variants={{
                        initial: { opacity: 0, scale: 0.8 },
                        hover: {
                          opacity: [0, 0.5, 0],
                          scale: 2,
                          transition: { duration: 0.8, ease: "easeOut" },
                        },
                      }}
                      className="absolute inset-0 bg-white/50 rounded-full z-0 pointer-events-none"
                    />
                    {/* Main Button */}
                    <motion.div
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 shadow-sm text-primary">
                        <Play size={22} fill="currentColor" />
                      </div>
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
          </PerspectiveIn>

          {/* Right: Feature Grid - Staggered Fade Up */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              
              // STAGGERED FADE FOR LIST ITEMS
              <FadeIn 
                key={idx} 
                direction="up" 
                delay={0.3 + (idx * 0.1)} // 0.3, 0.4, 0.5, 0.6
              >
                <div className="group">
                  <div className="mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;