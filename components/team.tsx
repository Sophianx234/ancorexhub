
'use client'

import { Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";


const teamMembers = [
  {
    name: "Daniel Marcus",
    role: "Lead Dev",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
  },
  {
    name: "Sophia Lewis",
    role: "Product",
    img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1e?auto=format&fit=crop&q=80",
  },
  {
    name: "Jenny Alexander",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
  {
    name: "David Chen",
    role: "Creative",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Olivia Hughes",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
];

const getMod = (n, m) => ((n % m) + m) % m;

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const visibleRange = [-3, -2, -1, 0, 1, 2, 3];

  // Calculate the current active team member (0 to 4) for indicators
  const currentMod = getMod(activeIndex, teamMembers.length);

  // Helper for clicking indicators to find shortest infinite path
  const handleDotClick = (targetIdx) => {
    let diff = targetIdx - currentMod;
    if (diff > teamMembers.length / 2) diff -= teamMembers.length;
    if (diff < -teamMembers.length / 2) diff += teamMembers.length;
    setActiveIndex(activeIndex + diff);
  };

  return (
    <section className="py-24 bg-[#FFF8F0] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Meet the <span className="text-primary">Creators</span>
        </h2>
        <p className="text-slate-500">The minds shaping the future of digital.</p>
      </div>

      {/* INFINITE VIRTUAL SLIDER */}
      <div className="relative w-full max-w-[1200px] h-[600px] flex justify-center items-center">
        {visibleRange.map((offset) => {
          const trueIndex = activeIndex + offset;
          const memberIndex = getMod(trueIndex, teamMembers.length);
          const member = teamMembers[memberIndex];
          const isActive = offset === 0;
          const translateX = offset * 320; 
          const scale = isActive ? 1 : 0.85;
          const opacity = isActive ? 1 : 1;
          const blur = isActive ? 0 : 2;
          const zIndex = 50 - Math.abs(offset);
          const isVisible = Math.abs(offset) < 3; 

          return (
            <div
              key={trueIndex} 
              onClick={() => setActiveIndex(trueIndex)}
              className={`absolute top-1/2 left-1/2 cursor-pointer transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)
                ${isActive ? 'cursor-default' : 'hover:opacity-80'}
              `}
              style={{
                transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
                zIndex: zIndex,
                opacity: isVisible ? opacity : 0,
                filter: `blur(${blur}px) grayscale(${isActive ? 0 : 0}%)`,
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <div className="w-[280px] h-[550px] bg-black rounded-[55px] border-[8px] border-black shadow-2xl overflow-hidden relative ring-4 ring-black/10 select-none">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                   <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
                </div>

                <div className="absolute top-24 -left-[10px] w-[3px] h-8 bg-gray-800 rounded-l-md" /> 
                <div className="absolute top-36 -left-[10px] w-[3px] h-14 bg-gray-800 rounded-l-md" /> 
                <div className="absolute top-40 -right-[10px] w-[3px] h-20 bg-gray-800 rounded-r-md" /> 

                <div className="w-full h-full bg-white relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                  <div className={`absolute bottom-0 left-0 right-0 p-6 text-center text-white transition-all duration-500 transform ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-6">{member.role}</p>
                    <div className={`flex justify-center gap-3 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors">
                        <Linkedin size={16} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors">
                        <Twitter size={16} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors">
                        <Mail size={16} />
                      </button>
                    </div>
                  </div>
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-40">
                       <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* STYLISH INDICATORS 
          Shows the current count and interactive dots 
      */}
      <div className="mt-12 flex flex-col items-center gap-4 relative z-20">
       {/*  <div className="text-slate-400 font-mono text-xs tracking-widest uppercase">
          Member <span className="text-slate-900 font-bold">{currentMod + 1}</span> / {teamMembers.length}
        </div>
        */} 
        <div className="flex items-center gap-3">
          {teamMembers.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => handleDotClick(dotIdx)}
              className={`h-2 transition-all duration-500 rounded-full ${
                currentMod === dotIdx 
                ? "w-8 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.4)]" 
                : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-slate-400 text-sm md:hidden animate-pulse">
        Tap a card to bring it to center
      </div>
    </section>
  );
};
export default Team;