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




const hideTextElements = document.querySelectorAll('.hideText');


hideTextElements.forEach((element) => {

  const mainText1 = document.querySelector('#mainText');
  const portfolioCard = document.querySelector('#portfolioCard');
  const elementHeight = (mainText1 as HTMLElement).clientHeight;
  console.log(elementHeight);


  if (mainText1 && portfolioCard) {

    const changeX = 56 / portfolioCard.clientWidth;
    const changeY = 56 / mainText1.clientHeight;



    gsap.fromTo(element,
      {

        scaleX: 1,
        scaleY: 1,
        top: 0,
        filter: "blur(0px)",

      },
      {

        scaleX: changeX,
        scaleY: changeY,
        top: 'calc(-' + (elementHeight - 56) / 2 + 'px - 56px - 24px)',
        //top: 'calc(-' + (elementHeight - 56) / 2 + 'px - 56px - 24px - 50px)',
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: element,

          // start: 450 + window.innerHeight * (scrollSpeed - 1),
          // end: 650 + window.innerHeight * (scrollSpeed - 1),
          start: window.innerHeight - 300,
          end: window.innerHeight - 150,
          scrub: true,
          markers: false
        },
        ease: "power1.in"
      }
    );

    gsap.fromTo(element,
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
  }

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
        // end: window.innerHeight * scrollSpeed,  // Ends after scrolling the height of the viewport
        end: window.innerHeight,
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



const textWidth = document.querySelectorAll('#portfolioCard')

textWidth.forEach((element: Element) => {
  const width = (element as HTMLElement).clientWidth;

  const changeWidth = document.querySelectorAll('.mainText')

  changeWidth.forEach((element: Element) => {
    const htmlElement = element as HTMLElement; // Cast 'element' to 'HTMLElement'
    htmlElement.style.width = width + 'px';
  })
})
