const manhattan = {
  id:15,
  category: "code",
  title: "Manhattan",
  image: {
    src: "/images/portfolio/manhattan.png",
    width: 1200,
    height: 800,
  },
  overview: "Mapping points of interest in Manhattan using geojson data from OpenStreetMap. The locations are visualized as texts colored by categories, opening hours, or personalized tags.",
  tools: ["OpenStreetMap", "p5.js"],
  description: "Mapping System",
  year: "2025",

  links: [
    { text: "Demo", url: "https://yumobennyyang.github.io/Vertical/" },
  ],

  content: [

    { "type": "section", "text": "" },

    { "type": "image", "src": "/images/manhattan/manhattan1.png" },

    { "type": "section", "text": "Opening Hours" },
    { "type": "image", "src": "/images/manhattan/manhattan2.png" },

    { "type": "section", "text": "Retail | Health | Cafe | Monument | Art | Education | Dining | Nightlife" },
    { "type": "image", "src": "/images/manhattan/manhattan3.png" },
    { "type": "image", "src": "/images/manhattan/manhattan4.png" },

  ],

};

export default manhattan;