'use client'

import PopIn from "@/lib/pop-in";
import StatCounter from "@/lib/stat-counter";

const StatsBanner = () => {
  const stats = [
    { target: 3, suffix: "+", label: "Team Members", duration: 1.6 },
    { target: 25, suffix: "+", label: "Happy Clients", duration: 2.0 },
    { target: 99, suffix: "%", label: "Customer Satisfaction", duration: 2.2 },
    { target: 5, suffix: "+", label: "Years Experience", duration: 1.8 },
  ];

  return (
    <section
      id="stats"
      className="relative py-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/img-12.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0F19]/80"></div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((item, index) => (
          <PopIn key={index} delay={index * 0.12}>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <StatCounter target={item.target} suffix={item.suffix} duration={item.duration} />
              </h3>
              <p className="text-sm md:text-base text-slate-300 font-medium">{item.label}</p>
            </div>
          </PopIn>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;