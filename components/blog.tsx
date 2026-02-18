'use client'

import { ArrowRight, Calendar } from "lucide-react";
import SectionTag from "./section-taq"; // Keeping your typo 'section-taq' if that's the filename, otherwise rename to 'section-tag'
import Image from "next/image";
import FadeIn from "@/lib/fade-in"; // Using your lib path

const Blog = () => (
  <section className="py-24 bg-white dark:bg-[#001514] transition-colors duration-300">
    
    {/* Header - Standard Fade Up */}
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <FadeIn direction="up">
        <div className="flex justify-center">
          <SectionTag text="News & Blogs" />
        </div>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-[#f0ede5]">
          Our Latest{" "}
          <span className="text-primary dark:text-[#74b4d9]">News & Blogs</span>
        </h2>
      </FadeIn>
    </div>

    {/* Blog Grid */}
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      {[
        {
          tag: "Web Development",
          title: "The Future of Web Development: Trends to Watch",
          date: "February 10, 2026",
          img: "/blog-3.webp",
        },
        {
          tag: "Cloud Computing",
          title: "The Role of AI in Cloud Computing and Automation",
          date: "February 09, 2026",
          img: "/blog-2.webp",
        },
        {
          tag: "Mobile App",
          title: "The Rise of Super Apps: What It Means for Business",
          date: "February 08, 2026",
          img: "/blog-1.webp",
        },
      ].map((post, i) => (
        
        // Staggered Fade Up for Cards (0.2s, 0.4s, 0.6s)
        <FadeIn key={i} delay={i * 0.2} direction="up" className="h-full">
          <div
            className="group rounded-3xl overflow-hidden border transition duration-300 h-full flex flex-col
              bg-white border-primary/10
              dark:bg-[#002524] dark:border-[#004643] dark:hover:border-[#74b4d9]"
          >
            <div className="h-60 overflow-hidden relative shrink-0">
              <Image
                fill
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Tag */}
              <div
                className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-md
                bg-primary text-white
                dark:bg-[#74b4d9] dark:text-[#001514]"
              >
                {post.tag}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs mb-4 text-slate-500 dark:text-[#9ca3af]">
                <Calendar size={14} /> {post.date}
              </div>

              <h3
                className="text-xl font-bold mb-4 leading-snug transition
                text-slate-900 group-hover:text-primary
                dark:text-[#f0ede5] dark:group-hover:text-[#74b4d9]"
              >
                {post.title}
              </h3>

              <p className="text-sm mb-6 line-clamp-2 text-slate-500 dark:text-[#9ca3af] flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <a
                href="#"
                className="text-sm font-bold flex items-center gap-2 transition mt-auto
                  text-slate-900 hover:text-primary
                  dark:text-[#f0ede5] dark:hover:text-[#74b4d9]"
              >
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);
export default Blog;