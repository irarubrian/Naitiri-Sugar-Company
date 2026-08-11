import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'sw', label: 'SW' },
  { code: 'hi', label: 'HI' },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 text-sm font-medium">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 rounded transition ${
            language === lang.code
              ? 'bg-green-800 text-white'
              : 'text-gray-600 hover:bg-green-100'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}