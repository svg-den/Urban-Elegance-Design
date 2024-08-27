// src/components/About.js
import React, { useState } from 'react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of content sections
  const slides = [
    {
      title: 'About Us',
      content: (
        <p className="text-xl mt-8 leading-relaxed">
          <strong><u>Urban Elegance Designs</u></strong>  is all about making spaces look amazing and feel great! 
          Founded on June 4th, 2023, we bring a fresh and modern touch to your home. 
          We love to create bright, cozy, and stylish environments that make the most of your space. 
          With our top-notch design skills, we help you organize your furniture and storage in a way that looks fantastic and works perfectly for your needs.
           Plus, 
          we always keep an eye on the budget, so you can get your dream space without breaking the bank. 
          Let’s turn your place into a beautiful and comfy haven!
        </p>
      ),
    },
    {
      title: 'Benefits',
      content: (
        <ul className="list-disc pl-6 text-lg space-y-3">
          <li>Top-notch products and services that our clients love.</li>
          <li>Cool, modern design tools to bring your vision to life.</li>
          <li>Make the most of your space with smart layouts.</li>
          <li>Stay within your budget while creating your dream home.</li>
          <li>Brighten up your home with more natural light.</li>
          <li>Create a cozy, timeless look that never goes out of style.</li>
          <li>Custom storage solutions to keep things tidy and organized.</li>
          <li>Increase uniqueness and enhance property worth.</li>
          <li>Improve home comfort with expert furniture placement.</li>
        </ul>
      ),
    },
    {
      title: 'Our Services Include',
      content: (
        <>
          <p className="text-lg mb-4">On-site/In-person consultations at your location.</p>
          <ol className="list-decimal pl-6 text-lg space-y-3">
            <li>A dedicated designer who will work with you every step of the way.</li>
            <li>Friendly, expert advice on colors, materials, and finishes.</li>
            <li>Thorough presentations featuring 2D floor plans, 3D virtual tours, and inspiration boards.</li>
            <li>Attention to finishing touches: Including greenery, artwork, and decorative mirrors.</li>
            <li>Comprehensive planning for both integrated and standalone lighting solutions.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'Additional Services',
      content: (
        <ol className="list-decimal pl-6 text-lg space-y-3">
          <li>Full project management to make everything run smoothly.</li>
          <li>Creative architectural design and planning for your home.</li>
          <li>Professional installation of furniture, kitchens, and bathrooms.</li>
          <li>Safe and organized storage solutions for all your needs.</li>
          <li>Reliable building repairs and general contracting to keep your home in top shape.</li>
        </ol>
      ),
    },
  ];

  // Function to handle slide changes
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center"
    >
      {/* Slideshow Container */}
      <div className="max-w-screen-md p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="pb-8">
            <h1 className="text-5xl font-bold border-b-4 border-gray-500 inline-block">
              {slides[currentSlide].title}
            </h1>
          </div>
          {slides[currentSlide].content}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
          >
            Previous
          </button>
          <button
            onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
