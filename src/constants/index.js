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
  //redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  //figma,
  //docker,
  meta,
  //starbucks,
  wordpress,
  ScarpUp,
  Scarpuphm, 
  nutri,
  logo, 
  Canva,
  bootstrap,
  tesla,
  shopify,
  //carrent,
  //jobit,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "Canva",
    icon: Canva,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "WordPress Developer",
    company_name: "Freelance",
    icon: wordpress,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Built multiple WordPress websites from scratch, proficient in plugin utilization and optimization techniques.",
      "Expertise in using Elementor and Elementor Pro for enhanced website design and customization.",
      "Skilled in SEO optimization with plugins like Yoast SEO and Rank Math.",
      "Skilled in integrating payment gateways, e-commerce functionalities, and delivery partner systems.",
    ],
  },
  {
    title: "React Developer",
    company_name: "ScarpUp India",
    icon: ScarpUp,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Collecting waste materials and transforming them into innovative, creative products.",
      "Utilizing React, Next.js, Node.js, and Express.js to build a robust and dynamic web platform.",
      "Collaborating with artists, designers, and developers to bring unique, eco-friendly creations to life.",
      "Ensuring a seamless user experience through responsive design and efficient functionality.",
    ],
  },
  {
    title: "Image Generation web App ",
    company_name: "Hey Aryan",
    icon: logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Spearheaded the development of an AI Image Generation web application utilizing the MERN stack, Tailwind CSS, and Cloudinary for seamless image storage.",
      "Implemented OpenAI’s DALL-E model to enable image generation from textual inputs, showcasing innovative AI integration.",
      "Ensured user-friendly experience through intuitive design with Tailwind CSS, enhancing accessibility and usability.",
      "Integrated Cloudinary for efficient image storage and management, optimizing the app’s performance and scalability.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Hey Aryan",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Led the development of an online fashion store with a comprehensive tech stack including HTML, CSS, JavaScript, React JS, and Next JS for the frontend.",
      "Utilized JavaScript, Node JS, and DBMS for the backend, ensuring robust functionality and data management capabilities.",
      "Implemented Next JS for enhanced server-side rendering and improved performance, delivering a seamless browsing experience for users.",
      "Incorporated modern web technologies to create an engaging and responsive interface, elevating the overall user experience of the online store.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aryan proved me wrong.",
    name: "Saumya Srijan",
    designation: "Founder",
    company: "Xtrimis",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aryan does.",
    name: "Shailesh kumar",
    designation: "Owner",
    company: "Nutri Booster",
  },
  {
    testimonial:
      "I have enjoyed working with Aryan's Team. I would love to recommend for web design & development.",
    name: "Proff. Rahul Jha ",
    designation: "Owner",
    company: "Concept Mania",
  },
];

const projects = [
  {
    name: "Waste to Wealth",
    description:
      "A creative initiative harnessing waste materials to craft unique, sustainable products, demonstrating our commitment to eco-friendly innovation and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Scarpuphm,
    source_code_link: "https://github.com/Aryan-one6/ScarpupIndia",
  },
  {
    name: "NutriBooster",
    description:
      "An online platform offering protein powders crafted from 99% Ayurvedic ingredients, promoting wellness through natural and effective nutrition solutions.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: nutri,
    source_code_link: "https://Nutribooster.in/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };