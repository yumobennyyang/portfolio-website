'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion, LayoutGroup } from 'framer-motion';
import localFont from 'next/font/local';
import { useNavigationContext } from './NavigationContext';

const title = localFont({ src: '../fonts/TT_Commons_Pro_VF_Trial.ttf' });

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { expandedProjectId, setExpandedProjectId } = useNavigationContext();

  const getSelectedTab = () => {
    if (pathname === '/work') return 'work';
    if (pathname === '/play') return 'play';
    return 'about';
  };

  const selectedTab = getSelectedTab();

  const handleNavigation = (path: string) => {
    if (expandedProjectId) {
      setExpandedProjectId(null);
      return;
    }
    router.push(path);
  };

  const handleReturnHome = () => {
    setExpandedProjectId(null);
  };

  return (


    <div className={`z-[999999] p-[2px] tracking-wide navigation font-[400] squircle bg-gray-300 bg-opacity-30 backdrop-blur-lg fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-0 text-[12px] ${title.className} transition-opacity duration-300 `}>
      
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
        className={`relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
          ${expandedProjectId ? '' : (selectedTab === 'about' ? 'text-white' : 'hover:opacity-50 text-zinc-950')}
        `}
        style={{ pointerEvents: expandedProjectId ? 'none' : 'auto' }}
      >
        <span className={`relative z-10 transition-opacity duration-200 ${expandedProjectId ? 'opacity-0' : 'opacity-100'}`}>ABOUT</span>
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
        className={`relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
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
        className={`relative px-[14px] py-[6px] rounded-full transition-colors duration-200 z-10
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

      </LayoutGroup>
    </div>
    </div>
  );
}
