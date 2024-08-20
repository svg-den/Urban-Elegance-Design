import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/CustomArrows"; 
import dining1 from "../assets/dining1.jpeg"
import dining2 from "../assets/dining2.jpeg";
import dining3 from "../assets/dining3.jpeg";
import dining4 from "../assets/dining4.jpeg";
import dining from "../assets/dining.jpeg";

const Dining = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 

  };

  return (
    <div className="p-8 px-16 font-sans">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Dining</h2>
          <Slider {...settings}>
            <div>
              <img
                src={dining1}
                alt="Dining Area 1"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
      
              />
            </div>
            <div>
              <img
                src={dining2}
                alt="Dining Area 2"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
      
              />
            </div>
            <div>
              <img
                src={dining3}
                alt="Dining Area 3"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
      
              />
            </div>
            <div>
              <img
                src={dining4}
                alt="Dining Area 4"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
      
              />
            </div>
            <div>
              <img
                src={dining}
                alt="Dining Area 5"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
      
              />
            </div>
          </Slider>
      </div>
  );
};

export default Dining;
