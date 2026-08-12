import { useState, useRef, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(true);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const companyPhone = '+254743435490';
  const companyEmail = 'brian.o.iraru@gmail.com';
  const whatsappNumber = '254743435490';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('subject', formData.subject);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://formsubmit.co/ajax/brian.o.iraru@gmail.com', {
        method: 'POST',
        body: formDataObj,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or contact us directly via WhatsApp.');
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello Naitiri Sugar Company! I would like to inquire about your products and services.'
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const faqs: FAQItem[] = [
    {
      question: 'What are your business hours?',
      answer: 'We are open Monday through Friday from 8:00 AM to 6:00 PM. We are closed on weekends and public holidays. However, you can reach us via email or WhatsApp at any time.'
    },
    {
      question: 'How can I become a partner farmer?',
      answer: 'To become a partner farmer, please contact our farmer relations team through the contact form or call us directly. We\'ll guide you through the partnership process and requirements.'
    },
    {
      question: 'Do you offer bulk purchase discounts?',
      answer: 'Yes, we offer competitive pricing and discounts for bulk purchases. Please reach out to our sales team for a customized quote based on your volume requirements.'
    },
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend reaching out via phone or WhatsApp for immediate assistance.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <main className="bg-white">
      {/* ============================================================ */}
      {/* WHATSAPP FLOATING BUTTON */}
      {/* ============================================================ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showWhatsAppTooltip && (
          <div className="animate-fadeIn rounded-xl bg-white px-4 py-3 shadow-lg border border-gray-200">
            <p className="text-sm font-semibold text-gray-900">Chat with us</p>
            <p className="text-xs text-gray-500 mt-0.5">We'd be happy to help</p>
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-gray-200" />
          </div>
        )}

        <button
          onClick={openWhatsApp}
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40"
          aria-label="Chat on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="bg-[#1a3c2a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              CONTACT US
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let's Connect & Grow Together
            </h1>
            
            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We're here to serve our customers, farmers and partners.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN CONTACT SECTION */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Details
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We're here to help and answer your questions.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Location */}
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</p>
                      <p className="mt-0.5 text-sm font-semibold text-gray-900">Naitiri Market</p>
                      <p className="text-sm text-gray-500">Tongaren, Bungoma County, Kenya</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</p>
                      <a href={`tel:${companyPhone}`} className="mt-0.5 block text-sm font-semibold text-[#1a3c2a] hover:text-[#2a5c3a] transition-colors">
                        {companyPhone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <button
                    onClick={openWhatsApp}
                    className="flex w-full gap-3 rounded-xl bg-green-50 p-4 text-left transition-all duration-200 hover:bg-green-100 border border-green-100"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Chat on WhatsApp</p>
                      <p className="mt-0.5 text-xs text-gray-500">Get a quick response from our team</p>
                    </div>
                  </button>

                  {/* Email */}
                  <div className="flex gap-3 pt-6 border-t border-gray-200">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                      <a href={`mailto:${companyEmail}`} className="mt-0.5 block text-sm font-semibold text-[#1a3c2a] hover:text-[#2a5c3a] transition-colors break-all">
                        {companyEmail}
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex gap-3 pt-6 border-t border-gray-200">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a3c2a]/10">
                      <svg className="h-5 w-5 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Office Hours</p>
                      <p className="mt-0.5 text-sm font-semibold text-gray-900">Monday – Friday, 8:00 AM – 6:00 PM</p>
                      <p className="mt-1 text-xs text-gray-500">Closed weekends and public holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We'll respond to your inquiry as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 rounded-xl bg-green-50 border border-green-100 p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-7 w-7 text-[#1a3c2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-gray-900">Message Sent Successfully</h3>
                    <p className="mt-2 text-sm text-gray-600">Thank you for reaching out. Our team will respond within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-sm font-semibold text-[#1a3c2a] underline hover:text-[#2a5c3a]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
                    {error && (
                      <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full h-[46px] rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-[#1a3c2a] focus:bg-white focus:ring-2 focus:ring-[#1a3c2a]/10 outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full h-[46px] rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-[#1a3c2a] focus:bg-white focus:ring-2 focus:ring-[#1a3c2a]/10 outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-[46px] rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-[#1a3c2a] focus:bg-white focus:ring-2 focus:ring-[#1a3c2a]/10 outline-none"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full h-[46px] rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-[#1a3c2a] focus:bg-white focus:ring-2 focus:ring-[#1a3c2a]/10 outline-none"
                          placeholder="What is this regarding?"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-[130px] rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-[#1a3c2a] focus:bg-white focus:ring-2 focus:ring-[#1a3c2a]/10 outline-none resize-y"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1a3c2a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1a3c2a]/20 transition-all hover:bg-[#2a5c3a] hover:shadow-xl hover:shadow-[#1a3c2a]/30 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            SEND MESSAGE
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAP SECTION */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              OUR LOCATION
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Find Us
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Visit us at Naitiri Market, Tongaren, Bungoma County.
            </p>
          </div>

          {/* Map Container */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="relative h-[300px] sm:h-[400px] w-full">
              <iframe
                title="Naitiri Sugar Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d34.75!3d0.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNDUnMDAuMCJOIDM0wrA0NScwMC4wIkU!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Map Overlay - Location Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <div className="flex items-center gap-3 rounded-lg bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-gray-200">
                  <svg className="h-5 w-5 text-[#1a3c2a] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Naitiri Sugar Company</p>
                    <p className="text-xs text-gray-500">Naitiri Market, Tongaren, Bungoma County</p>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Naitiri+Market,+Tongaren,+Bungoma+County"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-lg bg-[#1a3c2a] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#2a5c3a] hover:shadow-xl"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Location Info Strip */}
            <div className="grid grid-cols-1 divide-y border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              <div className="px-4 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">County</p>
                <p className="mt-0.5 text-sm font-semibold text-gray-900">Bungoma</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Constituency</p>
                <p className="mt-0.5 text-sm font-semibold text-gray-900">Tongaren</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Landmark</p>
                <p className="mt-0.5 text-sm font-semibold text-gray-900">Near Naitiri Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold text-[#1a3c2a]">
              <span className="h-px w-8 bg-[#1a3c2a]" />
              FREQUENTLY ASKED QUESTIONS
              <span className="h-px w-8 bg-[#1a3c2a]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Quick Answers
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Find answers to the most common questions.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border bg-white transition-all duration-200 ${
                  activeFAQ === index ? 'border-[#1a3c2a] shadow-md' : 'border-gray-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                      activeFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeFAQ === index && (
                  <div className="px-5 pb-4">
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
    
    </main>
  );
};

export default Contact;