'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Code2, Cpu, Smartphone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import SectionTag from "./section-taq";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    icon: <Code2 size={32} />,
    tag: "WEB ARCHITECTURE",
    title: "Website Development",
    desc: "Custom, responsive websites built with modern frameworks for speed, SEO, and business conversion.",
    fullDesc:
      "We build tailored, modern web solutions from the ground up. Whether you need a high-impact corporate website, a dynamic web portal, or an e-commerce platform, our team focuses on clean code, sub-second load times, responsive design across all devices, and seamless search engine optimization to help your brand stand out.",
    image: "/m-2.jpg",
    deliverables: [
      "Custom Full-Stack Engineering (Next.js & React)",
      "High-Performance Speed & Technical SEO",
      "Tailored CMS & E-Commerce Integrations",
      "Fluid, Responsive Layouts for All Screens",
    ],
  },
  {
    id: "app-dev",
    icon: <Smartphone size={32} />,
    tag: "MOBILE & WEB APPS",
    title: "Application Development",
    desc: "Intuitive native and cross-platform applications built for iOS, Android, and modern web environments.",
    fullDesc:
    "From initial prototype to production deployment, we engineer robust mobile and web applications designed to scale. We combine smooth, gesture-driven user interfaces with resilient backends and secure APIs, ensuring your users enjoy an effortless and reliable experience.",
    image: "/m-1.jpg",
    deliverables: [
      "Cross-Platform Mobile Apps (iOS & Android)",
      "Interactive Web Applications & SaaS Platforms",
      "Scalable APIs & Cloud Backend Architecture",
      "Secure User Authentication & Real-Time Sync",
    ],
  },
  {
    id: "tech-consulting",
    icon: <Cpu size={32} />,
    tag: "STRATEGY & ARCHITECTURE",
    title: "Technology Consulting",
    desc: "Strategic technical advisory, architecture audits, and digital transformation guidance for growing teams.",
    fullDesc:
    "Making informed technology decisions early saves months of rework. As hands-on engineers, we audit existing systems, advise on optimal tech stacks, design scalable system architectures, and help founders and teams navigate complex technical challenges with confidence and clarity.",
    image: "/m-3.jpg",
    deliverables: [
      "Tech Stack Evaluation & System Planning",
      "Codebase Quality & Performance Audits",
      "Digital Transformation & Workflow Automation",
      "Direct Strategic Advisory for Founders",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const lenis = useLenis();

  // Close modal on Escape key press and manage scroll locking with Lenis
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };

    if (selectedService) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService, lenis]);

  return (
    <section id="services" className="py-24 px-6 md:px-14 bg-[#F8FAFC] dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
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
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-white dark:bg-[#004643] dark:text-[#E6FFFA] dark:hover:bg-[#006863] px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/80 transition-[transform,colors] duration-[160ms] ease-out active:scale-[0.97] border border-transparent dark:border-[#115E59]"
            >
              Discuss a Project <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <PerspectiveIn
              key={service.id}
              delay={0.2 + idx * 0.15}
              fullWidth
              className="h-full"
            >
              <div
                onClick={() => setSelectedService(service)}
                className="group h-full p-10 rounded-3xl transition-[transform,box-shadow,border-color] duration-300 border-b-8 
                bg-white border-b-transparent hover:border-primary shadow-sm hover:-translate-y-1 hover:shadow-xl cursor-pointer
                dark:bg-[#0A0A0A] dark:border dark:border-[#262626] dark:hover:border-[#5EEAD4] dark:hover:shadow-[0_0_30px_-10px_rgba(94,234,212,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors
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
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-bold transition
                  text-slate-900 group-hover:text-primary
                  dark:text-white dark:group-hover:text-[#5EEAD4]"
                >
                  Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </PerspectiveIn>
          ))}
        </div>
      </div>

      {/* MODAL  xx*/}
      <AnimatePresence>
        {selectedService && (
          <div
            data-lenis-prevent="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0F141C] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-[transform,background-color] duration-150 active:scale-95 shadow-md"
              >
                <X size={20} />
              </button>

              <div
                data-lenis-prevent="true"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                className="overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 overscroll-contain max-h-[90vh] grid md:grid-cols-2 flex-1"
              >
                {/* Image Side */}
                <div className="relative min-h-[280px] md:min-h-full w-full bg-slate-950">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
                  
                  
                </div>

                {/* Content Side */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                      {selectedService.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {selectedService.fullDesc}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-3 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                        What We Deliver:
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedService.deliverables.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-primary dark:text-[#5EEAD4] flex-shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-4">
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-[transform,colors] duration-[160ms] ease-out active:scale-[0.97] shadow-lg shadow-primary/20"
                    >
                      Get Started <ArrowRight size={16} />
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-slate-500 hover:text-slate-800 dark:hover:text-white text-sm font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;