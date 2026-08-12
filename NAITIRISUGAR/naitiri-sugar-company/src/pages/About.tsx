import { Link } from 'react-router-dom';

// Image imports
import heroImage from '../assets/images/home/hero-sugarcane.jpeg';
import factoryImage from '../assets/images/home/factory.jpg';
import farmerImage from '../assets/images/home/farmer.jpg';
import sugarcaneFieldImage from '../assets/images/home/sugarcane-field.jpg';

const About = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Naitiri Sugar Company sugarcane fields" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/85 to-[#1a3c2a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                ABOUT US
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Growing With Purpose
              </h1>
              
              {/* Subtitle */}
              <p className="mt-4 text-xl text-green-200/80 sm:text-2xl lg:text-3xl">
                Building a Stronger Agricultural Future
              </p>
              
              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Discover who we are, what we stand for, and our unwavering commitment 
                to farmers, quality, and communities across Kenya.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#our-story">
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl">
                    Our Story ↓
                  </button>
                </a>
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg border-2 border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10">
                    Contact Us
                  </button>
                </Link>
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
      {/* OUR STORY */}
      {/* ============================================================ */}
      <section id="our-story" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                OUR STORY
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Who We Are
              </h2>
              
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#1a3c2a]">Naitiri Sugar Company</span> is committed 
                  to producing premium quality sugar while empowering the farmers and communities 
                  that make our work possible.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Founded in the heart of Bungoma County, we have grown from a small local operation 
                  into one of Kenya's most trusted agricultural enterprises. Our journey is built 
                  around agriculture, quality, farmers, and sustainable growth.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Today, we work with over <span className="font-semibold text-[#1a3c2a]">500 partner farmers</span>, 
                  operate modern processing facilities, and serve customers across East Africa with 
                  products that meet the highest international standards.
                </p>
              </div>
              
              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                {[
                  { value: '35+', label: 'Years Experience' },
                  { value: '500+', label: 'Partner Farmers' },
                  { value: 'ISO', label: 'Certified' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#1a3c2a] lg:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Images */}
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden rounded-xl shadow-xl">
                <img
                  src={factoryImage}
                  alt="Naitiri Sugar Company facility"
                  className="h-[400px] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-lg bg-[#1a3c2a]/80 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  Our Processing Facility
                </div>
              </div>
              
              {/* Floating Small Image */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <div className="overflow-hidden rounded-lg border-4 border-white shadow-lg">
                  <img
                    src={sugarcaneFieldImage}
                    alt="Sugarcane fields"
                    className="h-36 w-36 object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MISSION & VISION */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-green-300">
              <span className="h-px w-8 bg-green-300" />
              OUR PURPOSE
              <span className="h-px w-8 bg-green-300" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="rounded-xl bg-white/5 p-10 backdrop-blur-sm border border-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-7 w-7 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-green-100/70">
                To produce premium quality sugar through sustainable agricultural practices, 
                empower local farmers, and deliver exceptional value to our customers across East Africa.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-xl bg-white/5 p-10 backdrop-blur-sm border border-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-7 w-7 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-green-100/70">
                To be East Africa's most trusted sugar producer, recognized for innovation, 
                sustainability, and lasting positive impact on farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR VALUES */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR VALUES
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Quality',
                description: 'Every grain of sugar meets rigorous international standards through comprehensive quality control at every stage.',
              },
              {
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                title: 'Integrity',
                description: 'Honest, transparent relationships with farmers, customers, and partners built on trust and mutual respect.',
              },
              {
                icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
                title: 'Sustainability',
                description: 'Environmentally responsible practices that preserve natural resources for future generations.',
              },
            ].map((item) => (
              <div key={item.title} className="group text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a3c2a]/10 transition-all group-hover:bg-[#1a3c2a]/20 group-hover:scale-110">
                  <svg className="h-8 w-8 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR FARMERS */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Image */}
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/80 via-[#1a3c2a]/20 to-transparent z-10" />
              <img
                src={farmerImage}
                alt="Local farmer partner of Naitiri Sugar Company"
                className="h-[500px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="rounded-lg bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#1a3c2a]">Partner Farmer Network</p>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                OUR FARMERS
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Supporting the People Behind Our Agriculture
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Our success is built on the hard work and dedication of over 500 partner 
                farmers across Bungoma County. We believe in creating lasting partnerships 
                that benefit everyone involved.
              </p>
              
              {/* Benefit Cards */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Fair Partnerships',
                    description: 'Fair prices and reliable market access for our farming partners.',
                  },
                  {
                    title: 'Training & Support',
                    description: 'Ongoing agricultural training and resources to improve crop yields.',
                  },
                  {
                    title: 'Sustainable Farming',
                    description: 'Environmentally responsible farming methods that protect the land.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a3c2a]/10">
                      <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR JOURNEY */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR JOURNEY
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-5 h-px bg-[#1a3c2a]/20 hidden md:block" />
            
            {/* Timeline Items */}
            <div className="relative grid gap-8 md:grid-cols-4">
              {[
                { year: '1985', title: 'Beginning', description: 'Company founded in Bungoma County with a vision to transform local agriculture.' },
                { year: '1995', title: 'Growth', description: 'Expanded processing capacity and built a network of partner farmers.' },
                { year: '2010', title: 'Expansion', description: 'Achieved ISO certification and modernized all processing facilities.' },
                { year: 'Today', title: 'Future', description: 'Leading the way in sustainable sugar production across East Africa.' },
              ].map((item, index) => (
                <div key={item.year} className="relative pt-12 text-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:block">
                    <div className={`h-2.5 w-2.5 rounded-full ${
                      index === 3 ? 'bg-[#1a3c2a] ring-4 ring-[#1a3c2a]/20' : 'bg-white border-2 border-[#1a3c2a]'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <span className="text-sm font-bold text-[#1a3c2a]">{item.year}</span>
                  <h4 className="mt-2 font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR COMMITMENT */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR COMMITMENT
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>

            {/* Pillars */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-[#1a3c2a] px-6 py-2 text-sm font-semibold text-white">
                Sustainability
              </span>
              <span className="text-gray-300">•</span>
              <span className="rounded-full bg-[#1a3c2a]/10 px-6 py-2 text-sm font-semibold text-[#1a3c2a]">
                Quality
              </span>
              <span className="text-gray-300">•</span>
              <span className="rounded-full bg-[#1a3c2a]/10 px-6 py-2 text-sm font-semibold text-[#1a3c2a]">
                Community
              </span>
            </div>

            <p className="mt-8 text-base leading-relaxed text-gray-600">
              Building a sustainable agricultural future together with farmers and 
              communities. We are committed to responsible practices that benefit 
              everyone — from the fields to your table.
            </p>

            <Link to="/contact" onClick={scrollToTop}>
              <button className="mt-8 rounded-lg bg-[#1a3c2a] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#2a5c3a] hover:shadow-xl">
                Get In Touch →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
    </div>
  );
};

export default About;