import React from 'react';

const AboutUS = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white py-6 px-6">
          <h1 className="text-3xl font-bold">About Hon. Jerusa Shikuku Aleu</h1>
          <p className="mt-2">The journey of a dedicated leader</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Early Life */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2">Early Life</h2>
            <p className="text-gray-700">
              Hon. Jerusa Shikuku Aleu was born and raised in Milima Ward, where she developed her passion for community service. 
              Growing up in a humble background, she understood the value of education and hard work from an early age.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2">Education Background</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Primary Education</h3>
                <p className="text-gray-700">
                  Attended Milima Primary School from 1985 to 1992, where she excelled academically and in leadership roles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secondary Education</h3>
                <p className="text-gray-700">
                  Joined St. Peters High School from 1993 to 1996, graduating with outstanding results that earned her a place at university.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">University Education</h3>
                <p className="text-gray-700">
                  Graduated with a Bachelor of Education from the University of Nairobi in 2000, specializing in Mathematics and Chemistry.
                </p>
              </div>
            </div>
          </section>

          {/* Career */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2">Career Journey</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Teaching Career</h3>
                <p className="text-gray-700 mb-3">
                  Hon. Aleu began her career as a mathematics teacher at St. Peters High School in 2001, where she taught for 8 years.
                </p>
                <p className="text-gray-700">
                  Her dedication to education saw her rise to become the Head of Mathematics Department and later Deputy Principal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transition to Politics</h3>
                <p className="text-gray-700">
                  Motivated by the need to create broader impact beyond the classroom, Hon. Aleu entered politics in 2012. 
                  She served as a Ward Representative before being elected as Member of County Assembly for Milima Ward in 2017.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Political Experience</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Chairperson of Education Committee in the County Assembly</li>
                  <li>Member of Budget and Appropriations Committee</li>
                  <li>Champion of several bills supporting women and youth empowerment</li>
                  <li>Recipient of Best Performing MCA award in 2019 and 2021</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-2">Leadership Philosophy</h2>
            <p className="text-gray-700">
              "I believe in servant leadership that prioritizes the needs of the people. My approach is grassroots-focused, 
              ensuring development reaches every corner of Milima Ward. Education remains my passion, as it's the foundation 
              for sustainable development."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;