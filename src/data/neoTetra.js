// data/projects/project2.js
const neoTetra = {
  id: 13,
  category: "play",
  title: "Neo Tetra",
  image: {
    src: "/images/portfolio/neo-tetra.png",
    width: 1200,
    height: 800,
  },
  overview: "Neo Tetra is a typographic study that reimagines 26 letters, 10 numbers, and 12 symbols as geometric forms comprised of primitive shapes.",
  tools: ["Figma", "Glyphs"],
  description: "Typeface Design",
  year: "2023",
  links: [
    { text: "Behance", url: "https://www.behance.net/gallery/160793887/Neo-Tetra-Typography" },
    { text: "Dafont", url: "https://www.dafont.com/neo-tetra.font" },
  ],

  content: [

    { "type": "section", "text": "Try it" },

    { "type": "textarea" },


    { "type": "section", "text": "Context" },

    { "type": "text", "text": "The Bauhaus is one of the most influential movements in the history of design. With a focus on structure and precision, its philosophy hypothesizes that clean lines and simple shapes of geometric forms can create a sense of order, clarity, and efficiency." },
    { "type": "image", "src": "/images/neo-tetra/font1.png" },

    { "type": "text", "text": "Contemporary adaptations of the movement’s design principles further embrace the minimalistic geometry explored by the school, creating bold patterns made from the most basic shapes. They embody a continuation of the utilitarian view on design, stripping away the inessentials." },
    { "type": "image", "src": "/images/neo-tetra/font2.png" },

    { "type": "section", "text": "Ideation" },

    { "type": "text", "text": "Per Bauhaus philosophy, I designed the typeface as monospaced, placing each letter within a perfect square to evoke unity, balance, and geometric clarity." },
    { "type": "image", "src": "/images/neo-tetra/font3.png" },

    { "type": "section", "text": "Grid" },
 
    { "type": "text", "text": "Each character is divided into four parts, and each part contains one of three shapes." },
    { "type": "image", "src": "/images/neo-tetra/font4.png" },
    { "type": "image", "src": "/images/neo-tetra/font5.png" },

    { "type": "text", "text": "The shapes will either link or not, leaving out thin lines throughout each glyph. These subtle separations are what help distinguish characters with the same silhouette." },
    { "type": "image", "src": "/images/neo-tetra/font6.png" },

    { "type": "text", "text": "Many forms went through multiple iterations. Staying consistent with the overall style while preserving the legibility and uniqueness of each character was a challenge." },
    { "type": "image", "src": "/images/neo-tetra/font7.png" },

    { "type": "section", "text": "Final Glyph Catalog" },

    { "type": "text", "text": "The catalog was kept as concise as possible for its purpose and excluded symbols that would not have much use for a display typeface. That being said, non-period circles were added to be used to complement the rest of the text design." },
    { "type": "image", "src": "/images/neo-tetra/font8.png" },

    { "type": "section", "text": "Gallery" },

    { "type": "image", "src": "/images/neo-tetra/font9.png" },

    { "type": "image", "src": "/images/neo-tetra/font10.png" },
    { "type": "image", "src": "/images/neo-tetra/font11.png" },

  ]
  ,

};

export default neoTetra;
