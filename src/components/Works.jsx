import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    // Navigate to the details page with project data
    navigate('/project-details', { state: { project: { name, description, tags, image } } });
  };

  return (
    
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
      >
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full shadow-card'>
      
        <div
          className='relative w-full h-auto cursor-pointer' // Add cursor-pointer for clarity
          onClick={handleClick} // Add click handler here to trigger navigation
        >
          <img
            src={image[0]}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/allworks"); // Redirect to Allworks page
    window.scrollTo(0, 0); // Scroll to top
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects highlight my expertise in 3D printing, painting, and custom model design. 
          Each project is a real-world example of my skills, showcasing my ability to bring creative ideas to life with precision and craftsmanship. 
          I’ve included descriptions of each project, with links to images. 
          These projects demonstrate my capability to solve complex design challenges, 
          and deliver custom solutions that meet diverse client needs.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.slice(0,3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAll}
          className="bg-black-100 text-white px-6 py-3 rounded-lg hover:bg-black-200 transition duration-300"
        >
          View All Projects
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
