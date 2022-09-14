import React from "react";
import "./FifthSection.css";

function FifthSection() {
  return (
    <>
      <div className="fifthSection">
        <h1>Ready for mobile CI/CD that just works?</h1>
        <p>Experience how Bitrise makes mobile development better</p>
        <div className="fifthSection__button">
          <button>Get Started for Free</button>
        </div>
        <p>Want to talk to another human about how we can help?</p>
        <p>Get in touch</p>
      </div>
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,186.7C384,235,480,277,576,293.3C672,309,768,299,864,272C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  );
}

export default FifthSection;
