

'use client';

import Lenis from 'lenis'
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';

import React, { useEffect, useState } from 'react';

import Image from 'next/image'
import localFont from 'next/font/local'

import LastCommitTime from '../components/LastCommitTime';

import ProjectList from '../components/ProjectList';
import ProjectView from '../components/ProjectView';
import Modal from '../components/Modal';



const satoshi = localFont({ src: '../fonts/PPNeueMontrealMono-Thin.otf' })
const benny = localFont({ src: '../fonts/PPNeueMontrealMono-Thin.otf' })



//const regularText = localFont({ src: '../fonts/PPNeueMontreal-Book.otf' });
const regularText = localFont({ src: '../fonts/SF-Pro/SF-Pro-Text-Regular.otf' });
//const text = localFont({ src: '../fonts/PPNeueMontreal-Medium.otf' });
const text = localFont({ src: '../fonts/SF-Pro/SF-Pro-Display-Medium.otf' });




export default function PortfolioIndex() {


  const [selectedProjectId, setSelectedProjectId] = useState(null);


  const handleClose = () => {
    setSelectedProjectId(null);
  };

  // let scrollSpeed = 1;



  gsap.registerPlugin(ScrollTrigger)



  const goToLanding = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth' // Enable smooth scrolling
    });
  };




  function interaction() {




    // const saturateVideo = document.querySelectorAll('.saturateVideo')

    // saturateVideo.forEach((element) => {
    //   gsap.to(element as HTMLElement, {
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 0,
    //       // end: window.innerHeight * scrollSpeed,
    //       end: window.innerHeight,
    //       scrub: true,
    //       markers: false,
    //       onUpdate: self => {
    //         // Calculate the current saturation based on the scroll progress
    //         const progress = self.progress;
    //         // Apply an easing function to make the progress non-linear
    //         const easedProgress = gsap.parseEase("power4.in")(progress);
    //         const linearProgress = gsap.parseEase("power1.in")(progress);
    //         const currentSaturation = gsap.utils.interpolate(1, 1, easedProgress);
    //         const currentHue = gsap.utils.interpolate(0, 0, linearProgress);
    //         (element as HTMLElement).style.filter = `saturate(${currentSaturation}) hue-rotate(${currentHue}deg)`;
    //       }
    //     }
    //   });
    // });







    const revealTypes = document.querySelectorAll('.reveal-type')

    revealTypes.forEach((char) => {

      const text = new SplitType(char as HTMLElement, { types: 'chars' });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 0,
          // end: 300 + window.innerHeight * (scrollSpeed - 1),
          end: window.innerHeight - 400,
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
            // start: 450 + window.innerHeight * (scrollSpeed - 1),
            // end: window.innerHeight * scrollSpeed,
            start: window.innerHeight - 400,
            end: window.innerHeight,
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



    const hideTextElements = document.querySelectorAll<HTMLElement>('.hideText');

    const mainText1 = document.querySelector<HTMLElement>('#mainText');
    const portfolioCard = document.querySelector<HTMLElement>('#projectCard');

    if (mainText1 && portfolioCard) {
      const elementHeight = mainText1.clientHeight;
      const changeX = 56 / portfolioCard.clientWidth;
      const changeY = 56 / mainText1.clientHeight * 0.67;

      hideTextElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            scaleX: 1,
            scaleY: 1,
            top: 0,
            filter: "blur(0px)",

          },
          {
            scaleX: changeX,
            scaleY: changeY,

            top: `calc(-${(elementHeight - 56) / 2}px - 56px - 24px - 56px - 24px)`,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: element,
              start: window.innerHeight - 300,
              end: window.innerHeight - 150,
              scrub: true,
              markers: false,
            },
            ease: "power1.in",
          }
        );

        gsap.fromTo(
          element,
          {
            opacity: 1,

          },
          {
            opacity: 0,
            display: 'none',
            scrollTrigger: {
              trigger: element,
              // start: 650 + window.innerHeight * (scrollSpeed - 1),
              // end: window.innerHeight * scrollSpeed,
              // start: window.innerHeight - 150,
              // end: window.innerHeight,
              start: window.innerHeight - 175,
              end: window.innerHeight - 150,
              scrub: true,
              markers: false
            }
          }
        );
      });
    }






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
            // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            end: window.innerHeight,
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );

      gsap.fromTo(element,
        {
          position: '',

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



    const logoAppearElements = document.querySelectorAll('.logoAppear');

    logoAppearElements.forEach((element) => {
      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          opacity: 0,
          filter: "blur(0px)",
        },
        {
          ease: 'power3.out',
          filter: "blur(0px)",
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            // start: 650 + window.innerHeight * (scrollSpeed - 1),  // Starts when the top of the viewport hits the top of the element
            // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            start: window.innerHeight - 150,
            end: window.innerHeight,
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }

        }
      );
    });



    const unblur = document.querySelectorAll('.blurToNotBlur');

    unblur.forEach((element) => {
      // Create the GSAP animation with ScrollTrigger
      gsap.fromTo(element,
        {
          filter: "blur(1200px) ",
          opacity: 0,
        },
        {
          filter: "blur(0px) ",
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            // start: 650 + window.innerHeight * (scrollSpeed - 1),  // Starts when the top of the viewport hits the top of the element
            // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            start: 0,
            end: window.innerHeight - 150,
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
            // start: window.innerHeight * scrollSpeed,
            // end: window.innerHeight * scrollSpeed,
            start: window.innerHeight,
            end: window.innerHeight,
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
          top: -104,
        },
        {
          top: 0,  // Equivalent to 'none' in this context
          scrollTrigger: {
            trigger: element,
            // start: window.innerHeight * scrollSpeed,  // Starts when the top of the viewport hits the top of the element
            // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            start: window.innerHeight,
            end: window.innerHeight + 104,
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
            // start: window.innerHeight * scrollSpeed,  // Starts when the top of the viewport hits the top of the element
            // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
            start: window.innerHeight,
            end: window.innerHeight,
            scrub: true,  // Smooth interpolation of values as you scroll
            markers: false  // Useful for debugging during development
          }
        }
      );
    });



    const textWidth = document.querySelectorAll('#projectCard')

    textWidth.forEach((element: Element) => {
      const width = (element as HTMLElement).clientWidth;

      const changeWidth = document.querySelectorAll('.mainText')

      changeWidth.forEach((element: Element) => {
        const htmlElement = element as HTMLElement; // Cast 'element' to 'HTMLElement'
        htmlElement.style.width = width + 'px';
      })
    })




  }

  function handleResize() {
    ScrollTrigger.refresh();

  }



  useEffect(() => {


    // updateScrollSpeed();

    const handleResize2 = () => {
      if (window.innerWidth >= 1) { //768
        interaction();
      }
    };

    handleResize2(); // Initial check




    // const lenis = new Lenis()

    // lenis.on('scroll', (e: any) => {
    //   console.log(e)
    // })

    // lenis.on('scroll', ScrollTrigger.update)

    // gsap.ticker.add((time)=>{
    //   lenis.raf(time * 1000)
    // })

    // gsap.ticker.lagSmoothing(0)



    // function updateScrollSpeed() {
    //   if (window.innerWidth >= 768) {
    //     scrollSpeed = 1;
    //   } else {
    //     scrollSpeed = 1;
    //   }
    // }










    window.addEventListener('resize', handleResize2);


    window.addEventListener('resize', handleResize);
    // window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize2);
      ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup all ScrollTriggers on component unmount
    };


  }, []);




  return (




    <main className=" flex  justify-center  w-screen m-auto ">




      <div className="sm:block hidden {saturateVideo} -z-50 fixed h-screen  pointer-events-none  w-screen items-center   bg-white">

        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover sm:object-fill  blur-xl"

        >

          <source src={"/images/portfolio/background.mp4"} type="video/mp4" />
        </video>

      </div>



      <div className="hidden sm:flex brightness-100 vercelBackground darkBackground pointer-events-none  -z-40 w-full h-full fixed">

        <div className="opacity-0 m-auto relative flex place-items-center before:absolute before:h-[700px] before:w-[900px] before:-translate-x-full before:rounded-full before:bg-gradient-radial before:from-rose-100 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:blur-3xl after:content-[''] ">
        </div>
      </div>

      <div className="gradient gradient-background z-20  w-screen   pointer-events-none  fixed hidden" />
      <div className="gradient gradient-blur z-20  w-screen   pointer-events-none  fixed hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>








      <div id="logo" className="logoOffset invert z-40 absolute  w-full  h-auto pointer-events-none   px-4 ">


        <div className=" logoAppear fixed my-6 sm:h-14 sm:w-14 h-10 w-10 self-center flex left-1/2 makeClickable -translate-x-1/2  place-items-center hover:!opacity-100">
          <a href="#top" onClick={goToLanding}>
            <Image
              className=" !rounded-none !border-none"
              src="/images/portfolio/logo.gif"
              alt="Yang Logo"
              fill={true}
              priority
              draggable={false}

            />
          </a>
        </div>


        <div
          className={`  mt-[104px] hideText left-1/2 -translate-x-1/2 relative leading-6 justify-between  text-zinc-50 text-sm ${benny.className}        `}
        >

          <div id="mainText" className="mainText justify-center mx-auto my-6 ">
            <span id="intro" className=" hidden split-type ">Benny designs fluid interfaces that oscillate between function and playful futility.</span>
            <span id="intro" className=" split-type ">Benny designs fluid interfaces that oscillate between function and playful futility. He is currenlty rebuilding this website. Please check back soon.</span>
            <span className="flashing disappear">_</span>
            <br></br><br></br>
            <span className="reveal-type">He graduated from Columbia University with B.A.s in Computer Science and Visual Arts. He is now pursuing an M.S.in Computational Design at Columbia GSAPP.
              <br></br><br></br>He has worked for artists like Jeff Koons and Cai Guo-Qiang and with product teams at Tencent and Spectator. Today, he designs for various startups — prototyping micro-interactions and scaling design systems.
            </span>
          </div>

        </div>
      </div>


      <div className={`flex sm:mx-4  sm:my-2 px-3 py-4 z-50 right-0 top-0 fixed w-auto leading-6 text-black text-sm ${satoshi.className}`}>

        <a
          className={` justify-between `}
          href="https://instagram.com/yangyart"
          target="_blank"
        >

          <p className=" justify-center  hover:bg-black py-[0.5px] px-1 mx-[0.4px] pr-2 rounded-lg hover:text-white outline outline-[0.5px] outline-black  w-auto   group">
            <span className="translate-x-[2px] group-hover:translate-x-[5px] group-hover:translate-y-[-3px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;art</span>
            {/* <span>↗</span>*/}
          </p>

        </a>


        <a
          className={` justify-between`}
          href="https://twitter.com/bennyyyang"
          target="_blank"
        >
          <p className=" justify-center hover:bg-black py-[0.5px] px-1 mx-[0px] pr-2 rounded-lg hover:text-white outline outline-[0.5px] outline-black w-auto group ">
            <span className="translate-x-[2px] group-hover:translate-x-[5px] group-hover:translate-y-[-3px] inline-block transition-transform ease duration-100">↗</span>
            <span>&nbsp;twitter</span>
          </p>

        </a>



      </div>

      <div
        className={`hideScrollText  items-center text-center pointer-events-none m-4 z-10 bottom-0 absolute sm:fixed w-full leading-6 justify-between text-zinc-950 text-sm ${satoshi.className}`}
      >
        <div className="flex flex-col items-center">
          <div className="hidden scrolldown opacity-30 !scale-75"></div>

          <div className="arrow !scale-75"></div>

          <p className="hidden justify-center  ml-auto mr-auto px-4 py-2">
            <span>scroll for more</span>
          </p>
        </div>
      </div>


      <section  className=" z-0 w-screen h-auto !pointer-events-none ">
        <div id="scrollSection"
          className="z-10 relative !pointer-events-none w-full justify-between "
        >




        </div>




        <div className=" !pointer-events-auto sm:px-5 px-1 pt-48 ">
          <ProjectList onSelect={setSelectedProjectId} selectedProjectId={selectedProjectId} />
          <Modal isOpen={!!selectedProjectId} onClose={handleClose} selectedProjectId={selectedProjectId}>
            {selectedProjectId && <ProjectView projectId={selectedProjectId} />}
          </Modal>

        </div>


        <div className="sm:flex">

          <div
            className={`  pb-0 sm:m-4 -z-10 left-0 bottom-0 relative  sm:w-1/2 w-full leading-6 justify-between text-zinc-950  text-sm ${satoshi.className}`}
          >

            <p className=" justify-center px-4 py-2  w-auto ">
              <span>Built with Next.js on Vercel</span>
              {/* <span className="flashing">_</span> */}
              <br></br>
               {/* <span>Copyright © 2024 Benny Yang</span>
              <br></br>*/}
              <span>Last updated </span><LastCommitTime />
            </p>
          </div>

          <div
            className={`pb-4 sm:text-right items-end sm:pb-0 sm:m-4 -z-10 sm:right-0 sm:left-auto left-0 bottom-0 relative sm:w-1/2 w-full leading-6 justify-between text-zinc-950 text-sm ${satoshi.className} `}
          >


            

            <p className=" justify-center px-4 py-2  w-auto ">
              <span>I&apos;m on </span>
              <a href="https://twitter.com/bennyyyang" target="_blank" className="!pointer-events-auto  hover:bg-black p-1 -mx-1 rounded-lg hover:text-white outline outline-[0.5px] outline-black">Twitter</a>
              <span> </span>
              <a href="https://linkedin.com/in/yumo-benny-yang" target="_blank" className="!pointer-events-auto  hover:bg-black p-1 -mx-1 rounded-lg hover:text-white outline outline-[0.5px] outline-black">Linkedin</a>
              <span> </span>
              <a href="https://cosmos.so/bennyyyang" target="_blank" className="!pointer-events-auto  hover:bg-black p-1 -mx-1 rounded-lg hover:text-white outline outline-[0.5px] outline-black">Cosmos</a>
              <br></br>
              <span>Let&apos;s chat yy3204@columbia.edu</span>
              {/*<a href="mailto:yy3204@columbia.edu" target="_blank" className="!pointer-events-auto underline underline-offset-4 decoration-[0.2px] hover:no-underline">yy3204@columbia.edu</a>*/}
            </p>
          </div>

        </div>




      </section>




    </main >



  )

}