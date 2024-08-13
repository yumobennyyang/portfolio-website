// components/ProjectDetails.js
import React from 'react';
import { projects } from '../data/projects';

const ProjectView = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <div>
      <span>{project.title}</span>
      {project.content.map((item, index) => {
        if (item.type === 'image') {
          return <img key={index} src={item.src} alt={`Project ${project.id} Image ${index + 1}`} style={{ maxWidth: '100%', margin: '10px 0' }} />;
        }
        if (item.type === 'text') {
          return <p key={index}>{item.text}</p>;
        }
        return null;
      })}
    </div>
  );
};

export default ProjectView;
