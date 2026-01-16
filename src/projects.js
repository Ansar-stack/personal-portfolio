import calcora from './assets/calcora.png'
import editor from './assets/codeEditor.png'
export const projects = [
  {
    id: 1,
    title: "Grocery E-commerce",
    description: "A full-featured e-commerce platform for grocery shopping, currently in develpment.",
    image: calcora,
    liveURL: "https://github.com/Ansar-stack/fullstack-groceries-ecommerce",
    githubURL: "https://github.com/Ansar-stack/fullstack-groceries-ecommerce",
    stack: ["MongoDb", "React", "Express", "Node"],
  },
  {
    id: 2,
    title: "Calcora.us",
    description: "A comprehensive web platform featuring 80+ calculators for finance, math and daily utilities.",
    image: calcora,
    liveURL: "https://calcora.us/",
    githubURL: "https://github.com/Ansar-stack/calcora",
    stack: ["NextJs", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Code Editor",
    description: "An online HTML, CSS, and JavaScript editor for real-time coding and testing.",
    image: editor,
    liveURL: "https://react-code-editor-theta.vercel.app/",
    githubURL: "https://github.com/Ansar-stack/react-code-editor",
    stack: ["React", "TailwindCSS", "Monaco"],
  },
];
