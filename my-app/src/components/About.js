// src/components/About.js
import React from 'react';


const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gray-100 text-black"
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

        <p className="text-xl mt-20">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
        manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó 
        como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado 
        en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente 
        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
        <br />

      </div>
    </div>
  );
};

export default About