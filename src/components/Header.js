import React from "react"
import Typed from "react-typed";
import {Link} from "react-scroll/modules";

const Header = () => {
    return (
        <div id="home" className= "header-wraper">
            <div className= "main-info">
                <h1>Portfolio</h1>
                <Typed
                    className = "typed-text"
                    strings ={["Data Analytics", "Full Stack Development", "ISO Auditor"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-110} className="btn-main-offer" href="#">contact me</Link>
            </div>
        </div>
    )
}

export default Header
