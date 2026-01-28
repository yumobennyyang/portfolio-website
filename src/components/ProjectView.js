import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

import Image from 'next/image';

import styles from './Modal.module.css';

const regularText = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });
const title = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });
const neoTetra = localFont({ src: '../fonts/NeoTetra-Regular.ttf' });
const labels = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' })

const ProjectView = ({ projectId }) => {
    const project = projects.find((p) => p.id === projectId);
    const [mainImageLoaded, setMainImageLoaded] = useState(false);
    const [contentImagesLoaded, setContentImagesLoaded] = useState({});
    const [modalWidth, setModalWidth] = useState(0);
    const [maxH, setMaxH] = useState(0);
    const [detailsVisible, setDetailsVisible] = useState(false);

    // Handler for main image
    const handleMainImageLoad = () => {
        setMainImageLoaded(true);
    };

    // Handler for content images
    const handleContentImageLoad = (index) => {
        setContentImagesLoaded(prev => {
            if (prev[index]) return prev;
            return { ...prev, [index]: true };
        });
    };

    useEffect(() => {
        // Reset main image loading state when project changes
        setMainImageLoaded(false);
        setContentImagesLoaded({});
        
        if (typeof window !== 'undefined') {
            const isMinWidth768 = window.matchMedia('(min-width: 768px)').matches;
            const isMinWidth640 = window.matchMedia('(min-width: 640px)').matches;

            const calcModalWidth = isMinWidth768
                ? Math.min(window.innerWidth - 56, 700)
                : isMinWidth640
                    ? window.innerWidth - 56
                    : window.innerWidth - 24;
            const calcMaxH = (calcModalWidth / 3) * 2;
            setModalWidth(calcModalWidth);
            setMaxH(calcMaxH);

            setTimeout(() => setDetailsVisible(true), 500);
        }
    }, [projectId]); // Added projectId dependency to reset loading state

    if (!project) return null;

    return (
        <div className={`${regularText.className} tracking-normal text-neutral-900 bg-[#F5F5F7]`}>

            {project.image && (
                <div className=" brightness-100 overflow-hidden max-w-[700px] m-auto flex justify-center relative min-h-[50px]">
                    <img 
                        className={`object-top object-contain !border-none w-full h-auto transition-opacity duration-500 `} 
                        src={project.image.src} 
                        alt={project.title} 
                        width={project.image.width} 
                        height={project.image.height} 
                        onLoad={handleMainImageLoad}
                        ref={(img) => {
                            if (img && img.complete) handleMainImageLoad();
                        }}
                    />
                </div>
            )}

            {project.video && (
                <div className="  overflow-hidden max-w-[700px] m-auto flex justify-center relative min-h-[50px]">
                    
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className={`object-fit object-top w-full h-auto transition-opacity duration-500 mix-blend-darken ${project.video.style || ''} `}
                        width={project.video.width}
                        height={project.video.height}
                        style={{ filter: `${project.video.filter} ` }}
                        onLoadedData={handleMainImageLoad}
                        ref={(vid) => {
                            if (vid && vid.readyState >= 3) handleMainImageLoad();
                        }}
                    >
                        <source src={project.video.src} type="video/mp4" />
                    </video>
                </div>
            )}

            <div className={`max-w-[800px] px-4 m-auto z-20 relative w-full grid grid-cols-4 sm:grid-cols-2 gap-4 text-neutral-950 ${detailsVisible ? 'opacity-1 duration-[1000ms]' : 'opacity-0'} `}>


                <div className={`px-0 text-[20px] -mt-[3px] grid grid-cols-4 sm:grid-cols-2 gap-4 items-start col-span-4 sm:col-span-1 ${title.className}`}>
                    <div className="font-medium col-span-2 sm:col-span-1">{project?.title}</div>
                    <div className="font-[250] col-start-3 sm:col-start-auto">{project?.year}</div>
                </div>


                <div className="col-span-4 sm:col-span-1 px-0  opacity-100 font-[350] text-[14px] items-start "> {project?.overview}</div>



                <div className="flex flex-col space-y-6 font-[350] px-0 text-[14px] mt-8 col-span-4 sm:col-span-2">



                    {project.tools && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-1 sm:col-start-2 ${labels.className}`}>
                                <span className="">Tools</span>
                            </div>
                            <ul className="col-start-2 col-span-3 sm:col-start-3 sm:col-span-2  flex flex-wrap gap-x-4 gap-y-1">
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-1 sm:col-start-2  ${labels.className}`}>
                                <span className="">Duration</span>
                            </div>
                            <div className="col-start-2 col-span-3 sm:col-start-3 sm:col-span-2"> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-1 sm:col-start-2  ${labels.className}`}>
                                <span className="">Team</span>
                            </div>
                            <ul className="col-start-2 col-span-3 sm:col-start-3 sm:col-span-2 flex flex-wrap gap-x-4 gap-y-1">
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.role && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-1 sm:col-start-2   ${labels.className}`}>
                                <span className="">Role</span>
                            </div>
                            <ul className="col-start-2 col-span-3 sm:col-start-3 sm:col-span-2 flex flex-wrap gap-x-4 gap-y-1">
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.links && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-1 sm:col-start-2   ${labels.className}`}>
                                <span className="">Links</span>
                            </div>
                            <ul className="col-start-2 col-span-3  sm:col-start-3 sm:col-span-2 flex flex-wrap gap-x-3 gap-y-1">
                                {project.links.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            className="!pointer-events-auto pr-[11px]  bg-[#E5E5E8] bg-opacity-60 hover:bg-opacity-100 pb-[1px] pl-[6px] rounded-full text-zinc-950 group w-auto inline-flex items-center translate-x-[-4px] group "
                                        >
                                            <span className="translate-x-[1px] text-xs group-hover:translate-x-[3px] group-hover:translate-y-[-2px] inline-block opacity-100 group-hover:opacity-100 transition-transform ease duration-100 mr-1">↗</span>
                                            <span className="opacity-100 group-hover:opacity-100">{link.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}



                </div>
            </div>


            <div className="bg-[#F5F5F7] pb-[100px] max-w-[800px] m-auto px-4">
                {project.content.map((item, index) => {
                    const animationProps = {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: true, margin: "-50px" },
                        variants: {
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                        }
                    };

                    if (item.type === 'spacing') {
                        return <div className={`py-3`} key={index}></div>;
                    }

                    if (item.type === 'textarea') {
                        return (
                            <motion.div {...animationProps} className="w-full mt-2" key={index}>
                                <div contentEditable data-placeholder="Type Something" className={` textarea px-1  !min-h-[106px] sm:leading-[48px] leading-[36px] sm:text-5xl text-4xl py-0 rounded pb-2 bg-[#E5E5E8] text-[#D93A34] D93A34 border-[#dddde2]  border layer-shadow textareaElement ${neoTetra.className}`} ></div>
                            </motion.div>
                        );
                    }
                    if (item.type === 'section') {
                        if (item.secondaryText) {
                            return (
                                <motion.div {...animationProps} className={` mb-1 grid grid-cols-4 sm:grid-cols-4 sm:gap-4 gap-0 items-start text-neutral-950 font-medium  ${title.className}`} key={index}>
                                    <div className="col-span-4 sm:col-span-1 mt-[77px] text-xl">{item.text}</div>
                                    <div className="col-span-4 sm:col-span-3 mt-1 sm:mt-[5rem] font-[350] text-[14px] mb-[6px] ">{item.secondaryText}</div>
                                </motion.div>
                            );
                        }
                        return (
                            <motion.div {...animationProps} className={` font-medium mb-1 mt-[77px] text-xl ${title.className}`} key={index}>
                                {item.text}
                            </motion.div>
                        );
                    }
                    if (item.type === 'text') {
                        return <motion.div {...animationProps} className={` opacity-100 font-[350]  mb-[6px] text-[14px] `} key={index}>{item.text}</motion.div>;
                    }

                    if (item.type === 'link') {
                        return <motion.a {...animationProps} href={item.url} className={`block mb-3 text-sm hover:opacity-50`} key={index}>↗ {item.text} </motion.a>;
                    }


                    if (item.type === 'image') {
                        return (
                            <motion.div 
                                {...animationProps} 
                                className={`my-1 relative w-full ${!contentImagesLoaded[index] ? 'bg-[#ECECEF]' : ''}`} 
                                style={!contentImagesLoaded[index] ? { aspectRatio: '5/3' } : {}}
                                key={index}
                            >
                                {!contentImagesLoaded[index] && (
                                                       <div 
                                                           className={`absolute inset-0 flex items-center justify-center ${regularText.className}  text-xl sm:text-2xl font-[550] text-black opacity-10 z-[0]`}
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
                                <Image 
                                    className={`px-0 z-1 transition-opacity duration-500 ${contentImagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`} 
                                    src={item.src} 
                                    alt={`Project ${project.id} Image ${index + 1}`} 
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    style={{ width: '100%', height: 'auto' }}
                                    onLoad={() => handleContentImageLoad(index)}
                                    unoptimized
                                />
                                {item.secondUrl && (
                                    <video
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                        className={`absolute z-[20] transition-opacity duration-500 pointer-events-none ${contentImagesLoaded[index] ? 'opacity-100' : 'opacity-0'} ${item.videoStyles || ''}`}
                                        src={item.secondUrl}
                                        style={item.videoInlineStyles || {}}
                                    />
                                )}
                            </motion.div>
                        );
                    }



                    if (item.type === 'line') {
                        return <motion.div {...animationProps} className=" opacity-0 border-b border-0 border-opacity-0 mb-2" key={index}></motion.div>;
                    }

                    if (item.type === 'iframe') {
                        const ratio = 1080 / 1920; // 1920:1080 aspect ratio

                        return <motion.div {...animationProps} className=" my-1 mx-1 iframe-container layer-shadow hidden md:flex" key={index}
                            style={{
                                ...item.containerStyling,
                                position: 'relative',
                                paddingBottom: `${ratio * 96}%`, // Maintain aspect ratio
                                height: 0,
                            }}>
                            <iframe
                                src={item.src}
                                className="iframe"
                                style={{
                                    ...item.iframeStyling,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: 'calc(100% - 8px)',
                                    height: '100%',
                                }}
                            />
                        </motion.div>
                    }
                    if (item.type === 'video') {

                        const { autoplay, looping } = item; // Get video-specific properties
                        const videoContent = (
                            <>
                                {!contentImagesLoaded[index] && (
                                   <div 
                                       className={`absolute inset-0 flex items-center justify-center ${regularText.className}  text-xl sm:text-2xl font-[550] text-black opacity-10 z-[0]`}
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
                                <video
                                    playsInline
                                    muted={true}
                                    autoPlay={autoplay}
                                    loop={looping}
                                    controls={!autoplay || !looping}
                                    className={`object-contain transition-opacity duration-500 ${contentImagesLoaded[index] ? 'opacity-100' : 'opacity-0'} relative z-[10]`}
                                    width="100%"
                                    height="auto"
                                    onLoadedData={() => handleContentImageLoad(index)}
                                    onCanPlay={() => handleContentImageLoad(index)}
                                    onLoadedMetadata={() => handleContentImageLoad(index)}
                                    ref={(vid) => {
                                        if (vid && vid.readyState >= 2) handleContentImageLoad(index);
                                    }}
                                >
                                    <source src={item.src} />
                                </video>
                            </>
                        );

                        return (
                            <motion.div
                                {...animationProps}
                                className={`my-1 w-full h-auto overflow-hidden layer-shadow relative ${!contentImagesLoaded[index] ? 'bg-[#ECECEF]' : ''}`}
                                style={!contentImagesLoaded[index] ? { aspectRatio: '16/9' } : {}}
                                key={index}
                            >
                                {videoContent}
                            </motion.div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>



    );
};

export default ProjectView;
