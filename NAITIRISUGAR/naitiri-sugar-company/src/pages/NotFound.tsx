import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';

const NotFound = () => {
  useLanguage();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white py-16">
      <Container className="text-center">
        <div className="mb-6 text-8xl font-bold text-green-700">404</div>
        <div className="mb-4 text-6xl">🌾</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-green-800 px-6 py-3 text-white hover:bg-green-900 transition-colors"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border-2 border-green-800 px-6 py-3 text-green-800 hover:bg-green-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Or try visiting our <Link to="/" className="text-green-700 hover:underline">homepage</Link> to find what you're looking for.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;