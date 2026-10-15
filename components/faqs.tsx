'use client'

import { Minus, MessageCircle, MessageCircleMore, Phone, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

const faqs = [
  {
    question: "What services does AncoreXHub specialize in?",
    answer: "We specialize in end-to-end digital product engineering, including responsive web applications, iOS and Android mobile apps, UI/UX product design, and scalable cloud systems."
  },
  {
    question: "How long does it typically take to build an MVP or website?",
    answer: "Timelines depend on your project scope. Most high-impact MVPs and custom websites take between 2 to 6 weeks from initial system blueprint to production deployment."
  },
  {
    question: "How does your pricing and milestone model work?",
    answer: "We work with clear, milestone-based pricing tailored to your roadmap. You get transparent deliverables at every phase with zero surprise fees."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes. We offer post-launch maintenance, performance optimization, feature iterations, and technical guidance to ensure your systems run smoothly as you grow."
  },
  {
    question: "How secure and scalable are the solutions you build?",
    answer: "Every application is built following industry best practices: end-to-end encryption, protected API endpoints, automated testing, and cloud infrastructure engineered to handle growing traffic."
  },
  {
    question: "Where is AncoreXHub located and how can we get in touch?",
    answer: "We are based in East Legon, Accra. You can reach out directly via WhatsApp, call us at 0206192823, or drop an email at ancorexhub@gmail.com."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 px-6 lg:px-14 bg-secondary dark:bg-[#001514] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Standard Fade Up */}
        <div className="mb-12">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 font-medium mb-2 text-sm text-slate-500 dark:text-[#9ca3af]">
              <span className="text-lg italic font-bold text-primary dark:text-[#74b4d9]">//</span>
              <span className="uppercase tracking-widest">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-[#f0ede5]">
              Got questions? <span className="text-primary dark:text-[#74b4d9]">We have answers.</span>
            </h2>
            <p className="mt-3 text-slate-500 dark:text-[#9ca3af] text-sm sm:text-base max-w-2xl leading-relaxed">
              Find quick answers to common questions about our engineering workflow, project timelines, and how we collaborate with our clients.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Accordion - Staggered Entrance */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <FadeIn key={index} delay={index * 0.08} direction="up" fullWidth>
                  <div 
                    onClick={() => toggleFAQ(index)}
                    className={`
                      rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-transparent
                      ${isOpen 
                        ? 'bg-primary shadow-lg shadow-primary/20 dark:bg-[#004643] dark:shadow-none dark:border-[#74b4d9]/30' 
                        : 'bg-white hover:bg-white/80 dark:bg-[#002524] dark:hover:bg-[#002f2e] dark:border-white/5'}
                    `}
                  >
                    <div className="p-6 flex items-center justify-between gap-4">
                      <h3 className={`font-bold text-base sm:text-lg transition-colors ${isOpen ? 'text-white dark:text-[#f0ede5]' : 'text-slate-800 dark:text-[#f0ede5]'}`}>
                        {faq.question}
                      </h3>
                      <div className={`
                        flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors
                        ${isOpen ? 'text-white dark:text-[#74b4d9]' : 'text-slate-400 dark:text-[#74b4d9]'}
                      `}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="leading-relaxed text-sm md:text-base text-blue-100 dark:text-blue-100/90">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Dark Blue Contact Card */}
            <PerspectiveIn delay={0.3}>
              <div className="bg-[#004643] rounded-3xl p-8 relative overflow-hidden text-center text-white shadow-xl dark:border dark:border-[#74b4d9]/20">
                {/* Wavy Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                   <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
                      <path d="M0 50 Q 100 100 200 50 T 400 50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0 100 Q 100 150 200 100 T 400 100" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0 150 Q 100 200 200 150 T 400 150" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0 200 Q 100 250 200 200 T 400 200" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0 250 Q 100 300 200 250 T 400 250" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0 300 Q 100 350 200 300 T 400 300" fill="none" stroke="currentColor" strokeWidth="2" />
                   </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 mb-6 -translate-y-4 relative">
                     <div className="absolute top-0 z-20 right-6">
                       <MessageCircleMore size={66} className="text-[#002524] fill-primary" />
                     </div>
                     <div className="absolute -bottom-5 rotate-280 z-10 -left-3">
                        <MessageCircle size={54} className="fill-white dark:fill-[#f0ede5]" />
                     </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white dark:text-[#f0ede5]">Have a different question?</h3>
                  <p className="text-blue-200/80 text-sm mb-8 leading-relaxed">
                    Our engineering team is ready to talk through your ideas and guide your technical strategy.
                  </p>

                  <a 
                    href="#contact"
                    className="inline-block px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-transform duration-200 active:scale-95
                    bg-white text-primary hover:bg-blue-50
                    dark:bg-[#74b4d9] dark:text-[#001514] dark:hover:bg-[#5da0c9] dark:shadow-none">
                    Contact Us
                  </a>
                </div>
              </div>
            </PerspectiveIn>

            {/* Support Call Card */}
            <FadeIn delay={0.5} direction="up">
              <a 
                href="tel:0206192823"
                className="rounded-3xl p-6 flex items-center gap-5 shadow-lg transition-all duration-200 group hover:shadow-xl active:scale-[0.98]
                bg-white shadow-slate-200/50
                dark:bg-[#002524] dark:shadow-none dark:border dark:border-white/5"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105
                  bg-blue-50
                  dark:bg-[#004643]">
                  <Phone className="text-primary dark:text-[#74b4d9] fill-current" size={24} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-1 text-slate-400 dark:text-[#9ca3af]">Direct Technical Support</p>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-[#f0ede5]">Call Our Team</h4>
                  <p className="text-sm mt-1 text-primary dark:text-[#74b4d9] font-semibold">0206192823</p>
                </div>
              </a>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;