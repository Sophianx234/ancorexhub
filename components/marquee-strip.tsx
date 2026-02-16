'use client'

import { Earth, Lightbulb, PenTool, ShieldCheck, TrendingUp, VectorSquare } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
const MARQUEE_ITEMS = [
  { text: "Website Development", icon: <Earth /> },
  { text: "Strategy & Ideation", icon: <Lightbulb /> }, // "Brainstorm and provide"
  { text: "UX/UI Design", icon: <VectorSquare /> },
  { text: "Scalable Solutions", icon: <TrendingUp /> }, // "Scalable solution"
  { text: "Reliable Architecture", icon: <ShieldCheck /> }, // "Reliable"
  { text: "Graphics Design", icon: <PenTool /> },
];

const MarqueeStrip = () => {
  return (
    // Added 'group' class to enable hover pausing later if needed
    <div className="bg-primary text-white py-6 overflow-hidden relative z-20 border-y border-primary/50 group">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-16 whitespace-nowrap font-semibold text-lg tracking-wide items-center pr-16"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 50, // Slowed down slightly for more text
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First loop of items */}
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={index}>
                <span className="hover:text-blue-200 transition-colors duration-300 cursor-default">
                  {item.text}
                </span>
                <span className="text-blue-200 text-2xl mx-2">{item.icon}</span>
              </React.Fragment>
            ))}

            {/* Second loop to fill space (useful if screen is very wide) */}
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={`dup-${index}`}>
                <span className="hover:text-blue-200 transition-colors duration-300 cursor-default">
                  {item.text}
                </span>
                <span className="text-blue-200 text-2xl mx-2">{item.icon}</span>
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default MarqueeStrip;