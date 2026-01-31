const label3 = {
  id: 9,
  category: "play",
  title: "Label Factory",
  video: {
    src: "/images/portfolio/label3.mov",
    width: 1200,
    height: 800,
   filter: "saturate(120%)"



  },
  overview: "iPhone-based interactive shader experiments using clothing labels as the test surface. Will be putting this app on Testflight once I have more items. This is an ongoing project.",
  description: "Metal Shaders",
  year: "2025-",
  tools: ["Swift", "Metal"],
  content: [


    
        { "type": "section", "text": "Echo", "secondaryText": "Ripple Effect" },
        { "type": "video", "src": "/images/labels/label1.mov", autoplay: true, looping: true, videoStyles: "contrast-[105%]" },


        { "type": "section", "text": "Liquid Glass", "secondaryText": "The shader distorts the background using physics-based refraction and chromatic aberration. During motion, the shader rotates and scales the coordinate space based on velocity, stretching the object along its path while compressing it perpendicularly to preserve its perceived volume." },
        { "type": "video", "src": "/images/labels/label3.mov", autoplay: true, looping: true, videoStyles: "contrast-[105%]" },

    { "type": "image", "src": "/images/labels/label3.png" },


            { "type": "section", "text": "Elastic Deformation", "secondaryText": "Expansion and compression calculated from Poisson's ratio. On stretch, the material appears to thin out, revealing a red, dotted inner lining, while the haptics deliver subtle, crisp thuds in sync." },
        { "type": "video", "src": "/images/labels/label2.mov", autoplay: true, looping: true, videoStyles: "contrast-[105%]" },

    { "type": "image", "src": "/images/labels/label2.png" },



  ],

};

export default label3;