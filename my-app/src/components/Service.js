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

