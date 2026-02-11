'use client';

import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from './Modal.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';
import { easeOut, motion } from 'framer-motion';

const title = localFont({ src: '../fonts/TT_Commons_Pro_Mono_VF_Trial.ttf' });
const loading = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' })

const ProjectList = ({ onSelect, selectedProjectId, category, showProjectView }) => {
  const filteredProjects = category ? projects.filter(p => p.category === category) : projects;
  const cardRefs = useRef({});
  const [cardStyles, setCardStyles] = useState({});
  const [mediaStyles, setMediaStyles] = useState({});
  const [textStyles, setTextStyles] = useState({});
  const [placeholderStyle, setPlaceholderStyle] = useState(null);
  const [verticalOffsets, setVerticalOffsets] = useState({});
  const [originalPositions, setOriginalPositions] = useState({});
  const [isClosing, setIsClosing] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [shakingId, setShakingId] = useState(null);
  const shakeTimeoutRef = useRef(null);

  const triggerShake = (id) => {
    if (shakeTimeoutRef.current) {
      clearTimeout(shakeTimeoutRef.current);
    }
    setShakingId(id);
    shakeTimeoutRef.current = setTimeout(() => {
      setShakingId(null);
      shakeTimeoutRef.current = null;
    }, 500);
  };

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  };




  const springWobbly = (t) => {
    return -0.5 * Math.exp(-6 * t) * (-2 * Math.exp(6 * t) + Math.sin(12 * t) + 2 * Math.cos(12 * t));
  };


  
  // Calculate vertical offsets for images that are wider than their containers
  const calculateVerticalOffsets = () => {
    const offsets = {};
    filteredProjects.forEach((project) => {
      const elem = cardRefs.current[project.id];
      if (!elem) return;
      
      const rect = elem.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerHeight = rect.height;
      const containerAspect = containerWidth / containerHeight;
      
      let mediaAspect = null;
      if (project.image && project.image.width && project.image.height) {
        mediaAspect = project.image.width / project.image.height;
      } else if (project.video && project.video.width && project.video.height) {
        mediaAspect = project.video.width / project.video.height;
      }
      
      if (mediaAspect !== null && mediaAspect > containerAspect) {
        // Image is wider than container, will have vertical gaps
        const renderedHeight = containerWidth / mediaAspect;
        const gap = containerHeight - renderedHeight;
        offsets[project.id] = gap / 2;
      } else {
        offsets[project.id] = 0;
      }
    });
    setVerticalOffsets(offsets);
  };

  // Calculate offsets on mount and resize
  useEffect(() => {
    // Delay to ensure refs are populated
    const timer = setTimeout(calculateVerticalOffsets, 100);
    window.addEventListener('resize', calculateVerticalOffsets);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateVerticalOffsets);
    };
  }, [category, filteredProjects]);



  // Function to calculate and set expanded card styles
  const updateExpandedCardStyles = (id) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Responsive padding based on breakpoints
    const isSmall = viewportWidth < 640;
    const isMedium = viewportWidth >= 640 && viewportWidth < 768;
    
    const padding = isSmall ? 12 : 42; // smaller padding on mobile
    const topPadding = 60; // pt-20
    const bottomPadding = 98; // pb-[98px]
    const targetWidth = viewportWidth - (padding * 2);
    const targetHeight = viewportHeight - topPadding - bottomPadding;

    // Calculate text translation to align with "Close" button
    // Target (Close btn): left: 38+7=45, top: 54+3=57
    // Source (Card text): left: padding+6, top: 80+3=83
    // DeltaX = 45 - (padding + 6) = 39 - padding
    // DeltaY = 57 - 83 = -26
    const textDeltaX = 0;
    const textDeltaY = -26;

    setCardStyles({
      [id]: {
        position: 'fixed',
        top: `${topPadding}px`,
        left: `${padding}px`,
        width: `${targetWidth}px`,
        height: `${targetHeight}px`,
        zIndex: 10001,
        borderRadius: '0px',
        pointerEvents: 'none',
        transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }
    });

    setTextStyles({
      [id]: {
        transform: `translate(${textDeltaX}px, ${textDeltaY}px)`,
      }
    });
  };

  const handleClick = (id) => {
    const elem = cardRefs.current[id];
    if (!elem) {
      onSelect(id);
      return;
    }

    const rect = elem.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Store placeholder dimensions to maintain space in grid
    setPlaceholderStyle({
      id,
      width: rect.width,
      height: rect.height,
    });
    
    // Store original position for closing animation
    setOriginalPositions(prev => ({
      ...prev,
      [id]: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      }
    }));
    
    // Responsive padding based on breakpoints
    const isSmall = viewportWidth < 640;
    const padding = isSmall ? 12 : 42;
    const topPadding = 60;
    const bottomPadding = 98;
    const targetWidth = viewportWidth - (padding * 2);
    const targetHeight = viewportHeight - topPadding - bottomPadding;

    // Set transform styles for the clicked card - use fixed position to break out of grid
    // First set position WITHOUT transition to capture current position
    setCardStyles({
      [id]: {
        position: 'fixed',
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        zIndex: 10001,
        pointerEvents: 'none',
        transition: 'none',
      }
    });

    // Trigger the expansion animation after two frames to ensure initial position is painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateExpandedCardStyles(id);
      });
    });

    const finalMediaWidth = Math.min(targetWidth, 700);

    setMediaStyles({
      [id]: {
        width: `${finalMediaWidth}px`,
      }
    });

    onSelect(id);
  };

  // Reset styles when modal closes and handle resize
  useEffect(() => {
    if (!selectedProjectId && !isClosing) {
      // Find which card was previously selected to animate it back
      const prevId = Object.keys(cardStyles)[0];
      if (prevId && originalPositions[prevId]) {
        setIsClosing(true);
        const orig = originalPositions[prevId];
        
        // Animate back to original position
        setCardStyles({
          [prevId]: {
            position: 'fixed',
            top: `${orig.top}px`,
            left: `${orig.left}px`,
            width: `${orig.width}px`,
            height: `${orig.height}px`,
            zIndex: 10001,
            pointerEvents: 'none',
            transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }
        });
        setMediaStyles({});
        setTextStyles({});

        // Clear styles after animation completes
        setTimeout(() => {
          // First disable transition to prevent twitch
          const prevIdCopy = prevId;
          setCardStyles({
            [prevIdCopy]: {
              transition: 'none',
            }
          });
          // Then clear all styles on next frame
          requestAnimationFrame(() => {
            setCardStyles({});
            setMediaStyles({});
            setTextStyles({});
            setPlaceholderStyle(null);
            setOriginalPositions({});
            setIsClosing(false);
          });
        }, 300);
      } else {
        setCardStyles({});
        setMediaStyles({});
        setTextStyles({});
        setPlaceholderStyle(null);
      }
      return;
    }

    // Update card styles on resize
    const handleResize = () => {
      if (selectedProjectId) {
        updateExpandedCardStyles(selectedProjectId);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedProjectId]);

  return (
    <motion.div 
      id="project-list" 
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[6px] auto-rows-fr h-auto min-h-[100dvh] pt-[60px] pb-[98px] sm:px-[42px] px-[12px]"
      key={category}
    >
      {filteredProjects.map((project, index) => {
        const isSelected = selectedProjectId === project.id;
        const isThisCardClosing = isClosing && cardStyles[project.id];
        const isOther = selectedProjectId && selectedProjectId !== project.id;
        const shouldFadeOut = isOther && !showProjectView;
        const hasFixedStyles = cardStyles[project.id]?.position === 'fixed';
        
        const isClickable = project.clickable !== false;
        const isShaking = shakingId === project.id;
        
        const verticalTranslateY = (!isSelected || isThisCardClosing) ? (verticalOffsets[project.id] !== undefined ? verticalOffsets[project.id] : 55) : 0;
        
        return (
          <div key={project.id} className="relative w-full h-full"> 
            {/* This wrapper stays in grid, card inside can become fixed */}
            <motion.div
              ref={(el) => cardRefs.current[project.id] = el}
              className={`project ${isClickable ? 'group cursor-pointer' : 'cursor-default'} bg-[#f5f5f7] ${styles.projectItem} ${hasFixedStyles ? '' : 'absolute inset-0'} ${isSelected ? '' : 'overflow-hidden'}`}
              onClick={() => {
                if (isClickable) {
                  handleClick(project.id);
                } else {
                  triggerShake(project.id);
                }
              }}
              initial={{ opacity: 1, y: 10, z: 0 }}
              animate={
                shouldFadeOut 
                  ? { opacity: 0, y: 0, z: 0 } 
                  : isShaking 
                    ? { x: [0, -5, 5, -5, 5, 0], y: 0, z: 0, opacity: 1, transition: { duration: 0.4 } }
                    : { opacity: 1, y: 0, z: 0, x: 0 }
              }
              transition={{
                duration: 0.5,
                delay: isSelected || isOther ? 0 : (index * 0.05) + 0.1, // Add base delay to prevent race condition on index 0
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              style={{
                ...(cardStyles[project.id] || {}),
                pointerEvents: isOther ? 'none' : undefined,
                // Force persistent hardware acceleration to prevent Safari flashing at animation end
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0)', 
              }}
            >
             <div 
               className={`${isClickable && !isSelected ? 'projectCard ' : ''} w-full bg-[#f5f5f7] h-full text-zinc-950 tracking-wide flex items-center justify-center`}
               style={{
                 transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
               }}
             >
                <div 
                  className="w-full h-full flex items-center justify-center relative bg-[#f5f5f7]"
                  style={{
                    ...(mediaStyles[project.id] || {}),
                    transform: `translateY(${verticalTranslateY}px)`,
                    transition: isSelected && !isThisCardClosing 
                      ? 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' // Opening: offset → 0
                      : 'all 0.3s ease-out', // Closing: 0 → offset
                  }}
                >
                  {!imagesLoaded[project.id] && (
                       <div 
                           className={`absolute inset-0 flex items-center justify-center ${loading.className} text-xl sm:text-2xl font-[550] text-black opacity-10 z-[0]`}
                           style={{
                               transform: `translateY(${-verticalTranslateY}px)`,
                           }}
                       >
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0 }}
                           >P</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.01 }}
                           >a</motion.span>

                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.02 }}
                           >i</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.03 }}
                           >n</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.04 }}
                           >t</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.05 }}
                           >i</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.06 }}
                           >n</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.07 }}
                           >g</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.08 }}
                           >&nbsp;.</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.09 }}
                           >&nbsp;.</motion.span>
                           <motion.span
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse", delay: 0.1 }}
                           >&nbsp;.</motion.span>
                       </div>
                  )}
                  {project.image && (
                    <div className={`w-full h-full flex items-center justify-center projectImage select-none transition-opacity duration-500 ${imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'} relative z-[10]`}>
                      <Image
                        fill
                        className="object-contain object-top select-none"
                        src={project.image.src}
                        alt={project.title}
                        sizes="(max-width: 640px) 50vw, 33vw"
                        priority={index < 6}
                        unoptimized
                        onLoad={() => handleImageLoad(project.id)}
                      />
                    </div>
                  )}
                  {project.video && (
                    <div className={`w-full h-full bg-[#f5f5f7] flex items-center justify-center projectImage select-none transition-opacity duration-500 ${imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'} relative z-[10]`}>
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className={`object-contain object-top  w-full h-full select-none ${project.video.style || ''}`}
                        style={{ filter: project.video.filter || '' }}
                        onLoadedData={() => handleImageLoad(project.id)}
                        onCanPlay={() => handleImageLoad(project.id)}
                        onLoadedMetadata={() => handleImageLoad(project.id)}
                        poster={project.image ? project.image.src : undefined}
                        ref={(vid) => {
                            if (vid && vid.readyState >= 2) {
                                handleImageLoad(project.id);
                            }
                        }}
                      >
                        <source src={project.video.src} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
            </div>
            <div 
              className={`font-[300] absolute top-0 left-0 right-0 ${isSelected ? 'px-[2px]' : 'px-[6px]'} py-[3px] flex justify-between items-start ${title.className}`}
              style={{
                opacity: 1,
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                zIndex: 30,
                ...(textStyles[project.id] || {}),
              }}
            >
              <div className={`flex gap-1 transition-opacity duration-250 ${isSelected ? 'opacity-100' : (isClickable ? 'sm:opacity-20 opacity-40 group-hover:opacity-100' : 'opacity-40')}`}>
                <span className="text-[10px] sm:text-xs uppercase">{project.title}</span>
                <span className={`hidden sm:inline text-[10px] sm:text-xs uppercase transition-opacity duration-250 pl-[3px] ${isSelected ? 'opacity-100' : (isClickable ? 'sm:opacity-0 opacity-40 group-hover:opacity-100' : 'opacity-100')}`}> 〡 {project.description}</span>
              </div>
              <span className={`text-[10px] sm:text-xs transition-opacity duration-250 ${isSelected ? 'opacity-100' : (isClickable ? 'sm:opacity-20 opacity-40 group-hover:opacity-100' : 'opacity-40')}`}>{project.year}</span>
            </div>
            {/* Mobile description at bottom left */}
            <div 
              className={`sm:hidden font-[300] absolute bottom-0 left-0 right-0 ${isSelected ? 'px-[2px]' : 'px-[6px]'} py-[3px] flex justify-start items-end ${title.className}`}
              style={{
                opacity: 1,
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                zIndex: 30,
                ...(textStyles[project.id] || {}), // Apply same transform to keep it consistent or removing it if it shouldn't move
              }}
            >
              <span className={`text-[10px] sm:text-xs uppercase transition-opacity duration-250 ${isSelected ? 'opacity-0' : (isClickable ? 'opacity-40 group-hover:opacity-100' : 'opacity-40')}`}>
                {project.description}
              </span>
            </div>

            {/* {project.video &&(
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px 30px #F5F5F7',
                  zIndex: 20
                }}
              />
            )} */}

            {/* {!isClickable && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 9px 3px white',
                  zIndex: 20
                }}
              />
            )} */}
            
          </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProjectList;
