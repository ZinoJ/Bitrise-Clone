import React from 'react'
import './ThirdSection.css'

function ThirdSection() {
  return (
    <div className='thirdSection'>
      <h1 className='headingg'>Join teams who made the switch</h1>
      <div className="thirdSection__container">
         <div className="thirdSection__images">
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/62bc63802d0ae2993d8364c4_Screenshot%202022-06-29%20at%2016.35.26.png" alt="" />
            <h2>N26 tripled release frequency, while enhancing security</h2>
         </div>
         <div className="thirdSection__images">
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/62bc541a6fcb811afb48ec32_629f54abbe6b8f4d9066c4e5_Screenshot%202022-06-07%20at%2015.37.27-p-1600.png" alt="" />
            <h2>Vestiaire Collective gained confidence, and saved time</h2>
         </div>
         <div className="thirdSection__images">
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/62bc639033f8841fc9c8ed34_Screenshot%202022-06-29%20at%2016.36.20.png" alt="" />
            <h2>TAG Heuer improved quality and cooperation with QA and testers</h2>
         </div>
      </div>

      <div className="thirdSection__button">
      <button>Explore dozens of success stories</button>
      </div>

    </div>
  )
}

export default ThirdSection