import { MoveRight, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-32 px-16 bg-white dark:bg-primary-deep   overflow-hidden relative">
      {/* Load Google Font for the Signature */}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Image Composition */}
        <div className="relative p-4">
          {/* Decorative Sparkles (Bottom Left) */}
          <div className="absolute bottom-10 -left-8 text-primary animate-pulse z-20">
            <Sparkles size={48} strokeWidth={1} fill="currentColor" />
          </div>

          {/* Background Shape 1 (Top Left - Blue) */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl -z-10" />

          {/* Background Shape 2 (Bottom Right - Dark) */}
          <div className="absolute bottom-0 right-4 w-48 h-48 bg-slate-900 rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl -z-10" />

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1: Team Group (Top Left) */}
            <div className="h-56 relative rounded-tl-[60px] rounded-br-2xl border-primary border-l-8 border-t-8 bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <Image
              fill
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2: Standing Man (Top Right) */}
            <div className="h-64 relative mt-8 rounded-tr-[40px] rounded-bl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <Image
              fill
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3: Woman Working (Bottom Left) */}
            <div className="h-64 relative -mt-8 rounded-bl-[40px] rounded-tr-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <Image
              fill  
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 4: Couple Working (Bottom Right) */}
            <div className="h-56 relative border-black border-r-8 border-b-8 rounded-br-[60px] rounded-tl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <Image
              fill
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* "Hire Us" Badge (Absolute Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-28 h-28 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-2xl group cursor-pointer hover:bg-blue-700 transition">
              {/* Dashed ring effect */}
              <div className="absolute inset-1 border border-dashed border-primary/50 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="text-center text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1">
                  Hire Us
                </p>
                <MoveRight className="w-5 h-5 mx-auto group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="pt-24">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-bold italic text-lg">//</span>
            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wide uppercase text-sm">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 mb-6 leading-[1.15]">
            Transforming{" "}
            <span className="text-primary dark:text-white">Ideas</span> <br />
            into{" "}
            <span className="text-primary dark:text-white">
              Digital Reality
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. We don't just write
            code; we architect success.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-10 border-y dark:border-slate-800 border-slate-100 py-8">
            {[
              { num: "150+", label: "Team Members" },
              { num: "2000+", label: "Happy Clients" },
              { num: "99%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {stat.num}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Signature Block */}
          <div>
            <div className="text-4xl font-vibes text-slate-800 mb-2">
              Jenny Alexander
            </div>
            <div className="text-sm font-bold uppercase text-slate-400 tracking-wider">
              Jenny Alexander <span className="text-primary mx-1">•</span> CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
