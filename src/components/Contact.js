import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    emailjs
      .send(
        'gmail_service', // service ID
        'contact_template', // template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'Un8Muz62j_6dcwpD0' // public key
      )
      .then(
        () => {
          setStatus('Сообщение отправлено!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Ошибка отправки: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-lightPurple text-darkPurple">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brightBlue mb-10">Связаться со мной</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between max-w-5xl mx-auto">
          {/* Контактная форма */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightBlue"
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightBlue"
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brightBlue h-32"
            />
            <button
              type="submit"
              className="w-full bg-brightBlue text-white py-3 rounded-lg hover:bg-primary transition-colors duration-300"
            >
              Отправить
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>

          {/* Контактная информация */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-brightBlue">Контакты:</h3>
            <div className="flex items-center gap-3">
              <FaTelegramPlane className="text-2xl text-brightBlue" />
              <a href="https://t.me/azybatka" target="_blank" rel="noopener noreferrer">
                @azybatka
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-2xl text-brightBlue" />
              <a href="https://github.com/azybatka" target="_blank" rel="noopener noreferrer">
                github.com/azybatka
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-brightBlue" />
              <a href="mailto:sirkovoleksandr@gmail.com">sirkovoleksandr@gmail.com</a>
            </div>

            <div className="mt-6">
              <p className="mb-2">Отсканируй QR-код, чтобы связаться:</p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/azybatka"
                alt="QR Code Telegram"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
