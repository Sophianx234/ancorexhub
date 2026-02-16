import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Contact = () => (
  <section className="py-24 px-6 bg-[#F8F9FB]">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-sm rounded-[40px] overflow-hidden bg-white">
      
      {/* Left Column: Info Card */}
      <div className="lg:w-[35%] bg-primary-deep p-12 text-white relative overflow-hidden flex flex-col justify-between">
        {/* Topographical Wavy Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 100 150 200 100 T 400 100" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0 200 Q 100 250 200 200 T 400 200" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0 300 Q 100 350 200 300 T 400 300" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0 400 Q 100 450 200 400 T 400 400" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 space-y-12">
          {/* Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white/90">Address</h4>
            <p className="text-slate-400 leading-relaxed">
              2464 Royal Ln. Mesa,<br />
              New Jersey 45463
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white/90">Contact</h4>
            <p className="text-slate-400">Phone : +(000) 000-0000</p>
            <p className="text-slate-400">Email : example@gmail.com</p>
          </div>

          {/* Open Time */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white/90">Open Time</h4>
            <p className="text-slate-400">Monday - Friday : 10:00 - 20:00</p>
          </div>
        </div>

        {/* Social Connectivity */}
        <div className="relative z-10 pt-12">
          <h4 className="text-xl font-semibold mb-6 text-white/90">Stay Connected</h4>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Icon size={18} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:w-[65%] p-12 md:p-16">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-primary font-bold mb-4">
            <span className="text-lg italic">//</span>
            <span className="uppercase tracking-widest text-sm">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get Your <span className="text-primary">Free Quote</span> Today!
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name */}
          <div className="space-y-3">
            <label className="block text-slate-800 font-bold">Your Name *</label>
            <input 
              type="text" 
              placeholder="Ex. John Doe"
              className="w-full bg-[#F3F6F9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:primary/20 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label className="block text-slate-800 font-bold">Email *</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              className="w-full bg-[#F3F6F9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Phone */}
          <div className="space-y-3">
            <label className="block text-slate-800 font-bold">Phone *</label>
            <input 
              type="tel" 
              placeholder="Enter Phone Number"
              className="w-full bg-[#F3F6F9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Service */}
          <div className="space-y-3">
            <label className="block text-slate-800 font-bold">Service *</label>
            <div className="relative">
              <select className="w-full bg-[#F3F6F9] rounded-2xl px-6 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-500">
                <option>Select Services</option>
                <option>Web Development</option>
                <option>App Design</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <label className="block text-slate-800 font-bold">Your Message *</label>
            <textarea 
              rows={4}
              placeholder="Enter here.."
              className="w-full bg-[#F3F6F9] rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-primary/80 hover:shadow-none transition-all duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);
export default Contact;