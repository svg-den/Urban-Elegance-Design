import React from "react";
import Slider from "react-slick";
import sleeping1 from "../assets/sleeping1.jpeg";
import sleeping2 from "../assets/sleeping2.jpeg";
import sleeping3 from "../assets/sleeping3.jpeg";
import sleeping4 from "../assets/sleeping4.jpeg";
import sleeping5 from "../assets/sleeping5.jpeg";

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
  };

  return (
    <div className="p-8 px-16 font-sans">
      <div className="mb-16 px-16">
        <h2 className="text-3xl font-bold mb-8">Sleeping Area</h2>
        <Slider {...settings}>
          <div>
            <img
              src={sleeping1}
              alt="Sleeping Area 1"
              className="w-1/5 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src={sleeping2}
              alt="Sleeping Area 2"
              className="w-1/5 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src={sleeping3}
              alt="Sleeping Area 3"
              className="w-1/5 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src={sleeping4}
              alt="Sleeping Area 4"
              className="w-1/5 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
          <div>
            <img
              src={sleeping5}
              alt="Sleeping Area 5"
              className="w-1/5 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Living;


// import React from "react";
// import Slider from "react-slick";
// import sleeping1 from "../assets/sleeping1.jpeg";
// import sleeping2 from "../assets/sleeping2.jpeg";
// import sleeping3 from "../assets/sleeping3.jpeg";
// import sleeping4 from "../assets/sleeping4.jpeg";
// import sleeping5 from "../assets/sleeping5.jpeg";

// const Living = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="p-8 px-16 font-sans">
//       <div className="mb-16 px-16">
//       <h2 className="text-4xl font-bold mb-8">Sleeping Area</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={sleeping1}
//                 alt="Sleeping Area 1"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={sleeping2}
//                 alt="Sleeping Area 2"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={sleeping3}
//                 alt="Sleeping Area 3"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={sleeping4}
//                 alt="Sleeping Area 4"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={sleeping5}
//                 alt="Sleeping Area 5"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//           </Slider>
//           </div>
//     </div>
//   );
// };

// export default Living;
