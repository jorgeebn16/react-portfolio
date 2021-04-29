import React from "react"
import myself from "../images/jorge_navarro.jpg";

const AboutMe = () => {
    return (
        <div id="about" className= "container py-5">
            <div className= "row">
                <div className= "col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={myself} alt="myself..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                    Results-oriented professional with extensive experience in data analysis and web development. 
                    Proficient in interpreting data, analyzing results using statistical techniques, and providing ongoing reports. 
                    Adept at developing and implementing strategies to optimize statistical efficiency and quality. 
                    Excel at prioritizing business requirements and identifying process improvement opportunities. 
                    Possess diverse knowledge of HTML, CSS, JavaScript, Jquery, Mongo DB, SQL, full-stack development, Python applications, and data visualization development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe