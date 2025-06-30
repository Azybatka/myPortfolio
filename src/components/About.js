import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-mainBg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-darkGreen mb-8 text-center">Обо мне</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={process.env.PUBLIC_URL + '/photo_port.png'}
            alt="Alexander Shyrkov"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-poppins font-bold text-darkPurple mb-2">Shyrkov Oleksandr</h3>
            <p className="text-lg text-darkPurple mb-4">Начинающий веб-разработчик | Цель: IT-Ausbildung в Германии</p>
            <p className="text-lg text-darkPurple mb-2"><strong>Контакты:</strong> sirkovoleksandr@gmail.com | GitHub | LinkedIn</p>
            <p className="text-lg text-darkPurple mb-4"><strong>Цель:</strong> Получить практический опыт в IT, готов к стажировке или проектам.</p>
            <p className="text-lg text-darkPurple mb-2"><strong>Опыт работы:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>5+ лет в логистике и розничной торговле (Германия), навыки организации и работы в команде.</li>
            </ul>
            <p className="text-lg text-darkPurple mb-2"><strong>Образование и навыки:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Немецкий: A2 (цель B1 к ноябрю 2025).</li>
              <li>Самообразование: HTML, CSS, JavaScript, React, Git (портфолио в процессе).</li>
            </ul>
            <p className="text-lg text-darkPurple">Открыт к обратной связи и готов развивать навыки!</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;