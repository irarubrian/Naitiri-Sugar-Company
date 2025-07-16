import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">About Hon. Aleu</h3>
            <p className="mb-4 text-gray-300">
              Jerusa Shikuku Aleu is the Member of County Assembly for Milima Ward, 
              dedicated to serving the community through development projects and 
              effective representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Hon. Aleu
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Development Projects
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Leadership Manifesto
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  County Government Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Bursary Application Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  CDF Projects Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  County Assembly Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Report Corruption
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Information</h3>
            <address className="not-italic text-gray-300">
              <div className="mb-2">
                <strong>Office Address:</strong><br />
                Milima Ward Office<br />
                P.O. Box 123-40200<br />
                County Headquarters
              </div>
              <div className="mb-2">
                <strong>Phone:</strong> +254 712 345 678
              </div>
              <div className="mb-2">
                <strong>Email:</strong> info@jerusaaleu.co.ke
              </div>
              <div>
                <strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Hon. Jerusa Shikuku Aleu - MCA Milima Ward. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed and developed with ❤️ for the people of Milima Ward
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;