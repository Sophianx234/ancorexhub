
import Image from "next/image";
import { Star } from "lucide-react";

const LaurelBadge = ({ title, year }: { title: string; year: string }) => (
  <div className="relative w-40 h-40 mx-auto mb-2">
    {/* NOTE: Ensure '/l-2.jpg' exists in your public folder. 
       If using a transparent PNG wreath, it usually looks even better! 
    */}
    <Image
      src="/l-2.jpg"
      fill
      className="translate-y-4 object-contain opacity-90"
      alt="Laurel Wreath"
    />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-4 px-2">
      <div className="flex gap-0.5 mb-1 text-yellow-500">
        <Star size={8} fill="currentColor" />
        <Star size={8} fill="currentColor" />
        <Star size={8} fill="currentColor" />
      </div>
      <span className="block text-[0.6rem] font-black leading-tight text-center uppercase tracking-tighter text-slate-900 max-w-[80px]">
        {title}
      </span>
      <span className="block text-[0.5rem] mt-0.5 font-bold text-slate-400 tracking-widest">
        AWARD
      </span>
      <span className="mt-0.5 text-sm font-extrabold text-primary">
        {year}
      </span>
    </div>
  </div>
);
export default LaurelBadge;