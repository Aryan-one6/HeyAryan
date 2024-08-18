import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa"; // Import the checkmark icon
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const pricingPlans = [
  {
    title: "Single Page Website",
    price: "Start from ₹10k",
    description:
      "Perfect for personal portfolios or simple landing pages. A clean, responsive single-page website tailored to your needs.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
  },
  {
    title: "Dynamic Website",
    price: "Start from ₹18k",
    description:
      "Ideal for businesses needing multi-page websites with dynamic content. Custom CMS integration for easy updates.",
    features: ["Content Management", "Customizable Design", "SEO & Analytics"],
  },
  {
    title: "E-commerce Website",
    price: "Start from ₹30k",
    description:
      "A complete solution for online stores. Fully-featured e-commerce platform with secure payment integration.",
    features: ["Product Management", "Secure Payments", "Custom Design", "SEO & Marketing Tools"],
  },
  {
    title: "Business Marketing",
    price: "Start from ₹11k",
    description:
      "Boost your online presence with our tailored marketing services. Ideal for businesses looking to grow their customer base.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Email Marketing"],
  },
];

const PricingCard = ({ title, price, description, features, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between w-full sm:w-[300px] transition-transform duration-300 hover:scale-105 shadow-xl" // Added shadow-xl for a stronger box shadow
  >
    {/* Header with adjusted font size */}
    <div className="bg-[#5220bd] text-white text-center p-4">
      <h3 className="text-[20px] font-bold">{title}</h3>
      <p className="text-[18px] font-semibold mt-2">{price}</p>
    </div>
    
    {/* Dark content area */}
    <div className="p-6 text-center">
      <p className="text-gray-400 mb-4 p-2 font-normal text-[12px]">{description}</p>
      <ul className="list-inside list-none space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-gray-200 flex items-center">
            <FaCheck className="text-green-400 mr-2" /> {/* Checkmark icon */}
            <span className="whitespace-normal">{feature}</span> {/* Ensures normal text wrapping */}
          </li>
        ))}
      </ul>
    </div>

    {/* Full-width button */}
    <div className="p-6">
      <a
        href="https://wa.me/+919354249191/" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#915EFF] text-white py-2 px-4 rounded-lg hover:bg-[#7a49d8] transition-colors duration-200 w-full block text-center"
      >
        Get Started
      </a>
    </div>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="mt-10 px-2.5 sm:px-0"> {/* Add padding on mobile mode */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Our Pricing
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Choose Your Plan.
        </h2>
      </motion.div>

      <div className="mt-20
      
      
      ml-5 mr-5 pt-2.5 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-10 mt-2.5">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} index={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
