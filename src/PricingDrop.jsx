import React from "react";
import "./PricingDrop.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiMessage3Line } from 'react-icons/ri'
import { BiRocket, BiBuilding } from 'react-icons/bi'

function PricingDrop() {
  return (
    <div className="pricingDrop">
      <div className="pricingDrop__content">
        <BsCurrencyDollar className="icon" />
        <div className="right">
          <h3>Pricing Overview</h3>
          <h6>Compare our plan and prices</h6>
        </div>
      </div>
      <div className="pricingDrop__content">
        <BiRocket className="icon" />
        <div className="right">
          <h3>Velocity Plan</h3>
          <h6>Scalable Plans for enterprise</h6>
        </div>
      </div>
      <div className="pricingDrop__content">
        <BiBuilding className="icon" />
        <div className="right">
          <h3>Enterprise Build Platform</h3>
          <h6>Compare our plan and prices</h6>
        </div>
      </div>
      <div className="pricingDrop__content">
        <RiMessage3Line className="icon" />
        <div className="right">
          <h3>Contact Us</h3>
          <h6>Let's talk</h6>
        </div>
      </div>
    </div>
  );
}

export default PricingDrop;
