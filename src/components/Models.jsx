import React,{useRef} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { models } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
}) => {

  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleClick = () => {
    navigate('/project-details', { state: { project: { name, description, tags, video } } });
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play video on hover
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video when not hovering
      videoRef.current.currentTime = 0; // Reset video to the start
    }
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
      className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full shadow-card'
      >
        <div
          className='relative w-full h-[230px] cursor-pointer'
          onClick={handleClick}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >       
        <video
            ref={videoRef}
            width="100%"
            height="auto"
            muted 
            playsInline 
            loop 
            style={{
              borderRadius:'15px',
              objectFit: 'cover',
            }}
          >
          <source src={video[0]} type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
        </div>

        <div className='mt-3'>
          <h3 className='text-white font-bold text-[22px]'>{name}</h3>
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


const Models = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/allmodels"); // Redirect to AllModels page
  };
  return (  
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>3D Models.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {models.slice(0,3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAll}
          className="bg-black-100 text-white px-6 py-3 rounded-lg hover:bg-black-200 transition duration-300"
        >
          View All Models
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Models, "models");
