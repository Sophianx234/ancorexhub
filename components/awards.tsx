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
    <section className="py-24 bg-secondary/30 dark:bg-[#001514] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary dark:text-[#74b4d9] font-bold text-lg italic">//</span>
              <span className="text-slate-500 dark:text-[#9ca3af] font-semibold text-sm tracking-wide uppercase">
                Our Awards
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-[#f0ede5] leading-tight">
              Our Journey to <br />
              <span className="text-primary dark:text-[#74b4d9]">Award-Winning Success</span>
            </h2>
          </div>

          <div className="flex gap-4">
            {/* Prev Button: Light BG in light mode, Dark Teal in dark mode */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all shadow-sm active:scale-95
              bg-white border-slate-200 text-slate-600 hover:border-primary/80 hover:text-primary
              dark:bg-[#002524] dark:border-[#004643] dark:text-[#f0ede5] dark:hover:border-[#74b4d9] dark:hover:text-[#74b4d9]"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Next Button: Primary in light mode, Tertiary Blue in dark mode */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95
              bg-primary text-white hover:bg-primary/80 shadow-blue-200
              dark:bg-[#74b4d9] dark:text-[#001514] dark:shadow-none dark:hover:bg-[#5da0c9]"
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
                return (
                  <motion.div
                    key={`${item.year}-${item.title}-${i}`}
                    variants={cardVariants}
                    custom={direction}
                    className={`
                      rounded-[2rem] border-2 p-6 text-center relative overflow-hidden group
                      flex flex-col h-[400px] justify-between transition-shadow duration-300
                      bg-white border-primary/5
                      dark:bg-[#002524] dark:border-[#004643]
                    `}
                  >
                    {/* Background Watermark */}
                    <div className="absolute -top-6 -right-6 pointer-events-none">
                      <span className="text-[10rem] font-bold leading-none select-none
                        text-slate-50 opacity-60
                        dark:text-[#ffffff]/5"
                      >
                        {allAwards.findIndex((x) => x.fullTitle === item.fullTitle) + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center h-full">
                      
                      {/* --- INTEGRATED LAUREL BADGE --- */}
                      {/* Note: Ensure LaurelBadge handles text color inheritance or passed props */}
                      <div className="dark:text-[#f0ede5]">
                        <LaurelBadge title={item.title} year={item.year} />
                      </div>

                      <div className="flex-grow flex flex-col justify-center -mt-4">
                        <h3 className="text-xl font-bold mb-3 leading-snug text-slate-900 dark:text-[#f0ede5]">
                          {item.fullTitle}
                        </h3>
                        <p className="text-sm leading-relaxed px-2 text-slate-400 dark:text-[#9ca3af]">
                          Recognized for outstanding achievement in {item.year}. We continue to push boundaries.
                        </p>
                      </div>

                      <div className="w-12 h-1 rounded-full mt-4 transition-colors
                        bg-slate-100 group-hover:bg-blue-100
                        dark:bg-[#004643] dark:group-hover:bg-[#74b4d9]" 
                      />
                      
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