'use client'

import { ArrowRight, LayoutTemplate, Monitor, Smartphone } from "lucide-react";
import SectionTag from "./section-taq";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

const Services = () => (
  <section className="py-24 px-6 md:px-14 bg-[#F8FAFC] dark:bg-[#050505] transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      
      {/* HEADER: Use FadeIn so text remains readable while moving */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-lg">
          <FadeIn direction="up" delay={0.2}>
            <SectionTag text="Our Services" />
            <h2 className="text-4xl font-bold text-slate-900 dark:text-[#EDEDED] leading-tight mt-4">
              Services We Provide to{" "}
              <span className="text-primary dark:text-[#5EEAD4] drop-shadow-sm">
                Elevate Your Business
              </span>
            </h2>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.4}>
          <button className="hidden md:block bg-primary text-white dark:bg-[#004643] dark:text-[#E6FFFA] dark:hover:bg-[#006863] px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/80 transition-all border border-transparent dark:border-[#115E59]">
            View All Services
          </button>
        </FadeIn>
      </div>

      {/* CARDS: Use PerspectiveIn for the "Dealt Card" 3D effect */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Monitor size={32} />, title: "Website Development", desc: "Custom, responsive websites built with modern frameworks for speed and SEO." },
          { icon: <Smartphone size={32} />, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
          { icon: <LayoutTemplate size={32} />, title: "UI/UX Design", desc: "User-centric design that ensures intuitive navigation and stunning visuals." },
        ].map((service, idx) => (
          
          <PerspectiveIn 
            key={idx} 
            delay={0.2 + (idx * 0.15)} 
            fullWidth
            className="h-full"
          >
            <div
              className="group h-full p-10 rounded-3xl transition duration-300 border-b-8 
              bg-white border-b-transparent hover:border-primary shadow-sm
              dark:bg-[#0A0A0A] dark:border dark:border-[#262626] dark:hover:border-[#5EEAD4] dark:hover:shadow-[0_0_30px_-10px_rgba(94,234,212,0.15)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors
                bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white
                dark:bg-[#171717] dark:text-[#5EEAD4] dark:group-hover:bg-[#5EEAD4] dark:group-hover:text-[#050505]"
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-[#EDEDED]">
                {service.title}
              </h3>
              <p className="mb-8 leading-relaxed text-slate-500 dark:text-[#A3A3A3]">
                {service.desc}
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-sm font-bold transition
                  text-slate-900 group-hover:text-primary
                  dark:text-white dark:group-hover:text-[#5EEAD4]"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </PerspectiveIn>
        ))}
      </div>
    </div>
  </section>
);

export default Services;