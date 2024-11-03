// components/ProjectDetails.js
import React from 'react';
import { projects } from '../data/projects';

import localFont from "next/font/local";

import Image from 'next/image';
//const regularText = localFont({ src: '../fonts/PPNeueMontreal-Book.otf' });
const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
//const text = localFont({ src: '../fonts/PPNeueMontreal-Medium.otf' });
const title = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Semibold.otf' });
const section = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Semibold.otf' });
const neoTetra = localFont({ src: '../fonts/NeoTetra-Regular.ttf' });


const ProjectView = ({ projectId }) => {


    const project = projects.find((p) => p.id === projectId);

    if (!project) return null;



    return (
        <div className={`${regularText.className} text-zinc-950 `}>


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

            <div className="z-20  pb-4 relative w-full flex-row ">
                {/* <div className={` w-full pt-4 pb-4 truncate text-3xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div> */}

                <div className={` px-[10%] text-4xl text-zinc-950 mb-3 pb-4 ${title.className}`}> {project?.title}</div>

                <div className={`px-[10%] text-zinc-400 opacity-80 text-xs uppercase tracking-wider mb-1 ${regularText.className}`} >Overview</div>
                <div className=" px-[10%] tracking-[-.016em] text-zinc-950 mb-3 pb-4 "> {project?.overview}</div>



                <div className="flex justify-between space-x-4 pb-4 px-[10%] text-zinc-950 *:tracking-[-.016em] ">

                    {project.role && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>ROLE</div>
                            <ul>
                                {project?.role?.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {project.tools && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>TOOLS</div>
                            <ul>
                                {project?.tools?.map((tools, index) => (
                                    <li key={index}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.duration && (
                        <div className="flex-1  ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>DURATION</div>
                            <div> {project?.duration}</div>
                        </div>
                    )}

                    {project.team && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>TEAM</div>
                            <ul>
                                {project?.team?.map((team, index) => (
                                    <li key={index}>{team}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.media && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>MEDIA</div>
                            <ul>
                                {project?.media?.map((media, index) => (
                                    <li key={index}>{media}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.dimensions && (
                        <div className="flex-1 ">
                            <div className={` text-zinc-400 opacity-80 text-xs uppercase tracking-wider  mb-1`}>DIMENSIONS</div>
                            <div> {project?.dimensions}</div>
                        </div>
                    )}

                </div>
            </div>



            {project.content.map((item, index) => {

                if (item.type === 'textarea') {
                    return <div contentEditable className={`mx-[10%] max-w-[80%] px-3 leading-[49px] text-5xl rounded-sm py-2 pb-4 bg-[#F5F5F5] text-[#D93A34] border layer-shadow textareaElement ${neoTetra.className}`} key={index}>Try here...</div>;
                }
                if (item.type === 'section') {
                    return <div className={`text-zinc-950 tracking-[.07px] text-2xl  px-[10%]  mt-10 mb-2 ${section.className}`} key={index}>{item.text}</div>;
                }
                if (item.type === 'text') {
                    return <div className="px-[10%] tracking-[-.15px] text-[15px]  text-zinc-400 mb-3" key={index}>{item.text}</div>;
                }
                if (item.type === 'image') {
                    return <div className=" mb-1" key={index} ><img className="px-[10%] pt-8" src={item.src} alt={`Project ${project.id} Image ${index + 1}`} /></div>;
                }
                if (item.type === 'line') {
                    return <div className="border-b border-zinc-200  mt-10 mb-4" key={index}></div>;
                }
                if (item.type === 'iframe') {
                    return <div className="iframe-container rounded layer-shadow px-[10%] " key={index} style={item.containerStyling}>
                        <iframe src={item.src} width="100%" height="400px" className="iframe" style={item.iframeStyling} />
                    </div>
                }
                if (item.type === 'video') {
                    return <div className="mx-[10%] max-w-[80%] w-full h-auto rounded  overflow-hidden layer-shadow border border-white/50" key={index} >
                        <video
                            playsInline
                            muted
                            controls
                            className=" object-contain rounded"
                            width="100%"
                            height="auto">

                            <source src={item.src} />

                        </video>
                    </div>
                }
                return null;
            })}
        </div>



    );
};

export default ProjectView;
