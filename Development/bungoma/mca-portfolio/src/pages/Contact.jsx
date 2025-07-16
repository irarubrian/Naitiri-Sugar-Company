import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-blue-800">Contact Hon. Jerusa Shikuku Aleu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Office Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                <p className="text-gray-700">
                  Milima Ward Office<br />
                  P.O. Box 123-40200<br />
                  County Headquarters
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Office: +254 712 345 678</li>
                  <li>Mobile: +254 723 456 789</li>
                  <li>Emergency: +254 700 987 654</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Addresses</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>official@jerusaaleu.co.ke</li>
                  <li>info@milimaward.co.ke</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Constituency Days</h3>
                <p className="text-gray-700">
                  Every Wednesday: 9:00 AM - 3:00 PM<br />
                  Location: Various locations in the ward (see monthly schedule)
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Office Location</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-64 flex items-center justify-center text-gray-500">
              [Map of Milima Ward Office Location]
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            The office is located at the County Headquarters, next to the Governor's office. 
            Visitors are welcome during office hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;