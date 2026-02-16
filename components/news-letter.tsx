import { Mail } from "lucide-react";
import SectionTag from "./section-taq";

const Newsletter = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center">

      <SectionTag text="Our Newsletter" />
      </div>
      <div className="flex justify-center mb-2"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        Subscribe for{" "}
        <span className="text-primary">
          Expert IT <br /> Tips & Special Offers
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
        <div className="flex-1 relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-primary transition"
          />
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-deep-light transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);
export default Newsletter;