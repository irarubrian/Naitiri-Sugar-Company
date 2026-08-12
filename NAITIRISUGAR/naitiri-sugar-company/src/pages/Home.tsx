import { useLanguage } from '../i18n/LanguageContext';
import { siteData } from '../data/siteData';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Image imports
import heroImage from '../assets/images/home/hero-sugarcane.jpeg';
import factoryImage from '../assets/images/home/factory.jpg';
import farmerImage from '../assets/images/home/farmer.jpg';
import sugarcaneFieldImage from '../assets/images/home/sugarcane-field.jpg';
import sugarImage from '../assets/images/products/sugar.jpg';
import industrialSugarImage from '../assets/images/products/industrial-sugar.jpg';
import packagingImage from '../assets/images/products/packaging.jpg';
import environmentImage from '../assets/images/sustainability/environment.jpeg';
import communityImage from '../assets/images/sustainability/community.jpg';
import careersImage from '../assets/images/careers/careers.jpg';
import newsPlaceholder from '../assets/images/news/placeholder.jpg';

const Home = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: siteData.stats.years, label: 'Years of Experience', suffix: '+' },
    { value: siteData.stats.farmers, label: 'Farmers Supported', suffix: '+' },
    { value: siteData.stats.production, label: 'Annual Production (MT)', suffix: 'T' },
    { value: siteData.stats.communities, label: 'Communities Impacted', suffix: '+' },
  ];

  const news = siteData.news.map((item) => ({
    ...item,
    image: item.image === 'news/placeholder.jpg' ? newsPlaceholder : item.image,
  }));

  const products = [
    {
      img: sugarImage,
      title: 'Premium Sugar',
      desc: t.home.products.sugar,
      link: '/products',
      category: 'Consumer'
    },
    {
      img: industrialSugarImage,
      title: 'Industrial Sugar',
      desc: t.home.products.industrial,
      link: '/products',
      category: 'B2B'
    },
    {
      img: packagingImage,
      title: 'Packaging Solutions',
      desc: t.home.products.packaging,
      link: '/products',
      category: 'Sustainable'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsStatsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isStatsVisible) {
      stats.forEach((stat) => {
        const key = stat.label;
        const end = stat.value;
        let start = 0;
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          start = Math.min(increment * currentStep, end);
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
          
          if (currentStep >= steps) {
            clearInterval(timer);
            setCounters(prev => ({ ...prev, [key]: end }));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isStatsVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Vast sugarcane fields at sunrise showcasing sustainable agriculture" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/75 to-[#1a3c2a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl text-white">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Est. 1985 • Sustainable Agriculture
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Growing Agriculture.<br />
                Producing Quality.<br />
                Building Communities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                {t.home.heroSub}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/products" onClick={scrollToTop}>
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5">
                    {t.home.heroBtn1}
                  </button>
                </Link>
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg border-2 border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5">
                    {t.home.heroBtn2}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <svg className="h-6 w-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section ref={statsRef} className="border-b border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#1a3c2a] lg:text-5xl">
                  {isStatsVisible ? (counters[stat.label] || 0) : 0}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
                <div className="mx-auto mt-3 h-0.5 w-8 bg-[#1a3c2a]/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                ABOUT NAITIRI SUGAR
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                {t.home.introTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                {t.home.introText}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link to="/about" onClick={scrollToTop}>
                  <button className="rounded-lg bg-[#1a3c2a] px-6 py-3 font-semibold text-white transition-all hover:bg-[#2a5c3a] hover:shadow-lg hover:-translate-y-0.5">
                    {t.home.introBtn}
                  </button>
                </Link>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a3c2a]" />
                    Quality Assured
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a3c2a]" />
                    BRC Certified
                  </span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 via-transparent to-transparent z-10" />
              <img
                src={factoryImage}
                alt="Modern sugar processing facility with advanced machinery"
                className="h-[450px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 z-20 rounded-lg bg-[#1a3c2a]/80 px-4 py-2 text-sm text-white backdrop-blur-sm">
                Modern Sugar Processing Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGRICULTURAL STORY */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR AGRICULTURAL STORY
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t.home.networkTitle}
            </h2>
            <p className="mt-4 text-base text-gray-600">
              From farm to table — empowering farmers and communities through sustainable agriculture.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { 
                img: farmerImage, 
                title: 'Empowering Farmers', 
                text: t.home.networkText,
                alt: 'Local farmer proudly holding freshly harvested sugarcane' 
              },
              { 
                img: sugarcaneFieldImage, 
                title: 'Sustainable Farming', 
                text: t.home.networkText,
                alt: 'Lush green sugarcane fields stretching across the landscape' 
              }
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/80 via-[#1a3c2a]/30 to-transparent z-10" />
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-[400px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 p-8 text-white z-20">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-green-100">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR PRODUCTS
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t.home.productsTitle}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <Link key={product.title} to={product.link} className="group" onClick={scrollToTop}>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-[#1a3c2a] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#1a3c2a]">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.desc}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#1a3c2a] transition-all group-hover:gap-2">
                      Learn More
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Uncompromising Quality',
                desc: 'From field to final product, every batch meets the highest international standards.'
              },
              {
                icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
                title: 'Sustainable Agriculture',
                desc: 'Committed to environmentally responsible farming practices for future generations.'
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                title: 'Farmer Partnerships',
                desc: 'Building lasting relationships with local farmers through fair trade and support.'
              }
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a3c2a]/10 transition-all group-hover:bg-[#1a3c2a]/20 group-hover:scale-110">
                  <svg className="h-8 w-8 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              SUSTAINABILITY
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t.home.sustainabilityTitle}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { 
                img: environmentImage, 
                title: 'Environmental Stewardship', 
                text: t.home.sustainabilityText,
                alt: 'Green environment and sustainable farming practices' 
              },
              { 
                img: communityImage, 
                title: 'Community Development', 
                text: t.home.sustainabilityText,
                alt: 'Community engagement and social development programs' 
              }
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/80 via-[#1a3c2a]/30 to-transparent z-10" />
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-[400px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 p-8 text-white z-20">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-green-100">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                INSIGHTS
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.home.newsTitle}
              </h2>
            </div>
            <Link to="/news" onClick={scrollToTop}>
              <button className="rounded-lg border-2 border-[#1a3c2a] px-6 py-2.5 font-semibold text-[#1a3c2a] transition-all hover:bg-[#1a3c2a] hover:text-white">
                View All →
              </button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {news.slice(0, 3).map((article) => (
              <Link to="/news" key={article.id} onClick={scrollToTop} className="group">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#1a3c2a] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#1a3c2a]">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-2">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#1a3c2a] transition-all group-hover:gap-2">
                      Read More
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;