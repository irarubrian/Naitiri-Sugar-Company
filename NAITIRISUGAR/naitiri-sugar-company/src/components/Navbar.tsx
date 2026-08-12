import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/images/logo/naitiri-logo.svg';

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile navigation when changing route
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/products', label: t.nav.products },
    { path: '/farmers', label: t.nav.farmers },
    { path: '/sustainability', label: t.nav.sustainability },
    { path: '/news', label: t.nav.news },
    { path: '/careers', label: t.nav.careers },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white shadow-sm'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        {/* Top corporate information bar */}
        <div
          className={`hidden border-b transition-colors duration-300 lg:block ${
            isScrolled || !isHomePage
              ? 'border-gray-100 bg-white'
              : 'border-green-900/10 bg-green-950'
          }`}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
            <p
              className={
                isScrolled || !isHomePage
                  ? 'text-gray-500'
                  : 'text-green-100'
              }
            >
              Growing communities. Building a sustainable future.
            </p>

            <div
              className={`flex items-center gap-5 ${
                isScrolled || !isHomePage
                  ? 'text-gray-500'
                  : 'text-green-100'
              }`}
            >
              <span>Quality Sugar</span>
              <span className="h-3 w-px bg-current opacity-30" />
              <span>Farmer Partnership</span>
              <span className="h-3 w-px bg-current opacity-30" />
              <span>Sustainable Agriculture</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo - Clean & Visible */}
          <Link
            to="/"
            className="group flex shrink-0 items-center"
            aria-label="Naitiri Sugar Company home"
          >
            <div className="relative flex items-center">
              <img
                src={logo}
                alt="Naitiri Sugar Company"
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-105 lg:h-[72px]"
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `group relative px-3.5 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-green-800'
                        : 'text-gray-600 hover:text-green-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>

                      <span
                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-green-700 transition-all duration-200 ${
                          isActive
                            ? 'w-5/6 opacity-100'
                            : 'w-0 opacity-0 group-hover:w-5/6 group-hover:opacity-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-4 h-7 w-px bg-gray-200" />

            {/* Language */}
            <LanguageSwitcher />

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-green-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-900 hover:shadow-md"
            >
              {t.nav.contact}

              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-green-900 transition-colors hover:bg-green-50"
              aria-label={
                isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
            isMobileOpen
              ? 'max-h-[calc(100vh-76px)] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl overflow-y-auto px-4 py-5 sm:px-6">
            {/* Mobile Logo - Clean & Visible */}
            <div className="mb-4 flex items-center border-b border-gray-100 pb-4">
              <img
                src={logo}
                alt="Naitiri Sugar Company"
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-green-50 text-green-800'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-green-700" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-800 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-900"
              >
                {t.nav.contact}

                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="mt-5 rounded-xl bg-green-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-800">
                Naitiri Sugar Company
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Growing communities through responsible agriculture,
                farmer partnerships and quality sugar production.
              </p>
            </div>
          </div>
        </div>

        {/* Brand accent */}
        <div className="h-[3px] bg-gradient-to-r from-green-950 via-green-700 to-lime-500" />
      </header>

      {/* Prevent content from hiding underneath fixed navbar */}
      <div className="h-[79px] lg:h-[118px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;