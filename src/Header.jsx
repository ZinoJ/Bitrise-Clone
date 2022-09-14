import React, { useState } from "react";
import "./Header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import PricingDrop from "./PricingDrop";
import IntegrationsDrop from "./IntegrationsDrop";
import Community from "./Community";
import Learn from "./Learn";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isShownPricing, setIsShownPricing] = useState(false);
  const [isShownIntegration, setIsShownIntegration] = useState(false);
  const [isShownCommunity, setIsShownCommunity] = useState(false);
  const [isShownLearn, setIsShownLearn] = useState(false);

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logo">
            <img
              src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/62220cf32e3d3a974562c57c_1057_Ukraine%20flag%20for%20Bitrise%20logo%20with%20text.svg"
              alt=""
            />
          </div>
          <div className={click ? "header__navigations" : "header__navigations active"}>
            <div className="header__navs">
              <h2>Why Bitrise</h2>
              <RiArrowDropDownLine className="icons" />
            </div>
            <div
              className="header__navs"
              onMouseEnter={() => setIsShownLearn(true)}
              onMouseLeave={() => setIsShownLearn(false)}
            >
              {isShownLearn && <Learn />}
              <h2>Learn</h2>
              <RiArrowDropDownLine className="icons" />
            </div>
            <div
              onMouseEnter={() => setIsShownCommunity(true)}
              onMouseLeave={() => setIsShownCommunity(false)}
              className="header__navs"
            >
              {isShownCommunity && <Community />}
              <h2>Community</h2>
              <RiArrowDropDownLine className="icons" />
            </div>
            <div
              className="header__navs"
              onMouseEnter={() => setIsShownIntegration(true)}
              onMouseLeave={() => setIsShownIntegration(false)}
            >
              {isShownIntegration && <IntegrationsDrop />}
              <h2>Integrations</h2>
              <RiArrowDropDownLine className="icons" />
            </div>
            <div
              onMouseEnter={() => setIsShownPricing(true)}
              onMouseLeave={() => setIsShownPricing(false)}
              className="header__navs"
            >
              {isShownPricing && <PricingDrop />}
              <h2>Pricing</h2>
              <RiArrowDropDownLine className="icons" />
            </div>
            <div className="demo">
              <h2>Request Demo</h2>
              <button>New</button>
            </div>
          </div>
        </div>
        <div className="header__right">
          <h2>Log in</h2>
          <button>Start for free</button>
          <div className="hamburger" onClick={handleClick}>{click ? (<FaTimes size={25} style={{ color: "fff" }} />) : (<FaBars size={25} style={{ color: "fff" }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
