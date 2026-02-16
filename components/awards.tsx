'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LaurelBadge from "./laurel-badge";
import { useState } from "react";



const Awards = () => {
  const allAwards = [
    { title: "TECH INNOVATOR", fullTitle: "Tech Innovator Award", year: "2025" },
    { title: "SMART SOLUTIONS", fullTitle: "Smart Solutions Award", year: "2024" },
    { title: "CLOUD LEADER", fullTitle: "Cloud Leadership Award", year: "2024" },
    { title: "AI EXCELLENCE", fullTitle: "AI Excellence Award", year: "2023" },
    { title: "BEST STARTUP", fullTitle: "Best Startup of the Year", year: "2023" },
    { title: "UX DESIGN", fullTitle: "Best UX Design", year: "2022" },
    { title: "GREEN TECH", fullTitle: "Sustainability Award", year: "2022" },
    { title: "FAST GROWTH", fullTitle: "Fastest Growing Company", year: "2021" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % allAwards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? allAwards.length - 1 : prev - 1));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % allAwards.length;
      items.push(allAwards[index]);
    }
    return items;
  };

  const visibleAwards = getVisibleItems();

  // --- ANIMATION VARIANTS (Staggered One-by-One) ---
  const containerVariants = {
    enter: { transition: { staggerChildren: 0.1 } },
    center: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-bold text-lg italic">//</span>
              <span className="text-slate-500 font-semibold text-sm tracking-wide uppercase">
                Our Awards
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Our Journey to <br />
              <span className="text-primary">Award-Winning Success</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary/80 hover:text-primary transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-all shadow-md shadow-blue-200 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {visibleAwards.map((item, i) => {
                const isActive = i === 0;

                return (
                  <motion.div
                    key={`${item.year}-${item.title}-${i}`}
                    variants={cardVariants}
                    custom={direction}
                    className={`
                      bg-white rounded-[2rem] border-2 border-primary/5 p-6 text-center relative overflow-hidden group
                      flex flex-col h-[400px] justify-between
                      
                      transition-shadow duration-300
                    `}
                  >
                    {/* Background Watermark */}
                    <div className="absolute -top-6 -right-6 pointer-events-none">
                      <span className="text-[10rem] font-bold text-slate-50 opacity-60 leading-none select-none">
                        {allAwards.findIndex((x) => x.fullTitle === item.fullTitle) + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center h-full">
                      
                      {/* --- INTEGRATED LAUREL BADGE --- */}
                      <LaurelBadge title={item.title} year={item.year} />

                      <div className="flex-grow flex flex-col justify-center -mt-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                          {item.fullTitle}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-2">
                          Recognized for outstanding achievement in {item.year}. We continue to push boundaries.
                        </p>
                      </div>

                      
                        <div className="w-12 h-1 bg-slate-100 rounded-full mt-4 group-hover:bg-blue-100 transition-colors" />
                      
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Awards;