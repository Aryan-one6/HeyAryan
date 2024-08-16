import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

// New Code 

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar"; // Adjust the import path as needed
// import Tech from "./components/Tech"; // Adjust the import path as needed
// import Home from "./components/Home"; // Assuming you have a Home component

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tech" element={<Tech />} />
//         {/* Add other routes here as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
