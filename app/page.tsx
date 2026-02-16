import Header from "@/components/header";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import About from "@/components/about";
import Services from "@/components/services";
import WorkProcess from "@/components/work-process";
import WhyChooseUs from "@/components/why-choose-us";
import Portfolio from "@/components/portfolio";
import Awards from "@/components/awards";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";
import StatsBanner from "@/components/stats-banner";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Newsletter from "@/components/news-letter";
import Footer from "@/components/footer";
import FAQSection from "@/components/faqs";

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
        <Awards />
        <Testimonials />
        <MarqueeStrip />
        <Team />
        <StatsBanner />
        <Blog />
        <Contact />
        <FAQSection />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
