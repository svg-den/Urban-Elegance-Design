import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes> {/* Wrap your Route components in Routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
