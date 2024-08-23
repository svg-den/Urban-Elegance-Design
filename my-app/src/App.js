import React from 'react';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Products />
      <Portfolio />
      <Contact /> 
      <SocialLinks />
    </div>
  );
}

export default App;
