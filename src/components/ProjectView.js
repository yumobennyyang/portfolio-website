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


const ProjectView = ({ projectId }) => {
    const project = projects.find((p) => p.id === projectId);

    if (!project) return null;

    const modalWidth = Math.min(window.innerWidth - 64, 960);

    const maxH = modalWidth / 3 * 2;


    return (
        <div className={`${regularText.className} text-zinc-950`}>

            {project.image && (
                <div className="overflow-hidden  rounded-t-xl">
                    <img style={{ height: `${maxH}px` }} className={`object-contain  !border-none !rounded-none `} src={project.image.src} alt={project.title} width={project.image.width} height={project.image.height} />
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
                        height={project.video.height}>

                        <source src={project.video.src} type="video/mp4" />

                    </video>
                </div>
            )}

            <div className="z-20  pb-4 relative w-full flex-row ">
                {/* <div className={` w-full pt-4 pb-4 truncate text-3xl border-t tracking-[.007em] ${text.className}`}>{project.title}</div> */}

                <div className={` px-[10%] text-5xl text-zinc-950 tracking-[-.35px] mb-3 pb-4 ${title.className}`}> {project?.title}</div>

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
                if (item.type === 'section') {
                    return <div className={`text-zinc-950 tracking-[.07px] text-2xl  px-[10%]  mt-10 mb-2 ${section.className}`} key={index}>{item.text}</div>;
                }
                if (item.type === 'text') {
                    return <div className="px-[10%] tracking-[-.15px] text-sm text-zinc-400 mb-3" key={index}>{item.text}</div>;
                }
                if (item.type === 'image') {
                    return <div className="bg-[#f5f5f5] mx-[2%] mb-3"><img className="px-[10%] py-8" key={index} src={item.src} alt={`Project ${project.id} Image ${index + 1}`}  /></div>;
                }
                if (item.type === 'line') {
                    return <div className="border-b border-zinc-200  mt-10 mb-4" key={index}></div>;
                }

                return null;
            })}
        </div>



    );
};

export default ProjectView;
