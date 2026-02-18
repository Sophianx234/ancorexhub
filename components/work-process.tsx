'use client'

import { ClipboardList, Layers, Lightbulb, Smile } from "lucide-react";
import SectionTag from "./section-taq";
import FadeIn from "@/lib/fade-in";
import PopIn from "@/lib/pop-in";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <ClipboardList size={32} />,
    },
    {
      id: "02",
      title: "Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Lightbulb size={32} />,
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Layers size={32} />,
    },
    {
      id: "04",
      title: "Final Result",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Smile size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#001514] relative overflow-hidden transition-colors duration-300">
      
      {/* 1. Subtle Background Watermark Text - Fade In slowly */}
      <FadeIn delay={0.2} className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <span className="text-[10rem] font-bold text-slate-50 dark:text-[#ffffff]/5 uppercase tracking-widest leading-none opacity-80">
          Work Process
        </span>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section - Standard Upward Fade */}
        <div className="text-center mb-20">
          <FadeIn direction="up">
             <div className="flex items-center justify-center gap-2 mb-3">
               <SectionTag text="Our Work Process"/>
             </div>
             <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-[#f0ede5]">
               Our Proven <span className="text-[#004643] dark:text-[#74b4d9]">Work Process</span>
             </h2>
          </FadeIn>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* 2. The Connecting Line - Animate scaleX for a "drawing" effect? 
              For now, a simple FadeIn works well to keep it simple. */}
          <FadeIn delay={0.5} className="hidden md:block absolute top-14 left-0 h-0.5 bg-slate-200 dark:bg-[#004643] -z-10 w-full">
            <div className="w-[75%] mx-auto h-full bg-slate-200 dark:bg-[#004643]" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              
              // USE POP-IN FOR CIRCLES:
              // Stagger delay: 0.2, 0.4, 0.6, 0.8
              <PopIn key={i} delay={0.2 + (i * 0.2)} className="h-full">
                <div className="flex flex-col items-center text-center group">
                  
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    {/* Main Circle */}
                    <div className="size-28 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105
                      bg-[#004643] text-white shadow-blue-200
                      dark:bg-[#002524] dark:text-[#74b4d9] dark:shadow-none dark:border dark:border-[#004643]"
                    >
                      {item.icon}
                    </div>

                    {/* Number Badge (Rotated Pop?) */}
                    <div className="absolute top-1/2 -right-7 -translate-y-1/2 size-12 rounded-full flex items-center justify-center text-xs font-bold z-20
                      bg-slate-900 text-white border-4 border-white
                      dark:bg-[#74b4d9] dark:text-[#001514] dark:border-[#001514]"
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-[#f0ede5]">
                    {item.title}
                  </h3>
                  <p className="text-sm max-w-[220px] leading-relaxed text-slate-400 dark:text-[#9ca3af]">
                    {item.desc}
                  </p>
                </div>
              </PopIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkProcess;