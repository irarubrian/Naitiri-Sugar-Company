import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import farmer1 from '../assets/images/farmers/Farmer-01.jpg';
import farmer2 from '../assets/images/farmers/farme-02.jpg';
import caneDelivery from '../assets/images/farmers/cane-delivery.jpg';

const Farmers = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={farmer1}
            alt="Sugarcane farmer inspecting crops in the field"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/85 to-[#1a3c2a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-[80vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                FARMERS & PARTNERSHIPS
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Growing Together,<br />
                Harvesting Success.
              </h1>
              
              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                We partner with local sugarcane farmers to promote sustainable agriculture, 
                strengthen livelihoods, and build a reliable supply chain for quality sugar production.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl">
                    Partner With Us →
                  </button>
                </Link>
                <a href="#programs">
                  <button className="rounded-lg border-2 border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10">
                    Our Programs
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
            <svg className="h-6 w-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR FARMER NETWORK */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                OUR FARMER NETWORK
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Strong Farmers Build a Strong Sugar Industry.
              </h2>
              
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-gray-600">
                  At Naitiri Sugar Company, farmers are at the heart of everything we do. 
                  We believe long-term success comes from strong relationships, better farming 
                  practices, and an efficient journey from field to factory.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Our support covers everything from seed selection and soil management to 
                  harvesting techniques and timely transportation. We're committed to walking 
                  alongside our farmers every step of the way.
                </p>
              </div>
              
              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                {[
                  { value: '500+', label: 'Partner Farmers' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '100%', label: 'Farmer-Focused' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#1a3c2a] lg:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Partner Farmers' },
                { value: '15+', label: 'Years Experience' },
                { value: '100%', label: 'Farmer-Focused' },
                { value: '01', label: 'Shared Vision' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-6 ${
                    idx === 1 || idx === 3
                      ? 'bg-[#1a3c2a] text-white'
                      : 'bg-gray-50 text-gray-900'
                  }`}
                >
                  <p className={`text-3xl font-bold ${idx === 1 || idx === 3 ? 'text-white' : 'text-[#1a3c2a]'}`}>
                    {stat.value}
                  </p>
                  <p className={`mt-1 text-sm ${idx === 1 || idx === 3 ? 'text-green-100/70' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROGRAMS */}
      {/* ============================================================ */}
      <section id="programs" className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              WHAT WE DO
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Supporting Farmers From Field to Factory
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Our farmer-focused approach connects agricultural development, technical 
              support, and efficient cane delivery into one integrated partnership.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - Farmer Support */}
            <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={farmer2}
                  alt="Smallholder sugarcane farmers gathered in a field"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3c2a]">
                  Farmer Support
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {t.farmers.supportTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {t.farmers.supportText}
                </p>
                <ul className="mt-4 space-y-2">
                  {['Agricultural training', 'Quality inputs & seeds', 'Financial assistance', 'Technical field support'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3c2a]/10">
                        <svg className="h-3 w-3 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 - Cane Development */}
            <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={farmer1}
                  alt="Experienced farmer examining sugarcane crop quality"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3c2a]">
                  Cane Development
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {t.farmers.caneTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {t.farmers.caneText}
                </p>
                <ul className="mt-4 space-y-2">
                  {['Improved seed varieties', 'Soil management', 'Water conservation', 'Pest & disease control'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3c2a]/10">
                        <svg className="h-3 w-3 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 - Cane Delivery */}
            <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caneDelivery}
                  alt="Freshly harvested sugarcane being transported"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3c2a]">
                  Cane Delivery
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {t.farmers.deliveryTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {t.farmers.deliveryText}
                </p>
                <ul className="mt-4 space-y-2">
                  {['Efficient scheduling', 'Modern transport fleet', 'Quick turnaround', 'Fair weighing & payment'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3c2a]/10">
                        <svg className="h-3 w-3 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR COMMITMENT */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-green-300">
                <span className="h-px w-8 bg-green-300" />
                OUR COMMITMENT
              </div>
              
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Building Lasting Partnerships With Our Farmers.
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-green-100/70">
                We aim to create a thriving agricultural ecosystem where farmers, communities, 
                and the sugar industry grow together through responsible practices and shared opportunity.
              </p>
              
              {/* Values Grid */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Trust & Transparency', desc: 'Fair pricing and open communication' },
                  { title: 'Sustainability', desc: 'Environmental stewardship' },
                  { title: 'Growth', desc: 'Continuous improvement' },
                  { title: 'Empowerment', desc: 'Building self-reliance' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-white/5 p-4">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-green-100/60">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-[#1a3c2a] transition-all hover:bg-gray-50 hover:shadow-lg">
                    Get In Touch →
                  </button>
                </Link>
                <Link to="/sustainability" onClick={scrollToTop}>
                  <button className="rounded-lg border-2 border-white/40 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                    Sustainability
                  </button>
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src={farmer2}
                alt="Community of sugarcane farmers standing together in their fields"
                className="h-96 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
      {/* ============================================================ */}
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              WORK WITH US
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Let's Grow a Stronger Future Together.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to partner with us? Contact our team to learn more about our farmer programs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" onClick={scrollToTop}>
                <button className="rounded-lg bg-[#1a3c2a] px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[#2a5c3a] hover:shadow-xl">
                  Contact Us →
                </button>
              </Link>
              <Link to="/about" onClick={scrollToTop}>
                <button className="rounded-lg border-2 border-[#1a3c2a] px-8 py-3.5 font-semibold text-[#1a3c2a] transition-all hover:bg-[#1a3c2a] hover:text-white">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farmers;