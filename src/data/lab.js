import { a } from "framer-motion/client";

const lab = {
  id: 12,
  title: "Lab",
  video: {
    src: "/images/portfolio/lab.mp4",
    width: 1200,
    height: 800,
  },
  overview: "I studied HCI under Professor Lydia Chilton at Columbia's Computational Design Lab. Generative Disco is an AI system that helps generate music visualizations with large language models and text-to-video generation. I experimented with workflows that automated the storytelling process and enabled users to build coherent visual narratives. I also worked on designing different interactions for the new Generative Disco interface.",
  description: "HCI & AI Research",
  year: "2024-",
  tools: ["Figma", "Python", "Javascript"],
  team: ["Lydia Chilton", "Vivian Liu", "Jiaxin Yang", "Lulu Wang", "Claudia Tang"],
  content: [


    { "type": "section", "text": "Abstract" },
    { "type": "image", "src": "/images/lab/lab1.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "System Design - Courtesy of Vivian Liu" },
    { "type": "image", "src": "/images/lab/lab2.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "transition and hold" },
    { "type": "image", "src": "/images/lab/lab3.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "Design Patterns and Interval Segmentation" },
    { "type": "image", "src": "/images/lab/lab4.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Selecting an Interval" },
    { "type": "video", "src": "/images/lab/selecting.mov", autoplay: true, looping: true, },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Scaling" },
    { "type": "video", "src": "/images/lab/scaling.mov", autoplay: true, looping: true, },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Beat Snapping" },
    { "type": "video", "src": "/images/lab/snapping.mov", autoplay: true, looping: true, },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Playing and Deleting an Interval" },
    { "type": "video", "src": "/images/lab/playinganddeleting.mov", autoplay: true, looping: true, },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Alt. lyric selecting interaction" },
    { "type": "video", "src": "/images/lab/lyrics.mov", autoplay: true, looping: true, },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Alt. interval splitting interaction" },
    { "type": "video", "src": "/images/lab/splitting.mov", autoplay: true, looping: true, },
  ],

};

export default lab;