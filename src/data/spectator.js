const spectator = {
  id: 3,
  title: "Spectator",
  image: {
    src: "/images/portfolio/spectator.png",
    width: 1024,
    height: 1024,
  },
  overview: "Columbia University’s self-sustaining news publication, the Daily Spectator, publishes online five days a week and in physical editions once a week. As Head Product Designer of the organization, I designed and shipped an app with my team to enhance the platform’s mobile accessibility and interactivity, serving as a replacement of the web browser experience.",
  duration: "15 weeks",
  team: ["Philippe Wu", "Christina Su", "Muchen Guo"],
  role: ["Design Systems", "UI/UX"],
  tools: ["Figma"],
  description: "Mobile UI/UX",
  content: [
    { "type": "line", "text": "" },
    { "type": "section", "text": "Context" },

    { "type": "text", "text": "Columbia Daily Spectator is the second-oldest college daily paper in the United States. Spectator’s Engagement analytics report an increasing consumption of Spectator articles on mobile devices, with more and more users being directed to the Spectator’s mobile website from the organization’s instagram posts." },
    { "type": "text", "text": "However, a quick scan of the CDS website on mobile phones yields many problems. The visual layout on a desktop does not translate well onto a smaller screen, resulting in the mobile interface being filled with inconsistent and clunky elements." },


    { "type": "image", "src": "/images/spec-mobile/spec2.png" },



    { "type": "text", "text": "Visual Issues: \n • Misaligned headers \n • Messy visual hierarchy \n • Overabundance of fonts" },
    { "type": "text", "text": "Interactive Issues: \n • Tiny clickable elements \n • Frequently used navigation button placed at a hard-to-reach corner" },
    { "type": "text", "text": "Thus, the product team at Spectator began ideating a different news viewing experience to replace the web browser: a mobile app." },



    { "type": "line", "text": "" },
    { "type": "section", "text": "Oppurtunities for Improvement" },
    { "type": "text", "text": "User Interaction: • Easier to access • Easier to browse • Easier to share" },
    { "type": "text", "text": "Expanded Functionalities • Story-telling through more specific sections and subsections • Tighter integration between print and mobile formats • Customizable notifications System • Personalization of feed • Offline Reading" },
    { "type": "text", "text": "Potential Impact • Increased user activity (people on apps spend more time) • Increased brand influence & mobile presence" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "Demand Analysis" },
    { "type": "text", "text": "Do people want a mobile app?" },
    { "type": "text", "text": "We sent out surveys with both discreet and explicit questions about news consumptions • To Spectator Staff (they spend half their life on the spectator website and have a full understanding of the site down to its tiniest problems) • To other Columbia undergraduate students (our main target audience, who can provide good general feedback for the current method of viewing Spectator news)" },
    { "type": "text", "text": "We also found Existing Research on mobile app demand and trends from American Press(2016), Insider(2020), Comscore(2016), etc." },
    { "type": "image", "src": "/images/spec-mobile/spec3.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "Competitive Landscape" },
    { "type": "text", "text": "We looked into other successful news delivering apps to gain a better understanding of the mobile iteration of news content and to get inspired with new feature ideas: New York Times, Bloomberg, Washington Post, Daily Pennsylvanian, Tencent News." },
    { "type": "image", "src": "/images/spec-mobile/spec4.png" },
    { "type": "text", "text": "Together with the results we received from surveys, we now have a good understanding of what features to prioritize for the 1.0 version of our MVP, all to construct a personalized and customizable experience for the users: • Restructuring the navigation, including the process of section-subsection exploration and the placement of image & text content. • Cutting down the number of fonts (EB Garamond, Bitter, Open Sans, Merriweather,  Lato, Playfair Display, Neue Haas Unica) • Designing easy sharing and saving functionalities • Categorizing articles by tags and subtags • Adding in accessibility settings" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Styles Revamp" },
    { "type": "text", "text": "The final 'contact sheet' view of all [76 total / 48 unique] glyphs, each labeled with their respective name and unicode(s)." },
    { "type": "image", "src": "/images/spec-mobile/spec5.png" },
    { "type": "image", "src": "/images/spec-mobile/spec6.png" },


    { "type": "line", "text": "" },
    { "type": "section", "text": "Design Library" },
    { "type": "text", "text": "Visual components for article layouts and a brand new articles navigating interaction." },
    { "type": "image", "src": "/images/spec-mobile/spec7.png" },

    { "type": "line", "text": "" },
    { "type": "section", "text": "Alternative Designs" },
    { "type": "text", "text": "Our UX went through multiple iterations during the mid fidelity prototyping stage that ended up being scrapped for various reasons. Here are 2 of many." },
    { "type": "image", "src": "/images/spec-mobile/spec8.gif" },
    { "type": "text", "text": "A proposal for a top-scroll bar for sub-section navigation was rejected because: • Subsections placed later in the scroll sequence are disadvantaged in terms of receiving views. • The scroll bar consists of small texts on top of the phone screen that can be hard to reach." },
    { "type": "image", "src": "/images/spec-mobile/spec9.gif" },
    { "type": "text", "text": "An inital UI of black navigation bars and previews with images on the left was replaced because:  • The black/white contrast makes the screen feel confined and restricted • The image alignment creates a rift in the user’s F-shaped reading patterns." },

    { "type": "line", "text": "" },
    { "type": "section", "text": "High-Fidelity Prototypes" },
    { "type": "text", "text": "Homes" },
    { "type": "image", "src": "/images/spec-mobile/spec10.png" },
    { "type": "text", "text": "Sections" },
    { "type": "image", "src": "/images/spec-mobile/spec11.png" },
    { "type": "text", "text": "Profile" },
    { "type": "image", "src": "/images/spec-mobile/spec12.png" },
    { "type": "text", "text": "Search" },
    { "type": "image", "src": "/images/spec-mobile/spec13.png" },


  ],

};

export default spectator;