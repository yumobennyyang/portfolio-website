const playground = {
  id: 8,
  title: "Playground",
  video: {
    src: "/images/portfolio/playground.mp4",
    width: 1080,
    height: 1080,
  },
  overview: "A collection of little things I prototyped just for fun.",
  description: "Interactive Experiments",
  tools: ["Figma", "Swift", "Three.js", "HTML/CSS/JS"],
  year: "2021-",
  content: [

    { "type": "line", "text": "" },
    { "type": "section", "text": "Gidd - Three.js" },
    { "type": "text", "text": "An interactive blob that is attracted to your cursor. Built with 70000 particles and lots of math." },

    { "type": "iframe", "src": "https://yumobennyyang.github.io/gidd-blob/" },
    { "type": "image", "src": "/images/playground/playground1.png" },
    { "type": "image", "src": "/images/playground/playground2.png" },



    { "type": "line", "text": "" },
    { "type": "section", "text": "Fake Lighting - CSS" },
    { "type": "text", "text": "Hover over the image for a fabricated 3D effect." },

    { "type": "iframe", "src": "https://hover-lighting.vercel.app/" },
    { "type": "image", "src": "/images/playground/playground3.png" },
    { "type": "image", "src": "/images/playground/playground4.png" },


    
    { "type": "line", "text": "" },
    { "type": "section", "text": "If responsive sites were designed like that hospital in the movie Idiocracy - Javascript" },
    { "type": "text", "text": "Resize the window by dragging the bottom right corner." },

    {
      "type": "iframe",
      "src": "https://stgodsmemorialhospital.vercel.app/",
      "containerStyling": {
        "resize": "horizontal",

        "minWidth": "50%",
        "maxWidth": "96%",

      },
      "iframeStyling": {

        "pointerEvents": "none",
        "transform": "scale(1.04,1)",

      }
    },

    { "type": "image", "src": "/images/playground/playground5.png" },
    { "type": "image", "src": "/images/playground/playground6.png" },
   


        
    { "type": "line", "text": "" },
    { "type": "section", "text": "An experimental AI interface - Figma" },
    { "type": "text", "text": "A creative content generator centered around an entity that self-chromatizes as it incrementally takes in instructions." },
    { "type": "video", "src": "/images/playground/playground3.mp4", autoplay: false, looping: false, },
   

  ],

};

export default playground;