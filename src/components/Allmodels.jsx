import React, { useState, useRef } from "react";
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
  creator, 
  description, 
  tags, 
  video 
}) => {
  const navigate = useNavigate(); 
  const videoRef = useRef(null);

  const handleClick = () => {
    navigate('/project-details', { state: { project: { name, creator, description, tags, video } } });
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); 
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
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
      </Tilt>
    </div>
  );
};

const Allmodels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 9;

  const filteredProjects = models.filter(project => {
    const projectNameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return projectNameMatch || tagMatch; 
  });

  const totalPages = Math.ceil(filteredProjects.length / modelsPerPage);
  const indexOfLastProject = currentPage * modelsPerPage;
  const indexOfFirstProject = indexOfLastProject - modelsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='relative z-0 bg-primary'>
      <div variants={textVariant()} className="mt-4"> 
        <p className={`${styles.sectionSubText}`}></p>
        <h2 className={`${styles.sectionHeadText}`}>Sculptures.</h2>
      </div>
      
      <input 
        type="text"
        placeholder="Search for Models .."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary w-full max-w-md"
      />

      <div className='mt-20 flex flex-wrap gap-7'>
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${project.name}-${currentPage}`} index={index} {...project} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`bg-black-100 text-white px-6 py-3 rounded-lg hover:bg-black-200 transition duration-300 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`bg-black-100 text-white px-6 py-3 rounded-lg hover:bg-black-200 transition duration-300 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Allmodels, "");
