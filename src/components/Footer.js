import React from "react";
import {Link} from "react-scroll/modules";
import pdf from "../resume/Jorge-Navarro.pdf";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <p><img src="https://img.icons8.com/ios/50/4a90e2/secured-letter--v2.png" alt="Email" className="icon"/>   jorgeebn16@gmail.com </p>
                        <p><img src="https://img.icons8.com/ios/50/4a90e2/cell-phone.png" alt="Email" className="icon"/>   +1-407-965-6581 </p>
                        <p><img src="https://img.icons8.com/ios/50/4a90e2/google-maps-new--v2.png" alt="Email" className="icon"/>   Orlando, Florida </p>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="fot-link" href="#">home <span className="sr-only">(current)</span></Link><br/>
                                <Link smooth={true} to="about" offset={-110} className="fot-link" href="#">about me</Link><br/>
                                <Link smooth={true} to="portfolio" offset={-110} className="fot-link" href="#">portfolio</Link><br/>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="fot-link" href="#">experience</Link><br/>
                                <Link smooth={true} to="contact me" offset={-110} className="fot-link" href="#">contact me</Link><br/>
                                <a href smooth={true} to="resume" offset={-110} className="fot-link" href = {pdf} target = "blank">resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/jorgeebn16"><img src="https://img.icons8.com/ios-glyphs/48/4a90e2/github.png" alt="Github" className="icon"/></a>
                            <a href="https://www.linkedin.com/in/jorgeebn16/"><img src="https://img.icons8.com/fluent/48/4a90e2/linkedin.png" alt="LinkedIn" className="icon"/></a>
                            <a href="https://jorgeebn16-portfolio.herokuapp.com/"><img src="https://img.icons8.com/ios/50/4a90e2/monitor--v1.png" alt="Jorge Navarro Portfolio" className="icon"/></a>
                        </div>
                        <div className="col-lg-12 col-md-5 col-sm-6 align-items-center">
                            <p className="pt-3 text-center">
                                    Copyright&copy;
                                    {new Date().getFullYear()}&nbsp;
                                    Jorge Navarro | 
                                    All Rights Reserved
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
