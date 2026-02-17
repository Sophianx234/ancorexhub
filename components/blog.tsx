import { ArrowRight, Calendar } from "lucide-react";
import SectionTag from "./section-taq";

const Blog = () => (
  <section className="py-24 bg-white dark:bg-[#001514] transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <div className="flex justify-center">
        <SectionTag text="News & Blogs" />
      </div>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-[#f0ede5]">
        Our Latest <span className="text-primary dark:text-[#74b4d9]">News & Blogs</span>
      </h2>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        {
          tag: "Web Development",
          title: "The Future of Web Development: Trends to Watch",
          date: "February 10, 2026",
          img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
        },
        {
          tag: "Cloud Computing",
          title: "The Role of AI in Cloud Computing and Automation",
          date: "February 09, 2026",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        },
        {
          tag: "Mobile App",
          title: "The Rise of Super Apps: What It Means for Business",
          date: "February 08, 2026",
          img: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80",
        },
      ].map((post, i) => (
        <div
          key={i}
          className="group rounded-3xl overflow-hidden border transition duration-300
            bg-white border-primary/10
            dark:bg-[#002524] dark:border-[#004643] dark:hover:border-[#74b4d9]"
        >
          <div className="h-60 overflow-hidden relative">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            {/* Tag: 
                Light: Primary Green BG + White Text.
                Dark: Tertiary Blue BG + Black Text (Maximum Readability).
            */}
            <div className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-md
              bg-primary text-white
              dark:bg-[#74b4d9] dark:text-[#001514]"
            >
              {post.tag}
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-2 text-xs mb-4 text-slate-500 dark:text-[#9ca3af]">
              <Calendar size={14} /> {post.date}
            </div>
            
            <h3 className="text-xl font-bold mb-4 leading-snug transition
              text-slate-900 group-hover:text-primary
              dark:text-[#f0ede5] dark:group-hover:text-[#74b4d9]"
            >
              {post.title}
            </h3>
            
            <p className="text-sm mb-6 line-clamp-2 text-slate-500 dark:text-[#9ca3af]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            
            <a
              href="#"
              className="text-sm font-bold flex items-center gap-2 transition
                text-slate-900 hover:text-primary
                dark:text-[#f0ede5] dark:hover:text-[#74b4d9]"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Blog;