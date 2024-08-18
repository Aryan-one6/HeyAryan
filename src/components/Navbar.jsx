import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp,  FaDownload } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import myCV from "../assets/my_cv.pdf"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  // Define the sequence of nav items
  const allNavLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "tech", title: "Tech" },
    { id: "pricing", title: "Pricing" },
    { id: "projects", title: "Projects" },
    { id: "testimonials", title: "What People Say" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.toggle-btn')) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-25 h-12 object-contain' />
        </Link>

        {/* Full menu hidden on md and smaller screens */}
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {allNavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu visible on md and smaller screens */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain toggle-btn'
            onClick={() => setToggle(!toggle)}
          />

          <div
            ref={sidebarRef}
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed top-0 left-0 w-[250px] h-full bg-gray-900 p-6 z-20 transition-transform transform ${
              toggle ? "translate-x-0" : "-translate-x-full"
            } flex-col justify-between`}
          >
            <div>
              {/* Logo at the top, left-aligned with a bottom border */}
              <Link
                to='/'
                className='flex items-center justify-start mb-6 pb-4 border-b border-gray-700'
                onClick={() => {
                  setActive("");
                  setToggle(false);
                  window.scrollTo(0, 0);
                }}
              >
                <img src={logo} alt='logo' className='w-35 h-10 object-contain' />
              </Link>

              {/* Stacked menu items below the logo */}
              <ul className='list-none flex flex-col gap-4'>
                {allNavLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-gray-300"
                    } text-left hover:text-[#915EFF] transition-colors duration-200`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social icons at the bottom */}
            <div className='flex justify-start gap-4 mt-6'>
              <a href='https://www.linkedin.com/in/naresh-parashar-a34676213/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-2xl hover:text-[#0077B5] transition-colors duration-200' />
              </a>
              <a href='https://github.com/Aryan-one6/' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl hover:text-[#333] transition-colors duration-200' />
              </a>
              <a href='https://instagram.com/Aryan_one6/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-white text-2xl hover:text-[#E4405F] transition-colors duration-200' />
              </a>
              <a href='https://wa.me/+919354249191' target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-white text-2xl hover:text-[#25D366] transition-colors duration-200' />
              </a>
              <a href={myCV} download target='_blank' rel='noopener noreferrer'>
                <FaDownload className='text-white text-2xl sm:text-2xl hover:text-[#915EFF] transition-colors duration-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
