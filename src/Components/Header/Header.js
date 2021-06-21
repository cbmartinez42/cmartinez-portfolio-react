import React, {useState} from "react";


function Header({setPage, pages}) {
    return (
        <>
            <nav>
            <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">Chris Martinez | Full Stack Developer</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><span onClick={() => setPage(pages[1])} >about</span></li>
                <li><span onClick={() => setPage(pages[3])}>my work</span></li>
                <li><span onClick={() => setPage(pages[2])}>contact</span></li>                
            </ul>
            </div>
        </nav>
        
        {/* <ul class="sidenav" id="mobile-demo">
            <li><a href="about.html">about</a></li>
            <li><a href="work.html">my work</a></li>
            <li><a href="contact.html">contact</a></li>    
        </ul> */}
        </>
    )
  }

export default Header;