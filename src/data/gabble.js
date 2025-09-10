import { a } from "framer-motion/client";

const gabble = {
  id: 13,
  title: "Gabble",
  image: {
    src: "/images/portfolio/gabble.png",
    width: 1200,
    height: 800,
  },
  overview: "I am building Gabble, an app that gamifies the experience of online discourse by placing users in fast-paced rounds of debate to discuss current-affairs topics with strangers.",
  description: "0->1 Product",
  year: "2024-",
  tools: ["Figma", "Swift", "Framer"],
  role: ["Frontend Development", "Brand Design", "UI/UX Design"],
  content: [

    
    { "type": "section", "text": "Closed Beta Launch" },
    { "type": "video", "src": "/images/gabble/gabble_launch.mov", autoplay: false, looping: false, },

    { "type": "link", "text": "www.gabble.world", "url": "https://www.gabble.world" }

    
  ],

};

export default gabble;