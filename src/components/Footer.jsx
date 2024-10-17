import React from 'react';
import {FaInstagram, FaFacebook, FaEnvelope} from 'react-icons/fa';

const Footer = () =>{
    return (

        <footer className="bg-primary text-white py-8 mt-10"> 
            <div className="container mx-auto flex flex-col justify-between items-center">
            <div className="flex space-x-6">
            <a 
            href="https://www.instagram.com/ozmo__studio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>

          <a 
            href="https://www.facebook.com/profile.php?id=61553603334668" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="mailto:ozmotion@gmail.com" 
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaEnvelope size={24} />
          </a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;