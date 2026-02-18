'use client'

import React, { useState } from "react";
import { Menu, X, Sun, Moon, ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import useDarkMode from "@/lib/useDarkmode";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [colorTheme, setTheme] = useDarkMode();
  
  const isDarkMode = colorTheme === "dark"; 

  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20 && !isScrolled) setIsScrolled(true);
    if (latest <= 20 && isScrolled) setIsScrolled(false);
  });

  // 1. NEW: The "Apple-like" Easing Curve
  const premiumEase = [0.21, 0.47, 0.32, 0.98];

  const smoothTransition = {
    duration: 0.6,
    ease: premiumEase, // Applied the premium physics here
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Case Studies", href: "#" },
  ];

  // LOGIC: Kept your exact color/style logic
  const headerVariants = {
    initial: {
      width: "100%",
      y: 0,
      borderRadius: 0,
      backgroundColor: isDarkMode ? "rgba(10, 10, 10, 1)" : "rgba(255, 255, 255, 1)",
      borderBottom: isDarkMode ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid #f3f4f6",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      paddingTop: "0px",
      height: 80,
    },
    scrolled: {
      width: "92%",
      y: 12,
      borderRadius: 9999,
      backgroundColor: isDarkMode ? "rgba(10, 10, 10, 0.85)" : "rgba(255, 255, 255, 0.85)",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      boxShadow: isDarkMode 
        ? "0 8px 32px rgba(0, 0, 0, 0.5)" 
        : "0 8px 32px rgba(0, 0, 0, 0.08)",
      paddingTop: "0px",
      height: 64,
    },
  };

  return (
    <div className="fixed font-barlow z-50 top-0 left-0 right-0 flex justify-center pt-0 pointer-events-none">
      <motion.header
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        variants={headerVariants}
        transition={smoothTransition}
        style={{ backdropFilter: "blur(16px)" }}
        className="pointer-events-auto flex items-center justify-between px-6 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Logo (Unchanged) */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
         {!isDarkMode ? (
           <Image
            src="/logo.png"
            width={160}
            height={180}
            alt="Fusion Logo"
            className="object-contain "
          />
         ) : (
          <Image
            src="/logob.png"
            width={160}
            height={180}
            alt="Fusion Logo"
            className="object-contain "
          />
         )}
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              onMouseEnter={() => setHoveredTab(link.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-4 py-2 dark:text-white text-sm font-medium transition-colors duration-200"
            >
              {/* Sliding Hover Background */}
              {hoveredTab === link.name && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className={`absolute inset-0 rounded-full -z-10 ${
                    isDarkMode ? "bg-white/10 text-white" : "bg-gray-100"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  // Added Spring for snappier hover
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Text Style */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeTab === link.name && isDarkMode
                    ? "text-white font-semibold"
                    : activeTab === link.name && !isDarkMode 
                      ? "text-black font-semibold"
                      : activeTab !== link.name && !isDarkMode 
                        ? "text-gray-600" 
                        : "text-gray-200"
                }`}
              >
                {link.name}
              </span>

              {/* Active Dot Indicator */}
              {activeTab === link.name && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute inset-0 size-full bg-primary/70 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Search Icon - Added Tap Animation */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all ${
                isDarkMode 
                ? "text-gray-400 hover:text-white hover:bg-white/10" 
                : "text-gray-500 hover:text-black hover:bg-gray-100"
            }`}
          >
            <Search size={20} />
          </motion.button>

          {/* Theme Toggle - Added Tap Animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(colorTheme)}
            className={`p-2 rounded-full transition-all ${
                isDarkMode 
                ? "text-gray-400 hover:text-white hover:bg-white/10" 
                : "text-gray-500 hover:text-black hover:bg-blue-100"
            }`}
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* "Let's Talk" CTA - Added Hover Physics */}
          <motion.a
            href="#contact"
            whileHover="hover"
            whileTap={{ scale: 0.95 }} // Satisfying click
            className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-colors group"
          >
            <span>Let's Talk</span>
            <motion.span
              variants={{
                hover: { x: 4 }, 
                initial: { x: 0 }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} // Springy Arrow
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </div>

        {/* Mobile Toggle - Added Tap Animation */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button 
             whileTap={{ scale: 0.9 }}
             onClick={() => setTheme(colorTheme)}
             className={isDarkMode ? "text-gray-300" : "text-gray-600"}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${
                isDarkMode 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-black"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: premiumEase }} // Premium Ease
            className={`absolute top-24 w-[90%] rounded-2xl shadow-xl p-4 pointer-events-auto md:hidden ${
                isDarkMode 
                ? "bg-[#0a0a0a] " 
                : "bg-white "
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`text-lg font-medium p-3 rounded-xl transition-colors ${
                    activeTab === link.name
                      ? isDarkMode 
                        ? "bg-white/10 text-primary" 
                        : "bg-gray-100 text-primary"
                      : isDarkMode
                        ? "text-gray-300 hover:bg-white/5"
                        : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <hr className={isDarkMode ? "border-gray-800 my-2" : "border-gray-100 my-2"} />

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-between w-full p-3 bg-primary text-white rounded-xl"
              >
                <span className="font-medium">Let's Talk</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;