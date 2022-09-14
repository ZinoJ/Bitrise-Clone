import React from 'react'
import './Community.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHeadset, BsPeople, BsStar, BsCalendarEvent, BsQuestionSquare } from 'react-icons/bs'

function Community() {
  return (
    <div className="community">
      <div className="left">
         <h4 className='intergrationHeading' >CONNECT WITH OTHERS</h4>
         <div className="left__container">
         <div className="IntegrationDrop__content">
         <BsPeople className='ico'/>
              <div className="right">
                <h3>Bitrise User Groups</h3>
                <h6>Meet other Bitrise users</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
            <BsHeadset className='ico'/>
              <div className="right">
                <h3>Webinars</h3>
                <h6>Save a seat for our webinars</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
            <BsCalendarEvent className='ico'/>
              <div className="right">
                <h3>Events</h3>
                <h6>Find us at these conferences</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
            <BsStar className='ico'/>
              <div className="right">
                <h3>Experts Program</h3>
                <h6>Share your love for bitrise</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
            <BsQuestionSquare className='ico'/>
              <div className="right">
                <h3>Community Forum</h3>
                <h6>Ask your fellow developers</h6>
              </div>
            </div>
            <div className="IntegrationDrop__content">
              <AiOutlineHeart className='ico'/>
              <div className="right">
                <h3>Bitrise for non-profit</h3>
                <h6>Check out our nonprofit support</h6>
              </div>
            </div>
         </div>
      </div>
      <div className="right">
         <h4 className='intergrationHeading' >COMMUNITY HIGHLIGHTS</h4>
         <img src="https://assets-global.website-files.com/5db35de024bb988f5fb4e168/62dac298233659974bc4ed1e_1200x627_V5.jpg" alt="" />
         <h5>Team collaboration for high impact - how Neo Finacial's mobile product and engineering teams make a difference</h5>
         <h5 style={{fontWeight: 'normal', color: '#333'}}>Join this webinar to learn how mobile product & engineering teams collaborate from the mobile engineering team at Neo Financial</h5>
         <h5>Register now</h5>
      </div>
    </div>
  )
}

export default Community