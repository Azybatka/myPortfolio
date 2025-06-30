import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mainBg text-darkPurple py-4 text-center">
      <button className="bg-darkPurple text-white px-4 py-2 rounded hover:bg-primary transition-colors mb-2">
        Отправить
      </button>
      <p>© 2025 Моё Портфолио. Все права защищены.</p>
      <div className="mt-2">
        <a href="https://github.com" className="text-darkPurple hover:text-primary mr-2">GitHub</a>
        <a href="https://linkedin.com" className="text-darkPurple hover:text-primary">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;