import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ setShowContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Мои проекты', href: '#projects', onClick: () => setShowContent(true) },
    { name: 'Навыки', href: '#skills' },
    { name: 'Контакты', href: '#contact' },
  ];

  const handleClick = (itemOnClick) => {
    if (itemOnClick) itemOnClick();
    setIsOpen(false); // Закрываем меню при любом клике
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-dark text-white z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={process.env.PUBLIC_URL + '/photo_port.png'}
            alt="Alexander Shyrkov"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-poppins font-bold">Shyrkov Oleksandr</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.onClick)}
              className="text-light hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleClick(item.onClick)}
                className="text-light hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;