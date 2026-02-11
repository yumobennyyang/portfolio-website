import { a } from "framer-motion/client";

const gabble = {
  id: 6,
  category: "work",
  title: "Gabble",
  video: {
    src: "/images/portfolio/gabble.mov",
    width: 1200,
    height: 800,
  },
  overview: "At Gabble we are predicting beliefs, starting with an app that gamifies online discourse by placing users in fast-paced rounds of debate to discuss current-affairs topics with strangers. Currently under rebrand.",
  description: "0→1 Product",
  year: "2025-",
  tools: ["Figma", "Swift"],
  role: ["Product", "Brand", "Design", "Frontend"],
  links: [
    { text: "Website", url: "https://www.gabble.world" },
    { text: "App Store", url: "https://apps.apple.com/us/app/gabble-gamifying-debate/id6745415500" },
  ],

  content: [


    
    { "type": "section", "text": "v1.0" },
    {"type": "image", "src" : "/images/gabble/frames.png"},


                { "type": "section", "text": "Explorations" },
    {"type": "image", "src" : "/images/background-color/e5e5e7.png", "secondUrl":"/images/gabble/interaction.mov", "videoInlineStyles": { position: 'absolute', top: '50%', left: '50%', width: '20%', transform: "translate(-50%,-50%)"} },
    {"type": "image", "src" : "/images/background-color/e5e5e7.png", "secondUrl":"/images/gabble/gradient.mov", "videoInlineStyles": { position: 'absolute', top: '50%', left: '50%', width: '20%', transform: "translate(-50%,-50%)" } },


        { "type": "section", "text": "Unique icons hashed from usernames" },
    {"type": "image", "src" : "/images/background-color/e5e5e7.png", "secondUrl":"/images/gabble/gabicons.mov", "videoInlineStyles": { position: 'absolute', top: '50%', left: '50%', width: '20%', transform: "translate(-50%,-50%)" } },

    


            { "type": "section", "text": "Logo" },
    {"type": "image", "src" : "/images/gabble/icon.png"},
        {"type": "image", "src" : "/images/background-color/e5e5e7.png", "secondUrl":"/images/gabble/gavel2.mov", "videoInlineStyles": { position: 'absolute', top: '50%', left: '50%', width: '52%', transform: "translate(-50%,-50%)", filter: "invert(1)", mixBlendMode: "darken" } },



    
    { "type": "section", "text": "Closed Beta Launch" },
    { "type": "text", "text": "Made with Final Cut Pro" },
    { "type": "video", "src": "/images/gabble/gabble_launch.mov", autoplay: false, looping: false, },
    



  { "type": "section", "text": "" },
    { "type": "text", "text": "more to come." },

    
  ],

};

export default gabble;