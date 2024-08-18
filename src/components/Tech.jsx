import React, { useState } from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const [activeTech, setActiveTech] = useState(null);

  const handleTouchStart = (technologyName) => {
    setActiveTech(technologyName);
  };

  const handleTouchEnd = () => {
    setActiveTech(null);
  };

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
            className={`w-28 h-28 flex justify-center items-center rounded-full bg-transparent p-5 transition-transform duration-100 ${
              activeTech === technology.name ? "scale-110" : ""
            }`}
            whileHover={{
              rotate: 720, // Spin on hover for desktop
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(145, 94, 255, 1)" 
            }} // Spin and increase glow on hover
            onTouchStart={() => handleTouchStart(technology.name)}
            onTouchEnd={handleTouchEnd}
            onClick={() => handleTouchStart(technology.name)} // Apply scale and spin on click for mobile
            animate={{
              rotate: activeTech === technology.name ? 720 : 0, // Spin effect
            }}
            transition={{ 
              duration: 1.5, // Duration for spin
              ease: "easeInOut", // Smooth transition
            }}
            style={{ 
              boxShadow: "0px 0px 5px rgba(145, 94, 255, 0.3)", // Initial light effect
            }}
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
