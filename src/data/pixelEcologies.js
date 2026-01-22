const pixelEcologies = {
  id:16,
  category: "code",
  title: "Pixel Ecologies",
  image: {
    src: "/images/portfolio/ecology.png",
    width: 1200,
    height: 800,
  },
  overview: "Pixel Ecologies is a series of interactive browser-based simulations that translate animal collective intelligence into algorithmic drawings. Through human perturbation via cursor interaction, the work reveals how global patterns emerge, adapt, and fracture when an outsider enters a living system.",
  tools: ["Three.js", "p5.js"],
  description: "Boid Simulation",
  year: "2025",


  links: [
    { text: "Demo", url: "https://yumobennyyang.github.io/Starling/" },
  ],

  content: [

    { "type": "section", "text": "" },

    { "type": "image", "src": "/images/ecology/ecology1.png" },

    { "type": "section", "text": "Starlings" },
    {"type":"image","src":"/images/ecology/bird.png", "secondUrl":"/images/ecology/bird.mov", "videoStyles":"mix-blend-lighten saturate-0 contrast-200 ", "videoInlineStyles": { position: 'absolute', top: '31.3%', left: '50%', transform: 'translate(-50%, -50%)', width: '21.2%' }},
    
    {"type":"video","src":"/images/ecology/starling.mov" , autoplay: true, looping: true},
   
        { "type": "section", "text": "Emperor Penguins" },
    {"type":"image","src":"/images/ecology/penguin.png", "secondUrl":"/images/ecology/penguin.mov", "videoStyles":"mix-blend-lighten saturate-0 contrast-200 ", "videoInlineStyles": { position: 'absolute', top: '31.3%', left: '50%', transform: 'translate(-50%, -50%)', width: '21.2%' }},

    {"type":"video","src":"/images/ecology/emperor.mov" , autoplay: true, looping: true},

        { "type": "section", "text": "Bigeye Trevallies" },
    {"type":"image","src":"/images/ecology/fish.png", "secondUrl":"/images/ecology/fish.mov", "videoStyles":"mix-blend-lighten saturate-0 contrast-200 ", "videoInlineStyles": { position: 'absolute', top: '31.3%', left: '50%', transform: 'translate(-50%, -50%)', width: '21.2%' }},

        {"type":"video","src":"/images/ecology/trevally.mov" , autoplay: true, looping: true},


        { "type": "section", "text": "Observation is never neutral." },
        { "type": "text", "text": "Across all three systems, the mouse interaction introduces a presence that is not directive, but affective. It doesn’t command - it perturbs. The trails that remain are evidence of encounter. These traces visualize how information moves through matter, how behavior leaves marks, and how systems adapt when an outsider enters their field. Pixel Ecologies is about the shared logic of life across scales: how local sensing produces global form. By simulating, we don't attempt to imitate nature, but to participate in it, to render its algorithms visible. " },
        
  ],

};

export default pixelEcologies;