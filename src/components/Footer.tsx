'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import LastCommitTime from './LastCommitTime';

const title = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });

export default function Footer() {
  const [footerState, setFooterState] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div id="footer" className={`h-[34px] font-[300] fixed lg:bottom-8 bottom-[80px] left-0 w-full z-[10002] pointer-events-auto justify-between items-center tracking-wide lg:flex ${isHomePage ? '' : 'hidden'}`}>
      <div
        className={`translate-y-[-1px] -z-10 hidden lg:flex fixed top-6 lg:top-auto left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-auto lg:w-1/2 lg:relative lg:bottom-0 justify-between text-zinc-950 text-sm text-center lg:text-left ${title.className}`}
      >
        <div id="info" className="justify-center px-[31px] w-auto whitespace-nowrap">
          <span 
            className="py-1 px-[11px] cursor-pointer opacity-40 hover:opacity-70 transition-opacity group " 
            onClick={() => setFooterState((footerState + 1) % 3)}
          >
            <span className="font-[100] inline-block translate-y-[2px] pr-[2px] text-base group-hover:rotate-90 group-active:rotate-[450deg] group-hover:translate-y-[3px] group-hover:translate-x-[-1px] group-active:translate-x-[-1px] group-active:translate-y-[3px] transition-transform ease duration-200">
              <span className="rotate-180 inline-block">⤸</span>
              <span className="inline-block">⤸</span>
            </span>
            
            {footerState === 0 && (
              <> Last updated <LastCommitTime /></>
            )}
            {footerState === 1 && (
              <> Built with Next.js on Vercel▲</>
            )}
            {footerState === 2 && (
              <> © 2026 Benny Yang | All Rights Reserved</>
            )}

          </span>
        </div>
      </div>

      <div id="links"
        className={`lg:text-right text-center items-end -z-10 lg:right-0 lg:left-auto left-1/2 -translate-x-1/2 lg:translate-x-0 fixed top-6 lg:top-auto lg:bottom-0 lg:relative w-auto lg:w-1/2 leading-6 justify-between text-zinc-950 text-sm ${title.className}`}
      >
        <div className="justify-center px-[31px] w-auto whitespace-nowrap">
          <a href="https://instagram.com/yangyart" target="_blank" className="!pointer-events-auto py-1 pl-[7px] mx-[0px] pr-[11px] rounded-full text-zinc-950 group w-auto opacity-40 hover:opacity-70">
            <span className="translate-x-[1px] text-xs group-hover:translate-x-[3px] group-hover:translate-y-[-2px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;Instagram</span>
          </a>

          <a href="https://twitter.com/bennyyyang" target="_blank" className="!pointer-events-auto py-1 pl-[7px] mx-[0px] pr-[11px] rounded-full text-zinc-950 group w-auto opacity-40 hover:opacity-70">
            <span className="translate-x-[1px] text-xs group-hover:translate-x-[3px] group-hover:translate-y-[-2px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;Twitter</span>
          </a>

          <a href="https://linkedin.com/in/yumo-benny-yang" target="_blank" className="!pointer-events-auto py-1 pl-[7px] mx-[0px] pr-[11px] rounded-full text-zinc-950 group w-auto opacity-40 hover:opacity-70">
            <span className="translate-x-[1px] text-xs group-hover:translate-x-[3px] group-hover:translate-y-[-2px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;Linkedin</span>
          </a>

          <a href="https://cosmos.so/bennyyyang" target="_blank" className="!pointer-events-auto py-1 pl-[7px] mx-[0px] pr-[11px] rounded-full text-zinc-950 group w-auto opacity-40 hover:opacity-70">
            <span className="translate-x-[1px] text-xs group-hover:translate-x-[3px] group-hover:translate-y-[-2px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;Cosmos</span>
          </a>
        </div>
      </div>
    </div>
  );
}
