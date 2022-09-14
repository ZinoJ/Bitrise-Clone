import React from "react";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="secondSection">
      <h2>Trusted by over 6,000 customers worldwide</h2>
      <div className="secondSection__companies">
        <div className="image__container">
          <img
            className="secondSection__image"
            src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/5e57e81c752f11cc157df440_mozilla-logo-png-transparent-p-500.png"
            alt=""
          />
        </div>
        <div className="image__container">
          {" "}
          <img
            src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/60c9e142ef997f142b0220df_New_Wise_(formerly_TransferWise)_logo.png"
            alt=""
          />
        </div>
        <div className="image__container">
          <img
            className="secondSection__image"
            src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/5e84ac31e4f41f11c89a7899_DeNA_logo_white_RGB-p-500.png"
            alt=""
          />
        </div>
        <div className="image__container">
          <img
            src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/5e58ec44c942797868c5f735_careem.svg"
            alt=""
          />
        </div>
        <div className="image__container">
          <img
            src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/5e57e3ab65238ee1125db5d5_logo-pulselive-p-500.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
