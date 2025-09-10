import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';

const subtitle = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
const text = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Medium.otf' });
const description = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Bold.otf' });
const title = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Regular.otf' });

const ProjectList = ({ onSelect, selectedProjectId }) => {
  const [scaleValues, setScaleValues] = useState({ scaleX: 1, scaleY: 1 });
  const [translateValues, setTranslateValues] = useState({ translateX: 0, translateY: 0 });
  const [itemScale, setItemScale] = useState({ itemScale: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const selectedElementRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);

  const springWobbly = (t) => {
    return -0.5 * Math.exp(-6 * t) * (-2 * Math.exp(6 * t) + Math.sin(12 * t) + 2 * Math.cos(12 * t));
  };

  useEffect(() => {
    const updateTransformValues = () => {
      if (selectedProjectId && selectedElementRef.current) {
        const elem = selectedElementRef.current;
  
        const isMinWidth768 = window.matchMedia('(min-width: 768px)').matches;
        const isMinWidth640 = window.matchMedia('(min-width: 640px)').matches;
  
        const marginTop = isMinWidth768 ? 0 : 0;
  
        const minWidth = isMinWidth768
          ? Math.min(window.innerWidth - 56, 800)
          : isMinWidth640
            ? window.innerWidth - 56
            : window.innerWidth - 24;
  
        const scaleX = window.innerWidth / elem.offsetWidth;
        const scaleY = (600) / elem.offsetHeight * 1.5;
  
        const rect = elem.getBoundingClientRect();
        const translateY = marginTop - rect.top;
        const translateX = window.innerWidth / 2 - (rect.left + rect.width / 2);
  
        const itemScale = (minWidth / (elem.offsetHeight - 0)) * (2 / 3); //change 0 if title height is added
  
        setScaleValues({ scaleX, scaleY });
        setTranslateValues({ translateX, translateY });
        setItemScale({ itemScale });
      }
    };
  
    updateTransformValues();
  
    window.addEventListener('resize', updateTransformValues);
    return () => window.removeEventListener('resize', updateTransformValues);
  }, [selectedProjectId]);
  

  useEffect(() => {
    if (!selectedProjectId) {
      setFadeIn(false);
      // Trigger fade-in after a short delay to ensure re-render
      setTimeout(() => setFadeIn(false), 10);
    } else {
      setFadeIn(false);
    }
  }, [selectedProjectId]);

  const handleClick = (id) => {
    onSelect(id);
  };

  return (
    <div id="project-list" className={` sm:columns-2 lg:columns-3 p-2 gap-2 pb-8 ${fadeIn ? styles.projectListFadeIn : ''}`}>
      {projects.map((project) => (
        <div
          key={project.id}
          ref={selectedProjectId === project.id ? selectedElementRef : null}
          className={` project mb-2 ${styles.projectItem} ${selectedProjectId === project.id ? `${styles.scaled}` : ''}
      ${isHidden && selectedProjectId === project.id ? "" : ''}

      ${selectedProjectId && selectedProjectId !== project.id ? styles.projectFadeOut : ''}
    `}
          onClick={() => handleClick(project.id)}
          style={{
            breakInside: 'avoid',
            zIndex: selectedProjectId === project.id ? 99999999999999999999 : '0'
          }}
        >
          <div id="projectCard" className={` projectCard w-full text-zinc-950 tracking-wide rrounded-xl ${selectedProjectId === project.id ? '' : 'sm:hover:scale-[1.01]'} duration-[250ms] ease-[cubic-bezier(0,0,.5,1)]`}>
            <div
              className={`${styles.projectItem}  bborder  w-full flex-col relative flex grouprrounded-xl  `}
              style={
                selectedProjectId === project.id
                  ? {
                    borderWidth: '0px',
                    pointerEvents: 'none',
                    borderRadius: '0px',
                    transformOrigin: 'top center',
                    transform: `translate(${translateValues.translateX}px, ${translateValues.translateY}px) scale(${scaleValues.scaleX}, ${scaleValues.scaleY})`,
                  }
                  : {}
              }
            >
              {project.image && (
                <div
                  className=" overflow-hidden rrounded-xl duration-[250ms] origin-top projectImage select-none"
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
                    className="object-cover !border-none !rrounded-none select-none"
                    src={project.image.src}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                  />
                </div>
              )}
              {project.video && (
                <div
                  className="overflow-hidden rrounded-xl duration-[250ms] origin-top projectImage select-none"
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
                    className="object-cover select-none block"
                    width={project.video.width}
                    height={project.video.height}
                    style={{
                      filter: `${project.video.filter} `
                    }}

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
              className="z-20 pb-2 relative w-full flex-row hidden "
            >
              <div
                className={`flex w-full pt-[2px] uppercase -mb-[2px] font-medium truncate text-sm   justify-between ${title.className}`}
              >
                {project.title}

                <div className="font-light opacity-20"> {project.year} </div>

              </div>
              <div
                className={` opacity-30 w-full font-light truncate text-xs uppercase ${subtitle.className}`}
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
