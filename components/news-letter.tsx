import { Mail } from "lucide-react";
import SectionTag from "./section-taq";

const Newsletter = () => (
  <section className="py-20 transition-colors duration-300
    bg-primary/5 
    dark:bg-[#004643]"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center mb-2">
        {/* Adjusted SectionTag wrapper for contrast if needed */}
        <div className="dark:brightness-150">
           <SectionTag text="Our Newsletter" />
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-8 
        text-slate-900 
        dark:text-[#f0ede5]"
      >
        Subscribe for{" "}
        <span className="text-primary dark:text-[#74b4d9]">
          Expert IT <br /> Tips & Special Offers
        </span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
        <div className="flex-1 relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 
              text-slate-400 
              dark:text-[#74b4d9]"
            size={20}
          />
          
          {/* Input Field:
              Light: White BG.
              Dark: Deepest Black (#001514). 
              *Why?* Since the section BG is now Green (#004643), 
              using Black for the input makes it look like a "cutout" or "depth" slot.
          */}
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full rounded-full pl-12 pr-6 py-4 focus:outline-none transition-all border
              bg-white border-slate-200 focus:border-primary
              dark:bg-[#001514] dark:border-[#002524] dark:text-[#f0ede5] dark:placeholder:text-slate-500 dark:focus:border-[#74b4d9]"
          />
        </div>
        
        {/* Subscribe Button:
            Light: Primary Green.
            Dark: Tertiary Blue (#74b4d9) + Dark Text.
            This creates the maximum possible contrast against the Green background.
        */}
        <button className="px-8 py-4 rounded-full font-bold shadow-lg transition-colors
          bg-primary text-white hover:bg-primary-deep
          dark:bg-[#74b4d9] dark:text-[#001514] dark:shadow-none dark:hover:bg-[#5da0c9]">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);
export default Newsletter;