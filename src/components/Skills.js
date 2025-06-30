import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];

  return (
    <motion.section
      id="skills"
      className="py-16 bg-lightPurple"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-darkPurple mb-8 text-center">Мои навыки</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <span key={index} className="bg-darkPurple text-white px-4 py-2 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;