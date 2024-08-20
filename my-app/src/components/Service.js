import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Living from "../ServiceAreas/Living";
import Dining from "../ServiceAreas/Dining";
import Sleeping from "../ServiceAreas/Sleeping";
import Kitchen from "../ServiceAreas/Kitchen";
import Office from "../ServiceAreas/Office";
import Outdoor from "../ServiceAreas/Outdoor";

const Service = () => {
  return (
    <Router>
<div id="services" className='footer-container bg-gray-800 text-white mt-9 py-8 px-4'>
  {/* <h1 className="text-4xl font-bold mb-8">Our Services</h1> */}
  <h3 className="text-4xl text-center font-bold text-gray-100 mb-4 underline">
    Our Service Areas
  </h3>        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center">
          <div className="px-16">
            <Link
              to="/living"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Living
            </Link>
          </div>
          <div className="px-16">
            <Link
              to="/dining"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Dining
            </Link>
          </div>
          <div className="px-16">
            <Link
              to="/sleeping"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Sleeping
            </Link>
          </div>
          <div className="px-16">
            <Link
              to="/kitchen"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Kitchen
            </Link>
          </div>
          <div className="px-16">
            <Link
              to="/office"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Office
            </Link>
          </div>
          <div className="px-16">
            <Link
              to="/outdoor"
              className="text-2xl font-bold text-blue-500 hover:underline"
            >
              Outdoor
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/living" element={<Living />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/sleeping" element={<Sleeping />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/office" element={<Office />} />
          <Route path="/outdoor" element={<Outdoor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Service;

// import React from "react";
// import Slider from "react-slick";
// import { Link, Element } from "react-scroll";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import your images
// import living1 from "../assets/living1.jpeg";
// import living2 from "../assets/living2.jpeg";
// import living3 from "../assets/living3.jpeg";
// import living4 from "../assets/living4.jpeg";
// import living5 from "../assets/living5.jpeg";

// import dining1 from "../assets/dining1.jpeg";
// import dining2 from "../assets/dining2.jpeg";
// import dining3 from "../assets/dining3.jpeg";
// import dining4 from "../assets/dining4.jpeg";
// import dining from "../assets/dining.jpeg";

// import sleeping1 from "../assets/sleeping1.jpeg";
// import sleeping2 from "../assets/sleeping2.jpeg";
// import sleeping3 from "../assets/sleeping3.jpeg";
// import sleeping4 from "../assets/sleeping4.jpeg";
// import sleeping5 from "../assets/sleeping5.jpeg";

// import kitchen1 from "../assets/kitchen1.jpeg";
// import kitchen2 from "../assets/kitchen2.jpeg";
// import kitchen3 from "../assets/kitchen3.jpeg";
// import kitchen4 from "../assets/kitchen4.jpeg";
// import kitchen5 from "../assets/kitchen5.jpeg";

// import office1 from "../assets/office1.jpeg";
// import office2 from "../assets/office2.jpeg";
// import office3 from "../assets/office3.jpeg";
// import office4 from "../assets/office4.jpeg";
// import office5 from "../assets/office5.jpeg";

// import outdoor1 from "../assets/outdoor1.jpeg";
// import outdoor from "../assets/outdoor.jpeg";
// import outdoor3 from "../assets/outdoor3.jpeg";
// import outdoor4 from "../assets/outdoor4.jpeg";
// import outdoor5 from "../assets/outdoor5.jpeg";

// const Service = () => {
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
//       <h1 className="text-4xl font-bold mb-8">Our Services</h1>
//       <h3 className="text-xl text-center font-bold text-gray-800 mb-4 underline">
//         Service Areas
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="mb-16 px-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Living</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={living1}
//                 alt="Living Area 1"
//                 className=" w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={living2}
//                 alt="Living Area 2"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={living3}
//                 alt="Living Area 3"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={living4}
//                 alt="Living Area 4"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={living5}
//                 alt="Living Area 5"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//           </Slider>
//         </div>
//         <div className="mb-16 px-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Dining</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={dining1}
//                 alt="Dining Area 1"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={dining2}
//                 alt="Dining Area 2"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={dining3}
//                 alt="Dining Area 3"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={dining4}
//                 alt="Dining Area 4"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={dining}
//                 alt="Dining Area 5"
//                 className="w-3/5 h-70 object-cover rounded-lg"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="mb-16 px-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Sleeping Area
//           </h2>
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
//         </div>
//         <div className="mb-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Kitchen Area</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={kitchen1}
//                 alt="Kitchen Area 1"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={kitchen2}
//                 alt="Kitchen Area 2"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={kitchen3}
//                 alt="Kitchen Area 3"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={kitchen4}
//                 alt="Kitchen Area 4"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={kitchen5}
//                 alt="Kitchen Area 5"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="mb-16 px-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Office</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={office1}
//                 alt="Office Area 1"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={office2}
//                 alt="Office Area 2"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={office3}
//                 alt="Office Area 3"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={office4}
//                 alt="Office Area 4"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={office5}
//                 alt="Office Area 5"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//           </Slider>
//         </div>
//         <div className="mb-16 px-16">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Outdoor</h2>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src={outdoor1}
//                 alt="Outdoor Area 1"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={outdoor}
//                 alt="Outdoor Area 2"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={outdoor3}
//                 alt="Outdoor Area 3"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={outdoor4}
//                 alt="Outdoor Area 4"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//             <div>
//               <img
//                 src={outdoor5}
//                 alt="Outdoor Area 5"
//                 className="w-3/5 rounded-lg"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>
//       <h2 className="text-3xl font-bold mt-16">Service Page</h2>
//       <p className="text-lg text-gray-600 mt-4">This is the Service Page</p>
//     </div>
//   );
// };

// export default Service;
