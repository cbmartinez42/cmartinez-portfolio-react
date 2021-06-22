import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../../pages/about";
import Work from "../../pages/work";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import PersistentDrawerRight from "../PersistantDrawerRight/PersistantDrawerRight"
// import { Drawer } from "@material-ui/core";

function Header({setPage, pages}) {
    return (
        <Router>
            {/* <nav>
            <div className="nav-wrapper"> */}
            {/* <a href="index.html" className="brand-logo">Chris Martinez | Full Stack Developer</a> */}
            {/* <Route exact path="/" component={Home} className="brand-logo">Chris Martinez | Full Stack Developer</Route> */}
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
            <PersistentDrawerRight />
            {/* <ul className="right hide-on-med-and-down">
                <li><Route exact path="/about" component={About}>about</Route></li>
                <li><Route exact path= "/work" component={Work}>my work</Route></li>
                <li><Route exact path="/contact" component={Contact}>contact</Route></li>   */}

                {/* <li><span onClick={() => setPage(pages[1])} >about</span></li>
                <li><span onClick={() => setPage(pages[3])}>my work</span></li>
                <li><span onClick={() => setPage(pages[2])}>contact</span></li>                 */}
            {/* </ul> */}
            {/* </div>
        </nav> */}
        
        {/* <ul class="sidenav" id="mobile-demo">
            <li><a href="about.html">about</a></li>
            <li><a href="work.html">my work</a></li>
            <li><a href="contact.html">contact</a></li>    
        </ul> */}
        </Router>
    )
  }

export default Header;