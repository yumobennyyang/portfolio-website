import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import localFont from 'next/font/local';
import Image from 'next/image';

const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
const title = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Semibold.otf' });
const section = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Semibold.otf' });
const neoTetra = localFont({ src: '../fonts/NeoTetra-Regular.ttf' });

const ProjectView = ({ projectId }) => {
  const [modalWidth, setModalWidth] = useState(0);
  const [maxH, setMaxH] = useState(0);
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calcModalWidth = Math.min(window.innerWidth - 64, 960);
      const calcMaxH = (calcModalWidth / 3) * 2;
      setModalWidth(calcModalWidth);
      setMaxH(calcMaxH);
    }
  }, []);

  if (!project) return null;

  return (
    <div className={`${regularText.className} text-zinc-950`}>
      {project.image && (
        <div className="overflow-hidden rounded-t-xl">
          <Image
            style={{ height: `${maxH}px` }}
            className={`h-[${maxH}px] object-contain !border-none !rounded-none`}
            src={project.image.src}
            alt={project.title}
            width={project.image.width}
            height={project.image.height}
          />
        </div>
      )}

      {project.video && (
        <div className="overflow-hidden rounded-t-xl">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="object-fit"
            width={project.video.width}
            height={project.video.height}
            style={{ height: `${maxH}px` }}
          >
            <source src={project.video.src} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="z-20 pb-4 relative w-full flex-row">
        <div className={`px-[10%] text-4xl text-zinc-950 mb-3 pb-4 ${title.className}`}>{project?.title}</div>
        <div className={`px-[10%] text-zinc-400 opacity-80 text-xs uppercase tracking-wider mb-1 ${regularText.className}`}>Overview</div>
        <div className="px-[10%] tracking-[-.016em] text-zinc-950 mb-3 pb-4">{project?.overview}</div>

        <div className="flex justify-between space-x-4 pb-4 px-[10%] text-zinc-950 *:tracking-[-.016em] ">
          {project.role && (
            <div className="flex-1 ">
              <div className="text-zinc-400 opacity-80 text-xs uppercase tracking-wider mb-1">ROLE</div>
              <ul>{project.role.map((role, index) => <li key={index}>{role}</li>)}</ul>
            </div>
          )}

          {project.tools && (
            <div className="flex-1">
              <div className="text-zinc-400 opacity-80 text-xs uppercase tracking-wider mb-1">TOOLS</div>
              <ul>{project.tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
