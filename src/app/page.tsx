

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

const satoshi = localFont({ src: '../fonts/PPNeueMontrealMono-Thin.otf' })
const benny = localFont({ src: '../fonts/PPNeueMontrealMono-Thin.otf' })


const text = localFont({ src: '../fonts/PPNeueMontreal-Medium.otf' })




export default function PortfolioIndex() {



  const items = allPortfolios;

  const sortedItems = items.sort((a, b) => a.orderIndex - b.orderIndex);

  const interfaces = allPortfolios.slice(0, 3);

  const graphics = allPortfolios.slice(3, 6);

  const crafts = allPortfolios.slice(6, 9);

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











  }


  useEffect(() => {
    // updateScrollSpeed();

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
      ScrollTrigger.refresh();

    }


    // function updateScrollSpeed() {
    //   if (window.innerWidth >= 768) {
    //     scrollSpeed = 1;
    //   } else {
    //     scrollSpeed = 1;
    //   }
    // }











    window.addEventListener('resize', handleResize);
    // window.addEventListener('resize', updateScrollSpeed);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup all ScrollTriggers on component unmount
    };


  }, []);




  return (


    <main className=" flex justify-center  w-screen m-auto ">




      <div className="{saturateVideo} -z-50 fixed h-screen  pointer-events-none  w-screen items-center   bg-white">

        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover sm:object-fill  blur-xl"

        >

          <source src={"/images/portfolio/background.mp4"} type="video/mp4" />
        </video>

      </div>



      <div className=" flex brightness-95 vercelBackground darkBackground pointer-events-none  -z-40 w-full h-full fixed">

        <div className="opacity-70 m-auto relative flex place-items-center before:absolute before:h-[700px] before:w-[900px] before:-translate-x-full before:rounded-full before:bg-gradient-radial before:from-rose-50 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[400px] after:w-[700px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-100 after:via-purple-50 after:blur-3xl after:content-[''] ">
        </div>
      </div>

      <div className="gradient gradient-background z-20 w-screen   pointer-events-none  fixed " />
      <div className="gradient gradient-blur z-20 w-screen   pointer-events-none  fixed ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>








      <div id="logo" className="logoOffset  mix-blend-difference z-40 fixed w-full h-auto pointer-events-none">


        <div className=" logoAppear  my-6 h-14 w-14 relative self-center flex left-1/2 makeClickable -translate-x-1/2  place-items-center hover:!opacity-100">
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
          className={`  hideText left-1/2 -translate-x-1/2 relative leading-6 justify-between  text-neutral-50 text-sm ${benny.className}`}
        >

          <div id="mainText" className="mainText justify-center mx-auto my-6  p-0.5">
            <span id="intro" className="split-type">Benny is an artist and designer currently studying computer science and visual arts at Columbia University.</span>
            <span className="flashing disappear">_</span>
            <br></br><br></br>
            <span className="reveal-type">He loves building interactive and fluid interfaces that, more often than not, end up being functionless. However, he has recently come to terms with the fact that he needs to make useful ones as well.
              <br></br><br></br>After working with teams at Tencent and Spectator, he is now designing for various startups and researching at the Computational Design Lab — prototyping micro-interactions and scaling design systems.
              <br></br><br></br>Benny coded the website you&apos;re about to see.</span>
          </div>

        </div>
      </div>


      <div className={`flex mix-blend-difference sm:mx-4  my-2 z-50 right-0 top-0 fixed w-auto leading-6 text-neutral-50  text-sm ${satoshi.className}`}>

        <a
          className={` justify-between `}
          href="https://instagram.com/yangyart"
          target="_blank"
        >

          <p className=" justify-center pl-4 pr-2 py-2  w-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">
            ↗ art
            {/* <span>↗</span>*/}
          </p>

        </a>

        <a
          className={` justify-between`}
          href="https://read.cv/bennyyyang"
          target="_blank"
        >
          <p className=" justify-center pr-4 pl-2 py-2  w-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">
            ↗ cv
          </p>

        </a>



      </div>

      <div
        className={`hideScrollText items-center text-center pointer-events-none m-4 z-10 bottom-0 fixed w-full leading-6 justify-between text-neutral-950 text-sm ${satoshi.className}`}
      >
        <div className="flex flex-col items-center">
          <div className="scrolldown opacity-30 !scale-75"></div>

          <p className="justify-center  ml-auto mr-auto px-4 py-2">
            <span>scroll for more</span>
          </p>
        </div>
      </div>



      <div
        className={` revealText pb-16 sm:pb-0 sm:m-4 -z-10 left-0 bottom-0 fixed sm:w-1/2 w-full leading-6 justify-between text-neutral-950  text-sm ${satoshi.className}`}
      >

        <p className=" justify-center px-4 py-2  w-auto ">
          <span>Built with Next.js on Vercel.</span>
          <span className="flashing">_</span>
          <br></br>
          <span>© 2024 Yang Last updated 06-02</span>
        </p>
      </div>

      <div
        className={`revealText sm:m-4 -z-10 sm:right-0 sm:left-auto left-0 bottom-0 fixed sm:w-auto w-full leading-6 justify-between text-neutral-950 text-sm ${satoshi.className} `}
      >

        <p className=" justify-center px-4 py-2  w-auto ">
          <span>I&apos;m on </span>
          <a href="https://twitter.com/bennyyyang" target="_blank" className="!pointer-events-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">Twitter</a>
          <span> </span>
          <a href="https://linkedin.com/in/yumo-benny-yang" target="_blank" className="!pointer-events-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">Linkedin</a>
          <span> </span>
          <a href="https://cosmos.so/bennyyyang" target="_blank" className="!pointer-events-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">Cosmos</a>
          <br></br>
          <span>Let&apos;s chat </span>
          <a href="mailto:yy3204@columbia.edu" target="_blank" className="!pointer-events-auto underline underline-offset-4 decoration-[0.2px] hover:decoration-2">yy3204@columbia.edu</a>
        </p>
      </div>




      <section className=" z-0 w-screen h-auto !pointer-events-none ">
        <div id="scrollSection"
          className="z-10 relative !pointer-events-none w-full justify-between "
        >




        </div>



        <div id="portfolio" className={`blurToNotBlur !pointer-events-none  relative sm:px-6 px-2 pt-16 pb-40 sm:pb-32 z-0 go-dark leading-6 flex w-full flex-col items-start justify-between ${text.className}`}>
          <div className={`px-2 pt-3 inline-block text-sm text-black ${satoshi.className}`}>INTERFACES</div>

          <div className="w-full grid sm:grid-cols-3 p-2 gap-4 pb-8 !pointer-events-auto ">


            {interfaces.map((item, index) => <PortfolioCard key={index} item={item} />)}


          </div>

          <div className={`px-2 inline-block text-sm text-black ${satoshi.className}`}>COMPOSITIONS</div>

          <div className="w-full grid sm:grid-cols-3 p-2 gap-4 pb-8 !pointer-events-auto ">

            {graphics.map((item, index) => <PortfolioCard key={index} item={item} />)}

          </div>

          <div className={`px-2 inline-block text-sm text-black ${satoshi.className}`}>CRAFTS</div>

          <div className="w-full grid sm:grid-cols-3 p-2 gap-4 !pointer-events-auto ">

            {crafts.map((item, index) => <PortfolioCard key={index} item={item} />)}

          </div>


        </div>





      </section>




    </main >



  )

}