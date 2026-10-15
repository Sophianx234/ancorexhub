'use client'

import FadeIn from "@/lib/fade-in";
import StatCounter from "@/lib/stat-counter";
import { MoveRight, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 md:px-16 bg-white dark:bg-primary-deep overflow-hidden relative transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: Image Composition (Slide in from Left) */}
        <FadeIn direction="left" delay={0.2} fullWidth>
          <div className="relative p-2 md:p-4">
            {/* Decorative Sparkles */}
            <div className="absolute bottom-10 -left-4 md:-left-8 text-primary animate-pulse z-20">
              <Sparkles size={48} strokeWidth={1} fill="currentColor" />
            </div>

            {/* Background Shape 1 (Top Left) - Scaled for mobile */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary rounded-tl-[60px] md:rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl -z-10 transition-all" />

            {/* Background Shape 2 (Bottom Right) - Scaled for mobile */}
            <div className="absolute bottom-0 right-2 md:right-4 w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-br-[60px] md:rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl -z-10 transition-all" />

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Image 1 */}
              <div className="h-40 md:h-56 relative rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-2xl border-primary border-l-4 md:border-l-8 border-t-4 md:border-t-8 bg-slate-200 overflow-hidden shadow-lg transform transition ">
                <Image
                  fill
                  src="/i-2.jpg"
                  alt="AncoreXHub core engineering team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="h-48 md:h-64 relative mt-6 md:mt-8 rounded-tr-[30px] md:rounded-tr-[40px] rounded-bl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition ">
                <Image
                  fill
                  src="/i-4.jpg"
                  alt="Software engineer designing robust system architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="h-48 md:h-64 relative -mt-6 md:-mt-8 rounded-bl-[30px] md:rounded-bl-[40px] rounded-tr-2xl bg-slate-200 overflow-hidden shadow-lg transform transition ">
                <Image
                  fill
                  src="/i-3.jpg"
                  alt="Full-stack web application development in progress"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 4 */}
              <div className="h-40 md:h-56 relative border-black dark:border-white border-r-4 md:border-r-8 border-b-4 md:border-b-8 rounded-br-[40px] md:rounded-br-[60px] rounded-tl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition ">
                <Image
                  fill
                  src="/i-5.jpg"
                  alt="Product strategy and sprint planning meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* "Hire Us" Badge (Center) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <a 
                href="#contact"
                aria-label="Contact AncoreXHub to hire our engineering team"
                className="relative w-24 h-24 md:w-28 md:h-28 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl group cursor-pointer hover:bg-blue-700 transition"
              >
                {/* Dashed ring effect */}
                <div className="absolute inset-1 border border-dashed border-primary/50 dark:border-white/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="text-center text-white">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1">
                    Hire Us
                  </p>
                  <MoveRight className="w-5 h-5 mx-auto group-hover:translate-x-1 transition" />
                </div>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT SIDE: Content (Waterfall Fade Up) */}
        <div className="pt-8 lg:pt-24 text-center lg:text-left">
          
          {/* Tag */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="text-primary dark:text-tertiary font-bold italic text-lg">//</span>
              <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.4}>
            <h2 className="text-3xl md:text-5xl font-extrabold dark:text-white text-slate-900 mb-6 leading-tight">
              Transforming{" "}
              <span className="text-primary dark:text-tertiary">Ideas</span> <br className="hidden md:block" />
              into{" "}
              <span className="text-primary dark:text-tertiary">
                Digital Reality
              </span>
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.5}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              At ancorexhub, we engineer high-performance websites, scalable web &amp; mobile applications, and strategic digital solutions. Built as an agile team of dedicated technologists, we work directly with founders and businesses to turn complex concepts into intuitive, production-ready software, delivering craft, clarity, and reliable results.
            </p>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn direction="up" delay={0.6} fullWidth>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 border-y dark:border-white/10 border-slate-100 py-8">
              {[
                { target: 100, suffix: "%", label: "On-Time Delivery", duration: 2.0 },
                { target: 3, suffix: "+", label: "Core Team", duration: 1.6 },
                { target: 99, suffix: "%", label: "Client Satisfaction", duration: 2.0 },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary dark:text-tertiary mb-1">
                    <StatCounter target={stat.target} suffix={stat.suffix} duration={stat.duration} />
                  </div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Signature Block */}
          <FadeIn direction="up" delay={0.7}>
            <div>
              <div className="text-2xl sm:text-xl font-vibes text-slate-800 dark:text-white mb-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
                <span>Sophian A. Rahman</span>
                <span className="text-xs font-sans text-primary dark:text-tertiary">•</span>
                <span>Abdallah M. Muntaqah</span>
                <span className="text-xs font-sans text-primary dark:text-tertiary">•</span>
                <span>Yaqeen Wunzalgu</span>
              </div>
              <div className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-wider">
                Co-Founders <span className="text-primary dark:text-tertiary mx-1">•</span> ancorexhub
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

export default About;