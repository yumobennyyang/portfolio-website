import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import localFont from 'next/font/local';

import Image from 'next/image';

import styles from './Modal.module.css';

const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Light.otf' });
const title = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Semibold.otf' });
const neoTetra = localFont({ src: '../fonts/NeoTetra-Regular.ttf' });

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
        <div className={`${regularText.className} text-black `}>




            {project.image && (
                <div className="overflow-hidden  rounded-t-xl">
                    <img style={{ height: `${maxH}px` }} className={` h-[${maxH}px] object-contain  !border-none !rounded-none `} src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
            )}


            {project.video && (
                <div className="overflow-hidden  rounded-t-xl">
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

            <div className={`z-20 pb-4 relative w-full flex-row ${detailsVisible ? 'opacity-1 duration-[1000ms]' : 'opacity-0'}`}>
                {/* <div className={` w-full pt-4 pb-4 truncate text-3xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div> */}

                <div className={` px-[10%] text-4xl text-black mb-3 pb-4 ${title.className}`}> {project?.title}</div>

                <div className={`px-[10%] text-zinc-500 opacity-80 text-xs uppercase tracking-wider mb-1 ${regularText.className}`} >Overview</div>
                <div className=" px-[10%] tracking-[-.016em] text-black mb-3 pb-4 text-sm"> {project?.overview}</div>



                <div className="flex justify-between space-x-4 pb-4 px-[10%] text-black text-sm">

                    {project.role && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>ROLE</div>
                            <ul>
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {project.tools && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>TOOLS</div>
                            <ul>
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>DURATION</div>
                            <div> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>TEAM</div>
                            <ul>
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.media && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>MEDIA</div>
                            <ul>
                                {project?.media?.map((media, index) => (
                                    <li key={index}>{media}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.dimensions && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  mb-1`}>DIMENSIONS</div>
                            <div> {project?.dimensions}</div>
                        </div>
                    )}

                </div>
            </div>



            {project.content.map((item, index) => {

                if (item.type === 'spacing') {
                    return <div className={`py-3`} key={index}></div>;
                }

                if (item.type === 'textarea') {
                    return <div contentEditable className={`mx-[10%] max-w-[80%] px-3 leading-[49px] text-5xl rounded-sm py-2 pb-4 bg-[#F5F5F5] text-[#D93A34] border layer-shadow textareaElement ${neoTetra.className}`} key={index}>Try here...</div>;
                }
                if (item.type === 'section') {
                    return <div className={` text-zinc-500 opacity-80 text-xs uppercase tracking-wider  my-1  px-[10%] `} key={index}>{item.text}</div>;
                }
                if (item.type === 'text') {
                    return <div className={`px-[10%] tracking-[-.016em] text-black mb-3 text-sm`} key={index}>{item.text}</div>;
                }

                if (item.type === 'link') {
                    return <a href={item.url} className={`px-[10%] tracking-[-.016em] text-black mb-3 text-sm hover:opacity-50`} key={index}>↗ {item.text} </a>;
                }


                if (item.type === 'image') {
                    return <div className=" my-3" key={index} ><img className="px-[2%]" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                }
                if (item.type === 'line') {
                    return <div className=" mx-[10%] border-b border-zinc-200  mt-10" key={index}></div>;
                }
                if (item.type === 'iframe') {
                    const ratio = 1080 / 1920; // 1920:1080 aspect ratio

                    return <div className="mb-1 iframe-container layer-shadow mx-[2%] hidden md:flex" key={index}
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
                                width: '96%',
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
                                className="mb-1 mx-[2%] max-w-[96%] w-full h-auto overflow-hidden layer-shadow border border-white/50"
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
                                className="mb-1 mx-[2%] max-w-[96%] w-full h-auto overflow-hidden layer-shadow border border-white/50"
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



    );
};

export default ProjectView;
