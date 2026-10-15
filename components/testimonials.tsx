'use client'

import FadeIn from "@/lib/fade-in";
import PerspectiveIn from "@/lib/perspective-in";
import PopIn from "@/lib/pop-in";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Kofi Mensah",
    role: "Founder, KenteCraft eCommerce",
    title: "Exceptional Web Engineering",
    quote: "ancorexhub delivered our web platform on schedule with incredible speed and responsiveness. Their attention to detail made our launch seamless.",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80",
  },
  {
    name: "Akosua Agyeman",
    role: "Operations Lead, SwiftLogistics",
    title: "Reliable Mobile App Delivery",
    quote: "The team built an intuitive mobile app that simplified our daily field operations. User feedback has been overwhelmingly positive across the board.",
    img: "/p-1.jpg",
  },
  {
    name: "Kwame Osei-Bonsu",
    role: "Managing Director, Apex Solutions",
    title: "Strategic Tech Consulting",
    quote: "Their technical advisory saved us months of trial and error. They helped us identify the right system architecture from day one.",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80",
  },
  {
    name: "Abena Boateng",
    role: "Product Lead, Edutech Hub",
    title: "Flawless Execution and Support",
    quote: "Working directly with the founding engineers gave us clear transparency and confidence throughout the entire development process.",
    img: "/p-2.jpg",
  },
];

const TestimonialCard = ({ item }) => (
  <div className="w-[400px] flex-shrink-0 bg-primary p-8 rounded-3xl border border-white/5 transition-all duration-300 group select-none">
    <div className="flex gap-1 mb-6 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
      <span className="text-white ml-2 font-bold text-sm">5.0</span>
    </div>
    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed italic text-sm line-clamp-3">
      "{item.quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-primary/50">
        <Image
          fill
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="font-bold text-sm text-white">{item.name}</div>
        <div className="text-xs text-slate-500">{item.role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-deep text-white overflow-hidden relative">
      
      {/* Background Watermark - Standard Fade */}
      <FadeIn delay={0.2} className="absolute top-10 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none">
        <span className="text-[120px] font-bold text-white/[0.02] whitespace-nowrap">
          TESTIMONIALS
        </span>
      </FadeIn>

      <div className="relative z-10">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          
          {/* 1. Badge: USE POP-IN (Makes it feel tactile) */}
          <PopIn delay={0.2}>
            <div className="flex justify-center mb-6">
              <span className="bg-blue-500/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/20">
                Testimonials
              </span>
            </div>
          </PopIn>

          {/* 2. Headline: USE FADE-IN (Best for reading) */}
          <FadeIn direction="up" delay={0.4}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Testimonials:{" "}
              <span className="text-primary">
                Trusted <br /> by Our Clients
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* 3. Marquee Strip: USE PERSPECTIVE-IN (The "Hero" 3D Reveal) */}
        <PerspectiveIn delay={0.5} fullWidth>
          <div className="relative w-full overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

            {/* Scrolling Wrapper */}
            <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
              {/* Loop 1 */}
              {testimonials.map((item, i) => (
                <TestimonialCard key={`a-${i}`} item={item} />
              ))}
              {/* Loop 2 */}
              {testimonials.map((item, i) => (
                <TestimonialCard key={`b-${i}`} item={item} />
              ))}
              {/* Loop 3 */}
              {testimonials.map((item, i) => (
                <TestimonialCard key={`c-${i}`} item={item} />
              ))}
            </div>
          </div>
        </PerspectiveIn>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};
export default Testimonials;