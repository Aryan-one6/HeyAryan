import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  // Adding new menu items
  const additionalNavLinks = [
    { id: "tech", title: "Tech" },
    { id: "projects", title: "Projects" },
    { id: "what-people-say", title: "What People Say" }
  ];

  const allNavLinks = [...navLinks, ...additionalNavLinks];

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
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
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
            className='w-[28px] h-[28px] object-contain'
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
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-2xl hover:text-[#0077B5] transition-colors duration-200' />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl hover:text-[#333] transition-colors duration-200' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-white text-2xl hover:text-[#E4405F] transition-colors duration-200' />
              </a>
              <a href='https://wa.me' target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-white text-2xl hover:text-[#25D366] transition-colors duration-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
