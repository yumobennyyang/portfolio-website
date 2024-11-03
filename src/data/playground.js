const playground = {
  id: 8,
  title: "Playground",
  video: {
    src: "/images/portfolio/playground.mp4",
    width: 1000,
    height: 1000,
  },
  overview: "A collection of little things I prototyped just for fun.",
  description: "Interactive Experiments",
  tools: ["Figma", "Swift", "Three.js", "HTML/CSS/JS"],
  content: [
    { "type": "line", "text": "" },

    { "type": "iframe", "src": "https://yumobennyyang.github.io/gidd-blob/" },
    { "type": "text", "text": "Gidd is an interactive blob with an inexplicable connection to your cursor." },

    { "type": "iframe", "src": "https://hover-lighting.vercel.app/" },
    { "type": "text", "text": "Hover over the image for a fake 3D effect." },

    {
      "type": "iframe",
      "src": "https://stgodsmemorialhospital.vercel.app/",
      "containerStyling": {
        "resize": "horizontal",
        "width": "calc(100% / 0.75)",
        "minWidth": "50%",
        "maxWidth": "90%",

        

      },
      "iframeStyling": {
        "width": "calc(120% / 0.75)",
        "transform": "translate(-12.5%, -12.5%) scale(0.75)",
        "pointerEvents": "none",
        "height": "500px",
      }
    },
    { "type": "text", "text": "Drag the window to see what it would be like if responsive sites were designed like that hospital in the movie Idiocracy." },

    { "type": "video", "src": "/images/playground/playground3.mp4" },
    { "type": "text", "text": "An experimental AI interface centered around an entity that self-chromatizes as it incrementally takes in instructions to create content." },

  ],

};

export default playground;