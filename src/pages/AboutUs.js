import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "./../animation";
import ScrolTop from "../components/ScrolTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrolTop />
    </motion.div>
  );
};

export default AboutUs;
