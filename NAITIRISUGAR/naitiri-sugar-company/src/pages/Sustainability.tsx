import Container from '../components/Container';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import environmentImg from '../assets/images/sustainability/environment.jpeg';
import communityImg from '../assets/images/sustainability/community.jpg';

const Sustainability = () => {
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
            src={environmentImg}
            alt="Sustainable sugarcane farming at Naitiri Sugar Company"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/80 to-[#1a3c2a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-[80vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                OUR RESPONSIBILITY
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.sustainability.title}
              </h1>
              
              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                We are committed to sustainable practices that protect the environment, 
                support our communities, and ensure a better future for generations to come.
              </p>
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
      {/* INTRODUCTION */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              SUSTAINABILITY AT NAITIRI
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Balancing Profit, People, and Planet
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Sustainability is woven into every aspect of our operations. From responsible 
              farming to community development, we strive to create lasting positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ENVIRONMENTAL STEWARDSHIP */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left - Professional Image Display */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={environmentImg}
                  alt="Sustainable farming methods including water conservation and soil management at Naitiri Sugar"
                  className="h-[500px] w-full object-cover object-center"
                  loading="lazy"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/40 via-transparent to-transparent" />
                
                {/* Image label */}
                <div className="absolute bottom-6 left-6">
                  <div className="rounded-lg bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg">
                    <p className="text-sm font-semibold text-[#1a3c2a]">Environmental Conservation</p>
                    <p className="text-xs text-gray-500 mt-0.5">Our sugarcane fields</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#1a3c2a]/5 hidden lg:block" />
              <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-[#1a3c2a]/5 hidden lg:block" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                ENVIRONMENTAL STEWARDSHIP
              </div>
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.sustainability.envTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t.sustainability.envText}
              </p>
              
              {/* Environmental Initiatives */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Water Conservation',
                    description: 'Efficient irrigation systems and rainwater harvesting to reduce water consumption across our farms.',
                  },
                  {
                    title: 'Soil Health Management',
                    description: 'Crop rotation, organic composting, and minimal tillage practices to maintain soil fertility naturally.',
                  },
                  {
                    title: 'Biodiversity Protection',
                    description: 'Preserving natural habitats and maintaining green corridors throughout our agricultural operations.',
                  },
                  {
                    title: 'Waste Reduction',
                    description: 'Converting sugarcane bagasse into renewable energy and implementing zero-waste processing systems.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-6 w-6 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMMUNITY DEVELOPMENT */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                COMMUNITY IMPACT
              </div>
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.sustainability.communityTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t.sustainability.communityText}
              </p>
              
              {/* Community Initiatives */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Education & Training',
                    description: 'Providing agricultural training programs and educational support for farming families and local youth.',
                  },
                  {
                    title: 'Healthcare Access',
                    description: 'Supporting local health facilities and organizing medical camps for farming communities.',
                  },
                  {
                    title: 'Economic Empowerment',
                    description: 'Creating employment opportunities and supporting local businesses through our supply chain.',
                  },
                  {
                    title: 'Infrastructure Development',
                    description: 'Investing in rural roads, water systems, and community facilities to improve quality of life.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-xl bg-gray-50 p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-6 w-6 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Professional Image Display */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={communityImg}
                  alt="Community members benefiting from Naitiri Sugar social development programs"
                  className="h-[500px] w-full object-cover object-center"
                  loading="lazy"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/40 via-transparent to-transparent" />
                
                {/* Image label */}
                <div className="absolute bottom-6 left-6">
                  <div className="rounded-lg bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg">
                    <p className="text-sm font-semibold text-[#1a3c2a]">Community Development</p>
                    <p className="text-xs text-gray-500 mt-0.5">Empowering local communities</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#1a3c2a]/5 hidden lg:block" />
              <div className="absolute -right-4 -bottom-4 h-28 w-28 rounded-full bg-[#1a3c2a]/5 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LOOKING AHEAD - Future Goals */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-green-300">
              <span className="h-px w-8 bg-green-300" />
              LOOKING AHEAD
              <span className="h-px w-8 bg-green-300" />
            </div>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              {t.sustainability.futureTitle}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-green-100/70">
              {t.sustainability.futureText}
            </p>

            {/* Goals Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  value: '2030',
                  label: 'Carbon Neutral Target',
                  description: 'Working towards complete carbon neutrality across all operations.',
                },
                {
                  value: '50%',
                  label: 'Water Reduction Goal',
                  description: 'Reducing water usage through innovative irrigation technologies.',
                },
                {
                  value: '100%',
                  label: 'Community Commitment',
                  description: 'Continuing to invest in the communities that support our success.',
                },
              ].map((goal, idx) => (
                <div key={idx} className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10">
                  <p className="text-5xl font-bold text-white">{goal.value}</p>
                  <h4 className="mt-4 text-lg font-semibold text-white">{goal.label}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-green-100/60">{goal.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link to="/contact" onClick={scrollToTop}>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5">
                  Learn More About Our Initiatives
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}

    </div>
  );
};

export default Sustainability;