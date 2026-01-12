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
    const [modalWidth, setModalWidth] = useState(0);
    const [maxH, setMaxH] = useState(0);
    const project = projects.find((p) => p.id === projectId);
    const [detailsVisible, setDetailsVisible] = useState(false);

    useEffect(() => {



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
    }, []);

    if (!project) return null;



    return (
        <div className={`${regularText.className} tracking-normal text-neutral-900 bg-[#f1f1f1]`}>




            {project.image && (
                <div className="brightness-100 overflow-hidden max-w-[700px] m-auto flex justify-center">
                    <img className="object-top object-contain !border-none w-full h-auto" src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
            )}


            {project.video && (
                <div className="overflow-hidden max-w-[700px] m-auto flex justify-center">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="object-fit object-top w-full h-auto"
                        width={project.video.width}
                        height={project.video.height}
                        style={{ filter: `${project.video.filter} ` }}>

                        <source src={project.video.src} type="video/mp4" />

                    </video>
                </div>
            )}

            <div className={`max-w-[800px] px-4 m-auto z-20 relative w-full grid grid-cols-2 gap-4 text-neutral-950 ${detailsVisible ? 'opacity-1 duration-[1000ms]' : 'opacity-0'} `}>


                <div className={`px-0 text-[20px] -mt-[2px] grid grid-cols-2 gap-4 items-start ${title.className}`}>
                    <div className="font-medium">{project?.title}</div>
                    <div className="font-[250]">{project?.year}</div>
                </div>


                <div className=" px-0  opacity-100 font-[350] text-[14px] items-start "> {project?.overview}</div>



                <div className="flex flex-col space-y-6 font-[350] px-0 text-[14px] mt-8 col-span-2">



                    {project.tools && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-2 ${labels.className}`}>
                                <span className="">Tools</span>
                            </div>
                            <ul className="col-start-3 col-span-2  flex flex-wrap gap-x-4 gap-y-1">
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-2  ${labels.className}`}>
                                <span className="">Duration</span>
                            </div>
                            <div className="col-start-3 col-span-2"> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-2  ${labels.className}`}>
                                <span className="">Team</span>
                            </div>
                            <ul className="col-start-3 col-span-2 flex flex-wrap gap-x-4 gap-y-1">
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.role && (
                        <div className="grid grid-cols-4 gap-4">
                            <div className={`col-start-2   ${labels.className}`}>
                                <span className="">Role</span>
                            </div>
                            <ul className="col-start-3 col-span-2 flex flex-wrap gap-x-4 gap-y-1">
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>
                    )}



                </div>
            </div>


            <div className="bg-[#f1f1f1] pb-16 max-w-[800px] m-auto px-4">
                {project.content.map((item, index) => {
                    const animationProps = {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: true, margin: "-50px" },
                        variants: {
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                        }
                    };

                    if (item.type === 'spacing') {
                        return <div className={`py-3`} key={index}></div>;
                    }

                    if (item.type === 'textarea') {
                        return (
                            <motion.div {...animationProps} className="w-full mt-2" key={index}>
                                <div contentEditable data-placeholder="Type Something" className={` textarea px-1  !min-h-[106px] leading-[48px] text-5xl py-0 rounded pb-2 bg-neutral-200 text-[#D93A34] D93A34 border-[#dddddd]  border layer-shadow textareaElement ${neoTetra.className}`} ></div>
                            </motion.div>
                        );
                    }
                    if (item.type === 'section') {
                        if (item.secondaryText) {
                            return (
                                <motion.div {...animationProps} className={` mb-1 grid grid-cols-4 gap-4 items-start text-neutral-950 font-medium  ${title.className}`} key={index}>
                                    <div className="col-span-1 mt-[78px] text-xl">{item.text}</div>
                                    <div className="col-span-3 mt-[5rem] font-[350] text-[14px] mb-[6px] ">{item.secondaryText}</div>
                                </motion.div>
                            );
                        }
                        return (
                            <motion.div {...animationProps} className={` font-medium mb-1 mt-[5rem] text-xl ${title.className}`} key={index}>
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


                        return <motion.div {...animationProps} className=" my-1" key={index} ><img className="px-0" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></motion.div>;
                    }

                    if (item.type === 'smallImage') {
                        return <motion.div {...animationProps} className=" my-1" key={index} ><img className="px-0" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></motion.div>;
                    }


                    if (item.type === 'line') {
                        return <motion.div {...animationProps} className=" border-b border-neutral-300 mb-2" key={index}></motion.div>;
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
                        if (autoplay && looping) {
                            // Video that auto-plays and loops without controls
                            return (
                                <motion.div
                                    {...animationProps}
                                    className="my-1   w-full h-auto overflow-hidden layer-shado"
                                    key={index}
                                >
                                    <video
                                        playsInline
                                        muted
                                        autoPlay
                                        loop
                                        className="object-contain"
                                        width="100%"
                                        height="auto"
                                    >
                                        <source src={item.src} />
                                    </video>
                                </motion.div>
                            );
                        } else {
                            // Video with controls
                            return (
                                <motion.div
                                    {...animationProps}
                                    className="my-1   w-full h-auto overflow-hidden layer-shadow "
                                    key={index}
                                >
                                    <video
                                        playsInline
                                        controls
                                        className="object-contain"
                                        width="100%"
                                        height="auto"
                                    >
                                        <source src={item.src} />
                                    </video>
                                </motion.div>
                            );
                        }
                    }
                    return null;
                })}
            </div>
        </div>



    );
};

export default ProjectView;
