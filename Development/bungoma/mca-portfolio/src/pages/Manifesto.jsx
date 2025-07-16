import React from 'react';

const Manifesto = () => {
  const manifestoPoints = {
    education: [
      "Ensure 100% transition from primary to secondary education",
      "Establish a ward education fund for bright but needy students",
      "Construct and equip modern classrooms in all schools",
      "Provide ICT infrastructure for digital learning",
      "Support teacher training and welfare programs"
    ],
    healthcare: [
      "Upgrade all dispensaries to health centers",
      "Establish a maternal and child health program",
      "Provide ambulance services for emergencies",
      "Improve access to clean water to prevent waterborne diseases",
      "Conduct regular medical camps in remote areas"
    ],
    infrastructure: [
      "Complete the Milima-Kiburu road project",
      "Construct bridges across major rivers in the ward",
      "Expand electricity connectivity to all villages",
      "Improve market infrastructure for traders",
      "Develop water projects for irrigation and domestic use"
    ],
    economy: [
      "Establish youth empowerment centers with skills training",
      "Support women groups with grants and capacity building",
      "Promote local industries and value addition",
      "Create market linkages for farmers",
      "Attract investors to create job opportunities"
    ],
    agriculture: [
      "Provide subsidized farm inputs to farmers",
      "Promote climate-smart agriculture",
      "Establish dairy cooperatives with cooling plants",
      "Support poultry and fish farming initiatives",
      "Develop irrigation schemes for year-round farming"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Leadership Manifesto</h1>
          <p className="text-lg text-gray-600">
            Hon. Jerusa Shikuku Aleu's comprehensive plan for the transformation of Milima Ward
          </p>
        </div>

        {/* Education */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">📚</span> Education Transformation
          </h2>
          <ul className="space-y-3">
            {manifestoPoints.education.map((point, index) => (
              <li key={`edu-${index}`} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Healthcare */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">🏥</span> Healthcare Improvement
          </h2>
          <ul className="space-y-3">
            {manifestoPoints.healthcare.map((point, index) => (
              <li key={`health-${index}`} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Infrastructure */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">🛣️</span> Infrastructure Development
          </h2>
          <ul className="space-y-3">
            {manifestoPoints.infrastructure.map((point, index) => (
              <li key={`infra-${index}`} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Economic Empowerment */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">💼</span> Economic Empowerment
          </h2>
          <ul className="space-y-3">
            {manifestoPoints.economy.map((point, index) => (
              <li key={`econ-${index}`} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Agriculture */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">🌱</span> Agricultural Development
          </h2>
          <ul className="space-y-3">
            {manifestoPoints.agriculture.map((point, index) => (
              <li key={`agri-${index}`} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Commitment</h3>
          <p className="text-gray-700">
            "This manifesto represents my solemn pledge to the people of Milima Ward. 
            I commit to working tirelessly to implement these programs with transparency, 
            accountability, and community participation."
          </p>
          <p className="mt-4 font-medium text-blue-800">- Hon. Jerusa Shikuku Aleu</p>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;