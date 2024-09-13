import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';
import Image from 'next/image';

import localFont from "next/font/local";

//const regularText = localFont({ src: '../fonts/PPNeueMontreal-Book.otf' });
const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
//const text = localFont({ src: '../fonts/PPNeueMontreal-Medium.otf' });
const text = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Medium.otf' });
const description = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Bold.otf' });

const ProjectList = ({ onSelect, selectedProjectId }) => {
  const [scaleValues, setScaleValues] = useState({ scaleX: 1, scaleY: 1 });
  const [translateValues, setTranslateValues] = useState({ translateX: 0, translateY: 0 });
  const [itemScale, setItemScale] = useState({ itemScale: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const selectedElementRef = useRef(null);

  useEffect(() => {
    if (selectedProjectId && selectedElementRef.current) {
      const elem = selectedElementRef.current;
      const minWidth = Math.min(window.innerWidth - 64, 960);
      const scaleX = minWidth / elem.offsetWidth;
      const scaleY = (window.innerHeight - 52) / elem.offsetHeight + 1; // 52 is the header height

      setScaleValues({ scaleX, scaleY });

      const rect = elem.getBoundingClientRect();
      const offsetTop = rect.top;
      const translateY = 52 - offsetTop; //52 is the header height

      const offsetLeft = rect.left;
      const elemCenterX = offsetLeft + rect.width / 2;
      const screenCenterX = window.innerWidth / 2;
      const translateX = screenCenterX - elemCenterX;

      setTranslateValues({ translateX, translateY });


      const itemScale = minWidth / (elem.offsetHeight - 80) / 3 * 2; //80 is the title and description height on each card

      setItemScale({ itemScale });

      // Delay hiding the element by 0.5 seconds
      setTimeout(() => {
        setIsHidden(true);
      }, 500);
    } else {
      // Reset the hidden state when deselecting
      setIsHidden(false);
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
          className={`project  ${styles.projectItem} ${selectedProjectId === project.id ? `${styles.scaled} ${styles.layerShadowDark}` : ''} ${isHidden && selectedProjectId === project.id ? styles.hidden : ''}`}
          onClick={() => handleClick(project.id)}
          style={selectedProjectId === project.id ? { pointerEvents: 'none', transform: ` translate(${translateValues.translateX}px, ${translateValues.translateY}px) scale(${scaleValues.scaleX}, ${scaleValues.scaleY})` } : {}}
        >
          <div className="w-full text-zinc-950 bg-white tracking-wide duration-300 ease-[cubic-bezier(0,0,.5,1)] rounded-xl layer-shadow layer-shadow-hover sm:hover:scale-[1.01] sm:hover:scale-z-[1.01] "
            style={selectedProjectId === project.id
              ? { borderRadius: `${itemScale.itemScale * 12}px;` }
              : {}}>
            <div
              className={`${styles.projectItem} w-full flex-col relative flex overflow-hidden group `}
              style={selectedProjectId === project.id
                ? { transform: `scale(${(1 / scaleValues.scaleX) * itemScale.itemScale}, ${(1 / scaleValues.scaleY) * itemScale.itemScale})` }
                : {}}
            >
              {project.image && (
                <div className="overflow-hidden rounded-t-xl">
                  <img className="object-cover !border-none !rounded-none" src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
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
              <div style={selectedProjectId === project.id
                ? { opacity: '0', transition: 'opacity 0.1s' }
                : {}}
                className="z-20 px-6 pb-4 relative w-full flex-row">
                <div className={` w-full pt-[10px] pb-[1px] truncate text-2xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div>
                <div className={` text-zinc-400 opacity-80 w-full pb-[4px] truncate text-xs uppercase tracking-wider ${regularText.className}`}>{project.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
