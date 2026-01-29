'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion, LayoutGroup } from 'framer-motion';
import localFont from 'next/font/local';
import { useNavigationContext } from './NavigationContext';
import { useEffect, useRef, useState } from 'react';

const title = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { expandedProjectId, setExpandedProjectId } = useNavigationContext();
  const prevPathname = useRef(pathname);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Sync state with actual pathname (for back/forward navigation)
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Reset expanded state only when pathname actually changes (not on initial mount)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setExpandedProjectId(null);
      prevPathname.current = pathname;
    }
  }, [pathname, setExpandedProjectId]);

  const getSelectedTab = () => {
    if (currentPath === '/work') return 'work';
    if (currentPath === '/play') return 'play';
    if (currentPath === '/code') return 'code';
    if (currentPath === '/make') return 'make';
    return 'about';
  };

  const selectedTab = getSelectedTab();

  const handleNavigation = (path: string) => {
    if (expandedProjectId) {
      setExpandedProjectId(null);
      return;
    }
    setCurrentPath(path); // Optimistic update
    router.push(path);
  };

  const handleReturnHome = () => {
    setExpandedProjectId(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  return (


    <div className={`z-[999999] p-[2px] tracking-wide navigation font-[400] squircle bg-gray-300 bg-opacity-30 backdrop-blur-lg fixed bottom-8 left-1/2 -translate-x-1/2 flex text-[12px] whitespace-nowrap ${title.className} transition-opacity duration-300 `}>
      
    <div 
      className="squircle overflow-hidden group" 
      style={{ 
        // clipPath: 'inset(0 round 9999px)',
        // WebkitClipPath: 'inset(0 round 9999px)',
        transform: 'translateZ(0)' 
      }}
    >
      <LayoutGroup>
      
      {/* Expanded State Overlay - Black Pill fills container */}
      {expandedProjectId && (
        <motion.div
            layoutId="nav-pill"
            className="absolute inset-[0px] bg-black squircle z-0"
            transition={{ type: "spring", stiffness: 300, damping: 21 }}
        />
      )}

      {/* Expanded State Text - Centered Return Home */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${expandedProjectId ? 'opacity-100 z-20' : 'opacity-0 z-[-1]'}`}
      >
        <span className="text-white group-hover:opacity-70 transition-opacity">GO BACK</span>
      </div>

      {/* Click handler for the entire bar when expanded */}
      {expandedProjectId && (
        <button 
          className="absolute inset-0 w-full h-full z-30 cursor-pointer bg-transparent border-none"
          onClick={handleReturnHome}
          aria-label="Go Back"
        />
      )}

      {/* About Tab */}
      <button 
        onClick={() => !expandedProjectId && handleNavigation('/')}
        className={`-mr-[2px] relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'about' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>HOME</span>
        {selectedTab === 'about' && !expandedProjectId && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-black squircle z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      {/* Work Tab */}
      <button 
        onClick={() => !expandedProjectId && handleNavigation('/work')}
        className={`-m-[2px] relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'work' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>WORK</span>
        {selectedTab === 'work' && !expandedProjectId && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-black squircle z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      {/* Play Tab */}
      <button 
        onClick={() => !expandedProjectId && handleNavigation('/play')}
        className={`-m-[2px]  relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'play' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>PLAY</span>
        {selectedTab === 'play' && !expandedProjectId && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-black squircle z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      {/* Code Tab */}
      <button 
        onClick={() => !expandedProjectId && handleNavigation('/code')}
        className={`-m-[2px] relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'code' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>CODE</span>
        {selectedTab === 'code' && !expandedProjectId && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-black squircle z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      {/* Make Tab */}
      <button 
        onClick={() => !expandedProjectId && handleNavigation('/make')}
        className={`-ml-[2px] relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'make' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>MAKE</span>
        {selectedTab === 'make' && !expandedProjectId && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 bg-black squircle z-[-1]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>

      </LayoutGroup>
    </div>
    </div>
  );
}
