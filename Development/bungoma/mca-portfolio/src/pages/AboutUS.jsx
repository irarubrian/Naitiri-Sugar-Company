import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Hon. Jerusa Shikuku Aleu</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary Leader | Education Champion | Community Transformer
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl aspect-[4/5] overflow-hidden shadow-xl">
              {/* Placeholder for image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Portrait Image
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-blue-100">
              <div className="text-blue-600 text-2xl mb-2">🏛️</div>
              <h4 className="font-bold text-gray-800">First Woman MCA</h4>
              <p className="text-sm text-gray-600">Milima Ward</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* Introduction */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Transformational Leadership</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hon. Jerusa Shikuku Aleu stands as a pioneering force in Kenyan politics, having broken barriers as the first woman elected as Member of County Assembly for Milima Ward. Her leadership blends educational expertise with compassionate governance, driving unprecedented development in the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a career spanning over two decades in education and public service, Hon. Aleu has become synonymous with transparent governance, women empowerment, and educational reform that reaches the most marginalized communities.
              </p>
            </motion.div>

            {/* Key Facts */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-50"
              variants={itemVariants}
            >
              <h4 className="font-bold text-blue-800 mb-4 text-lg">Key Milestones</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600">📚</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Education Reforms</h5>
                    <p className="text-gray-600 text-sm">Increased school enrollment by 42%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600">💼</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Economic Growth</h5>
                    <p className="text-gray-600 text-sm">Created 1,850+ youth jobs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600">🏗️</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Infrastructure</h5>
                    <p className="text-gray-600 text-sm">Built 62km of access roads</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <span className="text-blue-600">👩‍⚖️</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Women in Leadership</h5>
                    <p className="text-gray-600 text-sm">Mentored 14 women into office</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div variants={itemVariants}>
              <div className="bg-blue-800 text-white p-6 rounded-xl">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">"</span>
                  <div>
                    <blockquote className="italic mb-4">
                      My leadership is rooted in the belief that every challenge presents an opportunity to innovate. From the classrooms where I taught to the county assembly where I serve, my mission remains unchanged - to create pathways where none existed.
                    </blockquote>
                    <p className="font-semibold">— Hon. Jerusa Shikuku Aleu</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <motion.div 
          className="mt-20"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">Leadership Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Education */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <motion.div 
                    className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    1997-2000
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800">University Education</h4>
                  <p className="text-gray-600">First Class Honors, Mathematics & Chemistry</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-700">
                    Graduated top of class from University of Nairobi with groundbreaking research on rural education disparities. Awarded Chancellor's Prize for academic excellence.
                  </p>
                </div>
              </div>

              {/* Teaching */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <p className="text-gray-700">
                    Transformed mathematics education at St. Peters High School through innovative teaching methods, improving pass rates by 35% and establishing model mentorship programs.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <motion.div 
                    className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    2001-2012
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800">Education Career</h4>
                  <p className="text-gray-600">Teacher to Deputy Principal</p>
                </div>
              </div>

              {/* Political */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <motion.div 
                    className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    2017-Present
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800">Political Leadership</h4>
                  <p className="text-gray-600">Member of County Assembly</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-700">
                    Made history as first woman MCA for Milima Ward. Authored 12 successful bills, chaired Education Committee, and implemented transformative development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;