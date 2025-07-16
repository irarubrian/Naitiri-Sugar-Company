import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hon. Jerusa Shikuku Aleu</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Member of County Assembly - Milima Ward</h2>
          <p className="text-lg mb-8">
            A visionary leader dedicated to transforming Milima Ward through education, healthcare, infrastructure, and economic empowerment.
          </p>
          <Link 
            to="/about" 
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Quick Highlights */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Education</h3>
            <p className="text-gray-600">
              Championing quality education through school infrastructure development and bursary programs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Healthcare</h3>
            <p className="text-gray-600">
              Improving healthcare access with new facilities and maternal health programs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Infrastructure</h3>
            <p className="text-gray-600">
              Building roads, bridges, and water projects to connect and serve communities.
            </p>
          </div>
        </div>
      </div>

      {/* Latest News/Updates */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Recent Achievements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="border-b pb-3">
              <h4 className="font-semibold">New classrooms commissioned at Milima Primary</h4>
              <p className="text-gray-600 text-sm">Completed last month</p>
            </li>
            <li className="border-b pb-3">
              <h4 className="font-semibold">Bursary disbursement for 500 students</h4>
              <p className="text-gray-600 text-sm">Ongoing this term</p>
            </li>
            <li>
              <h4 className="font-semibold">Groundbreaking for new health center</h4>
              <p className="text-gray-600 text-sm">Starting next week</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;