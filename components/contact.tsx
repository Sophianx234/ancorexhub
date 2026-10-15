'use client'

import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import FadeIn from "@/lib/fade-in";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const template = `Hello AncoreXHub! I would like to get in touch.

• Name: ${formData.name.trim()}
• Email: ${formData.email.trim()}
• Phone: ${formData.phone.trim()}
• Service: ${formData.service}

Message:
${formData.message.trim()}`;

    const encoded = encodeURIComponent(template);
    const whatsappUrl = `https://wa.me/233554802687?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F8F9FB] dark:bg-[#001514] transition-colors duration-300">
      {/* Main Card Container */}
      <FadeIn direction="up" className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-sm rounded-[40px] overflow-hidden bg-white dark:bg-[#002524]">
        
        {/* Left Column: Info Card */}
        <div className="lg:w-[35%] p-12 relative w-full overflow-hidden flex flex-col justify-between
          bg-[#001514] text-white
          dark:bg-[#004643] dark:text-[#f0ede5]">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <svg width="100%" height="100%" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 Q 100 150 200 100 T 400 100" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 200 Q 100 250 200 200 T 400 200" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 300 Q 100 350 200 300 T 400 300" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 400 Q 100 450 200 400 T 400 400" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 space-y-12">
            {/* Address */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5]">Location</h4>
              <p className="text-slate-400 dark:text-blue-100/70 leading-relaxed">
                East Legon,<br />
                Accra, Ghana
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5]">Contact</h4>
              <p className="text-slate-400 dark:text-blue-100/70">
                Phone: <a href="tel:0206192823" className="text-white/90 hover:underline">0206192823</a>
              </p>
              <p className="text-slate-400 dark:text-blue-100/70">
                Email: <a href="mailto:ancorexhub@gmail.com" className="text-white/90 hover:underline">ancorexhub@gmail.com</a>
              </p>
            </div>

            {/* Open Time */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5]">Office Hours</h4>
              <p className="text-slate-400 dark:text-blue-100/70">Monday to Friday: 09:00 to 18:00</p>
            </div>
          </div>

          {/* Social Connectivity */}
          <div className="relative z-20 pt-12">
            <h4 className="text-xl font-semibold mb-6 text-white/90 dark:text-[#f0ede5]">Stay Connected</h4>
            
            <div className="flex flex-wrap gap-4"> 
              {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + (i * 0.1),
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
                    bg-primary hover:bg-white hover:text-blue-600
                    dark:bg-[#74b4d9] dark:text-[#001514] dark:hover:bg-[#f0ede5] dark:hover:text-[#004643]">
                    <Icon size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-[65%] p-12 md:p-16">
          <div className="mb-10">
            <div className="flex items-center gap-2 font-bold mb-3 text-primary dark:text-[#74b4d9]">
              <span className="text-lg italic">//</span>
              <span className="uppercase tracking-widest text-sm">Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-[#f0ede5] mb-4">
              Let's build something <span className="text-primary dark:text-[#74b4d9]">remarkable</span> together
            </h2>
            <p className="text-slate-500 dark:text-[#9ca3af] text-sm sm:text-base leading-relaxed max-w-2xl">
              Have a project in mind, need software engineering guidance, or want to explore an idea? Tell us about your goals and our team will get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <FadeIn delay={0.1} direction="up" className="space-y-3">
              <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Your Name *</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. John Doe"
                className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                  bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                  dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
              />
            </FadeIn>

            <FadeIn delay={0.2} direction="up" className="space-y-3">
              <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Email *</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                  bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                  dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
              />
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="space-y-3">
              <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Phone *</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex. 0206192823"
                className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                  bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                  dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
              />
            </FadeIn>

            <FadeIn delay={0.4} direction="up" className="space-y-3">
              <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Service *</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 transition-all cursor-pointer
                    bg-[#F3F6F9] text-slate-700 dark:text-[#f0ede5] focus:ring-primary/20
                    dark:bg-[#001514] dark:focus:ring-[#74b4d9]/40">
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="System Blueprint & Consulting">System Blueprint & Consulting</option>
                  <option value="Other Project Inquiry">Other Project Inquiry</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={20} />
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" className="col-span-1 md:col-span-2 space-y-3">
              <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Your Message *</label>
              <textarea 
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, timeline, or questions..."
                className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all resize-none
                  bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                  dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
              ></textarea>
            </FadeIn>

            <FadeIn delay={0.6} direction="up" className="pt-4 col-span-1 md:col-span-2">
              <button 
                type="submit"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-200 cursor-pointer active:scale-95
                  bg-primary text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-primary/90
                  dark:bg-[#74b4d9] dark:text-[#001514] dark:shadow-none dark:hover:bg-[#5da0c9]">
                <span>Send via WhatsApp</span>
                <Send size={18} />
              </button>
            </FadeIn>
          </form>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;