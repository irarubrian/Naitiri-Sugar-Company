import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import sugarImg from '../assets/images/products/sugar.jpg';
import industrialImg from '../assets/images/products/industrial-sugar.jpg';
import packagingImg from '../assets/images/products/packaging.jpg';

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
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <Container>
        {/* Page Description */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of premium sugar products, crafted with care to meet the needs of 
            households, businesses, and industrial operations across East Africa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-[#1a3c2a] px-3 py-1 text-xs font-medium text-white">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-medium uppercase tracking-wider text-green-600">
                  {product.category}
                </span>
                
                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mt-4 space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Application */}
                <div className="mt-4 rounded-lg bg-gray-50 p-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#1a3c2a]">Application:</span> {product.use}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  <Link to="/contact" onClick={scrollToTop} className="flex-1">
                    <button className="w-full rounded-lg bg-[#1a3c2a] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a5c3a]">
                      Request Quote
                    </button>
                  </Link>
                  <Link to="/about" onClick={scrollToTop}>
                    <button className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 rounded-2xl bg-[#1a3c2a] p-10 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Why Choose Naitiri Sugar?
            </h2>
            <p className="mt-4 text-green-100/80">
              We combine decades of agricultural expertise with modern processing 
              technology to deliver sugar products of exceptional quality.
            </p>
          </div>
          
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Certified Quality', desc: 'ISO 22000 certified with rigorous quality control.' },
              { title: 'Sustainable', desc: 'Environmentally responsible farming and processing.' },
              { title: 'Reliable Supply', desc: 'Consistent delivery across East Africa.' },
              { title: 'Competitive Pricing', desc: 'Fair prices without compromising quality.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-green-100/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="mt-2 text-gray-600">
            Contact our team to discuss your sugar supply needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" onClick={scrollToTop}>
              <button className="rounded-lg bg-[#1a3c2a] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2a5c3a]">
                Contact Sales
              </button>
            </Link>
            <Link to="/about" onClick={scrollToTop}>
              <button className="rounded-lg border border-[#1a3c2a] px-6 py-3 font-semibold text-[#1a3c2a] transition-colors hover:bg-[#1a3c2a] hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;