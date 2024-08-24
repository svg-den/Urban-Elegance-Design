// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gray-100 text-black"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 
            border-gray-500"
          >
            About Us
          </p>
        </div>

        <p className="text-xl mt-8">
  <strong><u>Urban Elegance Designs</u></strong> is a contemporary interior design company founded on June 4th, 2023. The company specializes in creating modern, 
  ergonomic, and aesthetically pleasing environments that optimize natural light and spatial design. Utilizing state-of-the-art design technology, 
  <strong><u>Urban Elegance Designs</u></strong> aims to enhance home ergonomics, achieve timeless looks, and boost property value through professional furniture arrangements 
  and custom storage solutions. With a focus on high-quality products and services, the company provides detailed cost analysis to help clients stay 
  within budget while transforming their spaces into functional and stylish havens.        
</p>


        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">BENEFITS</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>High-quality products and services that have received prestigious awards</li>
            <li>Cutting-edge design technology</li>
            <li>Maximize the potential of your living space</li>
            <li>Comprehensive cost evaluation to maintain budget constraints</li>
            <li>Improve natural lighting and space layout</li>
            <li>Achieve a modern, timeless style</li>
            <li>Tailored storage solutions to optimize space</li>
            <li>Increase uniqueness and enhance property worth</li>
            <li>Improve home comfort with expert furniture placement</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Our Services Include:</h2>
          <p className="text-lg mb-2">On-site/In-person consultations at your location</p>
          <ol className="list-decimal pl-6 text-lg space-y-2">
            <li>Expert advice on color palettes, finishes, and material choices</li>
            <li>A skilled and certified interior designer dedicated to your project</li>
            <li>Thorough presentations featuring 2D floor plans, 3D virtual tours, and inspiration boards</li>
            <li>Attention to finishing touches: Including greenery, artwork, and decorative mirrors</li>
            <li>Comprehensive planning for both integrated and standalone lighting solutions</li>
          </ol>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Additional Services:</h2>
          <ol className="list-decimal pl-6 text-lg space-y-2">
            <li>Comprehensive project coordination</li>
            <li>Architectural design and planning</li>
            <li>Installation of furniture, kitchens, and bathrooms</li>
            <li>Warehousing and storage management</li>
            <li>Building repair and general contracting services</li>
          </ol>
        </div>


      </div>
    </div>
  );
};

export default About;
