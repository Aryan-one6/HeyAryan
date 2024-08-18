import React, { useState } from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const [clickedTech, setClickedTech] = useState(null);

  // Function to determine if the device is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div id="tech">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>
          My Skills
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20 mb-20">
        {technologies.map((technology) => (
          <motion.div 
            key={technology.name} 
            className={`w-28 h-28 flex justify-center items-center rounded-full bg-transparent p-5 transition-transform duration-300 ${
              clickedTech === technology.name ? "scale-110" : ""
            }`}
            whileHover={{ 
              rotate: 720, 
              scale: 1.1, 
              boxShadow: isMobile ? "0px 0px 60px rgba(145, 94, 255, 1)" : "0px 0px 40px rgba(145, 94, 255, 1)" 
            }} // Spin and increase glow on hover
            onClick={() => setClickedTech(technology.name)} // Apply scale on click for mobile
            style={{ 
              boxShadow: "0px 0px 10px rgba(145, 94, 255, 0.3)", 
              transition: isMobile ? "transform 2s, box-shadow 1.5s" : "transform 1s, box-shadow 1s" 
            }} // Adjust transition for mobile
          >
            <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");



// import React from "react";
// import { motion } from "framer-motion";

// import { technologies } from "../constants";
// import { styles } from "../styles";
// import { textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

// const Tech = () => {
//   return (
//     <div id="tech">
//       <motion.div variants={textVariant()} className="text-center">
//         <p className={`${styles.sectionSubText}`}>
//           My Skills
//         </p>
//         <h2 className={`${styles.sectionHeadText}`}>
//           Technologies.
//         </h2>
//       </motion.div>

//       <div className="flex flex-row flex-wrap justify-center gap-10 mt-20 mb-20">
//         {technologies.map((technology) => (
//           <motion.div 
//             key={technology.name} 
//             className="w-28 h-28 flex justify-center items-center rounded-full bg-transparent p-5 transition-transform duration-30 hover:scale-105" 
//             whileHover={{ rotate: 720, boxShadow: "0px 0px 40px rgba(145, 94, 255, 1)" }} // Spin and increase glow on hover
//             style={{ boxShadow: "0px 0px 10px rgba(145, 94, 255, 0.3)" }} // Reduced initial light effect
//             transition={{ duration: 1 }} // Spin over 1 second
//           >
//             <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
