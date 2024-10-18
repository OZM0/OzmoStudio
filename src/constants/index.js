import { invalidate } from "@react-three/fiber";
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

  //Images for Projects
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
  magneto1,
  magneto2,
  magneto3,
  magneto4,
  gandalf1,
  gandalf2,
  gandalf3,
  goku1,
  goku2,
  goku3,
  goku5,
  goku4,
  spider3,
  spider4,
  spider5,
  spider6,
  spider7,
  kratos_rag1,
  kratos_rag2,
  kratos_rag3,
  greenlantern1,
  greenlantern2,
  greenlantern3,
  greenlantern4,
  greenlantern5,
  sinestro1,
  sinestro2,
  sinestro3,
  kilowog1,
  kilowog3,
  kilowog4,
  kilowog2,
  kilowog5,

  //Videos for 3D Models
  spiderman,
  venom,
  wolverine_ww,
  kratos_3,
  darkside,
  thanos_comic,
  omni_man,
  invensible,
  michael_angelo,
  donatello,
  raphael,
  leonardo,
  splinter,
  hulk_avangers,
  cyclops,
  wolverine_sabretooth,
  bane_vs_batman,
  coming_soon,
  
  

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
    id: "sabre_wolverin_statue ",
    name: "SabreTooth vs Wolverine",
    description:
      "This project involved 3D printing and hand-painting a dynamic battle scene between two iconic characters, Sabretooth and Wolverine. The statue captures the intensity of their clash with intricate details and lifelike textures. Printed with precision and meticulously painted, this piece showcases the fierce rivalry, bringing the characters to life with bold colors and expert shading. A true collector’s item for fans of these legendary foes.",
    tags: [
      {
        name: "Sabretooth",
        color: "yellow-text-gradient",
      },
      {
        name: "X-Men",
        color: "yellow-text-gradient",
      },
      {
        name: "Wolverine",
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
    id: "voldemort",
    name: "Lord Voldemort with Nagini (Bust)",
    description:
      "This project features a detailed 3D-printed bust of Lord Voldemort from Harry Potter, accompanied by his serpent, Nagini. The intricate sculpt captures the dark essence of the character, from his menacing expression to the lifelike scales of the snake. Expertly printed and hand-painted, the piece highlights subtle textures and contrasts, bringing the sinister presence of the Dark Lord to life in an unforgettable display.",
    tags: [
      {
        name: "Voldemort",
        color: "yellow-text-gradient",
      },
      {
        name: "Harry Potter",
        color: "yellow-text-gradient",
      },
      {
        name: "Lord",
        color: "yellow-text-gradient",
      },
    ],
    image: [vold1,
      vold2,
      vold3,
      vold4,],
  },

  {
    id:"omni_man",
    name: "Omni Man",
    description:
      "This project showcases a 3D-printed and meticulously hand-painted statue of Omni-Man from the Invincible series. The statue captures the character's imposing presence and powerful stance, highlighting his signature red and white costume with crisp details and vibrant colors. With precise printing and expert shading, this piece brings the unstoppable Viltrumite to life, making it a must-have for fans of the series.",
    tags: [
      {
        name: "Invincible",
        color: "yellow-text-gradient",
      },
      {
        name: "Omni Man",
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
    id: "deadpool_bust",
    name: "Deadpool (Bust)",
    description:
      "This project features a 3D-printed bust of the wisecracking anti-hero, Deadpool. The bust captures his signature mask, complete with textured details and dynamic shading. Expertly printed and hand-painted, the piece brings out the vibrant red and black of Deadpool's iconic costume, along with his playful yet menacing expression. A fun and bold display for any fan of the Merc with a Mouth.",
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
    id: "magneto",
    name: "Magneto",
    description:
      "This project showcases a 3D-printed full statue of Magneto in his classic red and violet costume. Capturing his powerful stance and fierce expression, the statue highlights every detail from his signature helmet to the flowing cape, exuding his mastery of magnetism. Expertly printed and hand-painted, the vibrant colors and precise shading bring this iconic X-Men character to life, making it a standout piece for any collection.",
    tags: [
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Magneto",
        color: "yellow-text-gradient",
      },
      {
        name: "X-Men",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [magneto4,magneto2,magneto3,magneto1,],
  },
  {
    id: "goku",
    name: "Son-Goku (Custom)",
    description:
      "This project features a custom 3D-printed statue of Son Goku from Dragon Ball, capturing the character’s energy and fierce determination. Depicted in his iconic orange and blue gi, the statue showcases Goku in a dynamic pose, ready for battle. Expertly painted, the vibrant colors and detailed shading bring out the strength and intensity of the Saiyan warrior. This custom piece is perfect for any Dragon Ball fan looking to add a powerful display to their collection.",
    tags: [
      {
        name: "Son-Goku",
        color: "yellow-text-gradient",
      },
      {
        name: "Dragon Ball",
        color: "yellow-text-gradient",
      },
      {
        name: "Manga",
        color: "yellow-text-gradient",
      },
    ],
    image: [goku2,goku1,goku3,goku4,goku5],
  },
  {
    id: "gandalf",
    name: "Gandalf (Bust)",
    description:
      "This project features a 3D-printed bust of Gandalf the Grey from The Lord of the Rings. The bust captures the wisdom and strength of the beloved wizard, with intricate details in his flowing beard, staff, and iconic hat. Hand-painted with expert precision, the subtle shading and weathered textures bring Gandalf’s timeless presence to life, making this a must-have piece for any Middle-earth fan.",
    tags: [
      {
        name: "Gandalf",
        color: "yellow-text-gradient",
      },
      {
        name: "The lord of the rings",
        color: "yellow-text-gradient",
      },
      {
        name: "Filmserie",
        color: "yellow-text-gradient",
      },
    ],
    image: [gandalf1,gandalf2,gandalf3],
  },
  {
    id: "scarlet_spider",
    name: "Scarlet Spiderman",
    description:
      "This project showcases a 3D-printed statue of the Scarlet Spider, capturing the agility and intensity of the beloved Spider-Man clone. Wearing his signature red suit with the blue hoodie, the statue emphasizes his dynamic pose and intricate web-slinging details. Expertly printed and hand-painted, the vibrant colors and precise shading bring the Scarlet Spider to life, making this piece a standout for any Spider-Man fan.",
    tags: [
      {
        name: "Spiderman",
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
    image: [spider3,spider4,spider5,spider6,spider7],
  },
  {
    id: "kratos_ragnarök",
    name: "Kratos Ragnarök",
    description:
      "This project features a 3D-printed statue of Kratos from God of War: Ragnarök. The statue captures the raw power and stoic determination of the legendary Spartan, adorned in his battle-worn armor and wielding his iconic Leviathan Axe. Every detail, from the intricate textures of his beard and scars to the fine craftsmanship of his weapons, has been meticulously hand-painted. The statue brings the fierce spirit of Kratos to life, making it an impressive centerpiece for any God of War fan.",
    tags: [
      {
        name: "Kratos",
        color: "yellow-text-gradient",
      },
      {
        name: "God of War",
        color: "yellow-text-gradient",
      },
      {
        name: "Ragnarök",
        color: "yellow-text-gradient",
      },
    ],
    image: [kratos_rag1,kratos_rag2,kratos_rag3],
  },
  {
    id: "green_lantern",
    name: "Green Lantern",
    description:
      "This project showcases a 3D-printed statue of the Green Lantern, capturing the heroic essence of this iconic DC superhero. Depicted in his vibrant green and black uniform, the statue features Hal Jordan in a dynamic pose, with his power ring glowing bright. Expertly printed and hand-painted, the intricate details highlight the emblem and textures of his suit, bringing the character’s bravery and determination to life. This piece is a perfect addition for any fan of the Green Lantern Corps.",
    tags: [
      {
        name: "Green Lantern",
        color: "yellow-text-gradient",
      },
      {
        name: "DC",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [greenlantern4,greenlantern2,greenlantern3,greenlantern1,greenlantern5],
  },
  {
    id: "sinestro",
    name: "Sinestro",
    description:
      "This project features a 3D-printed statue of Sinestro, one of the most formidable villains in the DC universe. Captured in his iconic yellow and black uniform, the statue highlights his menacing stance and commanding presence. Every detail, from the intricate emblem on his chest to the expression of power on his face, has been meticulously hand-painted. The vibrant colors and expert shading emphasize his mastery of fear and the power of the Sinestro Corps, making this piece a striking addition for any Green Lantern or DC fan.",
    tags: [
      {
        name: "Sinestro",
        color: "yellow-text-gradient",
      },
      {
        name: "DC",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [sinestro1,sinestro2,sinestro3],
  },
  {
    id: "kilowog",
    name: "Kilowoge",
    description:
      "This project showcases a 3D-printed statue of Kilowog, the fierce and beloved member of the Green Lantern Corps. Depicted in his vibrant green and black uniform, the statue captures Kilowog's muscular build and imposing stature, reflecting his role as a trainer and warrior. Every detail, from the textures of his alien features to the intricate design of his power ring, has been expertly hand-painted. This dynamic piece embodies Kilowog’s strength and loyalty, making it a fantastic addition for any Green Lantern fan or collector.",
    tags: [
      {
        name: "Kilowog",
        color: "yellow-text-gradient",
      },
      {
        name: "DC",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    image: [kilowog1,kilowog3,kilowog4,kilowog2,kilowog5],
  },
];

const models = [
  
  {
    id: "spider_man_vs_hulk",
    name: "Spider Man vs Hulk",
    creator: "sculpted by ZEZ Studio",
    description:
      "This 3D model showcases an intense action scene where Spider-Man is dynamically posed above the Hulk, mid-leap or in a high-flying kick. The Hulk is lying on his back, hands outstretched as if he’s just been knocked down, but still displaying raw power. Spider-Man's agile figure contrasts with the Hulk's massive, muscular form, creating a stunning moment of confrontation. The composition emphasizes the dramatic struggle between Spider-Man’s speed and Hulk’s sheer force, making for a thrilling display when painted and printed.",
    tags: [
      {
        name: "Spider Man",
        color: "yellow-text-gradient",
      },
      {
        name: "Hulk",
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
    id: "wolverine_ww2",
    name: "Wolverine WWII",
    creator: "sculpted by ZEZ Studio",
    description:
      "This 3D model portrays Wolverine during World War II, equipped with his bone claws, which are extended in a battle-ready stance. The setting is a war-torn battlefield, with debris and signs of conflict surrounding him. The model highlights Wolverine's primal power and indestructible spirit, perfectly blending historical grit with his raw mutant strength.",
    tags: [
      {
        name: "Wolverine",
        color: "yellow-text-gradient",
      },
      {
        name: "X-Men",
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
    video: [wolverine_ww],
  },
  {
    id: "kratos_gow3",
    name: "Kratos God Of War 3",
    creator: "sculpted by ZEZ Studio",
    description:
      "This 3D model depicts Kratos from God of War 3 in an intense, battle-ready stance. He is sculpted with his muscular physique, adorned with his iconic Blades of Exile, chains wrapped around his forearms. His expression is fierce, capturing the rage and determination that define him. Kratos is wearing his Spartan warrior attire, with detailed armor pieces and scars visible from past battles. The model embodies his raw power and the god-slaying intensity from the game, making it a striking representation of the legendary Ghost of Sparta.",
    tags: [
      {
        name: "Kratos",
        color: "yellow-text-gradient",
      },
      {
        name: "God of War",
        color: "yellow-text-gradient",
      },
    ],
    video: [kratos_3],
  },
  {
    id: "venom",
    name: "Venom",
    creator: "sculpted by ZEZ Studio",
    description:
      "This 3D model showcases Venom in all his terrifying glory. The hulking, muscular figure stands in an aggressive, predatory pose, with his signature sharp teeth bared and long tongue lashing out. His body is covered in the iconic black symbiote, with white spider-like patterns stretching across his chest. The dynamic pose captures Venom's ferocity, as if he's ready to strike or leap, emphasizing his alien strength and monstrous nature. It's a perfect model for capturing Venom's menacing presence and chaotic energy.",
    tags: [
      {
        name: "Venom",
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
    id: "darkside",
    name: "Darkside",
    creator: "sculpted by ZEZ Studio",
    description:
      "This 3D model features Darkseid, the fearsome tyrant from DC Comics, in an imposing and menacing stance. His massive, muscular form is clad in his signature dark armor. The model captures his dominating presence, with sharp, angular features and a cold, calculated expression, embodying his role as a nearly invincible cosmic conqueror. Darkseid’s powerful aura and commanding posture make this model a striking representation of one of DC's most iconic villains.",
    tags: [
      {
        name: "Darkside",
        color: "yellow-text-gradient",
      },
      {
        name: "DC",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [darkside],
  },
  {
    id: "thanos_Comic",
    name: "Thanos Comic Version",
    creator: "sculpted by ZEZ Studio",
    description:
      "This detailed 3D model depicts Thanos in his classic comic book form, seated majestically on his iconic throne. With his imposing stature, he features his signature purple skin, pronounced chin, and a fierce expression that conveys his formidable presence. Clad in ornate golden armor, this figure captures the intricacies of his powerful look, including the Infinity Gauntlet prominently displayed on one hand. This model is perfect for printing and painting, making it a striking addition to any Marvel collection, showcasing the Mad Titan in a moment of contemplation and authority.",
    tags: [
      {
        name: "Thanos",
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
    video: [thanos_comic],
  },
  {
    id: "omni_man",
    name: "Omni Man",
    creator: "sculpted by ZEZ Studio",
    description:
      "This striking 3D model captures Omni-Man, the powerful superhero from the Invincible comics, in a dynamic pose that embodies his strength and determination. With intricately sculpted details, including his distinctive mustache and flowing cape, this figure represents the duality of his character—both protector and antagonist. Perfect for printing and painting, this Omni-Man model makes a bold statement in any comic book collection.",
    tags: [
      {
        name: "Omni Man",
        color: "yellow-text-gradient",
      },
      {
        name: "Invincible",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [omni_man],
  },
  {
    id: "invincible",
    name: "Invincible",
    creator: "sculpted by ZEZ Studio",
    description:
      "This dynamic 3D model features Invincible, the young superhero and son of Omni-Man from the Invincible comics. Captured in a powerful stance, he wears his iconic blue and yellow suit. The model highlights his youthful energy and determination, with details that reflect his muscular build and distinctive facial features, including his signature short, dark hair. This figure embodies the essence of a hero in training, ready to confront challenges and embrace his destiny. Perfect for printing and painting, this Invincible model is a must-have for fans of the series, showcasing the potential of the next generation of heroes.",
    tags: [
      {
        name: "Invincible",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [invensible],
  },
  {
    id: "hulk_avangers",
    name: "Hulk from the avengers",
    creator: "Wicked",
    description:
      "This dynamic 3D model features the Hulk, the incredible powerhouse of the Avengers. Captured in a dramatic pose, he showcases his massive, muscular physique and distinctive green skin, exuding raw strength and energy. The model highlights his iconic tattered purple shorts and fierce expression, embodying the duality of Bruce Banner and his alter ego. With intricately sculpted details that emphasize his bulging muscles and dynamic stance, this figure represents the embodiment of fury and power. Perfect for printing and painting, this Hulk model is an essential addition for any Marvel collection, celebrating the character's iconic status as one of the mightiest heroes in the universe.",
    tags: [
      {
        name: "Hulk",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "Avangers",
        color: "yellow-text-gradient",
      },
    ],
    video: [hulk_avangers],
  },
  {
    id: "michelangelo",
    name: "TMNT Michelangelo",
    creator: "sculpted by ZEZ Studio",
    description:
      "This lively 3D model captures Michelangelo, the fun-loving, pizza-obsessed Ninja Turtle from the Teenage Mutant Ninja Turtles franchise. Positioned in an energetic pose, he showcases his signature orange bandana and wristbands, ready for action. The model features detailed sculpting that highlights his playful expression and vibrant personality, along with his iconic nunchaku at the ready. With a sculpt that emphasizes his agile stance and athletic build, this Michelangelo figure embodies the spirit of camaraderie and adventure. Perfect for printing and painting, this model is a fantastic addition to any TMNT collection, celebrating the beloved character’s charm and enthusiasm.",
    tags: [
      {
        name: "Michelangelo",
        color: "yellow-text-gradient",
      },
      {
        name: "TMNT",
        color: "yellow-text-gradient",
      },
      {
        name: " Turtles",
        color: "yellow-text-gradient",
      },
      {
        name: "Ninja",
        color: "yellow-text-gradient",
      },
    ],
    video: [michael_angelo],
  },
  {
    id: "donatello",
    name: "TMNT Donatello",
    creator: "sculpted by ZEZ Studio",
    description:
      "This detailed 3D model showcases Donatello, the genius inventor and tech-savvy Ninja Turtle from the Teenage Mutant Ninja Turtles franchise. Captured in a thoughtful pose, he dons his signature purple bandana and wristbands, embodying his unique blend of intellect and combat skills. The model highlights his signature bo staff, which he wields with confidence, along with intricate details that reflect his technical gadgets and equipment. With a design that emphasizes his clever expression and agile stance, this Donatello figure represents the heart and brains of the team. Perfect for printing and painting, this model is an essential addition for TMNT fans, celebrating Donatello’s innovative spirit and adventurous nature.",
    tags: [
      {
        name: "Donatello",
        color: "yellow-text-gradient",
      },
      {
        name: "TMNT",
        color: "yellow-text-gradient",
      },
      {
        name: " Turtles",
        color: "yellow-text-gradient",
      },
      {
        name: "Ninja",
        color: "yellow-text-gradient",
      },
    ],
    video: [donatello],
  },
  {
    id: "raphael",
    name: "TMNT Raphael",
    creator: "sculpted by ZEZ Studio",
    description:
      "This striking 3D model features Raphael, the fierce and passionate Ninja Turtle from the Teenage Mutant Ninja Turtles franchise. Captured in an intense pose, he showcases his iconic red bandana and knuckle wraps, ready for battle. The model highlights his muscular build and determined expression, embodying his tough, no-nonsense attitude. With his signature sai weapons poised for action, this figure captures Raphael’s rebellious spirit and loyalty to his brothers. Perfect for printing and painting, this Raphael model is a must-have for TMNT fans, celebrating the character’s strength and complexity as the team’s hot-headed protector.",
    tags: [
      {
        name: "Raphael",
        color: "yellow-text-gradient",
      },
      {
        name: "TMNT",
        color: "yellow-text-gradient",
      },
      {
        name: " Turtles",
        color: "yellow-text-gradient",
      },
      {
        name: "Ninja",
        color: "yellow-text-gradient",
      },
    ],
    video: [raphael],
  },
  {
    id: "leonardo",
    name: "TMNT Leonardo",
    creator: "sculpted by ZEZ Studio",
    description:
      "This impressive 3D model features Leonardo, the disciplined and courageous leader of the Teenage Mutant Ninja Turtles. Portrayed in a dynamic action pose, he wears his iconic blue bandana and carries his twin katanas, poised for combat. The model showcases his athletic build and focused expression, reflecting his commitment to training and mastery of martial arts. With intricate details that capture the essence of his character, this figure embodies Leonardo’s determination, honor, and responsibility as the team’s guiding force. Perfect for printing and painting, this Leonardo model is an essential addition for TMNT fans, celebrating the bravery and leadership of the beloved turtle.",
    tags: [
      {
        name: "Leonardo",
        color: "yellow-text-gradient",
      },
      {
        name: "TMNT",
        color: "yellow-text-gradient",
      },
      {
        name: " Turtles",
        color: "yellow-text-gradient",
      },
      {
        name: "Ninja",
        color: "yellow-text-gradient",
      },
    ],
    video: [leonardo],
  },
  {
    id: "splinter",
    name: "TMNT Master Splinter",
    creator: "sculpted by ZEZ Studio",
    description:
      "This elegant 3D model captures Master Splinter, the wise and skilled mentor of the Teenage Mutant Ninja Turtles. Portrayed in a serene yet authoritative pose, he showcases his distinctive gray fur, traditional robes, and a thoughtful expression that reflects his deep wisdom and experience. The model features intricate details, including his cane and the subtle folds of his clothing, emphasizing his role as both a teacher and a martial arts master. With a posture that conveys grace and strength, this figure embodies the spirit of discipline and guidance. Perfect for printing and painting, this Master Splinter model is a must-have for TMNT fans, celebrating the character’s enduring legacy as the turtles' beloved sensei.",
    tags: [
      {
        name: "Master Splinter",
        color: "yellow-text-gradient",
      },
      {
        name: "TMNT",
        color: "yellow-text-gradient",
      },
      {
        name: " Turtles",
        color: "yellow-text-gradient",
      },
      {
        name: "Ninja",
        color: "yellow-text-gradient",
      },
    ],
    video: [splinter],
  },
  {
    id: "cyclops",
    name: "Cyclops",
    creator: "Wicked",
    description:
      "This striking 3D model captures Cyclops, the disciplined leader of the X-Men and one of Marvel's most iconic mutants. Portrayed in a dynamic action pose, he dons his signature blue and yellow uniform, complete with the emblematic X on his chest. The model features intricate details, including his distinctive visor, which channels his powerful optic blasts. With a strong, focused expression, this figure embodies Cyclops’ determination and leadership qualities. Perfect for printing and painting, this Cyclops model is a must-have for X-Men fans, celebrating the character's legacy as a key figure in the fight for mutant rights and equality.",
    tags: [
      {
        name: "Cyclops",
        color: "yellow-text-gradient",
      },
      {
        name: "Marvel",
        color: "yellow-text-gradient",
      },
      {
        name: "X-Men",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [cyclops],
  },
  {
    id: "wolverine_vs_sabretooth",
    name: "Wolverine vs Sabretooth",
    creator: "Wicked",
    description:
      "This dynamic 3D model captures the intense rivalry between two iconic characters from the X-Men universe: Wolverine and Sabretooth. Set in a dramatic confrontation, Wolverine is depicted in his classic yellow and leather brown costume, complete with his adamantium claws extended and a fierce expression of determination. Opposite him, Sabretooth is portrayed in his menacing form, showcasing his primal strength and sharp claws, with a snarl that reflects his ferocity. The model emphasizes the tension of their epic battle, featuring intricate details that highlight their muscular builds and distinctive features. Perfect for printing and painting, this Wolverine vs. Sabretooth model is a must-have for fans of the franchise, celebrating the enduring conflict between these two formidable mutants.",
    tags: [
      {
        name: "Wolverine",
        color: "yellow-text-gradient",
      },
      {
        name: "Sabretooth",
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
    video: [wolverine_sabretooth],
  },
  {
    id: "bane_vs_batman",
    name: "Bane vs Batman",
    creator: "Wicked",
    description:
      "This striking 3D model captures the intense moment from the comics where Bane breaks Batman's back. Bane's powerful physique is intricately detailed, showcasing his menacing expression and iconic venom-enhanced strength. Batman, depicted in a dramatic pose, conveys a sense of vulnerability and determination. The model highlights the raw emotion of the scene, making it a perfect centerpiece for any collection. Ideal for printing and painting, it invites customization to bring this iconic showdown to life!",
    tags: [
      {
        name: "Bane",
        color: "yellow-text-gradient",
      },
      {
        name: "Batman",
        color: "yellow-text-gradient",
      },
      {
        name: "DC",
        color: "yellow-text-gradient",
      },
      {
        name: "Comics",
        color: "yellow-text-gradient",
      },
    ],
    video: [bane_vs_batman],
  },
  

  // coming soon
  {
    id: "Other_Models_Request",
    name: "Exciting Portfolio Expansion Coming Soon!",
    creator: "The best of the best Artists",
    description:
      "We are excited to announce that our portfolio will soon be expanding! With over 1,000 unique 3D models from talented studios and artists, we are dedicated to bringing you an even broader selection of printed and painted designs in the near future. Stay tuned for updates as we continue to enhance our offerings, providing you with more options to inspire your creativity and elevate your projects. We appreciate your support and look forward to unveiling these new additions. Thank you for being a part of our journey!",
    tags: [
      {
        name: "3D Printing",
        color: "yellow-text-gradient",
      },
      {
        name: "Painting",
        color: "yellow-text-gradient",
      },
      {
        name: "Transform imagination into reality",
        color: "yellow-text-gradient",
      },
    ],
    video: [coming_soon],
  },
];
export { services, technologies, testimonials, projects , models };
