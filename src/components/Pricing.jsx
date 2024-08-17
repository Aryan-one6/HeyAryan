import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const pricingPlans = [
  {
    title: "Single Page Website",
    price: "$299",
    description:
      "Perfect for personal portfolios or simple landing pages. A clean, responsive single-page website tailored to your needs.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
  },
  {
    title: "Dynamic Website",
    price: "$799",
    description:
      "Ideal for businesses needing multi-page websites with dynamic content. Custom CMS integration for easy updates.",
    features: ["Content Management System", "Customizable Design", "SEO & Analytics"],
  },
  {
    title: "E-commerce Website",
    price: "$1299",
    description:
      "A complete solution for online stores. Fully-featured e-commerce platform with secure payment integration.",
    features: ["Product Management", "Secure Payments", "Custom Design", "SEO & Marketing Tools"],
  },
  {
    title: "Business Marketing",
    price: "$499",
    description:
      "Boost your online presence with our tailored marketing services. Ideal for businesses looking to grow their customer base.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Email Marketing"],
  },
];

const PricingCard = ({ title, price, description, features, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-6 rounded-2xl flex flex-col justify-between w-full sm:w-[300px] transform transition-transform duration-300 hover:scale-110"
  >
    <div>
      <h3 className="text-white text-[24px] font-bold mb-4">{title}</h3>
      <p className="text-secondary text-[18px] font-semibold mb-2">{price}</p>
      <p className="text-white-100 text-[14px] mb-4">{description}</p>
      <ul className="list-disc list-inside text-white-100 text-[14px] space-y-2">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6">
      <a
        href="https://wa.me/+910354249191/" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#915EFF] text-white py-2 px-4 rounded-lg hover:bg-[#7a49d8] transition-colors duration-200 text-center block"
      >
        Get Help
      </a>
    </div>
  </motion.div>
);

const Pricing = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Our Pricing
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Choose Your Plan.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} index={index} {...plan} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Pricing, "");
