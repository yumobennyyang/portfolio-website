

'use client';

import Lenis from 'lenis'
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { allPortfolios } from 'contentlayer/generated';

import Image from 'next/image'
import localFont from 'next/font/local'

const satoshi = localFont({ src: '../fonts/PPNeueMontrealMono-Book.otf' })


const text = localFont({ src: '../fonts/PPNeueMontreal-Variable.ttf' })



export default function PortfolioIndex() {



  const items = allPortfolios;

  const sortedItems = items.sort((a, b) => a.orderIndex - b.orderIndex);

  const scrollSpeed = 7;

  gsap.registerPlugin(ScrollTrigger)



  const goToLanding = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth' // Enable smooth scrolling
    });
  };




  function interaction() {


    const saturateVideo = document.querySelectorAll('.saturateVideo')

    saturateVideo.forEach((element) => {
      gsap.to(element as HTMLElement, {
        scrollTrigger: {
          trigger: element,
          start: 0,
          end: window.innerHeight * scrollSpeed,
          scrub: true,
          markers: false,
          onUpdate: self => {
            // Calculate the current saturation based on the scroll progress
            const progress = self.progress;
            // Apply an easing function to make the progress non-linear
            const easedProgress = gsap.parseEase("power4.in")(progress);
            const linearProgress = gsap.parseEase("power1.in")(progress);
            const currentSaturation = gsap.utils.interpolate(1, 50, easedProgress);
            const currentHue = gsap.utils.interpolate(0, -360, linearProgress);
            (element as HTMLElement).style.filter = `saturate(${currentSaturation}) hue-rotate(${currentHue}deg)`;
          }
        }
      });
    });


    const darkerWords = document.querySelectorAll('.darkerWords')

    darkerWords.forEach((element) => {
      gsap.to(element as HTMLElement, {
        scrollTrigger: {
          trigger: element,
          start: 0,
          end: window.innerHeight * scrollSpeed,
          scrub: true,
          markers: false,
          onUpdate: self => {
            // Calculate the current saturation based on the scroll progress
            const progress = self.progress;
            // Apply an easing function to make the progress non-linear
            const linearProgress = gsap.parseEase("power1.in")(progress);
            const currentDarkness = gsap.utils.interpolate(0.5, 1, linearProgress);
            (element as HTMLElement).style.color = `rgba(255,255,255,${currentDarkness})`;
          }
        }
      });
    });





    const revealTypes = document.querySelectorAll('.reveal-type')

    revealTypes.forEach((char) => {

      const text = new SplitType(char as HTMLElement, { types: 'chars' });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 0,
          end: 300 + window.innerHeight * (scrollSpeed - 1),
          scrub: true,
          markers: false
        },
        opacity: 0,
        stagger: 100,

      })
    })

    const splitTypes = document.querySelectorAll('.split-type')

    splitTypes.forEach((char) => {

      new SplitType(char as HTMLElement, { types: 'chars' });


    })


    const darkBackgroundElements = document.querySelectorAll('.darkBackground');

    darkBackgroundElements.forEach((element) => {

      gsap.fromTo(element,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: 450 + window.innerHeight * (scrollSpeed - 1),
            end: window.innerHeight * scrollSpeed,
            scrub: true,
            markers: false
          }
        }
      );
    });



    const disappearElements = document.querySelectorAll('.disappear');

    disappearElements.forEach((char) => {

      const text = new SplitType(char as HTMLElement, { types: 'chars' });

      gsap.to(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 0,
          end: 1,
          scrub: true,
          markers: false
        },
        opacity: 0,
        stagger: 100,

      })
    })



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




    const hideTextElements = document.querySelectorAll('.hideText');

    hideTextElements.forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 1,

        },
        {
          opacity: 0,

          scrollTrigger: {
            trigger: element,
            start: 450 + window.innerHeight * (scrollSpeed - 1),
            end: 650 + window.innerHeight * (scrollSpeed - 1),
            scrub: true,
            markers: false
          }
        }
      );
    });


    const revealTextElements = document.querySelectorAll('.revealText');

    revealTextElements.forEach((element) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          zIndex: -10,
        },
        {
          opacity: 1,
          zIndex: 1,
          scrollTrigger: {
            trigger: element,
            start: (document.documentElement.scrollHeight - 64 - window.innerHeight),
            end: (document.documentElement.scrollHeight - window.innerHeight),

            scrub: true,
            markers: false

          }
        }
      );
    });




    const logoOffsetElements = document.querySelectorAll('.logoOffset');

    logoOffsetElements.forEach((element) => {



      const intro = document.getElementById("intro");
      let height = 0;
      if (intro) {
        height = (intro as HTMLElement).offsetHeight * 0.5;
      }
      const offset = height + 104 + 24;



      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          top: '50%',
          transform: 'translateY(-' + offset + 'px)',

        },
        {
          top: '0',
          ease: 'outIn',

          transform: 'translateY(0%)',  // Equivalent to 'none' in this context
          scrollTrigger: {
            trigger: element,
            start: 0,  // Starts when the top of the viewport hits the top of the element
            end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );
    });



    const logoAppearElements = document.querySelectorAll('.logoAppear');

    logoAppearElements.forEach((element) => {
      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          opacity: 0,
        },
        {
          ease: 'outIn',
          opacity: 0.5,
          scrollTrigger: {
            trigger: element,
            start: 0,  // Starts when the top of the viewport hits the top of the element
            end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );
    });

    const addPointerEvent = document.querySelectorAll('.makeClickable');

    addPointerEvent.forEach((element) => {

      gsap.fromTo(element,
        { pointerEvents: 'none' },
        {
          pointerEvents: 'auto',
          scrollTrigger: {
            trigger: element,
            start: window.innerHeight * scrollSpeed,
            end: window.innerHeight * scrollSpeed,
            scrub: true,
            markers: false
          }
        }
      );
    });


    const gradientBlur = document.querySelectorAll('.gradient');

    gradientBlur.forEach((element) => {
      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          opacity: '0',
        },
        {
          opacity: '1',  // Equivalent to 'none' in this context
          scrollTrigger: {
            trigger: element,
            start: window.innerHeight * scrollSpeed,  // Starts when the top of the viewport hits the top of the element
            end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );
    });




    const differenceToNormal = document.querySelectorAll('.changeBlendMode');

    differenceToNormal.forEach((element) => {
      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          mixBlendMode: 'difference',

        },
        {
          mixBlendMode: 'normal',  // Equivalent to 'none' in this context

          scrollTrigger: {
            trigger: element,
            start: window.innerHeight * scrollSpeed,  // Starts when the top of the viewport hits the top of the element
            end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );
    });



    const textWidth = document.querySelectorAll('#portfolioCard')

    textWidth.forEach((element: Element) => {
      const width = (element as HTMLElement).clientWidth;

      const changeWidth = document.querySelectorAll('.mainText')

      changeWidth.forEach((element: Element) => {
        const htmlElement = element as HTMLElement; // Cast 'element' to 'HTMLElement'
        htmlElement.style.width = width + 'px';
      })
    })






  }


  useEffect(() => {


    interaction();

    // const lenis = new Lenis({
    // })


    // let timeMultiplier = 2000;


    // lenis.on('scroll', ScrollTrigger.update)

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * timeMultiplier)
    // })

    // gsap.ticker.lagSmoothing(0)



    function handleResize() {
      interaction();
      ScrollTrigger.refresh();
    }









    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup all ScrollTriggers on component unmount
    };


  }, []);




  return (


    <main className=" flex justify-center  w-screen m-auto tracking-wide ">



      <div className=" -z-50 fixed h-screen  pointer-events-none  w-screen items-center  saturateVideo bg-white">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover sm:object-fill blur-xl "
        >
          <source src={"/images/portfolio/background.mp4"} type="video/mp4" />
        </video>
      </div>



      <div style={{ background: "#111111" }} className=" darkBackground pointer-events-none  -z-40 w-full h-full fixed" />


      <div className="gradient gradient-blur z-20 w-screen   pointer-events-none  fixed">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="gradient gradient-background z-20 w-screen   pointer-events-none  fixed" />






      <div id="logo" className="logoOffset  changeBlendMode z-40 fixed w-full h-auto pointer-events-none">

        <div className=" logoAppear my-6 h-14 w-14 relative self-center flex left-1/2 makeClickable -translate-x-1/2  place-items-center hover:!opacity-100">
          <a href="#top" onClick={goToLanding}>
            <Image
              src="/images/portfolio/logo.gif"
              alt="Yang Logo"
              fill={true}
              priority
              draggable={false}

            />
          </a>
        </div>

        <div
          className={`  hideText left-1/2  -translate-x-1/2 relative leading-6 justify-between  text-white/100  text-sm ${satoshi.className}`}
        >

          <p className="mainText justify-center mx-auto my-6  p-0.5">
            <span id="intro" className="split-type">Benny is an artist and designer currently studying computer science and visual arts at Columbia University.</span>
            <span className="flashing disappear">_</span>
            <br></br><br></br>
            <span className="reveal-type">He loves to build functionless interfaces that are clownishly interactive and fluid but has come to terms with the fact that he needs to make useful ones as well.
              <br></br><br></br>After working with teams at Tencent and Spectator, he is now designing for various startups and researching at the Computational Design Lab — prototyping micro-interactions and scaling design systems.</span>
          </p>

        </div>

      </div>


      <div className={`flex changeBlendMode m-4 z-50 right-0 top-0 fixed w-auto leading-6 text-white/50  text-sm ${satoshi.className}`}>

        <a
          className={` justify-between hover:text-white/100`}
          href="https://instagram.com/yangyart"
          target="_blank"
        >

          <p className=" justify-center pl-4 pr-2 py-2  w-auto underline underline-offset-4">
          ↗ art
            {/* <span>↗</span>*/}
          </p>

        </a>

        <a
          className={` justify-between hover:text-white/100`}
          href="https://read.cv/yumobennyyang"
          target="_blank"
        >
          <p className=" justify-center pr-4 pl-2 py-2  w-auto underline underline-offset-4">
          ↗ cv
          </p>

        </a>



      </div>

      <div
        className={`hideScrollText items-center text-center pointer-events-none m-4 z-10 bottom-0 fixed w-full leading-6 justify-between text-black/50 text-sm ${satoshi.className}`}
      >
        <div className="flex flex-col items-center">
          <div className="scrolldown opacity-30 !scale-75"></div>

          <p className="justify-center  ml-auto mr-auto px-4 py-2">
            <span>scroll for more</span>
          </p>
        </div>
      </div>



      <div
        className={` revealText pb-16 sm:pb-0 m-4  left-0 bottom-0 fixed sm:w-1/2 w-full leading-6 justify-between text-white/50  text-sm ${satoshi.className}`}
      >

        <p className=" justify-center px-4 py-2  w-auto ">
          <span>Built with Next.js on Vercel.</span>
          <span className="flashing">_</span>
          <br></br>
          <span>v3.0.0 Last updated 2024-05-15</span>
        </p>
      </div>

      <div
        className={`revealText m-4  sm:right-0 sm:left-auto left-0 bottom-0 fixed sm:w-auto w-full leading-6 justify-between text-white/50 text-sm ${satoshi.className}`}
      >

        <p className=" justify-center px-4 py-2  w-auto ">
          <span>I&apos;m on </span>
          <a href="https://twitter.com/bennyyyang" target="_blank" className="!pointer-events-auto underline underline-offset-4 hover:text-white/100 ">Twitter</a>
          <span> </span>
          <a href="https://linkedin.com/in/yumo-benny-yang" target="_blank" className="!pointer-events-auto underline underline-offset-4 hover:text-white/100 ">Linkedin</a>
          <span> </span>
          <a href="https://cosmos.so/yangyumo" target="_blank" className="!pointer-events-auto underline underline-offset-4 hover:text-white/100 ">Cosmos</a>
          <br></br>
          <span>Let&apos;s chat </span>
          <a href="mailto:yy3204@columbia.edu" target="_blank" className="!pointer-events-auto underline underline-offset-4 hover:text-white/100 ">yy3204@columbia.edu</a>
        </p>
      </div>




      <section className=" z-0 w-screen h-auto !pointer-events-none ">
        <div id="scrollSection"
          className="z-10 relative !pointer-events-none w-full justify-between "
        >




        </div>


        <div id="portfolio" className={`!pointer-events-none  relative px-6 pt-6 pb-36 sm:pb-16 z-0 go-dark leading-6 flex w-full flex-col items-center justify-between text-white ${text.className}`}>
          <div className="w-full grid sm:grid-cols-3 p-2 gap-4 pt-20 !pointer-events-auto ">


            {sortedItems.map((item, index) => <PortfolioCard key={index} item={item} />)}
          </div>
        </div>;





      </section>




    </main >



  );

}