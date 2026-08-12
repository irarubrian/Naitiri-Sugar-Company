import { useLanguage } from '../i18n/LanguageContext';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import careersImage from '../assets/images/careers/careers.jpg';

const Careers = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApply = (jobPosition: string, jobDepartment: string) => {
    const subject = encodeURIComponent(`Job Application: ${jobPosition} - ${jobDepartment}`);
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\n` +
      `I am writing to apply for the ${jobPosition} position in the ${jobDepartment} department at Naitiri Sugar Company.\n\n` +
      `Please find my CV attached for your review.\n\n` +
      `Name: \n` +
      `Phone: \n` +
      `Current Location: \n` +
      `Years of Experience: \n\n` +
      `Cover Letter:\n\n\n` +
      `Thank you for considering my application.\n\n` +
      `Best regards,`
    );
    window.location.href = `mailto:careers@naitirisugar.com?subject=${subject}&body=${body}`;
  };

  const handleSubmitCV = () => {
    const subject = encodeURIComponent('CV Submission - Future Opportunities');
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\n` +
      `I am interested in future career opportunities at Naitiri Sugar Company.\n` +
      `Please find my CV attached for your consideration.\n\n` +
      `Name: \n` +
      `Phone: \n` +
      `Current Location: \n` +
      `Area of Interest: \n\n` +
      `Thank you for your time.\n\n` +
      `Best regards,`
    );
    window.location.href = `mailto:careers@naitirisugar.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careersImage}
            alt="Career opportunities at Naitiri Sugar Company"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c2a]/95 via-[#1a3c2a]/85 to-[#1a3c2a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/95 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-[70vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                JOIN OUR TEAM
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {t.careers.title}
              </h1>
              
              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Build your career with one of Kenya's leading sugar producers. Join a team 
                dedicated to excellence, innovation, and community impact.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#openings">
                  <button className="rounded-lg bg-white px-8 py-3.5 font-semibold text-[#1a3c2a] shadow-lg transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl">
                    View Openings ↓
                  </button>
                </a>
                <a href="#why-join">
                  <button className="rounded-lg border-2 border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10">
                    Why Join Us
                  </button>
                </a>
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
      {/* WHY JOIN US */}
      {/* ============================================================ */}
      <section id="why-join" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left - Professional Image Display */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={careersImage}
                  alt="Career opportunities at Naitiri Sugar Company"
                  className="h-[500px] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2a]/40 via-transparent to-transparent" />
                
                {/* Image label */}
                <div className="absolute bottom-6 left-6">
                  <div className="rounded-lg bg-white/90 backdrop-blur-sm px-5 py-3 shadow-lg">
                    <p className="text-sm font-semibold text-[#1a3c2a]">Our Workplace</p>
                    <p className="text-xs text-gray-500 mt-0.5">Where careers grow</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#1a3c2a]/5 hidden lg:block" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-[#1a3c2a]">
                <span className="h-px w-8 bg-[#1a3c2a]" />
                WHY JOIN US
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.careers.whyTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {t.careers.whyText}
              </p>
              
              {/* Benefits List */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Career Growth',
                    description: 'Continuous learning and development opportunities to advance your career.',
                    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                  },
                  {
                    title: 'Meaningful Impact',
                    description: 'Contribute to Kenya\'s agricultural transformation and community development.',
                    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
                  },
                  {
                    title: 'Inclusive Culture',
                    description: 'Work in a diverse, supportive environment that values every team member.',
                    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857',
                  },
                  {
                    title: 'Competitive Benefits',
                    description: 'Attractive compensation packages with comprehensive health and wellness benefits.',
                    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-xl bg-gray-50 p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-6 w-6 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW TO APPLY */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-green-300">
              <span className="h-px w-8 bg-green-300" />
              HOW TO APPLY
              <span className="h-px w-8 bg-green-300" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Simple Application Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-green-100/70">
              Applying is easy. Simply click the apply button on any position, and your 
              default email client will open with a pre-filled template. Attach your CV 
              and send.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Choose Position',
                description: 'Browse our current openings and find the role that matches your skills and experience.',
              },
              {
                step: '02',
                title: 'Prepare Your CV',
                description: 'Update your CV highlighting relevant experience and qualifications for the position.',
              },
              {
                step: '03',
                title: 'Click Apply',
                description: 'Click the apply button to open your email client with a pre-filled application template.',
              },
              {
                step: '04',
                title: 'Attach & Send',
                description: 'Attach your CV and any supporting documents, then send your application to our team.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-green-100/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOB OPENINGS */}
      {/* ============================================================ */}
      <section id="openings" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              CURRENT OPENINGS
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t.careers.opportunitiesTitle}
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Explore our current opportunities and find your place at Naitiri Sugar Company.
            </p>
          </div>

          {/* Job Cards */}
          {siteData.careers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {siteData.careers.map((job) => (
                <div
                  key={job.id}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Department Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1a3c2a]/10 px-3 py-1 text-xs font-semibold text-[#1a3c2a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1a3c2a]" />
                      {job.department}
                    </span>
                  </div>

                  {/* Position Title */}
                  <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#1a3c2a]">
                    {job.position}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 flex-1">
                    {job.description}
                  </p>

                  {/* Job Details */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.type}
                    </span>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleApply(job.position, job.department)}
                      className="w-full rounded-lg bg-[#1a3c2a] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a5c3a] hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Apply via Email
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md">
                <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">No Open Positions</h3>
                <p className="mt-2 text-sm text-gray-500">
                  We don't have any open positions at the moment. Please check back later or send us your CV for future opportunities.
                </p>
                <button
                  onClick={handleSubmitCV}
                  className="mt-6 rounded-lg bg-[#1a3c2a] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#2a5c3a] hover:shadow-lg inline-flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Submit Your CV
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
      
    </div>
  );
};

export default Careers;