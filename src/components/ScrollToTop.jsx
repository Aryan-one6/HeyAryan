import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow up icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#915EFF] text-white hover:bg-[#7a49d8] transition-colors duration-300"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
