import { a } from "framer-motion/client";

const gabble = {
  id: 6,
  category: "work",
  title: "Gabble",
  image: {
    src: "/images/portfolio/gabble.png",
    width: 1200,
    height: 800,
  },
  overview: "At Gabble we are predicting beliefs, starting with an app that gamifies online discourse by placing users in fast-paced rounds of debate to discuss current-affairs topics with strangers.",
  description: "0→1 Product",
  year: "2025-",
  tools: ["Figma", "Swift"],
  role: ["Product", "Brand", "Design Engineering"],
  content: [

    
    { "type": "section", "text": "Closed Beta Launch" },
    { "type": "video", "src": "/images/gabble/gabble_launch.mov", autoplay: false, looping: false, },

    { "type": "link", "text": "www.gabble.world", "url": "https://www.gabble.world" }

    
  ],

};

export default gabble;