'use client';

import { useState, useEffect } from 'react';

export default function Background() {
  // const [hue, setHue] = useState(180);

  const hue = 0;

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const { innerWidth: w, innerHeight: h } = window;

  //     const cx = w / 2;
  //     const cy = h / 2;

  //     const dx = e.clientX - cx;
  //     const dy = e.clientY - cy;

  //     const dist = Math.sqrt(dx * dx + dy * dy);
  //     const maxDist = Math.sqrt(cx * cx + cy * cy); // center -> farthest corner

  //     const t = dist / maxDist;          // 0 at center, 1 at farthest corner
  //     const hueValue = t * 360;          // 0..360
  //     setHue(hueValue);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <>
      <div className="block -z-50 fixed h-screen pointer-events-none w-screen items-center bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover sm:object-fill opacity-80"
          style={{ 
            filter: `blur(24px) saturate(100%) hue-rotate(${hue}deg)` 
          }}
        >
          <source src="/images/portfolio/background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex brightness-100 vercelBackground darkBackground pointer-events-none -z-40 w-full h-full fixed">
        <div className="opacity-0 m-auto relative flex place-items-center before:absolute before:h-[700px] before:w-[900px] before:-translate-x-full before:rounded-full before:bg-gradient-radial before:from-rose-100 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:blur-3xl after:content-['']">
        </div>
      </div>

      <div className="gradient gradient-background z-20 w-screen pointer-events-none fixed hidden" />
      <div className="gradient gradient-blur z-20 w-screen pointer-events-none fixed hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
