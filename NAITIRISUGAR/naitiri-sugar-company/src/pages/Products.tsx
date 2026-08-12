import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';

// Image imports
import sugarImg from '../assets/images/products/sugar.jpg';
import industrialImg from '../assets/images/products/industrial-sugar.jpg';
import packagingImg from '../assets/images/products/packaging.jpg';
import heroImage from '../assets/images/home/hero-sugarcane.jpeg';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      image: sugarImg,
      title: t.products.sugarTitle,
      description: t.products.sugarDesc,
      use: t.products.sugarUse,
      category: 'Premium Range',
      badge: 'Bestseller',
      features: [
        'Pure & refined crystals',
        'Household & industrial grade',
        'Consistent quality assured',
      ],
      specs: {
        purity: '99.8%',
        packaging: '500g - 50kg',
        origin: 'Kenya',
      },
    },
    {
      id: 2,
      image: industrialImg,
      title: t.products.industrialTitle,
      description: t.products.industrialDesc,
      use: t.products.industrialUse,
      category: 'Industrial Range',
      badge: 'Bulk Supply',
      features: [
        'High purity standards',
        'Custom packaging options',
        'Competitive bulk pricing',
      ],
      specs: {
        purity: '99.9%',
        packaging: '25kg - 1000kg',
        origin: 'Kenya',
      },
    },
    {
      id: 3,
      image: packagingImg,
      title: t.products.packagingTitle,
      description: t.products.packagingDesc,
      use: t.products.packagingUse,
      category: 'Packaging Solutions',
      badge: 'Eco-Friendly',
      features: [
        'Sustainable materials',
        'Custom design support',
        'Freshness guaranteed',
      ],
      specs: {
        material: 'Food-grade',
        options: 'Various sizes',
        certification: 'ISO 22000',
      },
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Naitiri Sugar Company products" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/85 to-[#1a3c2a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-[70vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                OUR PRODUCTS
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Premium Sugar.<br />
                Trusted Quality.
              </h1>
              
              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Crafted with precision and care, our premium sugar products serve 
                every scale — from intimate kitchens to expansive industrial operations.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#products-grid">
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl">
                    Explore Products ↓
                  </button>
                </a>
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg border-2 border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10">
                    Request Quote
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
      {/* PRODUCTS GRID */}
      {/* ============================================================ */}
      <section id="products-grid" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR PRODUCT RANGE
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Quality Sugar for Every Need
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Premium quality sugar products for every need — from household kitchens to industrial manufacturing.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1a3c2a] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#1a3c2a]">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#1a3c2a]">
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-gray-50 p-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xs font-semibold text-gray-900 uppercase">{value}</div>
                        <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="mt-5 space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1a3c2a]/10">
                          <svg className="h-3 w-3 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Application */}
                  <div className="mt-5 rounded-xl border border-[#1a3c2a]/10 bg-[#1a3c2a]/5 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg className="h-4 w-4 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1a3c2a]">
                        Application
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{product.use}</p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Link to="/contact" onClick={scrollToTop} className="flex-1">
                      <button className="w-full rounded-lg bg-[#1a3c2a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2a5c3a] hover:shadow-lg active:scale-95">
                        Request Quote
                      </button>
                    </Link>
                    <Link to="/about" onClick={scrollToTop}>
                      <button className="rounded-lg border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#1a3c2a] hover:text-[#1a3c2a] hover:bg-[#1a3c2a]/5 active:scale-95">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY CHOOSE US */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-green-300">
                <span className="h-px w-8 bg-green-300" />
                WHY CHOOSE US
              </div>
              
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                The Naitiri Sugar Difference
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-green-100/70">
                We combine decades of agricultural expertise with modern processing 
                technology to deliver sugar products of exceptional quality and consistency.
              </p>
              
              {/* Benefits */}
              <div className="mt-10 space-y-6">
                {[
                  {
                    title: 'Uncompromising Quality',
                    description: 'Every batch meets international food safety standards through rigorous quality control.',
                  },
                  {
                    title: 'Sustainable Production',
                    description: 'Environmentally responsible farming and processing methods for future generations.',
                  },
                  {
                    title: 'Reliable Supply Chain',
                    description: 'Consistent delivery to customers across East Africa with competitive pricing.',
                  },
                  {
                    title: 'Farmer Partnerships',
                    description: 'Supporting over 500 local farmers through fair trade and sustainable practices.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-green-100/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact Card */}
            <div>
              <div className="rounded-xl bg-white p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  Need a Custom Solution?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  We work with businesses of all sizes to provide tailored sugar solutions. 
                  Contact our team to discuss your specific requirements.
                </p>
                
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 743435490
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sales@naitirisugar.com
                  </div>
                </div>
                
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="mt-8 w-full rounded-lg bg-[#1a3c2a] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#2a5c3a] hover:shadow-lg">
                    Contact Our Team →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
    </div>
  );
};

export default Products;