import React from "react";
import Slider from "react-slick";
import kitchen1 from "../assets/kitchen1.jpeg";
import kitchen2 from "../assets/kitchen2.jpeg";
import kitchen3 from "../assets/kitchen3.jpeg";
import kitchen4 from "../assets/kitchen4.jpeg";
import kitchen5 from "../assets/kitchen5.jpeg";

const Kitchen = () => {
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
      <h2 className="text-3xl font-bold mb-8">Kitchen Area</h2>
      <Slider {...settings}>
            <div>
              <img
                src={kitchen1}
                alt="Kitchen Area 1"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto
  "
              />
            </div>
            <div>
              <img
                src={kitchen2}
                alt="Kitchen Area 2"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto
  "
              />
            </div>
            <div>
              <img
                src={kitchen3}
                alt="Kitchen Area 3"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto
  "
              />
            </div>
            <div>
              <img
                src={kitchen4}
                alt="Kitchen Area 4"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto
  "
              />
            </div>
            <div>
              <img
                src={kitchen5}
                alt="Kitchen Area 5"
                className="w-1/5 h-64 object-cover rounded-lg mx-auto
  "
              />
            </div>
          </Slider>
      </div>
  );
};

export default Kitchen;
