import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jenny Wilson",
    role: "Owner, Furniture Store",
    title: "A Wonderful Experience!",
    quote:
      "The level of detail and care they put into their work is unmatched. I've never felt more confident in a partnership.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Bessie Cooper",
    role: "CEO, Car Rental App",
    title: "Highly Recommended!",
    quote:
      "We saw a 200% increase in user retention within the first month. The ROI on this service is absolutely insane.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
  {
    name: "Robert Fox",
    role: "CTO, TechStart",
    title: "World Class Support",
    quote:
      "It's rare to find a team that understands the tech stack as well as they do. Truly a seamless integration.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Cameron Williamson",
    role: "Marketing Head, Growth.io",
    title: "Game Changer",
    quote:
      "Our workflow has never been smoother. The automation features alone saved us 20 hours a week.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

const TestimonialCard = ({ item }) => (
  <div className="w-[400px] flex-shrink-0 bg-primary  p-8 rounded-3xl border border-white/5   transition-all duration-300 group select-none">
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
    <section className="py-24 bg-primary-deep text-white overflow-hidden relative">
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
        TESTIMONIALS
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-blue-500/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-500/20">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Testimonials:{" "}
            <span className="text-primary">
              Trusted <br /> by Our Clients
            </span>
          </h2>
        </div>

        {/* Infinite Marquee Container 
            We render the list TWICE to create the perfect seamless loop.
        */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks (The "Expensive" Look) */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

          {/* The Scrolling Wrapper */}
          <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
            {/* First Set */}
            {testimonials.map((item, i) => (
              <TestimonialCard key={`a-${i}`} item={item} />
            ))}
            {/* Second Set (Duplicate for Loop) */}
            {testimonials.map((item, i) => (
              <TestimonialCard key={`b-${i}`} item={item} />
            ))}
            {/* Third Set (Optional: Extra buffer for ultra-wide screens) */}
            {testimonials.map((item, i) => (
              <TestimonialCard key={`c-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Config Requirement: 
          Add this to your tailwind.config.js or style tag below 
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Moves 1/3 because we have 3 sets */
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};
export default Testimonials;
