export const siteData = {
  // Company Information
  company: {
    name: 'Naitiri Sugar Company',
    tagline: 'Growing Agriculture. Producing Quality. Building Communities.',
    founded: 1985,
    founder: 'Naitiri Family',
    headquarters: 'Nakuru County, Kenya',
    employees: 500,
    description: 'Naitiri Sugar Company is a premier agricultural and sugar manufacturing enterprise, committed to sustainable farming, high-quality production, and community empowerment across East Africa.',
    mission: 'To empower farmers, produce superior sugar sustainably, and enrich the communities we serve through ethical business practices and continuous improvement.',
    vision: 'To be a globally recognised leader in sustainable sugar production, setting the standard for agricultural excellence and community partnership.',
    values: [
      {
        title: 'Integrity',
        description: 'We act with honesty and transparency in all we do.',
        icon: '🤝',
      },
      {
        title: 'Quality',
        description: 'We strive for perfection in every product and process.',
        icon: '⭐',
      },
      {
        title: 'Sustainability',
        description: 'We protect the environment and support our communities.',
        icon: '🌿',
      },
      {
        title: 'Innovation',
        description: 'We embrace new ideas to improve and grow.',
        icon: '💡',
      },
      {
        title: 'Community',
        description: 'We are committed to the well-being of our people and neighbours.',
        icon: '🏘️',
      },
      {
        title: 'Excellence',
        description: 'We aim for the highest standards in everything we undertake.',
        icon: '🎯',
      },
    ],
  },

  // Contact Information
  contact: {
    phone: '+254 700 123 456',
    phoneAlt: '+254 700 123 457',
    email: 'info@naitirisugar.com',
    emailSupport: 'support@naitirisugar.com',
    address: 'Naitiri Sugar Company, Nakuru County, Kenya',
    addressFull: 'Naitiri Sugar Company, P.O. Box 123, Nakuru County, Kenya',
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM',
    hoursWeekend: 'Sat: 9:00 AM – 1:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68219672011618!3d-0.3030998000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b1b5e1b8b1b1b%3A0x0!2zMHDQsNCz0LDRgA!5e0!3m2!1sen!2ske!4v1234567890',
    socialMedia: {
      facebook: 'https://facebook.com/naitirisugar',
      twitter: 'https://twitter.com/naitirisugar',
      instagram: 'https://instagram.com/naitirisugar',
      linkedin: 'https://linkedin.com/company/naitirisugar',
      youtube: 'https://youtube.com/naitirisugar',
    },
  },

  // Key Statistics
  stats: {
    years: 40,
    farmers: 15000,
    production: 250000,
    communities: 120,
    countries: 8,
    hectares: 5000,
    employees: 500,
  },

  // Products
  products: [
    {
      id: 1,
      name: 'Premium Sugar',
      slug: 'premium-sugar',
      category: 'Household',
      description: 'Our flagship product – pure, fine-grained sugar ideal for households, bakeries, and food service. It meets the highest international standards for purity and taste.',
      features: ['Pure & refined', 'Consistent quality', 'Perfect for baking', 'Household & industrial use'],
      applications: 'Ideal for domestic use, confectionery, and beverage sweetening.',
      certifications: ['ISO 22000', 'HACCP', 'Fair Trade'],
      packaging: ['500g', '1kg', '2kg', '5kg', '25kg'],
      icon: '🍯',
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Industrial Sugar',
      slug: 'industrial-sugar',
      category: 'Industrial',
      description: 'Bulk sugar produced specifically for large-scale food and beverage manufacturers, offering consistent quality and competitive pricing.',
      features: ['High purity', 'Custom packaging', 'Competitive pricing', 'Consistent supply'],
      applications: 'Perfect for soft drinks, processed foods, and industrial baking.',
      certifications: ['ISO 22000', 'HACCP', 'GMP'],
      packaging: ['50kg', '100kg', '500kg', '1MT', 'Bulk'],
      icon: '🏭',
      badge: 'Bulk Supply',
    },
    {
      id: 3,
      name: 'Packaging Solutions',
      slug: 'packaging-solutions',
      category: 'Packaging',
      description: 'We offer a range of sustainable packaging options, from eco-friendly bags to customised bulk packaging, ensuring product freshness and convenience.',
      features: ['Sustainable materials', 'Custom designs', 'Freshness guaranteed', 'Eco-friendly options'],
      applications: 'Suitable for retail, wholesale, and export packaging needs.',
      certifications: ['FSC Certified', 'Recyclable', 'Biodegradable'],
      packaging: ['Custom sizes', 'Custom branding', 'Bulk packaging'],
      icon: '📦',
      badge: 'Eco-Friendly',
    },
  ],

  // News Articles
  news: [
    {
      id: 1,
      category: 'Company',
      slug: 'naitiri-sugar-launches-sustainability-initiative',
      date: '2026-07-15',
      title: 'Naitiri Sugar Launches New Sustainability Initiative',
      excerpt: 'The company announced a comprehensive program to reduce water usage and promote regenerative agriculture across its supply chain.',
      content: 'Naitiri Sugar Company today announced a landmark sustainability initiative aimed at reducing water usage by 30% and promoting regenerative agriculture practices across its entire supply chain. The program, which will be implemented over the next three years, represents a significant investment in environmental stewardship and sustainable farming practices. Key components include advanced irrigation systems, farmer training programs, and partnerships with environmental organizations.',
      image: 'news/placeholder.jpg',
      author: 'Naitiri Sugar Communications Team',
      tags: ['Sustainability', 'Agriculture', 'Innovation'],
      featured: true,
    },
    {
      id: 2,
      category: 'Farming',
      slug: 'farmers-training-programme-exceeds-targets',
      date: '2026-06-28',
      title: 'Farmers Training Programme Exceeds Targets',
      excerpt: 'Over 1,000 farmers completed the latest training on pest management and high-yield sugarcane varieties.',
      content: 'The Naitiri Sugar Farmers Training Programme has exceeded its annual targets, with over 1,000 farmers completing intensive training on modern farming techniques, pest management, and high-yield sugarcane varieties. The programme, now in its fifth year, has contributed to a 25% increase in average yields among participating farmers.',
      image: 'news/placeholder.jpg',
      author: 'Agricultural Extension Team',
      tags: ['Farming', 'Training', 'Productivity'],
      featured: false,
    },
    {
      id: 3,
      category: 'Community',
      slug: 'new-school-built-in-partner-community',
      date: '2026-06-10',
      title: 'New School Built in Partner Community',
      excerpt: 'Naitiri Sugar invested in a new primary school to improve access to education for children in the region.',
      content: 'Naitiri Sugar Company has invested in the construction of a new primary school in one of its partner farming communities. The new facility includes 8 classrooms, a library, and a playground, providing access to quality education for over 200 children in the area. This initiative is part of the company\'s ongoing commitment to community development and social responsibility.',
      image: 'news/placeholder.jpg',
      author: 'Community Relations Team',
      tags: ['Community', 'Education', 'Social Impact'],
      featured: false,
    },
    {
      id: 4,
      category: 'Sustainability',
      slug: 'solar-power-investment-announced',
      date: '2026-05-20',
      title: 'Naitiri Sugar Invests in Solar Power',
      excerpt: 'The company announces plans to install solar panels at its processing facility, reducing carbon emissions by 40%.',
      content: 'In a major step toward sustainable operations, Naitiri Sugar Company has announced plans to install solar panels at its main processing facility. The installation, expected to be completed by the end of 2026, will reduce carbon emissions by 40% and generate 30% of the facility\'s energy needs from renewable sources.',
      image: 'news/placeholder.jpg',
      author: 'Sustainability Department',
      tags: ['Sustainability', 'Renewable Energy', 'Innovation'],
      featured: false,
    },
  ],

  // Careers
  careers: [
    {
      id: 1,
      position: 'Agricultural Extension Officer',
      department: 'Farming',
      location: 'Naitiri',
      type: 'Full-Time',
      experience: '3+ years',
      education: 'Bachelor\'s in Agriculture or related field',
      description: 'Provide technical support and training to sugarcane farmers to improve yields and sustainability. Conduct field visits, organize training sessions, and advise on best farming practices.',
      responsibilities: [
        'Conduct field visits to farmer properties',
        'Organize training sessions on modern farming techniques',
        'Monitor crop health and advise on pest control',
        'Prepare reports on farmer progress and yields',
      ],
      requirements: [
        'Bachelor\'s degree in Agriculture or related field',
        'Minimum 3 years experience in agricultural extension',
        'Knowledge of sugarcane farming practices',
        'Excellent communication and interpersonal skills',
      ],
      postedDate: '2026-07-10',
      deadline: '2026-08-31',
      status: 'Active',
    },
    {
      id: 2,
      position: 'Production Shift Manager',
      department: 'Manufacturing',
      location: 'Naitiri',
      type: 'Full-Time',
      experience: '5+ years',
      education: 'Bachelor\'s in Engineering or related field',
      description: 'Oversee sugar production processes, ensuring quality, safety, and efficiency during shifts. Lead a team of production staff and ensure production targets are met.',
      responsibilities: [
        'Supervise daily production operations',
        'Ensure compliance with safety and quality standards',
        'Manage production team and shift schedules',
        'Monitor production metrics and report to management',
      ],
      requirements: [
        'Bachelor\'s degree in Mechanical, Chemical Engineering or related',
        'Minimum 5 years experience in manufacturing supervision',
        'Knowledge of food processing industry standards',
        'Strong leadership and problem-solving skills',
      ],
      postedDate: '2026-07-05',
      deadline: '2026-08-30',
      status: 'Active',
    },
    {
      id: 3,
      position: 'Sustainability Analyst',
      department: 'Sustainability',
      location: 'Naitiri',
      type: 'Full-Time',
      experience: '3+ years',
      education: 'Bachelor\'s in Environmental Science or related',
      description: 'Monitor and report on environmental and social performance, driving continuous improvement in sustainability initiatives. Collect data, analyze trends, and prepare sustainability reports.',
      responsibilities: [
        'Monitor environmental performance metrics',
        'Prepare sustainability reports for management',
        'Analyze data on resource usage and emissions',
        'Recommend improvements to sustainability practices',
      ],
      requirements: [
        'Bachelor\'s degree in Environmental Science or related',
        'Minimum 3 years experience in sustainability or ESG',
        'Knowledge of environmental regulations and standards',
        'Strong analytical and reporting skills',
      ],
      postedDate: '2026-07-01',
      deadline: '2026-08-25',
      status: 'Active',
    },
    {
      id: 4,
      position: 'Quality Assurance Specialist',
      department: 'Quality',
      location: 'Naitiri',
      type: 'Full-Time',
      experience: '4+ years',
      education: 'Bachelor\'s in Food Science or related',
      description: 'Ensure product quality meets international standards through rigorous testing and quality control procedures. Manage quality assurance team and maintain ISO certifications.',
      responsibilities: [
        'Oversee quality testing of all products',
        'Maintain ISO certifications and quality standards',
        'Manage quality assurance team',
        'Investigate quality issues and implement corrective actions',
      ],
      requirements: [
        'Bachelor\'s degree in Food Science, Chemistry or related',
        'Minimum 4 years experience in food quality assurance',
        'Experience with ISO 22000 and HACCP standards',
        'Strong attention to detail and leadership skills',
      ],
      postedDate: '2026-06-25',
      deadline: '2026-08-20',
      status: 'Active',
    },
  ],

  // Team Members (optional)
  team: [
    {
      id: 1,
      name: 'John Naitiri',
      position: 'Chief Executive Officer',
      department: 'Executive',
      email: 'john.naitiri@naitirisugar.com',
      image: '',
      bio: 'John Naitiri leads the company with over 30 years of experience in agricultural business. He is committed to sustainable growth and community development.',
    },
    {
      id: 2,
      name: 'Mary Wanjiru',
      position: 'Head of Operations',
      department: 'Operations',
      email: 'mary.wanjiru@naitirisugar.com',
      image: '',
      bio: 'Mary oversees all production operations with a focus on efficiency and quality. She brings 20 years of manufacturing experience to the team.',
    },
    {
      id: 3,
      name: 'David Ochieng',
      position: 'Director of Sustainability',
      department: 'Sustainability',
      email: 'david.ochieng@naitirisugar.com',
      image: '',
      bio: 'David drives the company\'s environmental and social sustainability agenda. He has a background in environmental science and community development.',
    },
  ],

  // FAQ (optional)
  faq: [
    {
      question: 'Where is Naitiri Sugar Company located?',
      answer: 'Naitiri Sugar Company is headquartered in Nakuru County, Kenya, with operations across the region.',
    },
    {
      question: 'How can I partner with Naitiri Sugar Company?',
      answer: 'You can partner with us by contacting our business development team at info@naitirisugar.com or calling +254 700 123 456.',
    },
    {
      question: 'What products does Naitiri Sugar Company offer?',
      answer: 'We offer premium sugar, industrial sugar, and packaging solutions. Visit our Products page for more details.',
    },
    {
      question: 'How can I apply for a job at Naitiri Sugar Company?',
      answer: 'You can apply for jobs through our Careers page, where we list all current vacancies and application procedures.',
    },
  ],

  // Testimonials (optional)
  testimonials: [
    {
      id: 1,
      name: 'James Mwangi',
      role: 'Farmer, Nakuru',
      content: 'Naitiri Sugar has transformed my farming business. The training and support I receive have increased my yields significantly.',
      image: '',
      rating: 5,
    },
    {
      id: 2,
      name: 'Grace Akinyi',
      role: 'Business Owner, Nairobi',
      content: 'The quality of sugar from Naitiri is consistently excellent. My customers love the taste and quality.',
      image: '',
      rating: 5,
    },
  ],

  // Partners (optional)
  partners: [
    {
      name: 'Kenya Sugar Board',
      logo: '',
      website: 'https://www.kenyasugarboard.go.ke',
    },
    {
      name: 'Agricultural Development Corporation',
      logo: '',
      website: 'https://www.adc.co.ke',
    },
    {
      name: 'Fair Trade Kenya',
      logo: '',
      website: 'https://www.fairtradekenya.org',
    },
  ],
};

// Type definitions for better type safety
export type SiteData = typeof siteData;
export type NewsItem = typeof siteData.news[0];
export type CareerItem = typeof siteData.careers[0];
export type ProductItem = typeof siteData.products[0];
export type TeamMember = typeof siteData.team[0];
export type Testimonial = typeof siteData.testimonials[0];
export type FAQ = typeof siteData.faq[0];
export type Partner = typeof siteData.partners[0];

export default siteData;