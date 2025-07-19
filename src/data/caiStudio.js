const caiStudio = {
  id: 9,
  title: "Cai Studio",
  video: {
    src: "/images/portfolio/caistudio.mov",
    width: 1200,
    height: 800,
  },
  overview: "I worked as studio assistant to Cai Guo-Qiang during the summer of 2024 in preparation for his daytime fire work event commisioned by Getty Museum in the LA Memorial Coliseum. I was responsible for the design of the second act of the event, which required precise positionings of around 8500 explosives to form letters and other visuals.",
  tools: ["p5.js", "Figma", "Photoshop", "Illustrator", "Blender", "AutoCAD"],
  duration: "6 weeks",
  description: "Daytime Firework",
  year: "2024",
  content: [


    { "type": "section", "text": "Sequence Visuaization - p5.js" },
    { "type": "smallImage", "src": "/images/cai-studio/cai1.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Viewpoint Rendering - Figma" },
    { "type": "smallImage", "src": "/images/cai-studio/cai2.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Final Scenes" },
    { "type": "video", "src": "/images/cai-studio/EchoAnta-final.mp4" , autoplay: true, looping: true},
    { "type": "video", "src": "/images/cai-studio/SynthView-final.mp4" , autoplay: true, looping: true},
    { "type": "video", "src": "/images/cai-studio/AltCog-final.mp4" , autoplay: true, looping: true},
    { "type": "video", "src": "/images/cai-studio/LogicLoom-final.mp4" , autoplay: true, looping: true},
    { "type": "video", "src": "/images/cai-studio/HumaVisor-final.mp4" , autoplay: true, looping: true},


    { "type": "line", "text": "" },
    { "type": "section", "text": "Snake Matrix, Snake Run Full Map" },
    { "type": "image", "src": "/images/cai-studio/cai3.png" },
    { "type": "video", "src": "/images/cai-studio/tanchishe-final.mp4", autoplay: true, looping: true },



    // { "type": "line", "text": "" },
    // { "type": "section", "text": "Miscellaneous - Blender, AutoCAD" },
    // { "type": "image", "src": "/images/cai-studio/cai4.png" },
    // { "type": "image", "src": "/images/cai-studio/cai5.png" },




  ],

};

export default caiStudio;