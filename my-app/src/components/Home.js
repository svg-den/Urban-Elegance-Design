import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Home Page!</h1>
        <p>Transforming your home into a warm luxurious house.</p>
      </header> {/* Close the header tag here */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <ul>
          <li>Custom Kitchen</li>
          <li>Custom Bathroom</li>
          <li>Custom Bedroom</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
