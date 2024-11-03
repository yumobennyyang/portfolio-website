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

  content: [
    { "type": "textarea"},


    { "type": "line", "text": "" },
    { "type": "section", "text": "Context" },

    { "type": "text", "text": "The Bauhaus is one of the most influential movements in the history of design. With a focus on structure and precision, its philosophy hypothesizes that clean lines and simple shapes of geometric forms can create a sense of order, clarity, and efficiency." },
    { "type": "image", "src": "/images/neo-tetra/neo2.png" },

    { "type": "text", "text": "Contemporary adaptations of the movement’s design principles further embrace the minimalistic geometry explored by the school, creating bold patterns made from the most basic shapes. They embody a continuation of the utilitarian view on design, stripping away the inessentials. The usage extending into letterform logos is now so common that the two softwares I used for this project, Figma and Glyphs, both happen to incorporate the style in discussion." },
    { "type": "image", "src": "/images/neo-tetra/neo3.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Initial Sketches" },
    { "type": "text", "text": "To stay true to Bauhaus philosophy, I wanted to make the typeface monospaced, with each alphabet encompassed in a perfect square to create a sense of unity and balance." },
    { "type": "image", "src": "/images/neo-tetra/neo4.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Digital Reconstruction" },
    { "type": "text", "text": "On the computer, I started to experiment with two different construction guidelines to generate two sets of alphabets. I wanted to keep these logo grids as simple as possible." },
    { "type": "image", "src": "/images/neo-tetra/neo5.png" },
    { "type": "text", "text": "The result came out as follows. The faintlier marked ones are questionable, but I was generally happy with the legibility of most forms." },
    { "type": "image", "src": "/images/neo-tetra/neo6.png" },
    { "type": "text", "text": "I decided to then merge the two grids and create a version that makes use of effective elements from both versions." },
    { "type": "image", "src": "/images/neo-tetra/neo7.png" },

    { "type": "text", "text": "This ended up being the final construction guide. Every alphabet, number, and symbol will follow the lines from this grid." },
    { "type": "text", "text": "The construction of the glyphs can be summarized in another way: Each character is divided into four parts, and each part contains and only contains one of the four following primitive shapes and their rotations:" },
    { "type": "image", "src": "/images/neo-tetra/neo8.png" },

    { "type": "text", "text": "In fact, the circle is used in none of the 26 alphabets and 10 numbers, only in the symbols." },
    { "type": "text", "text": "These shapes will either link or not, creating thin lines throughout each glyph. These subtle separations are what help distinguish forms that have the same silhouettes in the design: H and I, O and 0, U and V." },
    { "type": "image", "src": "/images/neo-tetra/neo9.png" },

    { "type": "text", "text": "Many forms went through multiple iterations. Staying consistent with the overall style while preserving the legibility and uniqueness of each character was a challenge. The letter F was particularly hard to construct in the limited space given." },
    { "type": "text", "text": "These and many more were all attempts to make the perfect F:" },
    { "type": "image", "src": "/images/neo-tetra/neo10.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Final Glyph Catalog" },
    { "type": "text", "text": "The final 'contact sheet' view of all [76 total / 48 unique] glyphs, each labeled with their respective name and unicode(s)." },
    { "type": "image", "src": "/images/neo-tetra/neo11.png" },

    { "type": "text", "text": "Since Neo Tetra is intended to be a display typeface used in large titles and headings, I excluded symbols such as semicolon and parenthesis that would have been easy to make but not have much use. To follow the Bauhaus teaching of 'Form Follows Function,' I kept the catalog as concise as possible for its purpose, preserving the value of simplicity." },

    { "type": "text", "text": "On the other hand, period, grave, asterisk, and asciicircum as circles in four positions aim to be used as forms that can be easily integrated by designers (or any user of the font) into their design wherever they see fit, their purpose being that of ornament and accessory to the layout." },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Gallery" },
    { "type": "image", "src": "/images/neo-tetra/neo12.png" }
  ]
  ,

};

export default neoTetra;
