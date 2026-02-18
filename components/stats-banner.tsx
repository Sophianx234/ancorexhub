'use client'

import PopIn from "@/lib/pop-in";

const StatsBanner = () => {
  const stats = [
    { value: "150+", label: "Team Members" },
    { value: "2000+", label: "Happy Clients" },
    { value: "99%", label: "Customer Satisfaction" },
    { value: "18+", label: "Years Experience" },
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/img-10.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0F19]/80"></div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        
        {stats.map((item, index) => (
          // Apply PopIn with staggered delay (0.1s, 0.25s, 0.4s, etc.)
          <PopIn key={index} delay={index * 0.15}>
            <div>
              <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
              <p className="text-sm text-slate-300">{item.label}</p>
            </div>
          </PopIn>
        ))}

      </div>
    </section>
  );
};

export default StatsBanner;