import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  printer,
  design,
  paint,
  tutor,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,

  //Testimonals
  yassine,
  mehdi,
  raigewi,

  //Images
  deadpool1,
  deadpool3,
  deadpool2,
  deadpool4,
  sabre1,
  sabre2,
  sabre3,
  omni1,
  omni2,
  omni3,
  omni4,
  vold1,
  vold2,
  vold3,
  vold4,

  //Videos
  spiderman,
  venom,
  guts,
  kratos_3,

} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "models",
    title: "Models",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Printing",
    icon: printer,
  },
  {
    title: "Custom Design",
    icon: design,
  },
  {
    title: "Painting",
    icon: paint,
  },
  {
    title: "Tutor",
    icon: tutor,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];



const testimonials = [
  {
    testimonial:
      "As a customer, I was highly satisfied with the final results.<br /> The coloring and shading were on point, the lightning effect gave it an extra look and the overall figure looked simply flawless!<br />Can't wait for more!",
    name: "Yassine Sondes",
    designation: "Content Creator",
    link: "https://www.instagram.com/yassine.sondes/",
    image: yassine,
  },
  {
    testimonial:
      "Had the chance to get my favorite character (deadpool).<br /> The details & the paint job left me dumbfounded. Easy 10/10 for me. <br />Coming back for more for sure!",
    name: "Mehdi Wmd Tsujigiri",
    designation: "Rapper",
    link: "https://www.instagram.com/wmd_mehdi/",
    image: mehdi,
  },
  {
    testimonial:
      "A great experience overall.<br /> Nothing could have prepared me for the quality.<br />I was amazed by the attention to detail.<br /> Kudos to OZMO for his fantastic work!",
    name: "Ibrahim Lazrak",
    designation: "Developer",
    link: "https://rraigeki.github.io/IbrahimPortfolio/",
    image: raigewi,
  },
];

const projects = [
  
  {
    id: "fig2",
    name: "Sabre Tooth",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Sabre",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [sabre1,sabre2,sabre3],
  },
  {
    id: "mdl1",
    name: "Voldemort",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
      {
        name: "supabase",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: [vold1,
      vold2,
      vold3,
      vold4,],
  },

  {
    id:"fig3",
    name: "Omni Man",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Invincible",
        color: "yellow-text-gradient",
      },
      {
        name: "Omniman",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [omni1,omni2,omni3,omni4],
  },
  
  {
    id: "fig1",
    name: "Deadpool (Bust)",
    description:
      "Web-based </br>platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Deadpool",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [deadpool1, deadpool2, deadpool3,deadpool4],
  },
  
  
  {
    id: "mdl1",
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
      {
        name: "supabase",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: [tripguide],
  },
  {
    id: "mdl1",
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
      {
        name: "supabase",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: [tripguide],
  },
];

const models = [
  
  {
    id: "mdl1",
    name: "Spooder Man",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Tiriri",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [spiderman],
  },
  {
    id: "mdl1",
    name: "Guts",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Tiriri",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [guts],
  },
  {
    id: "mdl1",
    name: "Venom",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Tiriri",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [venom],
  },
  {
    id: "mdl1",
    name: "Kratos God Of War 3",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Tiriri",
        color: "yellow-text-gradient",
      },
      {
        name: "PlayStation",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [kratos_3],
  },
];
export { services, technologies, experiences, testimonials, projects , models };
