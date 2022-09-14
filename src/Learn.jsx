import React from "react";
import "./Learn.css";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BsHeadset,
  BsPeople,
  BsStar,
  BsCalendarEvent,
  BsQuestionSquare,
} from "react-icons/bs";

function Learn() {
  return (
    <div className="community">
      <div className="left">
        <h4 className="intergrationHeading">LEARN BITRISE</h4>
        <div className="left__container">
          <div className="IntegrationDrop__content">
            <BsPeople className="ico" />
            <div className="right">
              <h3>Mobile DevOps</h3>
              <h6>Learn about Mobile DevOps</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <BsHeadset className="ico" />
            <div className="right">
              <h3>Video</h3>
              <h6>Watch tutorials and more</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <BsCalendarEvent className="ico" />
            <div className="right">
              <h3>Documaentation</h3>
              <h6>Answe to your questions</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <BsStar className="ico" />
            <div className="right">
              <h3>Podcast</h3>
              <h6>Listen to Mobile DevOps is a Thing!</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <BsQuestionSquare className="ico" />
            <div className="right">
              <h3>Blog</h3>
              <h6>Read articles and learn more</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <AiOutlineHeart className="ico" />
            <div className="right">
              <h3>Webinars</h3>
              <h6>Save your seat</h6>
            </div>
          </div>
          <div className="IntegrationDrop__content">
            <AiOutlineHeart className="ico" />
            <div className="right">
              <h3>Whitepapers</h3>
              <h6>Read our business and tech reports</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h4 className="intergrationHeading">FEATURED CONTENT</h4>
        <div className="learn__container">
          <div className="left">
            <div><img
            className="learn__image"
              src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/61ee746a334fc90d2a398398_financereport_landing_a_horizontal-p-2000.jpeg"
              alt=""
            /></div>
            <h5>
              Mobile Product Success in Finance and Banking, 2022
            </h5>
            <h5 style={{ fontWeight: "normal", color: "#333" }}>Learn about engineering best practices from developers behind the world's most successful fintech apps like N26, Wise, Afterpay, or Paysafe.
            </h5>
            <h5>Download our report</h5>
          </div>
          <div className="right">
            <img
              src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/62f10bbcaa056357178ada97_1345_podcast_sudeep.jpg"
              alt=""
            />
            <h5>Optimizing release frequency and building a release train with Sudeep Sidhu
            </h5>
            <h5 style={{ fontWeight: "normal", color: "#333" }}>We talked to Neo Financial's Sudeep Sidhu about how they optimized their release strategy and built a stable bi-weekly release train.
            </h5>
            <h5>Listen to the episode!</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
