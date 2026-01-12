'use client';

import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';

import React, { useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local';

const benny = localFont({ src: '../fonts/TT_Commons_Pro_Mono_VF_Trial.ttf' });

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const [expandedLevel, setExpandedLevel] = useState(0);
  const expandedLevelRef = useRef(0);
  const splitTypeInstancesRef = useRef<any[]>([]);

  useEffect(() => {
    expandedLevelRef.current = expandedLevel;
  }, [expandedLevel]);

  function cleanupSplitType() {
    splitTypeInstancesRef.current.forEach(instance => {
      if (instance && typeof instance.revert === 'function') {
        instance.revert();
      }
    });
    splitTypeInstancesRef.current = [];
  }

  function interaction() {
    // CLEANUP: Revert previous SplitType splits
    cleanupSplitType();

    // CLEANUP: Kill all previous ScrollTriggers
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    }

    const revealTypes = document.querySelectorAll('.reveal-type');

    revealTypes.forEach((char) => {
      if (!(char as HTMLElement).querySelector('.char')) {
        const text = new SplitType(char as HTMLElement, { types: 'chars' });
        splitTypeInstancesRef.current.push(text);

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 0,
            end: window.innerHeight - 400,
            scrub: true,
            markers: false
          },
          opacity: 0,
          stagger: 100,
        });
      }
    });

    const splitTypes = document.querySelectorAll('.split-type');

    splitTypes.forEach((char) => {
      if (!(char as HTMLElement).querySelector('.char')) {
        const text = new SplitType(char as HTMLElement, { types: 'chars' });
        splitTypeInstancesRef.current.push(text);
      }
    });

    const darkBackgroundElements = document.querySelectorAll('.darkBackground');

    darkBackgroundElements.forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: window.innerHeight - 400,
            end: window.innerHeight,
            scrub: true,
            markers: false
          }
        }
      );
    });

    const logoOffsetElements = document.querySelectorAll('.logoOffset');

    logoOffsetElements.forEach((element) => {
      const mainText = document.getElementById("mainText");
      let height = 0;
      if (mainText) {
        height = (mainText as HTMLElement).offsetHeight * 0.5;
      }
      const offset = height;

      gsap.fromTo(element,
        {
          top: '50%',
          yPercent: 0,
          y: -offset
        },
        {
          top: '0',
          yPercent: 0,
          y: 52,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: element,
            start: 0,
            end: window.innerHeight,
            scrub: true,
            markers: false
          }
        }
      );

      gsap.fromTo(element,
        {
          position: 'absolute',
        },
        {
          position: 'fixed',
          scrollTrigger: {
            trigger: element,
            start: 0,
            end: 1,
            scrub: true,
            markers: false,
          }
        }
      );
    });

    const hideScrollText = document.querySelectorAll('.hideScrollText');

    hideScrollText.forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 1,
          transition: 'opacity 0.5s ease-in-out'
        },
        {
          opacity: 0,
          transition: 'opacity 0.5s ease-in-out',
          scrollTrigger: {
            trigger: element,
            start: 0,
            end: 1,
            scrub: true,
            markers: false
          }
        }
      );
    });

    const gradientBlur = document.querySelectorAll('.gradient');

    gradientBlur.forEach((element) => {
      gsap.fromTo(element,
        {
          top: -104,
        },
        {
          top: 0,
          scrollTrigger: {
            trigger: element,
            start: window.innerHeight,
            end: window.innerHeight + 104,
            scrub: true,
            markers: false
          }
        }
      );
    });

    const revealTypeElements = document.querySelectorAll('.typewriter-text');
    revealTypeElements.forEach((element) => {
      const isLevel1 = element.classList.contains('level-1');
      const isLevel2 = element.classList.contains('level-2');
      const currentLevel = expandedLevelRef.current;

      const text = new SplitType(element as HTMLElement, { types: 'chars' });
      splitTypeInstancesRef.current.push(text);

      let shouldAnimate = false;
      if (isLevel1 && currentLevel === 1) shouldAnimate = true;
      if (isLevel2 && currentLevel === 2) shouldAnimate = true;

      if (shouldAnimate) {
        gsap.set(element, { opacity: 1 });
        const charCount = text.chars?.length || 0;
        const totalDuration = charCount * 0.01;

        gsap.fromTo(text.chars,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.01,
            duration: 0.01,
            ease: 'none',
            overwrite: true
          }
        );

        let promptSelector = '';
        if (isLevel1) promptSelector = '.more-prompt.level-1';
        if (isLevel2) promptSelector = '.more-prompt.level-2';

        const prompt = document.querySelector(promptSelector);
        if (prompt) {
          gsap.to(prompt, {
            opacity: 1,
            delay: totalDuration + 0.25,
            duration: 0.2,
            overwrite: true
          });
        }
      } else {
        gsap.set(element, { opacity: 1 });
        gsap.set(text.chars, { opacity: 1 });

        let promptSelector = '';
        if (isLevel1) promptSelector = '.more-prompt.level-1';
        if (isLevel2) promptSelector = '.more-prompt.level-2';
        const prompt = document.querySelector(promptSelector);
        if (prompt) {
          gsap.set(prompt, { opacity: 1 });
        }
      }
    });
  }

  function handleResize() {
    ScrollTrigger.refresh();
  }

  useEffect(() => {
    if (expandedLevel > 0 && window.scrollY < 100) {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((st: any) => st.kill());
      }

      requestAnimationFrame(() => {
        const mainText = document.getElementById("mainText");
        const logoOffsetElements = document.querySelectorAll('.logoOffset');

        if (mainText && logoOffsetElements.length > 0) {
          const height = (mainText as HTMLElement).offsetHeight * 0.5;
          const offset = height;

          gsap.to(logoOffsetElements, {
            y: -offset,
            duration: 0.4,
            ease: "power3.inOut",
            onComplete: () => {
              interaction();
              ScrollTrigger.refresh();
            }
          });
        }
      });
      return;
    }

    const timer = setTimeout(() => {
      interaction();
      ScrollTrigger.refresh();
    }, 50);
    return () => clearTimeout(timer);
  }, [expandedLevel]);

  function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  useEffect(() => {
    const handleResize2 = debounce(() => {
      if (window.innerWidth >= 1) {
        interaction();
      }
    }, 150);

    handleResize2();

    window.addEventListener('resize', handleResize2);
    window.addEventListener('resize', handleResize);

    return () => {
      cleanupSplitType();
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach((st: any) => st.kill());
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize2);
    };
  }, []);

  return (
    <main className="flex justify-center w-screen m-auto font-[200]">
      <div id="logo" className="logoOffset z-40 absolute top-1/2 -translate-y-1/2 w-full h-auto px-4">
        <div
          className={`font-[320] left-1/2 -translate-x-1/2 relative leading-[1.1rem] justify-between text-zinc-950 text-xs ${benny.className}`}
        >
          <div id="mainText" className="w-fit mx-auto  pb-[38px]">
            <span id="intro" className="uppercase">
              Benny designs interfaces that blur function and<br />
              playful futility —— tools, toys, and everything<br />
              in between.
            </span>
            {expandedLevel === 0 && (
              <>
                <span className="flashing">_ </span>
                <span className="text-[#ff0000] opacity-100 group cursor-pointer" onClick={() => setExpandedLevel(1)}>
                  <span className="translate-x-[-3px] group-hover:translate-x-[-1px] inline-block translate-y-[1px] transition-transform ease duration-100">&gt;</span>
                  <>more</>
                  <span className="translate-x-[3px] group-hover:translate-x-[1px] inline-block translate-y-[1px] transition-transform ease duration-100">&lt;</span>
                </span>
              </>
            )}

            {expandedLevel >= 1 && (
              <>
                <br /><br />
                <span className="border-t border-black opacity-10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                <br />
                <span className="typewriter-text level-1 opacity-0">
                  <span className="uppercase">Columbia GSAPP<span className="opacity-0">------------------------</span>2025-2026</span>
                  <br />
                  <span className="uppercase">M.S. computational design Practices</span>
                  <br /><br />
                  <span className="uppercase">Columbia College<span className="opacity-0">----------------------</span>2021-2025</span>
                  <br />
                  <span className="uppercase">B.A. Visual arts</span>
                  <br />
                  <span className="uppercase">B.A. Computer Science</span>
                </span>

                {expandedLevel === 1 && (
                  <span className="opacity-0 more-prompt level-1">
                    <span className="flashing">_ </span>
                    <span className="text-[#ff3800] opacity-100 group cursor-pointer" onClick={() => setExpandedLevel(2)}>
                      <span className="translate-x-[-3px] group-hover:translate-x-[-1px] inline-block translate-y-[1px] transition-transform ease duration-100">&gt;</span>
                      <>more</>
                      <span className="translate-x-[3px] group-hover:translate-x-[1px] inline-block translate-y-[1px] transition-transform ease duration-100">&lt;</span>
                    </span>
                  </span>
                )}
              </>
            )}

            {expandedLevel >= 2 && (
              <>
                <br /><br />
                <span className="border-t border-black opacity-10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                <br />
                <span className="typewriter-text level-2 opacity-0">
                  <span className="uppercase">Gabble<span className="opacity-0">-------------------------------------</span>2025</span>
                  <br />
                  <span className="uppercase">Co-founder, Product</span>
                  <br /><br />
                  <span className="uppercase">Cai Guo-Qiang Studio<span className="opacity-0">-----------------------</span>2024</span>
                  <br />
                  <span className="uppercase">Studio Assistant</span>
                  <br /><br />
                  <span className="uppercase">Tencent<span className="opacity-0">------------------------------------</span>2023</span>
                  <br />
                  <span className="uppercase">Interaction Designer</span>
                  <br /><br />
                  <span className="uppercase">Jeff Koons, LLC<span className="opacity-0">----------------------------</span>2022</span>
                  <br />
                  <span className="uppercase">Studio Assistant</span>
                </span>
                <span className="more-prompt level-2 opacity-0">
                  <span className="flashing">_ </span>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
