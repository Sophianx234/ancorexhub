


const StatsBanner = () => (
  <section
    className="relative py-20 bg-fixed bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/img-10.webp')",
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
export default StatsBanner;