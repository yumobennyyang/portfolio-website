// data/projects/project2.js
const neoTetra = {
  id: 1,
  title: "Neo Tetra",
  image: {
    src: "/images/portfolio/neo-tetra.png",
    width: 1024,
    height: 1024,
  },
  overview: "Neo Tetra is a typographic study that reimagines 26 letters, 10 numbers, and 12 symbols as geometric forms comprised of primitive shapes.",
  tools: ["Figma", "Glyphs"],
  duration: "2 weeks",
  description: "Typeface Design",
  year: "2023",

  content: [
    { "type": "textarea"},


    { "type": "line", "text": "" },
    { "type": "section", "text": "Context" },

    { "type": "text", "text": "The Bauhaus is one of the most influential movements in the history of design. With a focus on structure and precision, its philosophy hypothesizes that clean lines and simple shapes of geometric forms can create a sense of order, clarity, and efficiency." },
    { "type": "image", "src": "/images/neo-tetra/font1.png" },

    { "type": "text", "text": "Contemporary adaptations of the movement’s design principles further embrace the minimalistic geometry explored by the school, creating bold patterns made from the most basic shapes. They embody a continuation of the utilitarian view on design, stripping away the inessentials. The usage extending into letterform logos is now so common that the two softwares I used for this project, Figma and Glyphs, both happen to incorporate the style in discussion." },
    { "type": "image", "src": "/images/neo-tetra/font2.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Initial Sketches" },
    { "type": "text", "text": "To stay true to Bauhaus philosophy, I wanted to make the typeface monospaced, with each alphabet encompassed in a perfect square to create a sense of unity and balance." },
    { "type": "image", "src": "/images/neo-tetra/font3.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Digital Reconstruction" },
    { "type": "text", "text": "On the computer, I started to experiment with two different construction guidelines to generate two sets of alphabets. Neither was able to represent the full alphabet well." },
    { "type": "image", "src": "/images/neo-tetra/font4.png" },
    { "type": "image", "src": "/images/neo-tetra/font5.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "Grid" },
    { "type": "text", "text": "I decided to then merge the two grids and create a version that makes use of effective elements from both versions. Each character is divided into four parts, and each part contains and only contains one of the four shapes as marked in the grid." },
    { "type": "image", "src": "/images/neo-tetra/font6.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Linkage" },
    { "type": "text", "text": "These shapes will either link or not, creating thin lines throughout each glyph. These subtle separations are what help distinguish forms that have the same silhouettes in the design: H and I, O and 0, U and V." },
    { "type": "image", "src": "/images/neo-tetra/font7.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Digital Reconstruction cont." },
    { "type": "text", "text": "Many forms went through multiple iterations. Staying consistent with the overall style while preserving the legibility and uniqueness of each character was a challenge. The letter F was particularly hard to construct in the limited space given." },
    { "type": "image", "src": "/images/neo-tetra/font8.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Final Glyph Catalog" },
    { "type": "text", "text": "I kept the catalog as concise as possible for its purpose and excluded symbols that would not have much use for a display typeface. On the other hand, I made grave, asterisk, and asciicircum in circles that can be used to complement the rest of the text design." },
    { "type": "image", "src": "/images/neo-tetra/font9.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Gallery" },
    { "type": "image", "src": "/images/neo-tetra/font10.png" },
    { "type": "image", "src": "/images/neo-tetra/font11.png" },
    { "type": "image", "src": "/images/neo-tetra/font12.png" },
    { "type": "image", "src": "/images/neo-tetra/font13.png" },
    { "type": "image", "src": "/images/neo-tetra/font14.png" }
  ]
  ,

};

export default neoTetra;
