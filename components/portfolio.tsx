'use client'

import { ArrowUpRight } from "lucide-react";
import SectionTag from "./section-taq";
import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";

const Portfolio = () => (
  <section className="py-24 bg-[#F8FAFC] dark:bg-[#001514] transition-colors duration-300">
    
    {/* Header Section - Standard Fade Up */}
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <FadeIn direction="up">
        <div className="flex justify-center">
          <SectionTag text="Our Latest Projects" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-[#f0ede5]">
          Explore Our Showcase of <br />{" "}
          <span className="text-primary dark:text-[#74b4d9]">Featured Works</span>
        </h2>
      </FadeIn>
    </div>

    {/* Project Grid */}
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
      {[
        {
          title: "Care Connect - Doctor App",
          tags: ["App Design", "UI/UX"],
          color: "bg-blue-500",
        },
        {
          title: "Dental Clinic Website",
          tags: ["Web Design", "Development"],
          color: "bg-indigo-500",
        },
        {
          title: "Car Rental Mobile App",
          tags: ["App Design", "Wireframe"],
          color: "bg-cyan-500",
        },
        {
          title: "Luxury Hotel Booking",
          tags: ["Landing Page", "UI/UX"],
          color: "bg-primary",
        },
      ].map((project, i) => (
        
        // 3D Perspective Reveal for Cards
        <PerspectiveIn 
           key={i} 
           delay={i * 0.15} // Staggered delay
           className="h-full"
        >
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer border border-transparent dark:border-[#004643]/30 h-full">
            <div
              className={`h-[400px] w-full ${project.color} relative flex items-center justify-center`}
            >
              {/* Glassmorphism Card Effect */}
              <div className="w-3/4 h-3/4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl transform group-hover:scale-105 transition duration-500"></div>
              
              <div className="absolute bottom-6 right-6">
                {/* Floating Action Button */}
                <div className="p-4 rounded-full shadow-lg transition duration-300
                  bg-white text-primary hover:bg-primary hover:text-white
                  dark:bg-[#001514] dark:text-[#74b4d9] dark:hover:bg-[#74b4d9] dark:hover:text-[#001514]"
                >
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>

            {/* Gradient Overlay for Text */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white pointer-events-none">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PerspectiveIn>
      ))}
    </div>

    {/* Button - Fade Up */}
    <div className="flex justify-center">
      <FadeIn direction="up" delay={0.4}>
        <button className="px-10 py-4 rounded-full font-bold shadow-lg transition-all
          bg-primary text-white shadow-blue-500/30 hover:bg-blue-700
          dark:bg-[#74b4d9] dark:text-[#001514] dark:shadow-none dark:hover:bg-[#5da0c9]"
        >
          View All Works
        </button>
      </FadeIn>
    </div>
  </section>
);
export default Portfolio;