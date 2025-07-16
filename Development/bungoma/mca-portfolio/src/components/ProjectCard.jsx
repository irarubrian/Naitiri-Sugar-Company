import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {project.image ? (
          <img 
            src={`/assets/gallery/${project.image}`} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">Project Image</span>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-blue-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : project.status === 'Ongoing' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
          
          <div className="text-sm text-gray-500">
            {project.year} • {project.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;