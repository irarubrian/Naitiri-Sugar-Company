import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
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
      icon: '🍯',
      category: 'Premium Range',
      badge: 'Bestseller',
      features: ['Pure & refined', 'Household & industrial', 'Consistent quality'],
    },
    {
      id: 2,
      image: industrialImg,
      title: t.products.industrialTitle,
      description: t.products.industrialDesc,
      use: t.products.industrialUse,
      icon: '🏭',
      category: 'Industrial Range',
      badge: 'Bulk Supply',
      features: ['High purity', 'Custom packaging', 'Competitive pricing'],
    },
    {
      id: 3,
      image: packagingImg,
      title: t.products.packagingTitle,
      description: t.products.packagingDesc,
      use: t.products.packagingUse,
      icon: '📦',
      category: 'Packaging Solutions',
      badge: 'Eco-Friendly',
      features: ['Sustainable materials', 'Custom designs', 'Freshness guaranteed'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50/30">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 mb-3">
            <span className="h-px w-8 bg-green-700" />
            OUR PRODUCT CATALOGUE
            <span className="h-px w-8 bg-green-700" />
          </div>
          <SectionTitle 
            title={t.products.title} 
            subtitle="Premium quality sugar products for every need — from household kitchens to industrial manufacturing."
            className="mb-0"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-green-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-yellow-500 text-green-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-green-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {product.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                  {product.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-4 space-y-1.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-green-50 rounded-lg p-3 border border-green-100">
                  <p className="text-sm text-green-800 font-medium">
                    <span className="font-bold">Application:</span> {product.use}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link to="/about" onClick={scrollToTop}>
                    <Button variant="primary" size="sm">
                      {t.common.learnMore} →
                    </Button>
                  </Link>
                  <Link to="/contact" onClick={scrollToTop}>
                    <Button variant="outline" size="sm">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-gradient-to-br from-green-900 to-green-800 text-white">
              <h3 className="text-3xl font-bold">Why Choose Naitiri Sugar Products?</h3>
              <p className="mt-4 text-green-100/80 text-lg leading-relaxed">
                We combine decades of agricultural expertise with modern processing technology to deliver sugar products of exceptional quality.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold">Uncompromising Quality</h4>
                    <p className="text-green-100/70 text-sm">Every batch meets international food safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold">Sustainable Production</h4>
                    <p className="text-green-100/70 text-sm">Environmentally responsible farming and processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold">Reliable Supply Chain</h4>
                    <p className="text-green-100/70 text-sm">Consistent delivery to customers across East Africa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-16 bg-green-50 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-gray-900">Need a Custom Solution?</h4>
              <p className="mt-3 text-gray-600">
                We work with businesses of all sizes to provide tailored sugar solutions. 
                Contact our team to discuss your specific requirements.
              </p>
              <div className="mt-6">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button variant="primary" size="lg">
                    Contact Our Team →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Ready to experience the Naitiri Sugar difference?
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/about" onClick={scrollToTop}>
              <Button variant="outline" size="lg">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;