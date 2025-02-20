import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';

const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
const text = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Medium.otf' });
const description = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Bold.otf' });

const ProjectList = ({ onSelect, selectedProjectId }) => {
  const [scaleValues, setScaleValues] = useState({ scaleX: 1, scaleY: 1 });
  const [translateValues, setTranslateValues] = useState({ translateX: 0, translateY: 0 });
  const [itemScale, setItemScale] = useState({ itemScale: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const selectedElementRef = useRef(null);

  const springWobbly = (t) => {
    return -0.5 * Math.exp(-6 * t) * (-2 * Math.exp(6 * t) + Math.sin(12 * t) + 2 * Math.cos(12 * t));
};

  useEffect(() => {

    

    
    if (selectedProjectId && selectedElementRef.current) {
      const elem = selectedElementRef.current;

      if (typeof window !== 'undefined') {
        const isMinWidth768 = window.matchMedia('(min-width: 768px)').matches;
        const isMinWidth640 = window.matchMedia('(min-width: 640px)').matches;

        const marginTop = isMinWidth768 ? 20 : 48;



        const minWidth = isMinWidth768
          ? Math.min(window.innerWidth - 56, 960 )
          : isMinWidth640
            ? window.innerWidth - 56
            : window.innerWidth - 24;

        const scaleX = minWidth / elem.offsetWidth;
        const scaleY = (window.innerHeight - marginTop) / elem.offsetHeight + 1;
        setScaleValues({ scaleX, scaleY });

        const rect = elem.getBoundingClientRect();
        const translateY = marginTop - rect.top;
        const translateX = window.innerWidth / 2 - (rect.left + rect.width / 2);
        setTranslateValues({ translateX, translateY });

        const itemScale = (minWidth / (elem.offsetHeight - 80 + 18)) * (2 / 3); // change 80 if height of title is changed.
        setItemScale({ itemScale });

        setTimeout(() => {
          setIsHidden(true);
        }, 300);
      }
    } else {
      setIsHidden(false);
    }
  }, [selectedProjectId]);

  const handleClick = (id) => {
    onSelect(id);
  };

  return (
    <div id="project-list" className="sm:columns-2 lg:columns-3 p-2 gap-4 pb-8">
      {projects.map((project) => (
        <div
          key={project.id}
          ref={selectedProjectId === project.id ? selectedElementRef : null}
          className={`project mb-4 ${styles.projectItem} ${selectedProjectId === project.id ? `${styles.scaled}` : ''
            } ${isHidden && selectedProjectId === project.id ? styles.hidden : ''}`}
          onClick={() => handleClick(project.id)}
          style={{ breakInside: 'avoid' }}
        >
          <div id= "projectCard" className="projectCard w-full text-zinc-950 tracking-wide rounded-xl sm:hover:scale-[1.01] sm:hover:scale-z-[1.01] duration-[250ms] ease-[cubic-bezier(0,0,.5,1)]">
            <div
              className={`${styles.projectItem} border w-full flex-col relative flex group bg-white rounded-xl  `}
              style={
                selectedProjectId === project.id
                  ? {
                    borderWidth: '0px',
                    pointerEvents: 'none',
                    borderRadius: '6px',
                    transform: `translate(${translateValues.translateX}px, ${translateValues.translateY}px) scale(${scaleValues.scaleX}, ${scaleValues.scaleY})`,
                  }
                  : {}
              }
            >
              {project.image && (
                <div
                  className="overflow-hidden rounded-xl duration-[250ms] origin-top projectImage select-none"
                  style={
                    selectedProjectId === project.id
                      ? {
                        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
                        borderBottomLeftRadius: '0px',
                        borderBottomRightRadius: '0px',
                        transform: `scale(${(1 / scaleValues.scaleX) * itemScale.itemScale}, ${(1 / scaleValues.scaleY) * itemScale.itemScale})`,
                      }
                      : {}
                  }
                >
                  <img
                    className="object-cover !border-none !rounded-none select-none"
                    src={project.image.src}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                  />
                </div>
              )}
              {project.video && (
                <div
                  className="overflow-hidden rounded-xl duration-[250ms] origin-top projectImage select-none"
                  style={
                    selectedProjectId === project.id
                      ? {
                        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
                        transform: `scale(${(1 / scaleValues.scaleX) * itemScale.itemScale}, ${(1 / scaleValues.scaleY) * itemScale.itemScale})`,
                      }
                      : {}
                  }
                >
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="object-cover select-none"
                    width={project.video.width}
                    height={project.video.height}
                  >
                    <source src={project.video.src} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
            <div
              style={
                selectedProjectId === project.id
                  ? { opacity: '0', transition: 'opacity 0.1s' }
                  : {}
              }
              className="z-20 px-1 pb-2 relative w-full flex-row"
            >
              <div
                className={`flex w-full pt-[6px] pb-[1px] truncate text-2xl tracking-[.007em] justify-between ${text.className}`}
              >
                {project.title}

                <div className="opacity-20"> {project.year} </div>

              </div>
              <div
                className={`text-zinc-400 opacity-80 w-full truncate text-xs uppercase tracking-wider ${regularText.className}`}
              >
                {project.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
