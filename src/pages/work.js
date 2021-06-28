import React, {useState, useEffect} from 'react';
import JennsHens from '../assets/images/jenshens.PNG'
import Answer42 from "../assets/images/answer42.PNG"
import Boredify from "../assets/images/boredify.png"
import WeatherDashboard from "../assets/images/weatherdashboard.png"
import Typewriter from "../Components/Typewriter/TypeWriter"


function Work() {
//   const [text, setText] = useState('')
//   // typewriter function for headers
// var aText = [
//   `my work`, 

//   " "

// ];
//   var iSpeed = 50;
//   var iIndex = 0; 
//   var iArrLength = aText[0].length; 
//   var iScrollAt = 20; 
   
//   var iTextPos = 0;
//   var sContents = ''; 
//   var iRow; 
   
//   function typewriter()
//   {
//    sContents =  ' ';
//    iRow = Math.max(0, iIndex-iScrollAt);
   
//    while ( iRow < iIndex ) {
//     sContents += aText[iRow++] + '\n';
//    }
//    setText(sContents + aText[iIndex].substring(0, iTextPos) + "_");
//    if ( iTextPos++ === iArrLength ) {
//     iTextPos = 0;
//     iIndex++;
//     if ( iIndex !== aText.length ) {
//      iArrLength = aText[iIndex].length;
//      setTimeout(typewriter, 500);
//     }
//    } else {
//     setTimeout(typewriter, iSpeed);
//    }
//   }

//   useEffect(() => {
//       typewriter()
//   }, [])



    return (
        <>
        <Typewriter
          text={"My Work \n "}
        />
         {/* <h1 className="typewriter">{text}</h1> */}
          <div class="info-container">
          <div class="row">
            <div class="work-cards">
              <div class="row">
                <div class="col s12">
                  <p class="info-text center">
                    Below are some examples of my work, including Jenn's Hens, answer42 and Boredify. Jenn's Hens and Boredify were collaborative efforts, while answer42 is a full-stack application 
                    that I created myself and the Weather Dashboard is a front-end application utilizing a third-party API. Click the image for more info on each.
                  </p>
                  <p class="info-text center">
                    For more examples, please feel free to view my complete Github profile from the Contact page.  
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m6 offset-1 center-align">
                  <div class="card large example-container center-align  hoverable z-depth-3">
                    <div class="card-image waves-effect waves-block waves-light ">
                      <img class="activator screenshot" alt="Jenn's Hens" src={JennsHens} />
                    </div>
                    <div class="card-content">
                      {/* <div class="overlay">  */}
                        <p><span class="card-title activator white-text">Jenn's Hens<i class="material-icons right">more_vert</i></span></p>
                        <p class="white-text card-description">An e-commerce application for farm-fresh eggs</p>
                      {/* </div>  */}
                    </div>
                    <div class="card-reveal">
                      <span class="card-title white-text text-darken-4">Jenn's Hens<i class="material-icons right">close</i></span>
                      <p class="white-text card-description">An e-commerce site built for the Artisanal Egg Boutique owner. This is a full-stack application with an attractive, User-Friendly UI that allows customers to place orders, 
                        and admins to fulfill orders. This application uses multiple technologies to maintain a clean but fully functional experience for both customer and the small egg distributor.
                      This application is also fully scalable to add additional products, or to be transitioned to other products and services from small business owners.</p>
                      <p class="white-text card-description">Technologies: NodeJS, Express Session, MySQL DB, Handlebars template engine with Materialize CSS/JS framework, JavaScript, PayPal payments</p>
                      {/* <div class="technologies">
                        <img src="./assets/images/logos/nodejs-2.svg" id="node" alt="NodeJS" title="NodeJS" />NodeJS
                      </div>
                      <div class="technologies">
                        <img src="./assets/images/logos/express-109.svg" id="express" alt="Express" title="Express" />
                      </div>
                      <div class="technologies">
                        <img src="./assets/images/logos/mysql-6.svg" id="mysql" alt="MySQL" title="MySQL">
                      </div>
                      <div class="technologies">
                        <img src="./assets/images/logos/handlebars-1.svg" id="handlebars" alt="Handlebars" title="Handlebars" />
                      </div>  */}
                      <p><a href="https://secure-ravine-09245.herokuapp.com/" target="_blank" rel="noreferrer">Deployed site</a></p>
                      <p><a href="https://github.com/cbmartinez42/jens-hens-project" target="_blank" rel="noreferrer">Github Repository</a></p>
                    </div>
                  </div>
                </div>   
                <div class="col s12 m6 center ">
                  <div class="card large example-container hoverable z-depth-3">
                    <div class="card-image waves-effect waves-block waves-light ">
                      <img class="activator screenshot" alt="Answer 42" src={Answer42} />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator white-text">answer42<i class="material-icons right">more_vert</i></span>
                      <p class="white-text card-description">A fun, "Hitchiker"-themed tech blog. Bring your towel.</p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title white-text">answer42<i class="material-icons right">close</i></span>
                      <p  class="white-text card-description">A full-stack Wordpress-style blog application that allows uses to create posts and comments, as well as edit and delete their own posts from their personalized dashboard. This
                        "Hitchhiker's Guide to the Galaxy" themed site makes for a fun and attractive blogging experience for all
                      </p>
                      <p class="white-text card-description">Technologies: JavaScript, NodeJS, Express Session, MySQL DB, Handlebars template engine with Materialize CSS/JS framework </p>
                      <p><a href="https://answer42blog.herokuapp.com/" target="_blank" rel="noreferrer">Deployed site</a></p>
                      <p><a href="https://github.com/cbmartinez42/tech-blog" target="_blank" rel="noreferrer">Github Repository</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row"></div>

                <div class="col s12 m6 center-align">
                  <div class="card large example-container hoverable z-depth-3">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator screenshot" alt="Boredify" src={Boredify} />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator white-text">Boredify<i class="material-icons right">more_vert</i></span>
                      <p class="white-text card-description">A time-waster</p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title white-text">Boredify<i class="material-icons right">close</i></span>
                      <p  class="white-text card-description">A pandemic-inspired time waster! This single page application uses multiple third-party APIs and various features, such as a random image generator, to engage the user in a fun way 
                        to waste their time, whether bored on a Zoom call or waiting in the doctor's office. 
                      </p>
                      <p class="white-text card-description">Technologies: JavaScript, JQuery and Bulma CSS framework,  multiple third-party APIs</p>
                      <p><a href="https://cbmartinez42.github.io/boredify-project/" target="_blank" rel="noreferrer">Deployed site</a></p>
                      <p><a href="https://github.com/cbmartinez42/boredify-project" target="_blank" rel="noreferrer">Github Repository</a></p>
                    </div>
                  </div>
                </div>  
                <div class="col s12 m6">
                  <div class="card large example-container center hoverable z-depth-3">
                    <div class="card-image waves-effect waves-block waves-light ">
                      <img class="activator screenshot" alt="Weather Dashboard" src={WeatherDashboard} />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator white-text">Weather Dashboard<i class="material-icons right">more_vert</i></span>
                      <p class="white-text card-description">A friendly place to check the weather</p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title white-text">Weather Dashboard<i class="material-icons right">close</i></span>
                      <p  class="white-text card-description">This is a front-end single page application utilizing a third-party API to display weather information. The current conditions and UV index is displayed, along with a five-day forecast. 
                        Additionally, local storage is utilized to maintain a list of the previous 8 cities searched. 
                      </p>
                      <p class="white-text card-description">Technologies: JavaScript, JQuery, Moment.js, as well as a third-party API</p>
                      <p><a href="https://answer42blog.herokuapp.com/" target="_blank" rel="noreferrer">Deployed site</a></p>
                      <p><a href="https://github.com/cbmartinez42/tech-blog" target="_blank" rel="noreferrer">Github Repository</a></p>
                    </div>
                  </div>
                </div>          
              </div>
            </div>

          </div>    


      </>
    )
}

export default Work;