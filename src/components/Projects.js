import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { name: 'Простое приложение на React', desc: 'Посмотреть' },
    { name: 'Сайт-портфолио (этот проект)', desc: 'Посмотреть' },
    { name: 'Интерактивный таймер', desc: 'Посмотреть' },
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-brightGreen mb-8 text-center">Мои проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-light p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-darkPurple">{project.name}</h3>
              <p className="text-primary mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;