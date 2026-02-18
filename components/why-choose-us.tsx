import { Briefcase, HandCoins, Play, Trophy, Users } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable Price",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <HandCoins size={32} strokeWidth={1.5} />,
    },
    {
      title: "Professional Team",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Users size={32} strokeWidth={1.5} />,
    },
    {
      title: "18+ Years Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Briefcase size={32} strokeWidth={1.5} />,
    },
    {
      title: "Award Winning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Trophy size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-primary-deep relative overflow-hidden font-sans">
      {/* 1. Background Watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
        <span className="text-[120px] font-black text-white/5 uppercase tracking-widest whitespace-nowrap pl-10 block">
          Why Choose Us
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-bold text-lg italic">//</span>
              <span className="text-slate-400 font-medium text-sm tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Trust Us for <br /> Your IT Needs?
            </h2>
          </div>

          {/* Call to Action Button */}
          <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg  flex items-center gap-2 group">
            Get A Quote
            {/* Tiny arrow hint if desired, keeping it clean per image */}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video / Image Card */}
          <div className="relative group">
            <div className="rounded-[32px]  overflow-hidden h-[400px] border border-white/10 relative shadow-2xl">
              <Image
              fill
                src="/img-5.webp"
                alt="Office Meeting"
                className="w-full h-full object-cover opacity-80  transition duration-700"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/30"></div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                    <Play size={20} className="text-primary fill-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
