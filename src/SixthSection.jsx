import React from 'react'
import './SixthSection.css'

function SixthSection() {
  return (
    <div className='footer'>
      <img className='cat' src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e0671fd77d741421b3cccab_cat.png" alt="" />
      <div className="footer__columns">
      <div className="footer__column">
         <p style={{fontSize: '0.9rem'}}><strong>PRODUCT</strong></p>
         <p>Continuous Integration</p>
         <p>For iOS</p>
         <p>For Android</p>
         <p>Security</p>
         <p>Mobile DevOps</p>
         <p>Migrating from Jenkins</p>
         <p>Pricing</p>
         <p>Contact</p>
      </div>

      <div className="footer__column">
      <p style={{fontSize: '0.9rem'}}><strong>PLATFORM</strong></p>
         <p>Technology Partner Program</p>
         <p>Integrations</p>
         <p>Audit Log Connector</p>
         
      </div>

      <div className="footer__column">
      <p style={{fontSize: '0.9rem'}}><strong>SUPPORT</strong></p>
         <p>Support Center</p>
         <p>Docs</p>
         <p>Community Forum</p>
         <p>Status</p>
      </div>

      <div className="footer__column">
      <p style={{fontSize: '0.9rem'}}><strong>COMPANY</strong></p>
         <p>About</p>
         <p>Blog</p>
         <p>Careers <button>WE'RE HIRING</button></p>
         <p>Newsroom</p>
         <p>Press Kit</p>
      </div>
      </div>
      <hr />

      <div className="footer__last">
         <h3 style={{fontSize : '0.8rem'}}>Legal Terms</h3>
         <div className="footer__last__right">
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e1447729314ccf2ebabfffb_github.svg" alt="" />
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e7bb275b62018610f7d33f0_Slack_Mark_Monochrome_White%201.svg" alt="" />
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e144765a2387604d79137b6_twitter.svg" alt="" />
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e14476b237000b9a118978f_facebook.svg" alt="" />
            <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5eb3c81060483b9bc07c85c5_Linkedin.svg" alt="" />
         </div>
      </div>

      <div className="last">
         <p>COMPILED WITH REMOTELY, WORLDWIDE</p>
         <img src="https://assets-global.website-files.com/5db35de024bb983af1b4e151/5e05f06777d741b88a37f65d_bitrise-icon.svg" alt="" />
      </div>
      

    </div>
  )
}

export default SixthSection