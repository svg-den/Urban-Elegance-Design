import React from "react";
import { useState, useEffect } from "react";  
import { Link } from "react-scroll";
import kitchen from "../assets/kitchen.jpeg";
import kitchen1 from "../assets/kitchen1.jpeg";
import kitchen2 from "../assets/kitchen2.jpeg";
import kitchen3 from "../assets/kitchen3.jpeg";
import kitchen4 from "../assets/kitchen4.jpeg";
import kitchen5 from "../assets/kitchen5.jpeg";
import kitchen6 from "../assets/kitchen6.jpeg";
import kitchen7 from "../assets/kitchen7.jpeg";

import bathroom from "../assets/bathroom.jpeg";
import bathroom1 from "../assets/bathroom1.jpeg";
import bathroom5 from "../assets/bathroom5.jpeg";
import bathroom3 from "../assets/bathroom3.jpeg";
import bathroom4 from "../assets/bathroom4.jpeg";
import bathroom8 from "../assets/bathroom8.jpeg";
import bathroom6 from "../assets/bathroom6.jpeg";
import bathroom7 from "../assets/bathroom7.jpeg";


import bedroom from "../assets/bedroom.jpeg";
import bedroom2 from "../assets/bedroom2.jpeg";
import bedroom1 from "../assets/bedroom1.jpeg";
import bedroom4 from "../assets/bedroom4.jpeg";
import bedroom5 from "../assets/bedroom5.jpeg";
import bedroom8 from "../assets/bedroom8.jpeg";
import bedroom9 from "../assets/bedroom9.jpeg";
import bedroom10 from "../assets/bedroom10.jpeg";

function Home() {
  return (
    <div className="home-container min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="home-header bg-white shadow-lg p-6 rounded-lg text-center mt-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg text-gray-600">
          Transforming your home into a warm luxurious house.
        </p>
      </header>
      <section className="featured-projects mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Projects
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-16">
            Custom Kitchen
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-2">
              <img src={kitchen} alt="Custom Kitchen " className="rounded-lg" />
              <img src={kitchen1} alt="Custom Kitchen 1" className="rounded-lg" />
              <img src={kitchen2} alt="Custom Kitchen 2" className="rounded-lg" />
              <img src={kitchen3} alt="Custom Kitchen 3" className="rounded-lg" />
              <img src={kitchen4} alt="Custom Kitchen 4" className="rounded-lg" />
              <img src={kitchen6} alt="Custom Kitchen 6" className="rounded-lg" />
              <img src={kitchen7} alt="Custom Kitchen 7" className="rounded-lg" />
              <img src={kitchen5} alt="Custom Kitchen 5" className="rounded-lg" />
            </div>
          </li>
          <li className="mb-16">
            Custom Bathroom
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-2">
              <img src={bathroom} alt="Custom Bathroom " className="rounded-lg" />
              <img src={bathroom1} alt="Custom Bathroom 1" className="rounded-lg" />
              <img src={bathroom5} alt="Custom Bathroom 5" className="rounded-lg" />
              <img src={bathroom3} alt="Custom Bathroom 3" className="rounded-lg" />
              <img src={bathroom4} alt="Custom Bathroom 4" className="rounded-lg" />
              <img src={bathroom6} alt="Custom Bathroom 6" className="rounded-lg" />
              <img src={bathroom7} alt="Custom Bathroom 7" className="rounded-lg" />
              <img src={bathroom8} alt="Custom Bathroom 8" className="rounded-lg" />
            </div>
          </li>
          <li className="mb-16">
            Custom Bedroom
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-2">
              <img src={bedroom} alt="Custom Bedroom " className="rounded-lg" />
              <img src={bedroom2} alt="Custom Bedroom 2" className="rounded-lg" />
              <img src={bedroom1} alt="Custom Bedroom 1" className="rounded-lg" />
              <img src={bedroom4} alt="Custom Bedroom 4" className="rounded-lg" />
              <img src={bedroom5} alt="Custom Bedroom 5" className="rounded-lg" />
              <img src={bedroom8} alt="Custom Bedroom 8" className="rounded-lg" />
              <img src={bedroom9} alt="Custom Bedroom 9" className="rounded-lg" />
              <img src={bedroom10} alt="Custom Bedroom 10" className="rounded-lg" />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

