'use client'

import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary-deep text-white">
    {/* CTA Bar */}
    <div className="bg-primary-deep border-b border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Let's <span className="text-primary dark:text-[#74b4d9]">build your next project</span> together
        </h2>
        <a 
          href="#contact"
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-md shadow-primary/25"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Main Footer Links */}
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Col 1: Brand Info */}
      <div>
        <div className="-space-y-4">
          <div className="flex-shrink-0 w-64 -translate-y-4 h-16 relative cursor-pointer">
            <Image
              src="/logob.png"
              fill
              alt="AncoreXHub Logo"
              className="object-contain"
            />
          </div>
          <p className="text-slate-400 font-concert text-sm leading-relaxed mb-6">
            Empowering startups and businesses with modern web engineering, scalable mobile applications, and strategic technology consulting.
          </p>
        </div>
        <div className="flex gap-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 active:scale-95 text-slate-300 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Col 2: Navigation Links */}
      <div>
        <h3 className="font-bold text-lg mb-6">Navigation</h3>
        <ul className="space-y-4 text-slate-400 text-sm">
          {[
            { name: "About Us", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Our Team", href: "#team" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQs", href: "#faqs" },
          ].map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-primary transition-colors duration-150">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3: Contact Details */}
      <div>
        <h3 className="font-bold text-lg mb-6">Contact</h3>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>
            <a href="tel:0206192823" className="hover:text-white transition-colors">
              0206192823
            </a>
          </li>
          <li>
            <a href="mailto:ancorexhub@gmail.com" className="hover:text-white transition-colors">
              ancorexhub@gmail.com
            </a>
          </li>
          <li className="leading-relaxed">
            East Legon,<br />
            Accra, Ghana
          </li>
        </ul>
      </div>

      {/* Col 4: Newsletter */}
      <div>
        <h3 className="font-bold text-lg mb-6">Get the latest updates</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          Subscribe for engineering insights, tech trends, and product releases.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-500"
          />
          <button 
            type="submit" 
            aria-label="Subscribe"
            className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-150 active:scale-95 text-white"
          >
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-primary py-4 text-center text-white text-xs font-medium">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © 2026 AncoreXHub. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-100 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-blue-100 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;