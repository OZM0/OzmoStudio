import React, { useState } from "react";
import Tilt from "react-tilt";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from './Navbar';
import Footer from './Footer';

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
      </Tilt>
    </div>
  );
};

const Allworks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter(project => {
    const projectNameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return projectNameMatch || tagMatch; 
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
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
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>
      
      <input 
        type="text"
        placeholder="Search for projects .."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary w-full max-w-md"
      />

      <div className='mt-20 flex flex-wrap gap-7'>
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
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

export default SectionWrapper(Allworks, "");
