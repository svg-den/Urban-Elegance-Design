import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-100 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200`}
      onClick={onClick}
    >
      <FaArrowRight size={30} color="gray" />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-100 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-200`}
      onClick={onClick}
    >
      <FaArrowLeft size={30} color="gray" />
    </div>
  );
};

export { NextArrow, PrevArrow };
