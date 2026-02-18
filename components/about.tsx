// Change this import to point to wherever your FadeIn file is
import FadeIn from "@/lib/fade-in";
import { MoveRight, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 lg:py-32 px-6 md:px-16 bg-white dark:bg-primary-deep overflow-hidden relative transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: Images (Slide in from Left) */}
        {/* 'left' means it starts on the left (x: 40) and slides into place */}
        <FadeIn direction="left" delay={0.2} fullWidth>
          <div className="relative p-2 md:p-4">
            
            {/* ... Keep your existing Sparkles & Background Shapes ... */}
            <div className="absolute bottom-10 -left-4 md:-left-8 text-primary animate-pulse z-20">
              <Sparkles size={48} strokeWidth={1} fill="currentColor" />
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary rounded-tl-[60px] md:rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl -z-10 transition-all" />
            <div className="absolute bottom-0 right-2 md:right-4 w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-br-[60px] md:rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl -z-10 transition-all" />

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="h-40 md:h-56 relative rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-2xl border-primary border-l-4 md:border-l-8 border-t-4 md:border-t-8 bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
                <Image fill src="/img-3.webp" alt="Team" className="w-full h-full object-cover" />
              </div>
              <div className="h-48 md:h-64 relative mt-6 md:mt-8 rounded-tr-[30px] md:rounded-tr-[40px] rounded-bl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
                <Image fill src="/img-2.webp" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="h-48 md:h-64 relative -mt-6 md:-mt-8 rounded-bl-[30px] md:rounded-bl-[40px] rounded-tr-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
                <Image fill src="/img-4.webp" alt="Working" className="w-full h-full object-cover" />
              </div>
              <div className="h-40 md:h-56 relative border-black dark:border-white border-r-4 md:border-r-8 border-b-4 md:border-b-8 rounded-br-[40px] md:rounded-br-[60px] rounded-tl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
                <Image fill src="/img-1.webp" alt="Meeting" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* "Hire Us" Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
               {/* ... Your Badge Code ... */}
               <div className="relative w-24 h-24 md:w-28 md:h-28 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-2xl group cursor-pointer hover:bg-blue-700 transition">
                  <div className="absolute inset-1 border border-dashed border-primary/50 dark:border-white/30 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="text-center text-white">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1">Hire Us</p>
                    <MoveRight className="w-5 h-5 mx-auto group-hover:translate-x-1 transition" />
                  </div>
               </div>
            </div>

          </div>
        </FadeIn>

        {/* RIGHT SIDE: Content (Waterfall Effect) */}
        <div className="pt-8 lg:pt-24 text-center lg:text-left">
          
          {/* 1. Tag (Fade Up) */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="text-primary dark:text-tertiary font-bold italic text-lg">//</span>
              <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>
          </FadeIn>

          {/* 2. Headline (Fade Up + Delay) */}
          <FadeIn direction="up" delay={0.5}>
            <h2 className="text-3xl md:text-5xl font-extrabold dark:text-white text-slate-900 mb-6 leading-tight">
              Transforming <span className="text-primary dark:text-tertiary">Ideas</span> <br className="hidden md:block" />
              into <span className="text-primary dark:text-tertiary">Digital Reality</span>
            </h2>
          </FadeIn>

          {/* 3. Description (Fade Up + More Delay) */}
          <FadeIn direction="up" delay={0.6}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. We don't just write
              code; we architect success.
            </p>
          </FadeIn>

          {/* 4. Stats Grid (Fade Up + More Delay) */}
          <FadeIn direction="up" delay={0.7} fullWidth>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 border-y dark:border-white/10 border-slate-100 py-8">
              {[
                { num: "150+", label: "Team" },
                { num: "2000+", label: "Clients" },
                { num: "99%", label: "Success" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary dark:text-tertiary mb-1">
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 5. Signature (Fade Up + Final Delay) */}
          <FadeIn direction="up" delay={0.8}>
            <div>
              <div className="text-4xl font-vibes text-slate-800 dark:text-white mb-2">
                Jenny Alexander
              </div>
              <div className="text-xs md:text-sm font-bold uppercase text-slate-400 tracking-wider">
                Jenny Alexander <span className="text-primary dark:text-tertiary mx-1">•</span> CEO
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
export default About;