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
  links: [
    { text: "Website", url: "https://www.gabble.world" },
    { text: "App Store", url: "https://apps.apple.com/us/app/gabble-gamifying-debate/id6745415500" },
  ],

  content: [

    
    { "type": "section", "text": "Closed Beta Launch" },
    { "type": "video", "src": "/images/gabble/gabble_launch.mov", autoplay: false, looping: false, },
    { "type": "text", "text": "more to come." },

    
  ],

};

export default gabble;