import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import farmer1 from '../assets/images/farmers/Farmer-01.jpg';
import farmer2 from '../assets/images/farmers/farme-02.jpg';
import caneDelivery from '../assets/images/farmers/cane-delivery.jpg';

const Farmers = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={farmer1}
            alt="Sugarcane farmer inspecting crops in the field"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 to-green-950/60" />
        </div>

        <Container>
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Farmers & Partnerships
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Growing together,<br />
              <span className="text-lime-400">harvesting success.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              We partner with local sugarcane farmers to promote sustainable agriculture, 
              strengthen livelihoods, and build a reliable supply chain for quality sugar production.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center rounded-lg bg-lime-400 px-6 py-3 font-semibold text-green-950 transition-colors hover:bg-lime-300"
              >
                Partner With Us
                <span className="ml-2">→</span>
              </Link>
              <a
                href="#programs"
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Our Programs
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Our Farmer Network
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Strong farmers build a strong sugar industry.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                At Naitiri Sugar Company, farmers are at the heart of everything we do. 
                We believe long-term success comes from strong relationships, better farming 
                practices, and an efficient journey from field to factory.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Our support covers everything from seed selection and soil management to 
                harvesting techniques and timely transportation. We're committed to walking 
                alongside our farmers every step of the way.
              </p>
            </div>

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
                      ? 'bg-green-900 text-white'
                      : 'bg-green-50 text-gray-900'
                  }`}
                >
                  <p className={`text-3xl font-bold ${idx === 1 || idx === 3 ? 'text-lime-400' : 'text-green-800'}`}>
                    {stat.value}
                  </p>
                  <p className={`mt-1 text-sm ${idx === 1 || idx === 3 ? 'text-green-100' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Supporting Farmers From Field to Factory
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our farmer-focused approach connects agricultural development, technical 
              support, and efficient cane delivery into one integrated partnership.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={farmer2}
                alt="Smallholder sugarcane farmers gathered in a field, demonstrating community partnerships"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
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
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={farmer1}
                alt="Experienced farmer examining sugarcane crop quality and maturity"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
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
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={caneDelivery}
                alt="Freshly harvested sugarcane being transported to processing facility"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
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
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership */}
      <section className="bg-green-950 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Our Commitment
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Building lasting partnerships with our farmers.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                We aim to create a thriving agricultural ecosystem where farmers, communities, 
                and the sugar industry grow together through responsible practices and shared opportunity.
              </p>
              
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Trust & Transparency', desc: 'Fair pricing and open communication' },
                  { title: 'Sustainability', desc: 'Environmental stewardship' },
                  { title: 'Growth', desc: 'Continuous improvement' },
                  { title: 'Empowerment', desc: 'Building self-reliance' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-white/5 p-4">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="inline-flex items-center rounded-lg bg-lime-400 px-6 py-3 font-semibold text-green-950 transition-colors hover:bg-lime-300"
                >
                  Get In Touch
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  to="/sustainability"
                  onClick={scrollToTop}
                  className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Sustainability
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img
                src={farmer2}
                alt="Community of sugarcane farmers standing together in their fields"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-lime-400 py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-900">
                Work With Naitiri
              </p>
              <h2 className="mt-2 text-3xl font-bold text-green-950">
                Let's grow a stronger future together.
              </h2>
              <p className="mt-2 text-green-900/70">
                Ready to partner with us? Contact our team to learn more.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center rounded-lg bg-green-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-900"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="inline-flex items-center rounded-lg border-2 border-green-900/30 px-6 py-3 font-semibold text-green-900 transition-colors hover:bg-green-900/10"
              >
                About Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Farmers;