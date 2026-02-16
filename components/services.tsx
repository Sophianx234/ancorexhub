
import { ArrowRight, LayoutTemplate, Monitor, Smartphone } from "lucide-react";
import SectionTag from "./section-taq";

const Services = () => (
  <section className="py-24 px-14 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionTag text="Our Services" />
          <h2 className="text-4xl font-bold text-slate-900 max-w-lg">
            Services We Provide to{" "}
            <span className="text-primary">Elevate Your Business</span>
          </h2>
        </div>
        <button className="hidden md:block bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/80 transition">
          View All Services
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Monitor size={32} />,
            title: "Website Development",
            desc: "Custom, responsive websites built with modern frameworks for speed and SEO.",
          },
          {
            icon: <Smartphone size={32} />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications for iOS and Android.",
          },
          {
            icon: <LayoutTemplate size={32} />,
            title: "UI/UX Design",
            desc: "User-centric design that ensures intuitive navigation and stunning visuals.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-10 rounded-3xl shadow-sm border-b-8 border-b-transparent hover:border-primary transition duration-300 group"
          >
            {/* Icon: Uses group-hover because it reacts to the PARENT being hovered */}
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {service.desc}
            </p>

            {/* Link: Uses group-hover because it reacts to the PARENT being hovered */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary transition"
            >
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;