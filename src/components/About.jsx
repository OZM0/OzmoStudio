import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full yellowish-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to OZMO Studio, your one-stop destination for all things 
        3D printing, painting, and custom model design! 
        Whether you're a hobbyist, an artist, or someone with a unique project in mind, 
        we specialize in bringing your ideas to life through 
        high-quality 3D printing and expert painting services.
        

        <br />

      <div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <h2 className='mb-4'>At our studio, we offer a range of services:</h2>
        
        <ul>
          <li className="mb-4">
            <strong className='text-black-200 text-[19px]'>3D Printing &nbsp;:</strong> &nbsp; From intricate figurines to large-scale models, we use cutting-edge technology to create highly detailed prints that match your vision.
          </li>
          <li className="mb-4">
            <strong className='text-black-200 text-[19px]'>Custom Projects &nbsp;:</strong> &nbsp; Whether it’s a special commission or a personal project, we collaborate with you to craft bespoke models tailored to your needs.
          </li>
          <li className="mb-4">
            <strong className='text-black-200 text-[19px]'>Model Painting &nbsp;:</strong> &nbsp; Our skilled artists provide professional painting services, adding depth and personality to your models with precision and creativity.
          </li>
          <li className="mb-4">
            <strong className='text-black-200 text-[19px]'>Workshops & Tutorials &nbsp;:</strong> &nbsp; We also offer hands-on classes and tutorials, guiding you through the process of 3D printing, painting techniques, and more—perfect for beginners and experienced creators alike.
          </li>
        </ul>
      </div>
      </motion.p>
      
      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
