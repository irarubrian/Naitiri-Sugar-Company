import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/Button';
import { siteData } from '../data/siteData';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-white">
      <Container>
        <SectionTitle title={t.contact.title} className="mb-12" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-green-700">📍</span>
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-700">📞</span>
                <span>{siteData.contact.phone}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-700">✉️</span>
                <span>{siteData.contact.email}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-700">🕒</span>
                <span>{siteData.contact.hours}</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">{t.contact.mapTitle}</h3>
              <div className="mt-4 h-64 w-full rounded-lg overflow-hidden shadow-md bg-gray-200">
                {/* Google Maps placeholder */}
                <iframe
                  title="Naitiri Sugar Company Location"
                  src={siteData.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-green-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900">{t.contact.formTitle}</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="+254 ..."
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t.contact.send}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;