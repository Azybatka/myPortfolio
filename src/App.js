import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Poll from './components/Poll';
import './styles/tailwind.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="App min-h-screen bg-mainBg text-darkPurple flex flex-col">
      <Header setShowContent={setShowContent} />

      <main className="pt-20 flex-grow">
        <About />
        
        {/* 🟡 Вставка ОПРОСА между блоками */}
        <section className="my-10 px-4">
          <Poll />
        </section>

        {showContent && (
          <>
            <Projects />
            <Skills />
          </>
        )}
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
