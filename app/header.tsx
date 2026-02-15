import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 20 && !isScrolled) setIsScrolled(true);
    if (latest <= 20 && isScrolled) setIsScrolled(false);
  });

  const smoothTransition = {
    type: "tween",
    ease: [0.22, 1, 0.36, 1], 
    duration: 0.5,
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '#' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-0 pointer-events-none">
      <motion.header
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        variants={{
          initial: {
            width: "100%",
            y: 0,
            borderRadius: 0,
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderBottom: "1px solid #f3f4f6",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            paddingTop: "0px",
            height: 80,
          },
          scrolled: {
            width: "92%",
            y: 12,
            borderRadius: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            paddingTop: "0px",
            height: 64,
          }
        }}
        transition={smoothTransition}
        style={{ backdropFilter: "blur(16px)" }}
        className="pointer-events-auto flex items-center justify-between px-6 max-w-7xl mx-auto overflow-hidden border border-transparent"
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <Image 
            src='/logo.png' 
            width={160} 
            height={180} 
            alt="Fusion Logo" 
            className='object-contain' 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section: Search + Theme + CTA */}
        <div className="hidden md:flex items-center space-x-2">
          
          {/* Search Icon Button */}
          <button className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all">
            <Search size={20} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all"
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
          </button>

          {/* "Let's Talk" CTA with Hover Arrow Animation */}
          <motion.a
             href="#contact"
             whileHover="hover"
             whileTap={{ scale: 0.95 }}
             className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors group"
          >
            <span>Let's Talk</span>
            <motion.span
              variants={{
                hover: { x: 4 } // Moves arrow to the right on hover
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
             {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-black p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 w-[90%] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 pointer-events-auto md:hidden"
          >
             <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium text-gray-800 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              
              <button className="flex items-center justify-between w-full p-3 bg-black text-white rounded-xl">
                <span className="font-medium">Let's Talk</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;