import React from 'react';
import resume from "../assets/images/resume.PNG"
import octocat from "../assets/images/Octocat.png"
import linkedin from "../assets/images/LI-Logo.png"
import Typewriter from "../Components/Typewriter/TypeWriter"

function Contact() {


    return (
        <>
        <Typewriter
          text={["Contact Me \n "]}
        />
        {/* <h1 className="typewriter">{text}</h1> */}
        <div class="info-container contact-container">
          <div class="row custom-row">
            <div class="col s12 m6 center-align">
              <p class="info-text center-align">
                My Resume:
              </p>
              <a href="./assets/pdf/Chris_Martinez_Resume.pdf" target="_blank" rel="noreferrer"><img src={resume} alt="Resume" class="resume" /></a>
            </div>

            <div class="col s12 m6 center-align">
              <p class="info-text center-align">
                My Github:
              </p>
              <a href="https://github.com/cbmartinez42" target="_blank" rel="noreferrer"><img src={octocat} alt="Github" class="github" /></a>
            </div>
          </div>
          
          <div class="row">
            <div class="col s12 m6 center-align">
              <p class="info-text center-align">
                My LinkedIn profile:
              </p>
              <a href="https://www.linkedin.com/in/christopher-martinez-6761ba17/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linked In" class="linkedin" /></a>
            </div>
            <div class="col s12 m6 center-align">
              <p class="info-text center-align">
                Email me:
              </p>
              <a href="mailto:cbmartinez42@gmail.com"><i class="large material-icons email" alt="Email">email</i></a>
            </div>
            
          </div>
        </div>

        <div>
          <img id="dice" src="./assets/images/dice2-mblur150.2.png" alt="" />
        </div>

      </>
    )
}

export default Contact;