import React from 'react';
import './App.css';
import Header from './Header';
import About from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
