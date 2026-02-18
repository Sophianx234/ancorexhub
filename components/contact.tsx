'use client'

import { ChevronDown, Facebook, Instagram, InstagramIcon, Linkedin, Twitter, Youtube } from "lucide-react";
import FadeIn from "@/lib/fade-in";
import PopIn from "@/lib/pop-in";

const Contact = () => (
  <section className="py-24 px-6 bg-[#F8F9FB] dark:bg-[#001514] transition-colors duration-300">
    
    {/* Main Card Container - Fades Up as one big unit */}
    <FadeIn direction="up" className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-sm rounded-[40px] overflow-hidden bg-white dark:bg-[#002524]">
      
      {/* Left Column: Info Card */}
      <div className="lg:w-[35%] p-12 relative w-full -hidden flex flex-col justify-between
        bg-[#001514] text-white
        dark:bg-[#004643] dark:text-[#f0ede5]">
        
        {/* Topographical Wavy Background Pattern */}
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
            <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5]">Address</h4>
            <p className="text-slate-400 dark:text-blue-100/70 leading-relaxed">
              2464 Royal Ln. Mesa,<br />
              New Jersey 45463
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5] ">Contact</h4>
            <p className="text-slate-400 dark:text-blue-100/70">Phone : +(000) 000-0000</p>
            <p className="text-slate-400 dark:text-blue-100/70">Email : example@gmail.com</p>
          </div>

          {/* Open Time */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white/90 dark:text-[#f0ede5]">Open Time</h4>
            <p className="text-slate-400 dark:text-blue-100/70">Monday - Friday : 10:00 - 20:00</p>
          </div>
        </div>

        {/* Social Connectivity - Staggered Pop In */}
        <div className="relative flex-col justify-center items-center z-20 pt-12">
          <h4 className="text-xl font-semibold mb-6 text-white/90 dark:text-[#f0ede5]">Stay Connected</h4>

          
            
          <div className="flex px-10  gap-4 relative md:-left-24 -left-10  w-96 ">
            {[InstagramIcon,Facebook, Twitter, Linkedin,Youtube].map((Icon, i) => (
              <PopIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer transition-all duration-300
                  bg-primary hover:bg-white hover:text-blue-600
                  dark:bg-[#74b4d9] dark:text-[#001514] dark:hover:bg-[#f0ede5] dark:hover:text-[#004643]">
                  {/* REMOVED fill="currentColor" to fix broken icons like Facebook */}
                  <Icon size={18} />
                </div>
              </PopIn>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:w-[65%] p-12 md:p-16">
        <div className="mb-10">
          <div className="flex items-center gap-2 font-bold mb-4 text-primary dark:text-[#74b4d9]">
            <span className="text-lg italic">//</span>
            <span className="uppercase tracking-widest text-sm">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-[#f0ede5]">
            Get Your <span className="text-primary dark:text-[#74b4d9]">Free Quote</span> Today!
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name - Delay 0.1 */}
          <FadeIn delay={0.1} direction="up" className="space-y-3">
            <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Your Name *</label>
            <input 
              type="text" 
              placeholder="Ex. John Doe"
              className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
            />
          </FadeIn>

          {/* Email - Delay 0.2 */}
          <FadeIn delay={0.2} direction="up" className="space-y-3">
            <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Email *</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
            />
          </FadeIn>

          {/* Phone - Delay 0.3 */}
          <FadeIn delay={0.3} direction="up" className="space-y-3">
            <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Phone *</label>
            <input 
              type="tel" 
              placeholder="Enter Phone Number"
              className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all
                bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
            />
          </FadeIn>

          {/* Service - Delay 0.4 */}
          <FadeIn delay={0.4} direction="up" className="space-y-3">
            <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Service *</label>
            <div className="relative">
              <select className="w-full rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 transition-all
                bg-[#F3F6F9] text-slate-500 focus:ring-primary/20
                dark:bg-[#001514] dark:text-[#f0ede5] dark:focus:ring-[#74b4d9]/40">
                <option>Select Services</option>
                <option>Web Development</option>
                <option>App Design</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={20} />
            </div>
          </FadeIn>

          {/* Message - Delay 0.5 */}
          <FadeIn delay={0.5} direction="up" className="col-span-1 md:col-span-2 space-y-3">
            <label className="block font-bold text-slate-800 dark:text-[#f0ede5]">Your Message *</label>
            <textarea 
              rows={4}
              placeholder="Enter here.."
              className="w-full rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 transition-all resize-none
                bg-[#F3F6F9] placeholder:text-slate-400 focus:ring-primary/20
                dark:bg-[#001514] dark:text-[#f0ede5] dark:placeholder:text-slate-600 dark:focus:ring-[#74b4d9]/40"
            ></textarea>
          </FadeIn>

          {/* Submit Button - Delay 0.6 */}
          <FadeIn delay={0.6} direction="up" className="pt-4">
            <button className="px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300
              bg-primary text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-primary/80
              dark:bg-[#74b4d9] dark:text-[#001514] dark:shadow-none dark:hover:bg-[#5da0c9]">
              Send Message
            </button>
          </FadeIn>
        </form>
      </div>
    </FadeIn>
  </section>
);
export default Contact;