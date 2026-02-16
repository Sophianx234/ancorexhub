import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => (
  <footer className="bg-primary-deep text-white">
    {/* CTA Bar */}
    <div className="bg-primary-deep border-b border-primary-deep-light py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Let's <span className="text-primary">Connect</span> there
        </h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition">
          Contact Us
        </button>
      </div>
    </div>

    {/* Main Footer Links */}
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Col 1 */}
      <div className="">
          <div className="-space-y-4 ">

          <div className="flex-shrink-0 w-64 -translate-y-4 h-16 relative  cursor-pointer">
                    <Image
                      src="/logob.png"
                      fill
                      alt="Fusion Logo"
                      className="object-contain"
                      />
                  </div>
        <p className="text-slate-400 font-concert text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
                      </div>
        <div className="flex gap-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Col 2 */}
      <div>
        <h3 className="font-bold text-lg mb-6">Navigation</h3>
        <ul className="space-y-4 text-slate-400 text-sm">
          {["Our Team", "Career", "About Us", "Testimonial", "FAQs"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 transition">
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <h3 className="font-bold text-lg mb-6">Contact</h3>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>(000) 000-0000</li>
          <li>example@gmail.com</li>
          <li>
            2464 Royal Ln. Mesa, <br />
            New Jersey 45463
          </li>
        </ul>
      </div>

      {/* Col 4 */}
      <div>
        <h3 className="font-bold text-lg mb-6">Get the latest information</h3>
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
          />
          <button className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-primary py-4 text-center text-white text-xs font-medium">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © 2025 AncoreXHub. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-100">
            User Terms & Conditions
          </a>
          <a href="#" className="hover:text-blue-100">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;