
'use client'

import { ClipboardList, Layers, Lightbulb, Smile } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <ClipboardList size={32} />,
    },
    {
      id: "02",
      title: "Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Lightbulb size={32} />,
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Layers size={32} />,
    },
    {
      id: "04",
      title: "Final Result",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Smile size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 1. Subtle Background Watermark Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <span className="text-[10rem] font-bold text-slate-50 uppercase tracking-widest leading-none opacity-80">
          Work Process
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-bold text-lg italic">//</span>
            <span className="text-slate-600 font-medium text-sm">
              Our Work Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900">
            Our Proven <span className="text-primary">Work Process</span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* 2. The Connecting Line 
            Positioned absolutely to sit behind the circles. 
            'hidden md:block' ensures it only shows on desktop where the horizontal layout exists.
            Top is calculated to align with the vertical center of the 96px (h-24) circles.
          */}
          <div
            className="hidden md:block absolute top-14 left-0 w-full h-0.5  bg-slate-800 -z-10"
            style={{ left: "12.5%", width: "75%" }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Main Blue Circle */}
                  <div className="size-28 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-200 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* 3. Number Badge 
                    Positioned: top-1/2 (vertically centered) and -right-3 (pushed to the right edge).
                    The 'border-4 border-white' creates the "cutout" effect seen in the image.
                  */}
                  <div className="absolute top-1/2 -right-7 -translate-y-1/2 size-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white z-20">
                    {item.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 max-w-[220px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkProcess;