import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Build better mobile applications, faster</h1>
        <p>
          Automate and accelerate with Bitrise's{" "}
          <span>Mobile DevOps Platform</span>, featuring industry-leading{" "}
          <span>mobile CI/CD</span>
        </p>
        <div className="hero__buttons">
          <button>Get Started For Free</button>
          <button className="btn">Talk To The Team</button>
        </div>
      </div>
      <div className="hero__right">
        <img
          src="https://pngimg.com/uploads/astronaut/astronaut_PNG55.png"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Hero;
