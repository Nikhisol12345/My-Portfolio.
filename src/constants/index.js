
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    Python,
    tailwind,
    git,
    figma,
    docker,
    meta,
    Propero,
    tesla,
    shopify,
    GPT3,
    Crypto,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React.js Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    // {
    //   title: "",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "RPA Developer",
      company_name: "Propero ",
      icon: Propero,
      iconBg: "#fff",
      date: "October 2021 - february 2022",
      points: [
        "RPA Developer (Intern) Extensively worked on RPA tool Automation Anywhere, Open Span.",
        "Created custom activities and components to meet the requirements of business processes",
        "Deployed RPA bots in various environments and monitored their"
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GPT-3 Website",
      description:
        "Designed and developed GPT-3 powered website showcasing limitless potentials with the tagline The Future is Now. Step into Future Today. Make it Happen. Featuring innovative blog section.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
      
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: GPT3,
      source_code_link: "https://gpt-3-website-kappa.vercel.app/",
    },
    {
      name: "Crypto Website",
      description:
        "Successfully integrated live coin data API for real-time cryptocurrency information display, including prices, market cap, volume, and 24-hour change. Implemented interactive coin charts using Chart.js.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "green-text-gradient",
        },
        
      ],
      image: Crypto,
      source_code_link: "https://nikhil-crypto-app.vercel.app/Coin",
    },
    {
      name: "Trip Guide",
      description:
        "Engineered a user-centric travel booking platform, empowering users to effortlessly access destination details, including location , ticket availability, and lodging options, enhancing travel planning experiences.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://nikhilsolanki.000webhostapp.com/",
    },
  ];
  
  export { services,  technologies, experiences, testimonials, projects };