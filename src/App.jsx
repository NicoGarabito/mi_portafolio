import React from 'react';
import Layout from './components/Layout';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import HeaderCard from './components/HeaderCard';

const App = () => {
  return (
    <Layout>
      <main>
        <HeaderCard />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
};

export default App;
