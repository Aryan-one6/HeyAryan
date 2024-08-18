import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between items-center sm:items-center">
        
        {/* Copyright Section */}
        <p className="text-sm text-gray-400 sm:order-1 order-2 sm:mt-0 mt-4">
          &copy; {new Date().getFullYear()} HeyAryan. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 sm:order-2 order-1">
          <a
            href="https://www.linkedin.com/in/naresh-parashar-a34676213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aryan-one6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+919354249191/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/aryan_one6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
