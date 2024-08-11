// components/ProjectList.js
import React from 'react';
import { projects } from '../data/projects';

const ProjectsList = ({ onSelect }) => {
  return (
    <div id="project-list">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project"
          onClick={() => {
            console.log(`Clicked on Project ${project.id}`);
            onSelect(project.id);
          }}
        >
          {project.title}
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
