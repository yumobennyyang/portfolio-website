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

  useEffect(() => {
    if (selectedProjectId && selectedElementRef.current) {
      const elem = selectedElementRef.current;

      // Ensure window is defined (client-side execution)
      if (typeof window !== 'undefined') {
        const minWidth = window.matchMedia('(min-width: 768px)').matches
          ? Math.min(window.innerWidth - 56, 960)
          : window.innerWidth - 24;

        const scaleX = minWidth / elem.offsetWidth;
        const scaleY = (window.innerHeight - 20) / elem.offsetHeight + 1; // 20 is the top margin
        setScaleValues({ scaleX, scaleY });

        const rect = elem.getBoundingClientRect();
        const translateY = 20 - rect.top; // 20 is the top margin
        const translateX = window.innerWidth / 2 - (rect.left + rect.width / 2);
        setTranslateValues({ translateX, translateY });

        const itemScale = (minWidth / (elem.offsetHeight - 84)) * (2 / 3);
        setItemScale({ itemScale });

        setTimeout(() => {
          setIsHidden(true);
        }, 500);
      }
    } else {
      setIsHidden(false);
    }
  }, [selectedProjectId]);

  const handleClick = (id) => {
    onSelect(id);
  };

  return (
    <div id="project-list" className="sm:columns-2 lg:columns-3 p-2 gap-4 pb-8 ">
      {projects.map((project) => (
        <div
          key={project.id}
          ref={selectedProjectId === project.id ? selectedElementRef : null}
          className={`project  pb-4 ${styles.projectItem} ${selectedProjectId === project.id ? `${styles.scaled}` : ''} ${isHidden && selectedProjectId === project.id ? styles.hidden : ''}`}
          onClick={() => handleClick(project.id)}
          style={{ breakInside: 'avoid' }}

        >
          <div className=" w-full  text-zinc-950 tracking-wide  rounded-xl  ">
            <div
              className={`${styles.projectItem} border w-full flex-col relative flex group bg-white rounded-xl layer-shadow layer-shadow-hover sm:hover:scale-[1.01] sm:hover:scale-z-[1.01] duration-300 ease-[cubic-bezier(0,0,.5,1)]`}
              style={selectedProjectId === project.id ? {borderWidth:'0px', pointerEvents: 'none', borderRadius: `${6}px`, transform: ` translate(${translateValues.translateX}px, ${translateValues.translateY}px) scale(${scaleValues.scaleX}, ${scaleValues.scaleY}) ` } : {}}
            >

              {project.image && (
                <div className=" overflow-hidden rounded-xl  duration-300  origin-top "
                  style={selectedProjectId === project.id
                    ? {  transform: `scale(${(1 / scaleValues.scaleX) * itemScale.itemScale}, ${(1 / scaleValues.scaleY) * itemScale.itemScale}) ` }
                    : {}}>
                  <img className="object-cover !border-none !rounded-none" src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
              )}
              {project.video && (
                <div className="overflow-hidden rounded-xl  duration-300  origin-top"
                  style={selectedProjectId === project.id
                    ? { transform: `scale(${(1 / scaleValues.scaleX) * itemScale.itemScale}, ${(1 / scaleValues.scaleY) * itemScale.itemScale}) ` }
                    : {}}>

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

            </div>
            <div style={selectedProjectId === project.id
              ? { opacity: '0', transition: 'opacity 0.1s' }
              : {}}
              className="z-20 px-1 pb-2 relative w-full flex-row">
              <div className={` w-full pt-[10px] pb-[1px] truncate text-2xl tracking-[.007em] ${text.className}`}>{project.title}</div>
              <div className={` text-zinc-500 opacity-80 w-full truncate  text-xs uppercase tracking-wider ${regularText.className}`}>{project.description}</div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProjectList;
