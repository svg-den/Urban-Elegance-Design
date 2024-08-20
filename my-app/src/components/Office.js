import React from "react";
import Slider from "react-slick";
import office1 from "../assets/office1.jpeg";
import office2 from "../assets/office2.jpeg";
import office3 from "../assets/office3.jpeg";
import office4 from "../assets/office4.jpeg";
import office5 from "../assets/office5.jpeg";

const Office = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="p-8 px-16 font-sans">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Office</h2>
          <Slider {...settings}>
            <div>
              <img
                src={office1}
                alt="Office Area 1"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={office2}
                alt="Office Area 2"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={office3}
                alt="Office Area 3"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={office4}
                alt="Office Area 4"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto"
       
              />
            </div>
            <div>
              <img
                src={office5}
                alt="Office Area 5"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto"
       
              />
            </div>
          </Slider>
          </div>
  );
};

export default Office;
