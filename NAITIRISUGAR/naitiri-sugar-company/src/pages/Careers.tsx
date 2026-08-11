import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/Button';
import { siteData } from '../data/siteData';
import careersImage from '../assets/images/careers/careers.jpg';

const Careers = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-white">
      <Container>
        <SectionTitle title={t.careers.title} className="mb-12" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <img src={careersImage} alt="Careers at Naitiri Sugar" className="rounded-lg shadow-lg object-cover h-64 w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t.careers.whyTitle}</h3>
            <p className="mt-2 text-gray-600">{t.careers.whyText}</p>
            <ul className="mt-4 space-y-2">
              {t.careers.whyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-700">✔</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">{t.careers.opportunitiesTitle}</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteData.careers.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg p-6 shadow-md border border-green-100">
                <h4 className="text-lg font-bold text-gray-900">{job.position}</h4>
                <p className="text-sm text-green-700">{job.department}</p>
                <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                <p className="mt-2 text-gray-600 text-sm">{job.description}</p>
                <div className="mt-4">
                  <Button variant="primary" size="sm">{t.careers.apply}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Careers;