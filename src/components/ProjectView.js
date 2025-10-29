import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import localFont from 'next/font/local';

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
                ? Math.min(window.innerWidth - 56, 800)
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
        <div className={`${regularText.className}  text-neutral-900 bg-[#f1f1f1]`}>




            {project.image && (
                <div className="overflow-hidden  rrounded-t-xl max-w-[800px] m-auto">
                    <img style={{ height: `${maxH}px` }} className={` h-[${maxH}px] object-contain  !border-none !rrounded-none `} src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
                </div>
            )}


            {project.video && (
                <div className="overflow-hidden  rrounded-t-xl  max-w-[800px] m-auto">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className=" object-fit "
                        width={project.video.width}
                        height={project.video.height}
                        style={{ height: `${maxH}px`, filter: `${project.video.filter} ` }}>

                        <source src={project.video.src} type="video/mp4" />

                    </video>
                </div>
            )}

            <div className={`max-w-[800px] m-auto z-20 relative w-full flex-row text-neutral-950 ${detailsVisible ? 'opacity-1 duration-[1000ms]' : 'opacity-0'}`}>
                {/* <div className={` w-full pt-4 pb-4 truncate text-3xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div> */}

                <div className={`px-0 text-5xl font-semibold pb-3 flex ${title.className}`}>
                    {project?.title}&nbsp;
                    <span className="text-[#e0e0e0]">{project?.year}</span>
                </div>
                {/* 
                <div className={`px-0  opacity-30 text-xs font-light  uppercase tracking-wide  ${labels.className}`} >Overview</div> */}
                <div className=" px-0  opacity-100 font-light mb-3 pb-4 text-[16px]  "> {project?.overview}</div>



                <div className="flex justify-between space-x-4  px-0  text-[16px] ">



                    {project.tools && (
                        <div className="flex-1  ">
                            <div className={`  text-[#f1f1f1] text-xs uppercase  font-light tracking-wide pb-2 ${labels.className}`}>
                                <span className="px-2 py-1 rounded bg-black">TOOLS</span>
                            </div>
                            <ul className="font-light ">
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="flex-1  ">
                            <div className={`  text-[#f1f1f1] text-xs uppercase  font-light tracking-wide pb-2 ${labels.className}`}>
                                <span className="px-2 py-1 rounded bg-black">DURATION</span>
                            </div>
                            <div className="font-light "> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="flex-1 ">
                            <div className={`  text-[#f1f1f1] text-xs uppercase  font-light tracking-wide pb-2 ${labels.className}`}>
                                <span className="px-2 py-1 rounded bg-black">TEAM</span>
                            </div>
                            <ul className="font-light">
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.role && (
                        <div className="flex-1">
                            <div className={`  text-[#f1f1f1] text-xs uppercase  font-light tracking-wide pb-2 ${labels.className}`}>
                                <span className="px-2 py-1 rounded bg-black">ROLE</span>
                            </div>
                            <ul className="font-light  ">
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                    )}



                </div>
            </div>


            <div className="bg-[#f1f1f1] pb-16 max-w-[800px] m-auto">
                {project.content.map((item, index) => {

                    if (item.type === 'spacing') {
                        return <div className={`py-3`} key={index}></div>;
                    }

                    if (item.type === 'textarea') {
                        return <div className="w-full mt-2" key={index}>
                            <div contentEditable data-placeholder="Type Something" className={` textarea px-1  !min-h-[106px] leading-[48px] text-5xl py-0 rounded pb-2 bg-neutral-200 text-[#D93A34] D93A34 border-[#dddddd]  border layer-shadow textareaElement ${neoTetra.className}`} ></div>
                        </div>
                    }
                    if (item.type === 'section') {
                        return (

                            <div className={`  font-[550] mb-1 mt-[5rem] text-2xl ${title.className}`} key={index}>
                                {item.text}
                            </div>

                        );
                    }
                    if (item.type === 'text') {
                        return <div className={` opacity-100 font-light  mb-3 text-[16px] `} key={index}>{item.text}</div>;
                    }

                    if (item.type === 'link') {
                        return <a href={item.url} className={` mb-3 text-sm hover:opacity-50`} key={index}>↗ {item.text} </a>;
                    }


                    if (item.type === 'image') {


                        return <div className=" my-1" key={index} ><img className="px-0" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                    }

                    if (item.type === 'smallImage') {
                        return <div className=" my-1" key={index} ><img className="px-0" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                    }


                    if (item.type === 'line') {
                        return <div className=" border-b border-neutral-300 mb-2" key={index}></div>;
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
                                </div>
                            );
                        } else {
                            // Video with controls
                            return (
                                <div
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
