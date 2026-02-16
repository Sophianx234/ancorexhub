"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Earth,
  Facebook,
  HandCoins,
  Instagram,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  MoveRight,
  PenTool,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Smartphone,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Twitter,
  User,
  Users,
  VectorSquare,
} from "lucide-react";
import Header from "./header";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// --- REUSABLE HELPER COMPONENTS ---

const SectionTag = ({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) => (
  <div className="flex items-center gap-2 mb-3">
    <span
      className={`font-bold text-sm tracking-widest uppercase ${dark ? "text-tertiary" : "text-primary"}`}
    >
      <span className="italic"> //</span> {text}
    </span>
  </div>
);

// 1. Added new icons for the new topics

// 2. Updated the data list to include your new services
const MARQUEE_ITEMS = [
  { text: "Website Development", icon: <Earth /> },
  { text: "Strategy & Ideation", icon: <Lightbulb /> }, // "Brainstorm and provide"
  { text: "UX/UI Design", icon: <VectorSquare /> },
  { text: "Scalable Solutions", icon: <TrendingUp /> }, // "Scalable solution"
  { text: "Reliable Architecture", icon: <ShieldCheck /> }, // "Reliable"
  { text: "Graphics Design", icon: <PenTool /> },
];

const MarqueeStrip = () => {
  return (
    // Added 'group' class to enable hover pausing later if needed
    <div className="bg-primary text-white py-6 overflow-hidden relative z-20 border-y border-primary/50 group">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-16 whitespace-nowrap font-semibold text-lg tracking-wide items-center pr-16"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 50, // Slowed down slightly for more text
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First loop of items */}
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={index}>
                <span className="hover:text-blue-200 transition-colors duration-300 cursor-default">
                  {item.text}
                </span>
                <span className="text-blue-200 text-2xl mx-2">{item.icon}</span>
              </React.Fragment>
            ))}

            {/* Second loop to fill space (useful if screen is very wide) */}
            {MARQUEE_ITEMS.map((item, index) => (
              <React.Fragment key={`dup-${index}`}>
                <span className="hover:text-blue-200 transition-colors duration-300 cursor-default">
                  {item.text}
                </span>
                <span className="text-blue-200 text-2xl mx-2">{item.icon}</span>
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => (
  <section className="bg-[#0B0F19] pt-28 pb-20  text-white relative w-full min-h-screen flex items-center overflow-hidden">
    {/* Background Blur */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] pointer-events-none" />

    {/* Content Container - Grid ensures text stays on the left */}
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr] pt-20 pb-6 gap-12 items-center relative z-20 w-full h-full">
      {/* Text Column */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-32  lg:py-0"
      >
        <motion.div variants={fadeInUp}>
          <SectionTag text="Experience The Best IT Solutions" dark />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl  lg:text-6xl font-barlow font-extrabold  mb-6"
        >
          Where Creativity <br /> Meets{" "}
          <span className="text-primary ">Next-Gen</span> <br /> Technology
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-slate-400 font-concert text-lg mb-8 max-w-lg leading-relaxed"
        >
          We deliver enterprise-grade software solutions. Our team of experts
          ensures your digital transformation is seamless and scalable.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
          <button className="bg-primary hover:bg-primary/60 text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-2 ">
            Explore More <ArrowRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Empty div to maintain grid structure */}
      <div className="hidden lg:block"></div>
    </div>

    {/* Image Container - Positioned Absolute Right & Full Height */}

    {/* The Image */}
    {/* Image Container - Positioned Absolute Right & Full Height */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 right-0 w-full lg:w-1/2  h-full z-0"
    >
      {/* Gradient Overlay - Must have higher Z-index (z-20) to sit ON TOP of the image */}
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via- to-primary/70 z-20"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-20"></div> */}

      {/* Next.js Image Component */}
      <Image
        src="/sx-1.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center opacity-80 mix-blend-overlay lg:mix-blend-normal z-10"
        priority // Loads this image immediately (good for SEO/Core Vitals)
      />
    </motion.div>
  </section>
);

const About = () => {
  return (
    <section className="py-32 px-16 bg-white overflow-hidden relative">
      {/* Load Google Font for the Signature */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}
      </style>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Image Composition */}
        <div className="relative p-4">
          {/* Decorative Sparkles (Bottom Left) */}
          <div className="absolute bottom-10 -left-8 text-primary animate-pulse z-20">
            <Sparkles size={48} strokeWidth={1} fill="currentColor" />
          </div>

          {/* Background Shape 1 (Top Left - Blue) */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl -z-10" />

          {/* Background Shape 2 (Bottom Right - Dark) */}
          <div className="absolute bottom-0 right-4 w-48 h-48 bg-slate-900 rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl -z-10" />

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1: Team Group (Top Left) */}
            <div className="h-56 rounded-tl-[60px] rounded-br-2xl border-primary border-l-8 border-t-8 bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2: Standing Man (Top Right) */}
            <div className="h-64 mt-8 rounded-tr-[40px] rounded-bl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3: Woman Working (Bottom Left) */}
            <div className="h-64 -mt-8 rounded-bl-[40px] rounded-tr-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 4: Couple Working (Bottom Right) */}
            <div className="h-56 border-black border-r-8 border-b-8 rounded-br-[60px] rounded-tl-2xl bg-slate-200 overflow-hidden shadow-lg transform transition hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* "Hire Us" Badge (Absolute Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-28 h-28 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-2xl group cursor-pointer hover:bg-blue-700 transition">
              {/* Dashed ring effect */}
              <div className="absolute inset-1 border border-dashed border-primary/50 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="text-center text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1">
                  Hire Us
                </p>
                <MoveRight className="w-5 h-5 mx-auto group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="pt-24">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-bold italic text-lg">//</span>
            <span className="text-slate-600 font-semibold tracking-wide uppercase text-sm">
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
            Transforming <span className="text-primary">Ideas</span> <br />
            into <span className="text-primary">Digital Reality</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. We don't just write
            code; we architect success.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-10 border-y border-slate-100 py-8">
            {[
              { num: "150+", label: "Team Members" },
              { num: "2000+", label: "Happy Clients" },
              { num: "99%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {stat.num}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Signature Block */}
          <div>
            <div
              className="text-4xl text-slate-800 mb-2"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Jenny Alexander
            </div>
            <div className="text-sm font-bold uppercase text-slate-400 tracking-wider">
              Jenny Alexander <span className="text-primary mx-1">•</span> CEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section className="py-24 px-14 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionTag text="Our Services" />
          <h2 className="text-4xl font-bold text-slate-900 max-w-lg">
            Services We Provide to{" "}
            <span className="text-primary">Elevate Your Business</span>
          </h2>
        </div>
        <button className="hidden md:block bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/80 transition">
          View All Services
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Monitor size={32} />,
            title: "Website Development",
            desc: "Custom, responsive websites built with modern frameworks for speed and SEO.",
          },
          {
            icon: <Smartphone size={32} />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications for iOS and Android.",
          },
          {
            icon: <LayoutTemplate size={32} />,
            title: "UI/UX Design",
            desc: "User-centric design that ensures intuitive navigation and stunning visuals.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-10 rounded-3xl shadow-sm border-b-8 border-b-transparent hover:border-primary transition duration-300 group"
          >
            {/* Icon: Uses group-hover because it reacts to the PARENT being hovered */}
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {service.desc}
            </p>

            {/* Link: Uses group-hover because it reacts to the PARENT being hovered */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-primary transition"
            >
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <ClipboardList size={32} />,
    },
    {
      id: "02",
      title: "Strategy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Lightbulb size={32} />,
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Layers size={32} />,
    },
    {
      id: "04",
      title: "Final Result",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Smile size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 1. Subtle Background Watermark Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <span className="text-[10rem] font-bold text-slate-50 uppercase tracking-widest leading-none opacity-80">
          Work Process
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-bold text-lg italic">//</span>
            <span className="text-slate-600 font-medium text-sm">
              Our Work Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900">
            Our Proven <span className="text-primary">Work Process</span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* 2. The Connecting Line 
            Positioned absolutely to sit behind the circles. 
            'hidden md:block' ensures it only shows on desktop where the horizontal layout exists.
            Top is calculated to align with the vertical center of the 96px (h-24) circles.
          */}
          <div
            className="hidden md:block absolute top-14 left-0 w-full h-0.5  bg-slate-800 -z-10"
            style={{ left: "12.5%", width: "75%" }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Main Blue Circle */}
                  <div className="size-28 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-200 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* 3. Number Badge 
                    Positioned: top-1/2 (vertically centered) and -right-3 (pushed to the right edge).
                    The 'border-4 border-white' creates the "cutout" effect seen in the image.
                  */}
                  <div className="absolute top-1/2 -right-7 -translate-y-1/2 size-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white z-20">
                    {item.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 max-w-[220px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable Price",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <HandCoins size={32} strokeWidth={1.5} />
    },
    {
      title: "Professional Team",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      title: "18+ Years Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Briefcase size={32} strokeWidth={1.5} />
    },
    {
      title: "Award Winning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <Trophy size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="bg-primary-deep relative overflow-hidden font-sans">
      
      {/* 1. Background Watermark */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
         <span className="text-[120px] font-black text-white/5 uppercase tracking-widest whitespace-nowrap pl-10 block">
            Why Choose Us
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-bold text-lg italic">//</span>
              <span className="text-slate-400 font-medium text-sm tracking-wide uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why Trust Us for <br/> Your IT Needs?
            </h2>
          </div>

          {/* Call to Action Button */}
          <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg  flex items-center gap-2 group">
            Get A Quote
            {/* Tiny arrow hint if desired, keeping it clean per image */}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Video / Image Card */}
          <div className="relative group">
            <div className="rounded-[32px] overflow-hidden h-[400px] border border-white/10 relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                alt="Office Meeting" 
                className="w-full h-full object-cover opacity-80  transition duration-700"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/30"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                    <Play size={20} className="text-primary fill-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-primary transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};



const Portfolio = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <div className="flex justify-center">
        <SectionTag text="Our Latest Projects" />
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
        Explore Our Showcase of <br />{" "}
        <span className="text-primary">Featured Works</span>
      </h2>
    </div>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
      {[
        {
          title: "Care Connect - Doctor App",
          tags: ["App Design", "UI/UX"],
          color: "bg-blue-500",
        },
        {
          title: "Dental Clinic Website",
          tags: ["Web Design", "Development"],
          color: "bg-indigo-500",
        },
        {
          title: "Car Rental Mobile App",
          tags: ["App Design", "Wireframe"],
          color: "bg-cyan-500",
        },
        {
          title: "Luxury Hotel Booking",
          tags: ["Landing Page", "UI/UX"],
          color: "bg-primary",
        },
      ].map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative rounded-3xl overflow-hidden cursor-pointer"
        >
          <div
            className={`h-[400px] w-full ${project.color} relative flex items-center justify-center`}
          >
            <div className="w-3/4 h-3/4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl transform group-hover:scale-105 transition duration-500"></div>
            <div className="absolute bottom-6 right-6">
              <div className="bg-white text-primary p-4 rounded-full shadow-lg hover:bg-primary hover:text-white transition duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white pointer-events-none">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="flex justify-center">
      <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition">
        View All Works
      </button>
    </div>
  </section>
);

// --- NEW SECTIONS START HERE ---

const Testimonials = () => (
  <section className="py-24 bg-[#0B0F19] text-white overflow-hidden relative">
    {/* Background Watermark */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-white/5 whitespace-nowrap select-none">
      TESTIMONIALS
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <SectionTag text="Testimonials" dark />
        </div>
        <h2 className="text-4xl font-bold">
          Testimonials: <span className="text-blue-500">Trusted</span> <br /> by
          Our Clients
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Jenny Wilson",
            role: "Owner, Furniture Store",
            title: "A Wonderful Experience!",
            quote:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
          },
          {
            name: "Bessie Cooper",
            role: "CEO, Car Rental App",
            title: "Highly Recommended!",
            quote:
              "Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#151B2B] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition duration-300"
          >
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              <span className="text-white ml-2 font-bold text-sm">5.0</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed italic">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-xs text-slate-500">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-2 h-1 bg-slate-700 rounded-full"></div>
        <div className="w-2 h-1 bg-slate-700 rounded-full"></div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <SectionTag text="Our Team" />
          <h2 className="text-4xl font-bold text-slate-900">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Jenny Alexander",
            role: "Chief Executive Officer",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
          },
          {
            name: "Olivia Hughes",
            role: "Chief Technology Officer",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
          },
          {
            name: "Sophia Lewis",
            role: "IT Project Manager",
            img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1e?auto=format&fit=crop&q=80",
          },
        ].map((member, i) => (
          <div key={i} className="group">
            <div className="relative overflow-hidden rounded-3xl mb-4 bg-slate-100 h-[400px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay Social Icons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                <div className="p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer transition">
                  <Facebook size={18} />
                </div>
                <div className="p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer transition">
                  <Twitter size={18} />
                </div>
                <div className="p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer transition">
                  <Linkedin size={18} />
                </div>
                <div className="p-3 bg-white rounded-full hover:bg-primary hover:text-white cursor-pointer transition">
                  <Instagram size={18} />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-sm text-primary font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StatsBanner = () => (
  <section
    className="relative py-20 bg-fixed bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')",
    }}
  >
    <div className="absolute inset-0 bg-[#0B0F19]/80"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
      <div>
        <h3 className="text-4xl font-bold mb-2">150+</h3>
        <p className="text-sm text-slate-300">Team Members</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-2">2000+</h3>
        <p className="text-sm text-slate-300">Happy Clients</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-2">99%</h3>
        <p className="text-sm text-slate-300">Customer Satisfaction</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-2">18+</h3>
        <p className="text-sm text-slate-300">Years Experience</p>
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <div className="flex justify-center">
        <SectionTag text="News & Blogs" />
      </div>
      <h2 className="text-4xl font-bold text-slate-900">
        Our Latest <span className="text-primary">News & Blogs</span>
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
          className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition duration-300"
        >
          <div className="h-60 overflow-hidden relative">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">
              {post.tag}
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
              <Calendar size={14} /> {post.date}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition">
              {post.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a
              href="#"
              className="text-sm font-bold text-slate-900 flex items-center gap-2 hover:text-primary transition"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);


// Custom Laurel Wreath SVG to match the image exactly

// --- Components ---


// --- YOUR COMPONENT ---
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

const Awards = () => {
  const allAwards = [
    { title: "TECH INNOVATOR", fullTitle: "Tech Innovator Award", year: "2025" },
    { title: "SMART SOLUTIONS", fullTitle: "Smart Solutions Award", year: "2024" },
    { title: "CLOUD LEADER", fullTitle: "Cloud Leadership Award", year: "2024" },
    { title: "AI EXCELLENCE", fullTitle: "AI Excellence Award", year: "2023" },
    { title: "BEST STARTUP", fullTitle: "Best Startup of the Year", year: "2023" },
    { title: "UX DESIGN", fullTitle: "Best UX Design", year: "2022" },
    { title: "GREEN TECH", fullTitle: "Sustainability Award", year: "2022" },
    { title: "FAST GROWTH", fullTitle: "Fastest Growing Company", year: "2021" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % allAwards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? allAwards.length - 1 : prev - 1));
  };

  const getVisibleItems = () => {
    let items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % allAwards.length;
      items.push(allAwards[index]);
    }
    return items;
  };

  const visibleAwards = getVisibleItems();

  // --- ANIMATION VARIANTS (Staggered One-by-One) ---
  const containerVariants = {
    enter: { transition: { staggerChildren: 0.1 } },
    center: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-bold text-lg italic">//</span>
              <span className="text-slate-500 font-semibold text-sm tracking-wide uppercase">
                Our Awards
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Our Journey to <br />
              <span className="text-primary">Award-Winning Success</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary/80 hover:text-primary transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-all shadow-md shadow-blue-200 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={startIndex}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {visibleAwards.map((item, i) => {
                const isActive = i === 0;

                return (
                  <motion.div
                    key={`${item.year}-${item.title}-${i}`}
                    variants={cardVariants}
                    custom={direction}
                    className={`
                      bg-white rounded-[2rem] border-2 border-primary/10 p-6 text-center relative overflow-hidden group
                      flex flex-col h-[400px] justify-between
                      
                      transition-shadow duration-300
                    `}
                  >
                    {/* Background Watermark */}
                    <div className="absolute -top-6 -right-6 pointer-events-none">
                      <span className="text-[10rem] font-bold text-slate-50 opacity-60 leading-none select-none">
                        {allAwards.findIndex((x) => x.fullTitle === item.fullTitle) + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center h-full">
                      
                      {/* --- INTEGRATED LAUREL BADGE --- */}
                      <LaurelBadge title={item.title} year={item.year} />

                      <div className="flex-grow flex flex-col justify-center -mt-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                          {item.fullTitle}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed px-2">
                          Recognized for outstanding achievement in {item.year}. We continue to push boundaries.
                        </p>
                      </div>

                      
                        <div className="w-12 h-1 bg-slate-100 rounded-full mt-4 group-hover:bg-blue-100 transition-colors" />
                      
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};





const Contact = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/3 bg-[#0B0F19] rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-2xl font-bold mb-10 relative z-10">Contact Info</h3>
        <div className="space-y-8 relative z-10">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/10 rounded-xl">
              <MapPin className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Address</p>
              <p className="font-medium">
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/10 rounded-xl">
              <Phone className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Phone</p>
              <p className="font-medium">+012 345 6789</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/10 rounded-xl">
              <Mail className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="font-medium">example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 bg-white rounded-3xl p-10 border border-slate-100 shadow-xl">
        <div className="mb-8">
          <SectionTag text="Contact Us" />
          <h2 className="text-3xl font-bold text-slate-900">
            Get Your <span className="text-primary">Free Quote</span> Today!
          </h2>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email *</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Phone *</label>
            <input
              type="tel"
              placeholder="(123) 456-789"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Service Type
            </label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition text-slate-600">
              <option>Web Development</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700">Message</label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg w-full md:w-auto hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <SectionTag text="Our Newsletter" />
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
            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020617] text-white">
    {/* CTA Bar */}
    <div className="bg-[#0B0F19] border-b border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Let's <span className="text-primary">Connect</span> there
        </h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </div>

    {/* Main Footer Links */}
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Col 1 */}
      <div>
        <div className="text-2xl font-bold mb-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Send size={16} className="text-white" />
          </div>
          IT Company.
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
    <div className="bg-[#3B82F6] py-4 text-center text-white text-xs font-medium">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © 2025 IT Companyo. All Rights Reserved.</p>
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

// --- MAIN PAGE LAYOUT ---

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <WorkProcess />
        <MarqueeStrip />
        <WhyChooseUs />
        <MarqueeStrip />
        <Portfolio />
        <Testimonials />
        <MarqueeStrip />
        <Team />
        <StatsBanner />
        <Blog />
        <Awards />
        <Contact />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
