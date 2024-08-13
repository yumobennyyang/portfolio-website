// components/ProjectList.js
import React, { useState } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';

const ProjectList = ({ onSelect, selectedProjectId }) => {

  const handleClick = (id, event) => {
    const targetElement = event.currentTarget;
    targetElement.classList.add(styles.scaled);

    onSelect(id); // Open the modal without delay
  };

  return (
    <div id="project-list" className={styles.projectGrid}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project ${styles.projectItem} ${selectedProjectId === project.id ? styles.scaled : ''}`}
          onClick={(event) => handleClick(project.id, event)}
        >
          <span className={`${selectedProjectId === project.id ? styles.scaleDown: ''}`}> 

            {project.title}
          </span>

        </div>
      ))}
    </div>
  );
};

export default ProjectList;
