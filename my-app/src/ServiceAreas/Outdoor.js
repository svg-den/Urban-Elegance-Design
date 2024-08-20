import React from "react";
import { NextArrow, PrevArrow } from "../components/CustomArrows"; 
import Slider from "react-slick";
import outdoor1 from "../assets/outdoor1.jpeg";
import outdoor from "../assets/outdoor.jpeg";
import outdoor3 from "../assets/outdoor3.jpeg";
import outdoor4 from "../assets/outdoor4.jpeg";
import outdoor5 from "../assets/outdoor5.jpeg";

const Outdoor = () => {
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
      <h2 className="text-3xl font-bold mb-8">Outdoor Area</h2>
      <Slider {...settings}>
            <div>
              <img
                src={outdoor1}
                alt="Outdoor Area 1"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={outdoor}
                alt="Outdoor Area 2"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={outdoor3}
                alt="Outdoor Area 3"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={outdoor4}
                alt="Outdoor Area 4"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={outdoor5}
                alt="Outdoor Area 5"
                className="w-2/5 h-640 object-cover rounded-lg mx-auto"
       
              />
            </div>
          </Slider>
      </div>
  );
};

export default Outdoor;
