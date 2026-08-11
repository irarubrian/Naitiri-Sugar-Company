import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/Button';
import { siteData } from '../data/siteData';
import newsPlaceholder from '../assets/images/news/placeholder.jpg';

const News = () => {
  const { t } = useLanguage();

  // Map news items to include image
  const newsItems = siteData.news.map((item) => ({
    ...item,
    image: item.image === 'news/placeholder.jpg' ? newsPlaceholder : undefined,
  }));

  return (
    <div className="py-16 bg-white">
      <Container>
        <SectionTitle title={t.news.title} className="mb-12" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-green-700">
                  <span>{article.category}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{article.title}</h3>
                <p className="mt-2 text-gray-600">{article.excerpt}</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">{t.common.readMore}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default News;