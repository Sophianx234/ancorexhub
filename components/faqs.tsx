'use client'

import { Minus, MessageCircle, MessageCircleMore, Phone, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

const faqs = [
  {
    question: "What services does your company provide?",
    answer: "We provide a comprehensive range of IT solutions including custom software development, cloud infrastructure management, cybersecurity auditing, and enterprise resource planning implementation."
  },
  {
    question: "What industries do you serve?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Do you offer customized IT solutions?",
    answer: "Yes, we specialize in tailoring our IT strategies to meet the specific operational needs and goals of your business, ensuring maximum efficiency and ROI."
  },
  {
    question: "How can I contact your support team?",
    answer: "Our support team is available 24/7 via email, phone, or our dedicated client portal. We guarantee a response time within 15 minutes for critical issues."
  },
  {
    question: "How secure are your IT solutions?",
    answer: "Security is our top priority. We implement industry-standard encryption, regular penetration testing, and compliance monitoring (GDPR, HIPAA) across all our solutions."
  },
  {
    question: "Do you offer 24/7 technical support?",
    answer: "Absolutely. Our operations center is staffed around the clock to ensure your systems remain operational and secure at all times."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-14 bg-secondary dark:bg-[#001514] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Standard Fade Up */}
        <div className="mb-12">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 font-medium mb-2 text-sm text-slate-500 dark:text-[#9ca3af]">
              <span className="text-lg italic font-bold text-primary dark:text-[#74b4d9]">//</span>
              <span className="uppercase tracking-widest">FAQs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-[#f0ede5]">
              Question? <span className="text-primary dark:text-[#74b4d9]">Look here.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Accordion - Staggered Entrance */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                // Wrap each item in FadeIn with increasing delay
                <FadeIn key={index} delay={index * 0.1} direction="up" fullWidth>
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
                      <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-white dark:text-[#f0ede5]' : 'text-slate-700 dark:text-[#f0ede5]'}`}>
                        {faq.question}
                      </h3>
                      <div className={`
                        flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors
                        ${isOpen ? 'text-white dark:text-[#74b4d9]' : 'text-slate-400 dark:text-[#74b4d9]'}
                      `}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </div>
                    
                    {/* Internal Accordion Animation (Maintained) */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="leading-relaxed text-sm md:text-base text-blue-100 dark:text-blue-100/80">
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
            
            {/* Dark Blue Contact Card - HERO OBJECT (3D Reveal) */}
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

                  <h3 className="text-xl font-bold mb-3 text-white dark:text-[#f0ede5]">You have different questions?</h3>
                  <p className="text-blue-200/80 text-sm mb-8 leading-relaxed">
                    Our team will answer all your questions.<br/>
                    We ensure a quick response.
                  </p>

                  <button className="px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-colors
                    bg-white text-primary hover:bg-blue-50
                    dark:bg-[#74b4d9] dark:text-[#001514] dark:hover:bg-[#5da0c9] dark:shadow-none">
                    Contact Us
                  </button>
                </div>
              </div>
            </PerspectiveIn>

            {/* White Service Card - Fade Up */}
            <FadeIn delay={0.5} direction="up">
              <div className="rounded-3xl p-6 flex items-center gap-5 shadow-lg transition-colors
                bg-white shadow-slate-200/50
                dark:bg-[#002524] dark:shadow-none dark:border dark:border-white/5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0
                  bg-blue-50
                  dark:bg-[#004643]">
                  <Phone className="text-primary dark:text-[#74b4d9] fill-current" size={24} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-1 text-slate-400 dark:text-[#9ca3af]">Your Comfort, Our Priority</p>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-[#f0ede5]">24/7 Service</h4>
                  <p className="text-sm mt-1 text-slate-500 dark:text-[#9ca3af]">(000) 000-0000</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;