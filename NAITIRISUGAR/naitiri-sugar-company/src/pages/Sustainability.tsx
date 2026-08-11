import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import environmentImg from '../assets/images/sustainability/environment.jpeg';
import communityImg from '../assets/images/sustainability/community.jpg';

const Sustainability = () => {
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
            src={environmentImg}
            alt="Lush green sugarcane fields demonstrating Naitiri Sugar's commitment to environmental sustainability and responsible farming practices"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 to-green-950/50" />
        </div>

        <Container>
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Our Responsibility
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t.sustainability.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              We are committed to sustainable practices that protect the environment, 
              support our communities, and ensure a better future for generations to come.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Sustainability at Naitiri
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Balancing Profit, People, and Planet
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Sustainability is woven into every aspect of our operations. From responsible 
              farming to community development, we strive to create lasting positive impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Environmental Sustainability */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-xl">
              <img
                src={environmentImg}
                alt="Expansive sugarcane plantation showcasing Naitiri Sugar's sustainable farming methods, including water conservation, soil management, and biodiversity preservation across acres of green fields"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                Environmental Stewardship
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                {t.sustainability.envTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t.sustainability.envText}
              </p>
              
              <div className="mt-6 space-y-3">
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
                  <div key={idx} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-4 w-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Development */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                Community Impact
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                {t.sustainability.communityTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t.sustainability.communityText}
              </p>
              
              <div className="mt-6 space-y-3">
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
                  <div key={idx} className="flex gap-3 rounded-lg bg-green-50 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-200">
                      <svg className="h-4 w-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-xl lg:order-2">
              <img
                src={communityImg}
                alt="Local community members benefiting from Naitiri Sugar's social development programs, including education initiatives, healthcare support, and economic empowerment projects in rural areas"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Future Commitment */}
      <section className="bg-green-950 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Looking Ahead
            </p>
            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {t.sustainability.futureTitle}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              {t.sustainability.futureText}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
                <div key={idx} className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-lime-400">{goal.value}</p>
                  <h4 className="mt-2 font-semibold text-white">{goal.label}</h4>
                  <p className="mt-2 text-sm text-gray-400">{goal.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center rounded-lg bg-lime-400 px-6 py-3 font-semibold text-green-950 transition-colors hover:bg-lime-300"
              >
                Learn More About Our Initiatives
                <span className="ml-2">→</span>
              </Link>
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
                Join Our Journey
              </p>
              <h2 className="mt-2 text-3xl font-bold text-green-950">
                Together, we can make a difference.
              </h2>
              <p className="mt-2 text-green-900/70">
                Partner with us in building a sustainable future for all.
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
                to="/farmers"
                onClick={scrollToTop}
                className="inline-flex items-center rounded-lg border-2 border-green-900/30 px-6 py-3 font-semibold text-green-900 transition-colors hover:bg-green-900/10"
              >
                Our Farmers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Sustainability;