import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import localFont from 'next/font/local';

import Image from 'next/image';

import styles from './Modal.module.css';

const regularText = localFont({ src: '../fonts/SF-Pro.ttf' });
const title = localFont({ src: '../fonts/SF-Pro.ttf' });
const neoTetra = localFont({ src: '../fonts/NeoTetra-Regular.ttf' });
const labels = localFont({ src: '../fonts/SF-Pro.ttf' })

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
                ? Math.min(window.innerWidth - 56, 960)
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
        <div className={`${regularText.className} text-zinc-900 `}>




            {project.image && (
                <div className="overflow-hidden  rounded-t-xl ">
                    <img style={{ height: `${maxH}px` }} className={` h-[${maxH}px] object-contain  !border-none !rounded-none `} src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
            )}


            {project.video && (
                <div className="overflow-hidden  rounded-t-xl ">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className=" object-fit "
                        width={project.video.width}
                        height={project.video.height}
                        style={{ height: `${maxH}px` }}>

                        <source src={project.video.src} type="video/mp4" />

                    </video>
                </div>
            )}

            <div className={` z-20 pb-16 relative w-full flex-row ${detailsVisible ? 'opacity-1 duration-[1000ms]' : 'opacity-0'}`}>
                {/* <div className={` w-full pt-4 pb-4 truncate text-3xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div> */}

                <div className={` md:px-[6rem] px-[2rem] text-3xl tracking-wide  font-medium mb-3 pb-4 text-zinc-900 ${title.className}`}> {project?.title}</div>

                <div className={`md:px-[6rem] px-[2rem] text-zinc-400 opacity-80 text-xs font-light  uppercase tracking-wider  ${labels.className}`} >Overview</div>
                <div className=" md:px-[6rem] px-[2rem] tracking-[-.014em]  font-light mb-3 pb-4 text-[16px]  "> {project?.overview}</div>



                <div className="flex justify-between space-x-4 md:px-[6rem] px-[2rem] pb-3 text-[16px]">

                    {project.role && (
                        <div className="flex-1 "> 
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  font-light   ${labels.className}`}>ROLE</div>
                            <ul className="font-light ">
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {project.tools && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  font-light ${labels.className}`}>TOOLS</div>
                            <ul className="font-light ">
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider   font-light ${labels.className}`}>DURATION</div>
                            <div className="font-light "> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider   font-light ${labels.className}`}>TEAM</div>
                            <ul className="font-light">
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.media && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  font-light  ${labels.className}`}>MEDIA</div>
                            <ul className="font-light">
                                {project?.media?.map((media, index) => (
                                    <li key={index}>{media}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.dimensions && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  font-light ${labels.className}`}>DIMENSIONS</div>
                            <div className=" font-light">  {project?.dimensions}</div>
                        </div>
                    )}

                </div>
            </div>


            <div className="bg-[#f5f5f5] pb-16 pt-[2px]">
                {project.content.map((item, index) => {

                    if (item.type === 'spacing') {
                        return <div className={`py-3`} key={index}></div>;
                    }

                    if (item.type === 'textarea') {
                        return <div className="w-full bg-white pb-16">
                            <div contentEditable className={`md:mx-[6rem] mx-[2rem] px-1 max-w-[80%] leading-[48px] text-5xl py-0 rounded pb-2 bg-[#F5F5F5] text-[#D93A34] border-[#D93A34]  border layer-shadow textareaElement ${neoTetra.className}`} key={index}>Try here</div>
                        </div>
                    }
                    if (item.type === 'section') {
                        return (
                            <div className="flex justify-center  w-full" key={index}>
                                <div className={`md:px-[6rem] px-[2rem] text-zinc-400 opacity-100 text-xs uppercase tracking-wider mb-1 mt-[5rem]`}>
                                    {item.text}
                                </div>
                            </div>
                        );
                    }
                    if (item.type === 'text') {
                        return <div className={`md:px-[6rem] px-[2rem] text-zinc-900 font-light ttracking-[-.016em]  lleading-[1.4rem] mb-3 text-[16px] lleading-[1.4rem]`} key={index}>{item.text}</div>;
                    }

                    if (item.type === 'link') {
                        return <a href={item.url} className={`md:px-[6rem] px-[2rem] tracking-[-.016em] mb-3 text-sm hover:opacity-50`} key={index}>↗ {item.text} </a>;
                    }


                    if (item.type === 'image') {


                        return <div className=" my-1" key={index} ><img className="px-0" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                    }

                    if (item.type === 'smallImage') {
                        return <div className=" my-1" key={index} ><img className="md:px-[6rem] px-[2rem]" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                    }


                    if (item.type === 'line') {
                        return <div className=" md:mx-[6rem] mx-[2rem] border-b border-zinc-300 mb-2" key={index}></div>;
                    }

                    if (item.type === 'iframe') {
                        const ratio = 1080 / 1920; // 1920:1080 aspect ratio

                        return <div className="my-1 mx-1 iframe-container layer-shadow hidden md:flex" key={index}
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
                        </div>
                    }
                    if (item.type === 'video') {

                        const { autoplay, looping } = item; // Get video-specific properties
                        if (autoplay && looping) {
                            // Video that auto-plays and loops without controls
                            return (
                                <div
                                    className="my-1 px-0  w-full h-auto overflow-hidden layer-shadow border border-white/50"
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
                                </div>
                            );
                        } else {
                            // Video with controls
                            return (
                                <div
                                    className="my-1 px-0  w-full h-auto overflow-hidden layer-shadow border border-white/50"
                                    key={index}
                                >
                                    <video
                                        playsInline
                                        muted
                                        controls
                                        className="object-contain"
                                        width="100%"
                                        height="auto"
                                    >
                                        <source src={item.src} />
                                    </video>
                                </div>
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
