import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { siteData } from '../data/siteData';
import newsPlaceholder from '../assets/images/news/placeholder.jpg';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

const News = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced news items with detailed content
  const newsItems: Article[] = siteData.news.map((item, index) => ({
    ...item,
    image: item.image === 'news/placeholder.jpg' ? newsPlaceholder : item.image,
    content: getArticleContent(index),
  }));

  function getArticleContent(index: number): string {
    const contents = [
      // Article 1 - Featured
      `Naitiri Sugar Company continues to strengthen its position as a leading sugar producer in Kenya's agricultural sector. Our commitment to quality, sustainability, and community development has driven remarkable growth over the past year.

Our state-of-the-art processing facility in Bungoma County has achieved record production levels while maintaining the highest standards of quality control. The implementation of new technology and streamlined processes has resulted in a 15% increase in operational efficiency.

"We are proud of what we have accomplished, but more importantly, we are excited about the future," says the company's leadership. "Our focus remains on delivering premium quality sugar products while creating lasting value for our farmers, employees, and the communities we serve."

Key achievements this year include:
• Expanded our farmer network to over 500 active partners
• Achieved 99.8% purity rating across all product lines
• Reduced water consumption by 20% through new irrigation systems
• Launched community education programs reaching 2,000+ families

The company's growth strategy focuses on sustainable expansion, technological innovation, and deepening relationships with our farming communities. Plans for the coming year include facility upgrades, new product development, and expanded distribution channels across East Africa.`,

      // Article 2
      `At Naitiri Sugar Company, our farmers are the backbone of our success. We are proud to announce the launch of our Enhanced Farmer Support Program, designed to provide comprehensive assistance to our growing network of partner farmers across Bungoma County.

The program provides:
• Free agricultural training workshops on modern farming techniques
• Access to high-quality seeds and sustainable farming inputs
• Financial literacy programs and access to affordable credit
• Dedicated field officers for personalized technical support
• Guaranteed market access with fair and transparent pricing

"Our farmers are not just suppliers; they are our partners in growth," explains Mary Simiyu, Farmer Relations Director. "When our farmers succeed, we all succeed. This program represents our commitment to their long-term prosperity."

Since launching the program, we have:
• Trained over 1,000 farmers in sustainable agriculture practices
• Distributed 50,000+ improved seed varieties
• Facilitated access to affordable credit for 300+ farming families
• Increased average farmer yields by 25%

The program continues to expand, with plans to reach even more farmers in the coming seasons.`,

      // Article 3
      `Environmental responsibility is at the core of Naitiri Sugar Company's operations. We are pleased to share our latest sustainability initiatives that demonstrate our commitment to protecting the environment while maintaining productive agricultural operations.

Our comprehensive sustainability program includes:

Water Conservation:
• Implementation of drip irrigation systems reducing water usage by 30%
• Rainwater harvesting systems installed across our farms
• Water recycling programs in our processing facilities

Renewable Energy:
• Conversion of sugarcane bagasse into bioenergy
• Solar panel installation providing 40% of facility energy needs
• Reduced carbon emissions by 25% over the past three years

Biodiversity Protection:
• Establishment of green corridors connecting natural habitats
• Reforestation program with 10,000+ trees planted annually
• Protection of local wildlife habitats near farming areas

"Our commitment to sustainability is not just good for the environment—it's essential for the long-term viability of our industry," states the company's sustainability team. "We are dedicated to being responsible stewards of the land that sustains us."`,
    ];
    
    return contents[index] || contents[0];
  }

  const featuredArticle = newsItems[0];
  const remainingArticles = newsItems.slice(1);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  // Article Modal/Detail View
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <section className="relative bg-[#1a3c2a] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <button
              onClick={closeArticle}
              className="mb-6 inline-flex items-center gap-2 text-sm text-green-300 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to News
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                {selectedArticle.category}
              </span>
              <span className="text-sm text-white/60">{selectedArticle.date}</span>
            </div>
            
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {selectedArticle.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {selectedArticle.excerpt}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <div className="prose prose-lg max-w-none">
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('•')) {
                  // Bullet points
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={idx} className="space-y-2 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1a3c2a]" />
                          {item.replace('•', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.includes(':')) {
                  // Section headers
                  const [title, ...rest] = paragraph.split(':');
                  return (
                    <div key={idx} className="my-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{title.trim()}</h3>
                      {rest.join(':').trim() && (
                        <p className="text-gray-600 leading-relaxed">{rest.join(':').trim()}</p>
                      )}
                    </div>
                  );
                } else {
                  // Regular paragraphs
                  return (
                    <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Share/CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link to="/contact" onClick={scrollToTop}>
                  <button className="rounded-lg bg-[#1a3c2a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a5c3a]">
                    Contact Us About This Story
                  </button>
                </Link>
                <button
                  onClick={closeArticle}
                  className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                >
                  ← Back to All News
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Stories</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {remainingArticles.slice(0, 3).map((article) => (
                <button
                  key={article.id}
                  onClick={() => openArticle(article)}
                  className="text-left group"
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#1a3c2a]">{article.category}</span>
                      <h3 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#1a3c2a]">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main News Listing
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-[#1a3c2a] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              News & Insights
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.news.title}
            </h1>
            <div className="mx-auto mt-6 h-0.5 w-16 bg-green-400/50" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Stay informed with the latest updates, stories, and insights from 
              Naitiri Sugar Company.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {newsItems.length > 0 ? (
            <div className="space-y-16">
              
              {/* FEATURED ARTICLE */}
              {featuredArticle && (
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a3c2a]">Featured Story</span>
                    <span className="h-px flex-1 bg-gray-200" />
                  </div>
                  
                  <button
                    onClick={() => openArticle(featuredArticle)}
                    className="group relative w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-gray-300"
                  >
                    <div className="grid lg:grid-cols-2">
                      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                        <img
                          src={featuredArticle.image}
                          alt={featuredArticle.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#1a3c2a]/10 px-3 py-1 text-xs font-semibold text-[#1a3c2a]">
                            {featuredArticle.category}
                          </span>
                          <span className="text-xs text-gray-400">{featuredArticle.date}</span>
                        </div>
                        
                        <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#1a3c2a] lg:text-3xl xl:text-4xl">
                          {featuredArticle.title}
                        </h2>
                        
                        <p className="mt-4 text-sm leading-relaxed text-gray-500 lg:text-base">
                          {featuredArticle.excerpt}
                        </p>
                        
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a3c2a] transition-all group-hover:gap-3">
                          Read Full Story
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {/* MORE STORIES */}
              {remainingArticles.length > 0 && (
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a3c2a]">More Stories</span>
                    <span className="h-px flex-1 bg-gray-200" />
                  </div>
                  
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {remainingArticles.map((article) => (
                      <button
                        key={article.id}
                        onClick={() => openArticle(article)}
                        className="group relative flex flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-gray-300"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute left-3 top-3">
                            <span className="rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1a3c2a] shadow-sm backdrop-blur-sm">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-1 flex-col p-6">
                          <time className="text-xs text-gray-400">{article.date}</time>
                          
                          <h3 className="mt-2 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#1a3c2a] line-clamp-2">
                            {article.title}
                          </h3>
                          
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <span className="mt-4 inline-flex items-center gap-1 pt-3 border-t border-gray-100 text-xs font-semibold text-[#1a3c2a] transition-all group-hover:gap-2">
                            Read Article
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto max-w-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">No articles yet</h3>
                <p className="mt-2 text-sm text-gray-500">Check back soon for updates.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Never Miss an Update
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-green-100/60">
            Stay connected with the latest news and stories from Naitiri Sugar Company.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" onClick={scrollToTop}>
              <button className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#1a3c2a] shadow-sm transition-all hover:bg-gray-50 hover:shadow-md">
                Get In Touch →
              </button>
            </Link>
            <Link to="/about" onClick={scrollToTop}>
              <button className="rounded-lg border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;