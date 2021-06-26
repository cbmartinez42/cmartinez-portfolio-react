import React, {useState} from 'react';
import chris from "../assets/images/Chris1.jpg"
import claire from '../assets/images/qc-claire-cropped.jpeg'
import smudge from "../assets/images/qc-smudge-light.jpg"

function About() {


    return (
        <>
        <div className="container">
        <h1>This is about</h1>


        <div className="info-container">
          <div className="row">
            <div className="col s12 m6 center-align">
            <img src={chris} alt="" className="headshot z-depth-5" />
          </div>
          <div className="col s12 m6 info-text center">
            <p> I've been building computers and working with technology for over 20 years. I've worked in several industries such as telecommunications, finance, travel and 
            logistics in roles ranging from Team Leader, Commissions Analyst, Quality Analyst, Customer Service and Sales. I also served as a Subject Matter Expert for 
            <span className="tooltip" title="Asynchronous Digital Subscriber Line/Very high Bit-rate Digital Subscriber Line">ADSL/VDSL</span> service, and acted as a senior member for a
            <span className="tooltip" title="Commonly called UAT"> User Acceptance Testing</span> team, running tests on new application releases and providing feedback to developers and 
            project managers by anticipating questions, issues and training needs that may impact when the application is pushed to production.
            I'm currently working on completing the Full Stack Developer coding program through Washington University's Technology and Leadership Center/James McKelvey 
            School of Engineering in partnership with Trilogy Education Services with an A+ average, and have acted both as a developer and product manager on each group project.</p>
                      
          </div>
        </div>
        <div className="row">
          <div className="col s12 info-text center">
            <p>My Skills include, but are not limited to:</p>
            <ul className="skills-list">
              <li><b>Languages:</b> HTML5, CSS3, JavaScript ES6, JQuery, React</li>
              <li><b>Applications:</b> MySQL, MongoDB, NodeJS, Express, Git and Github, Heroku, NPM</li>
              <li><b>Soft skills:</b> Problem solving, creative thinking, high-level communication, planning and time-management, as well as experience motivating and developing teams ranging from 12-18 members </li>
            </ul>
          </div>
        </div>
        <div className="row">  
          <div className="col s12 qc center-align ">
            <img src={claire} title="Claire" className="furbabies z-depth-3" alt="Claire" />
            <img src={smudge} title="Smudge" className="furbabies z-depth-3" alt="Smudge" /> 
            <h6 className="flow-text qc">All my work is quality checked with ❤️ by Claire the dog and Smudge the cat for world-className excellence</h6>
          </div>
          <div className="col s4">
          </div>
        </div>
        </div>
        {/* <div>
          <img id="dice" src="./assets/images/dice2-mblur150.2.png" alt=""></img>
        </div> */}
     </div>
      </>
    )
}

export default About;