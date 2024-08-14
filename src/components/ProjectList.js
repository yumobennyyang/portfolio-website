import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';
import Image from 'next/image';

import localFont from "next/font/local";

const regularText = localFont({ src: '../fonts/PPNeueMontreal-Book.otf' });
const text = localFont({ src: '../fonts/PPNeueMontreal-Medium.otf' });

const ProjectList = ({ onSelect, selectedProjectId }) => {
  const [scaleValues, setScaleValues] = useState({ scaleX: 1, scaleY: 1 });
  const [translateValues, setTranslateValues] = useState({ translateY: 0 });
  const selectedElementRef = useRef(null);

  useEffect(() => {
    if (selectedProjectId && selectedElementRef.current) {
      const elem = selectedElementRef.current;
      const minWidth = Math.min(window.innerWidth - 64, 960);
      const scaleX = minWidth / elem.offsetWidth;
      const scaleY = (window.innerHeight - 104) / elem.offsetHeight;

      setScaleValues({ scaleX, scaleY });

      const rect = elem.getBoundingClientRect();
      const offsetTop = rect.top;
      const translateY= 104 - offsetTop /scaleY ;

      setTranslateValues({ translateY });
    }
  }, [selectedProjectId]); // Trigger recalculation on selectedProjectId change

  const handleClick = (id) => {
    onSelect(id);
  };

  return (
    <div id="project-list" className={styles.projectGrid}>
      {projects.map((project) => (
        <div
          key={project.id}
          ref={selectedProjectId === project.id ? selectedElementRef : null}
          className={`project ${styles.projectItem} ${selectedProjectId === project.id ? styles.scaled : ''}`}
          onClick={() => handleClick(project.id)}
          style={selectedProjectId === project.id ? { transform: `scale(${scaleValues.scaleX}, ${scaleValues.scaleY}) translateY(${translateValues.translateY}px)` } : {}}

        >
          <div className="w-full bg-white tracking-wide mb-4 duration-300 ease-[cubic-bezier(0,0,.5,1)] rounded-xl layer-shadow layer-shadow-hover sm:hover:scale-[1.01] sm:hover:scale-z-[1.01]">
            <div className={`${styles.projectItem} ${selectedProjectId === project.id ? styles.scaleDown : ''} w-full flex-col relative flex overflow-hidden group`}>
              {project.image && (
                <div className="overflow-hidden rounded-t-xl">
                  <Image className="object-cover !border-none !rounded-none" src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
              )}
              {project.video && (
                <div className="overflow-hidden rounded-t-xl">
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="object-cover"
                    width={project.video.width}
                    height={project.video.height}
                  >
                    <source src={project.video.src} type="video/mp4" />
                  </video>
                </div>
              )}
              <div className="z-20 px-6 pb-4 relative w-full flex-row">
                <div className={`text-zinc-950 w-full pt-[7px] pb-[3px] truncate text-xl border-t ${text.className}`}>{project.title}</div>
                <div className={`text-zinc-400 opacity-80 w-full pb-1 truncate text-xs uppercase tracking-wider ${regularText.className}`}>{project.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
