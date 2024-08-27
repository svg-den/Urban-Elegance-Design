import React from "react";
import { NextArrow, PrevArrow } from "../components/CustomArrows"; 
import Slider from "react-slick";
import living1 from "../assets/living1.jpeg";
import living2 from "../assets/living2.jpeg";
import living3 from "../assets/living3.jpeg";
import living4 from "../assets/living4.jpeg";
import living5 from "../assets/living5.jpeg";

const Living = () => {
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
      <div className="mb-16 px-16">
      <h2 className="text-3xl font-bold mb-8">Living Area Designs</h2>
      <Slider {...settings}>
        <div>
          <img
            src={living1}
            alt="Living Area 1"
            className=" w-2/5 h-640 object-cover rounded-lg mx-auto"
          />
        </div>
        <div>
          <img
            src={living2}
            alt="Living Area 2"
            className="w-2/5 h-640 object-cover rounded-lg mx-auto"
          />
        </div>
        <div>
          <img
            src={living3}
            alt="Living Area 3"
            className="w-2/5 h-640 object-cover rounded-lg mx-auto"
          />
        </div>
        <div>
          <img
            src={living4}
            alt="Living Area 4"
            className="w-2/5 h-640 object-cover rounded-lg mx-auto"
          />
        </div>
        <div>
          <img
            src={living5}
            alt="Living Area 5"
            className="w-2/5 h-640 object-cover rounded-lg mx-auto"
          />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Living;
